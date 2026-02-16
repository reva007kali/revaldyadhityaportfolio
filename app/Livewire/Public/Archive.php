<?php

namespace App\Livewire\Public;

use App\Models\Project;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithPagination;

#[Layout('layouts.public')]
class Archive extends Component
{
    use WithPagination;

    public function render()
    {
        $projects = Project::with('media')
            ->where('is_archived', true)
            ->orderBy('sort_order')
            ->latest()
            ->paginate(12);

        return view('livewire.public.archive', [
            'projects' => $projects,
        ]);
    }
}
