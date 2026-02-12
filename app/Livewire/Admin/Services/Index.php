<?php

namespace App\Livewire\Admin\Services;

use App\Models\Service;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;
use App\Traits\HandlesFileUploads;

#[Layout('layouts.app')]
class Index extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $title;
    public $description;
    public $icon;
    public $currentIcon;
    public $serviceId;
    public $isEditing = false;

    public function render()
    {
        return view('livewire.admin.services.index', [
            'services' => Service::latest()->get(),
        ]);
    }

    public function store()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|image|max:5120', // Icon image max 5MB
        ]);

        $iconPath = null;
        if ($this->icon) {
            $iconPath = $this->handleFileUpload($this->icon, 'services');
        }

        Service::create([
            'title' => $this->title,
            'description' => $this->description,
            'icon' => $iconPath,
        ]);

        $this->reset(['title', 'description', 'icon']);
        session()->flash('message', 'Service created successfully.');
    }

    public function edit($id)
    {
        $service = Service::findOrFail($id);
        $this->serviceId = $id;
        $this->title = $service->title;
        $this->description = $service->description;
        $this->currentIcon = $service->icon;
        $this->isEditing = true;
    }

    public function update()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|image|max:5120',
        ]);

        $service = Service::findOrFail($this->serviceId);
        $iconPath = $this->currentIcon;

        if ($this->icon) {
            $iconPath = $this->handleFileUpload($this->icon, 'services');
        }

        $service->update([
            'title' => $this->title,
            'description' => $this->description,
            'icon' => $iconPath,
        ]);

        $this->reset(['title', 'description', 'icon', 'currentIcon', 'serviceId', 'isEditing']);
        session()->flash('message', 'Service updated successfully.');
    }

    public function delete($id)
    {
        Service::findOrFail($id)->delete();
        session()->flash('message', 'Service deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['title', 'description', 'icon', 'currentIcon', 'serviceId', 'isEditing']);
    }
}
