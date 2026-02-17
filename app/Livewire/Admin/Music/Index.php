<?php

namespace App\Livewire\Admin\Music;

use App\Models\Music;
use Livewire\Component;

class Index extends Component
{
    public function delete($id)
    {
        $music = Music::findOrFail($id);
        $music->delete();
        $this->dispatch('notify', 'Music deleted successfully');
    }

    public function toggleActive($id)
    {
        $music = Music::findOrFail($id);
        $music->is_active = !$music->is_active;
        $music->save();
        $this->dispatch('notify', 'Status updated successfully');
    }

    public function render()
    {
        $musics = Music::orderBy('sort_order')->get();
        return view('livewire.admin.music.index', compact('musics'))->layout('layouts.app');
    }
}
