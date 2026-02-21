<?php

namespace App\Livewire\Public;

use Livewire\Component;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Layout;

#[Layout('layouts.public')]
class Gallery extends Component
{
    public $media = [];

    public function mount()
    {
        if (!Storage::disk('public')->exists('gallery')) {
            Storage::disk('public')->makeDirectory('gallery');
        }

        $files = Storage::disk('public')->files('gallery');
        
        foreach ($files as $file) {
            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            $isImage = in_array($ext, ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']);
            $isVideo = in_array($ext, ['mp4', 'webm', 'ogg', 'mov']);

            if ($isImage || $isVideo) {
                $this->media[] = [
                    'path' => $file,
                    'url' => Storage::url($file),
                    'type' => $isImage ? 'image' : 'video',
                    'name' => basename($file),
                ];
            }
        }
    }

    public function render()
    {
        return view('livewire.public.gallery');
    }
}
