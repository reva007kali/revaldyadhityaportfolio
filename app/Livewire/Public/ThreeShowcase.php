<?php

namespace App\Livewire\Public;

use Livewire\Component;
use Livewire\Attributes\Layout;

class ThreeShowcase extends Component
{
    #[Layout('layouts.raw')]
    public function render()
    {
        return view('livewire.public.three-showcase');
    }
}
