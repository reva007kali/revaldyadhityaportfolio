<?php

namespace App\Livewire\Public;

use App\Models\Service;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.public')]
class ServiceDetail extends Component
{
    public $service;

    public function mount($slug)
    {
        $this->service = Service::where('slug', $slug)->firstOrFail();
    }

    public function render()
    {
        return view('livewire.public.service-detail');
    }
}
