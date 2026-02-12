<?php

namespace App\Livewire\Admin\Features;

use App\Models\Feature;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
    public $title;
    public $description;
    public $icon;
    public $featureId;
    public $isEditing = false;

    public function render()
    {
        return view('livewire.admin.features.index', [
            'features' => Feature::latest()->get(),
        ]);
    }

    public function store()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string',
        ]);

        Feature::create([
            'title' => $this->title,
            'description' => $this->description,
            'icon' => $this->icon,
        ]);

        $this->reset(['title', 'description', 'icon']);
        session()->flash('message', 'Feature created successfully.');
    }

    public function edit($id)
    {
        $feature = Feature::findOrFail($id);
        $this->featureId = $id;
        $this->title = $feature->title;
        $this->description = $feature->description;
        $this->icon = $feature->icon;
        $this->isEditing = true;
    }

    public function update()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string',
        ]);

        $feature = Feature::findOrFail($this->featureId);
        $feature->update([
            'title' => $this->title,
            'description' => $this->description,
            'icon' => $this->icon,
        ]);

        $this->reset(['title', 'description', 'icon', 'featureId', 'isEditing']);
        session()->flash('message', 'Feature updated successfully.');
    }

    public function delete($id)
    {
        Feature::findOrFail($id)->delete();
        session()->flash('message', 'Feature deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['title', 'description', 'icon', 'featureId', 'isEditing']);
    }
}
