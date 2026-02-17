<?php

namespace App\Livewire\Admin\Projects;

use App\Models\Project;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.admin.projects.index', [
            'projects' => Project::with('media')->latest()->get(),
        ]);
    }

    public function delete($id)
    {
        $project = Project::findOrFail($id);
        // Delete all associated media files from storage could be done here
        $project->delete();
        session()->flash('message', 'Project deleted successfully.');
    }
}
