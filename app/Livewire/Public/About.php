<?php

namespace App\Livewire\Public;

use App\Models\AboutSection;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.public')]
class About extends Component
{
    public function render()
    {
        return view('livewire.public.about', [
            'about' => AboutSection::first(),
        ]);
    }
}
