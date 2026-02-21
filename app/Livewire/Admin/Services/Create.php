<?php

namespace App\Livewire\Admin\Services;

use App\Models\Service;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;
use App\Traits\HandlesFileUploads;

#[Layout('layouts.app')]
class Create extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $title;
    public $description;
    public $content;
    public $features; // JSON string or array
    public $turnaround_time;
    public $icon;

    public function render()
    {
        return view('livewire.admin.services.create');
    }

    public function store()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'nullable|string',
            'features' => 'nullable|string', // Comma separated
            'turnaround_time' => 'nullable|string|max:255',
            'icon' => 'nullable|image|max:5120', // allow images
        ]);

        $iconPath = null;
        if ($this->icon) {
            // ✅ Compress image to WebP using trait
            $iconPath = $this->handleFileUpload($this->icon, 'services', 'public');
        }

        // Convert comma-separated string to array
        $featuresArray = $this->features ? array_map('trim', explode(',', $this->features)) : null;

        Service::create([
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'features' => $featuresArray,
            'turnaround_time' => $this->turnaround_time,
            'icon' => $iconPath,
        ]);

        session()->flash('message', 'Service created successfully.');
        return redirect()->route('admin.services');
    }

    public function cancel()
    {
        return redirect()->route('admin.services');
    }
}