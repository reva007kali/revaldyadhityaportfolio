<?php

namespace App\Livewire\Admin\Projects;

use App\Models\Project;
use App\Models\ProjectMedia;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;
use App\Traits\HandlesFileUploads;

#[Layout('layouts.app')]
class Index extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $title;
    public $description;
    public $content;
    public $category;
    public $role;
    public $year;
    public $client;
    public $link;
    public $projectId;
    public $isEditing = false;

    // Multiple file uploads
    public $mediaFiles = []; // Temporary files
    public $captions = []; // Captions for new files

    // Existing media management
    public $existingMedia = [];

    public function render()
    {
        return view('livewire.admin.projects.index', [
            'projects' => Project::with('media')->latest()->get(),
        ]);
    }

    public function store()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:4',
            'client' => 'nullable|string|max:255',
            'link' => 'nullable|string',
            'mediaFiles.*' => 'nullable|file|max:51200', // Max 50MB per file
        ]);

        $project = Project::create([
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'category' => $this->category,
            'role' => $this->role,
            'year' => $this->year,
            'client' => $this->client,
            'link' => $this->link,
        ]);

        foreach ($this->mediaFiles as $index => $file) {
            $path = $this->handleFileUpload($file, 'projects');
            $type = $this->isVideo($file) ? 'video' : 'image';

            // Use the image from the first upload as the main thumbnail if not set (for backward compatibility)
            if ($index === 0 && $type === 'image') {
                $project->update(['image' => $path]);
            }

            $project->media()->create([
                'file_path' => $path,
                'file_type' => $type,
                'caption' => $this->captions[$index] ?? null,
            ]);
        }

        $this->reset(['title', 'description', 'link', 'mediaFiles', 'captions', 'category', 'role', 'year', 'client']);
        session()->flash('message', 'Project created successfully.');
    }

    public function edit($id)
    {
        $project = Project::with('media')->findOrFail($id);
        $this->projectId = $id;
        $this->title = $project->title;
        $this->description = $project->description;
        $this->content = $project->content;
        $this->category = $project->category;
        $this->role = $project->role;
        $this->year = $project->year;
        $this->client = $project->client;
        $this->link = $project->link;
        $this->existingMedia = $project->media;
        $this->isEditing = true;
        $this->mediaFiles = [];
        $this->captions = [];
        $this->dispatch('contentUpdated', $this->content);
    }

    public function update()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:4',
            'client' => 'nullable|string|max:255',
            'link' => 'nullable|string',
            'mediaFiles.*' => 'nullable|file|max:51200',
        ]);

        $project = Project::findOrFail($this->projectId);
        $project->update([
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'category' => $this->category,
            'role' => $this->role,
            'year' => $this->year,
            'client' => $this->client,
            'link' => $this->link,
        ]);

        // Add new media
        foreach ($this->mediaFiles as $index => $file) {
            $path = $this->handleFileUpload($file, 'projects');
            $type = $this->isVideo($file) ? 'video' : 'image';

            $project->media()->create([
                'file_path' => $path,
                'file_type' => $type,
                'caption' => $this->captions[$index] ?? null,
            ]);

            // If this is the first image uploaded in this batch, update the main project thumbnail
            // This ensures the main image is updated when new media is added
            if ($index === 0 && $type === 'image') {
                $project->update(['image' => $path]);
            }
        }

        // Update main thumbnail if needed and not set (fallback)
        if (!$project->image && $project->media()->where('file_type', 'image')->exists()) {
            $project->update(['image' => $project->media()->where('file_type', 'image')->first()->file_path]);
        }

        $this->reset(['title', 'description', 'link', 'projectId', 'isEditing', 'mediaFiles', 'captions', 'existingMedia', 'category', 'role', 'year', 'client']);
        session()->flash('message', 'Project updated successfully.');
    }

    public function deleteMedia($mediaId)
    {
        $media = ProjectMedia::findOrFail($mediaId);
        // Ideally delete file from storage here too
        $media->delete();

        // Refresh existing media list
        if ($this->projectId) {
            $this->existingMedia = Project::findOrFail($this->projectId)->media;
        }
    }

    public function delete($id)
    {
        $project = Project::findOrFail($id);
        // Delete all associated media files from storage could be done here
        $project->delete();
        session()->flash('message', 'Project deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['title', 'description', 'content', 'link', 'projectId', 'isEditing', 'mediaFiles', 'captions', 'existingMedia', 'category', 'role', 'year', 'client']);
        $this->dispatch('contentUpdated', '');
    }
}
