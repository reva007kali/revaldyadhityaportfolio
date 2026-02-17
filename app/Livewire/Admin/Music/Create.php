<?php

namespace App\Livewire\Admin\Music;

use App\Models\Music;
use Livewire\Component;
use Livewire\WithFileUploads;

class Create extends Component
{
    use WithFileUploads;

    public $title;
    public $audio_file;
    public $cover_image;
    public $is_active = true;
    public $sort_order = 0;

    protected $rules = [
        'title' => 'required|string|max:255',
        'audio_file' => 'required|file|mimes:mp3,wav,ogg,m4a|max:20480', // 20MB Max
        'cover_image' => 'nullable|image|max:2048', // 2MB Max
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function store()
    {
        $this->validate();

        $audioPath = $this->audio_file->store('music', 'public');
        $coverPath = $this->cover_image ? $this->cover_image->store('music/covers', 'public') : null;

        Music::create([
            'user_id' => auth()->id(),
            'title' => $this->title,
            'audio_path' => $audioPath,
            'cover_path' => $coverPath,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
        ]);

        return redirect()->route('admin.music.index')->with('message', 'Music added successfully.');
    }

    public function render()
    {
        return view('livewire.admin.music.create')->layout('layouts.app');
    }
}
