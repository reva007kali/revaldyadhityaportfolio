<?php

namespace App\Livewire\Admin\Services;

use App\Models\Service;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;
use App\Traits\HandlesFileUploads;

#[Layout('layouts.app')]
class Edit extends Component
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

    public function mount($id)
    {
        $service = Service::findOrFail($id);
        $this->serviceId = $id;
        $this->title = $service->title;
        $this->description = $service->description;
        $this->content = $service->content;
        $this->features = $service->features ? implode(', ', $service->features) : '';
        $this->turnaround_time = $service->turnaround_time;
        $this->currentIcon = $service->icon;
    }

    public function render()
    {
        return view('livewire.admin.services.edit');
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
            $data['icon'] = $this->handleFileUpload($this->icon, 'services', 'public');
        }

        $service->update($data);

        session()->flash('message', 'Service updated successfully.');
        return redirect()->route('admin.services');
    }
    
    public function cancel()
    {
        return redirect()->route('admin.services');
    }
}
