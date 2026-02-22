<?php

namespace App\Livewire\Public;

use Livewire\Component;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Layout;

#[Layout('layouts.public')]
class Gallery extends Component
{
    public $media = [];
    public $sortField = 'date';
    public $sortDirection = 'desc';

    public function mount()
    {
        $this->loadMedia();
    }

    public function sortBy($field)
    {
        if ($this->sortField === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortField = $field;
            $this->sortDirection = 'asc';
        }
        $this->loadMedia();
    }

    public function loadMedia()
    {
        if (!Storage::disk('public')->exists('gallery')) {
            Storage::disk('public')->makeDirectory('gallery');
        }

        $files = Storage::disk('public')->files('gallery');
        $this->media = [];
        
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
                    'size' => Storage::disk('public')->size($file),
                    'date' => Storage::disk('public')->lastModified($file),
                ];
            }
        }

        // Sorting
        usort($this->media, function ($a, $b) {
            $valA = $a[$this->sortField];
            $valB = $b[$this->sortField];

            if ($valA == $valB) return 0;

            if ($this->sortDirection === 'asc') {
                return $valA < $valB ? -1 : 1;
            } else {
                return $valA > $valB ? -1 : 1;
            }
        });
    }

    public function render()
    {
        return view('livewire.public.gallery');
    }
}
