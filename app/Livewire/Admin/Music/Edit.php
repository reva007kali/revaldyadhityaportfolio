<?php

namespace App\Livewire\Admin\Music;

use App\Models\Music;
use App\Traits\HandlesFileUploads;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithFileUploads;

class Edit extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $music;
    public $title;
    public $audio_file;
    public $cover_image;
    public $existing_cover;
    public $existing_audio;
    public $is_active;
    public $sort_order;

    protected $rules = [
        'title' => 'required|string|max:255',
        'audio_file' => 'nullable|file|mimes:mp3,wav,ogg,m4a|max:20480', // 20MB Max
        'cover_image' => 'nullable|image|max:2048', // 2MB Max
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function mount(Music $music)
    {
        $this->music = $music;
        $this->title = $music->title;
        $this->existing_audio = $music->audio_path;
        $this->existing_cover = $music->cover_path;
        $this->is_active = $music->is_active;
        $this->sort_order = $music->sort_order;
    }

    public function update()
    {
        $this->validate();

        $data = [
            'user_id' => auth()->id(),
            'title' => $this->title,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
        ];

        if ($this->audio_file) {
            // Delete old audio if exists
            if ($this->music->audio_path) {
                Storage::disk('public')->delete($this->music->audio_path);
            }
            $data['audio_path'] = $this->handleFileUpload($this->audio_file, 'music', 'public');
        }

        if ($this->cover_image) {
            // Delete old cover if exists
            if ($this->music->cover_path) {
                Storage::disk('public')->delete($this->music->cover_path);
            }
            $data['cover_path'] = $this->handleFileUpload($this->cover_image, 'music/covers', 'public');
        }

        $this->music->update($data);

        return redirect()->route('admin.music.index')->with('message', 'Music updated successfully.');
    }

    public function render()
    {
        return view('livewire.admin.music.edit')->layout('layouts.app');
    }
}
