<?php

namespace App\Livewire\Public\Components;

use App\Models\Music;
use Livewire\Component;

class MusicPlayer extends Component
{
    public function render()
    {
        $tracks = Music::where('is_active', true)->orderBy('sort_order')->get();
        return view('livewire.public.components.music-player', compact('tracks'));
    }
}
