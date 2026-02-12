<?php

namespace App\Livewire\Admin;

use App\Models\HeroSection;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;
use App\Traits\HandlesFileUploads;

#[Layout('layouts.app')]
class Hero extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $title;
    public $subtitle;
    public $image; // This will hold the file upload
    public $currentImage; // This will hold the existing image path
    public $cta_text;
    public $cta_link;

    public function mount()
    {
        $hero = HeroSection::first();
        if ($hero) {
            $this->title = $hero->title;
            $this->subtitle = $hero->subtitle;
            $this->currentImage = $hero->image;
            $this->cta_text = $hero->cta_text;
            $this->cta_link = $hero->cta_link;
        }
    }

    public function save()
    {
        $this->validate([
            'title' => 'nullable|string',
            'subtitle' => 'nullable|string',
            'image' => 'nullable|image|max:10240', // Max 10MB
            'cta_text' => 'nullable|string',
            'cta_link' => 'nullable|string',
        ]);

        $hero = HeroSection::first();
        $imagePath = $this->currentImage;

        if ($this->image) {
            $imagePath = $this->handleFileUpload($this->image, 'hero');
        }

        $data = [
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'image' => $imagePath,
            'cta_text' => $this->cta_text,
            'cta_link' => $this->cta_link,
        ];

        if ($hero) {
            $hero->update($data);
        } else {
            HeroSection::create($data);
        }

        // Reset the file input
        $this->image = null;
        $this->currentImage = $imagePath;

        session()->flash('message', 'Hero section updated successfully.');
    }

    public function render()
    {
        return view('livewire.admin.hero');
    }
}
