<?php

namespace App\Livewire\Admin\Websites;

use Livewire\Component;
use App\Models\Website;
use Livewire\WithFileUploads;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Livewire\Attributes\Layout;
use App\Traits\WithAIWebsiteGenerator;

#[Layout('layouts.app')]
class Create extends Component
{
    use WithFileUploads, WithAIWebsiteGenerator;

    public $title;
    public $slug;
    public $description;
    public $image;
    public $tags; // Comma separated string for input
    public $color = '#ffffff';
    public $content; // The HTML/Blade content

    public function updatedTitle()
    {
        $this->slug = Str::slug($this->title);
    }

    public function store()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:websites,slug',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:10240', // 10MB
            'tags' => 'nullable|string',
            'color' => 'nullable|string',
            'content' => 'required|string',
        ]);

        $imagePath = null;
        if ($this->image) {
            $imagePath = $this->image->store('websites', 'public');
        }

        $tagsArray = $this->tags ? array_map('trim', explode(',', $this->tags)) : null;

        Website::create([
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'image' => $imagePath,
            'tags' => $tagsArray,
            'color' => $this->color,
        ]);

        // Create the file
        $this->createWebsiteFile($this->slug, $this->content);

        session()->flash('message', 'Website created successfully.');
        return redirect()->route('admin.websites');
    }

    private function createWebsiteFile($slug, $content)
    {
        $directory = resource_path('views/websites');
        if (!File::exists($directory)) {
            File::makeDirectory($directory, 0755, true);
        }
        
        File::put("{$directory}/{$slug}.blade.php", $content);
    }

    public function cancel()
    {
        return redirect()->route('admin.websites');
    }

    public function render()
    {
        return view('livewire.admin.websites.create');
    }
}
