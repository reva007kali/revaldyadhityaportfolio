<?php

namespace App\Livewire\Admin\Websites;

use Livewire\Component;

use App\Models\Website;
use Livewire\WithFileUploads;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class Index extends Component
{
    use WithFileUploads;

    public $title;
    public $slug;
    public $description;
    public $image;
    public $tags; // Comma separated string for input
    public $color = '#ffffff';
    public $content; // The HTML/Blade content
    public $websiteId;
    public $isEditing = false;
    public $currentImage;

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

        $this->resetInput();
        session()->flash('message', 'Website created successfully.');
    }

    public function edit($id)
    {
        $website = Website::findOrFail($id);
        $this->websiteId = $id;
        $this->title = $website->title;
        $this->slug = $website->slug;
        $this->description = $website->description;
        $this->currentImage = $website->image;
        $this->tags = $website->tags ? implode(', ', $website->tags) : '';
        $this->color = $website->color;
        $this->isEditing = true;

        // Read the file content
        $path = resource_path("views/websites/{$website->slug}.blade.php");
        if (File::exists($path)) {
            $this->content = File::get($path);
        } else {
            $this->content = '';
        }
    }

    public function update()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:websites,slug,' . $this->websiteId,
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:10240',
            'tags' => 'nullable|string',
            'color' => 'nullable|string',
            'content' => 'required|string',
        ]);

        $website = Website::findOrFail($this->websiteId);
        $oldSlug = $website->slug;

        $data = [
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'tags' => $this->tags ? array_map('trim', explode(',', $this->tags)) : null,
            'color' => $this->color,
        ];

        if ($this->image) {
            if ($website->image) {
                Storage::disk('public')->delete($website->image);
            }
            $data['image'] = $this->image->store('websites', 'public');
        }

        $website->update($data);

        // Handle file rename if slug changed
        if ($oldSlug !== $this->slug) {
            $oldPath = resource_path("views/websites/{$oldSlug}.blade.php");
            if (File::exists($oldPath)) {
                File::delete($oldPath);
            }
        }

        // Update/Create the file
        $this->createWebsiteFile($this->slug, $this->content);

        $this->resetInput();
        session()->flash('message', 'Website updated successfully.');
    }

    public function delete($id)
    {
        $website = Website::findOrFail($id);
        
        // Delete image
        if ($website->image) {
            Storage::disk('public')->delete($website->image);
        }

        // Delete file
        $path = resource_path("views/websites/{$website->slug}.blade.php");
        if (File::exists($path)) {
            File::delete($path);
        }

        $website->delete();
        session()->flash('message', 'Website deleted successfully.');
    }

    public function cancel()
    {
        $this->resetInput();
    }

    private function resetInput()
    {
        $this->reset(['title', 'slug', 'description', 'image', 'tags', 'color', 'content', 'websiteId', 'isEditing', 'currentImage']);
    }

    private function createWebsiteFile($slug, $content)
    {
        $directory = resource_path('views/websites');
        if (!File::exists($directory)) {
            File::makeDirectory($directory, 0755, true);
        }
        
        File::put("{$directory}/{$slug}.blade.php", $content);
    }

    public function render()
    {
        return view('livewire.admin.websites.index', [
            'websites' => Website::latest()->get(),
        ])->layout('layouts.app');
    }
}
