<?php

namespace App\Livewire\Admin\Services;

use App\Models\Service;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.admin.services.index', [
            'services' => Service::latest()->get(),
        ]);
    }

    public function delete($id)
    {
        Service::findOrFail($id)->delete();
        session()->flash('message', 'Service deleted successfully.');
    }
}
