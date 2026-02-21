<?php

namespace App\Traits;

use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait HandlesFileUploads
{
    public function handleFileUpload($file, $path = 'uploads', $disk = 'public')
    {
        if (!$file) {
            return null;
        }

        // Handle image files (with compression to WebP)
        if ($this->isImage($file)) {
            return $this->compressAndStoreImage($file, $path, $disk);
        }

        // Handle all other files (video, audio, docs) without compression
        return $file->store($path, $disk);
    }

    protected function isVideo($file)
    {
        $mimeTypes = ['video/mp4', 'video/mpeg', 'video/quicktime', 'video/webm'];
        return in_array($file->getMimeType(), $mimeTypes);
    }

    protected function isImage($file)
    {
        $mimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        return in_array($file->getMimeType(), $mimeTypes);
    }

    protected function compressAndStoreImage($file, $path, $disk)
    {
        // Skip compression for SVGs
        if ($file->getMimeType() === 'image/svg+xml') {
            return $file->store($path, $disk);
        }

        // Check if GD extension is loaded
        if (!extension_loaded('gd')) {
            return $file->store($path, $disk);
        }

        try {
            $manager = new ImageManager(new Driver());
            $image = $manager->read($file->getRealPath());

            // Resize if too large (max width 1920px)
            if ($image->width() > 1920) {
                $image->scale(width: 1920);
            }

            // Generate unique filename with .webp
            $filename = Str::uuid()->toString() . '.webp';
            $fullPath = $path . '/' . $filename;

            // Encode to WebP with 80% quality
            $encoded = $image->toWebp(quality: 80);

            // Store the compressed image
            Storage::disk($disk)->put($fullPath, (string) $encoded);

            return $fullPath;
        } catch (\Exception $e) {
            // Fallback to simple storage if image processing fails
            return $file->store($path, $disk);
        }
    }
}