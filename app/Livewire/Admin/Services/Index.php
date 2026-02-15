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
    public $content;
    public $features; // JSON string or array
    public $turnaround_time;
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
            'content' => 'nullable|string',
            'features' => 'nullable|string', // Comma separated
            'turnaround_time' => 'nullable|string|max:255',
            'icon' => 'nullable|image|max:5120',
        ]);

        $iconPath = null;
        if ($this->icon) {
            $iconPath = $this->icon->store('services', 'public');
        }

        // Convert comma-separated string to array
        $featuresArray = $this->features ? array_map('trim', explode(',', $this->features)) : null;

        Service::create([
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'features' => $featuresArray,
            'turnaround_time' => $this->turnaround_time,
            'icon' => $iconPath,
        ]);

        $this->reset(['title', 'description', 'content', 'features', 'turnaround_time', 'icon']);
        session()->flash('message', 'Service created successfully.');
    }

    public function edit($id)
    {
        $service = Service::findOrFail($id);
        $this->serviceId = $id;
        $this->title = $service->title;
        $this->description = $service->description;
        $this->content = $service->content;
        $this->features = $service->features ? implode(', ', $service->features) : '';
        $this->turnaround_time = $service->turnaround_time;
        $this->currentIcon = $service->icon;
        $this->isEditing = true;
        $this->dispatch('contentUpdated', $this->content);
    }

    public function update()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'nullable|string',
            'features' => 'nullable|string',
            'turnaround_time' => 'nullable|string|max:255',
            'icon' => 'nullable|image|max:5120',
        ]);

        $service = Service::findOrFail($this->serviceId);
        
        $data = [
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'features' => $this->features ? array_map('trim', explode(',', $this->features)) : null,
            'turnaround_time' => $this->turnaround_time,
        ];

        if ($this->icon) {
            $data['icon'] = $this->icon->store('services', 'public');
        }

        $service->update($data);

        $this->reset(['title', 'description', 'content', 'features', 'turnaround_time', 'icon', 'currentIcon', 'serviceId', 'isEditing']);
        session()->flash('message', 'Service updated successfully.');
    }

    public function delete($id)
    {
        Service::findOrFail($id)->delete();
        session()->flash('message', 'Service deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['title', 'description', 'content', 'features', 'turnaround_time', 'icon', 'currentIcon', 'serviceId', 'isEditing']);
        $this->dispatch('contentUpdated', '');
    }
}
