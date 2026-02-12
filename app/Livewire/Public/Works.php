<?php

namespace App\Livewire\Public;

use App\Models\Project;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.public')]
class Works extends Component
{
    public function render()
    {
        return view('livewire.public.works', [
            'projects' => Project::with('media')->latest()->get(),
        ]);
    }
}
