<?php

namespace App\Livewire\Admin\Features;

use App\Models\Feature;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;

#[Layout('layouts.app')]
class Index extends Component
{
    use WithFileUploads;

    public $title;
    public $description;
    public $icon;
    public $existingIcon;
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
            'icon' => 'nullable|image|max:1024',
        ]);

        $iconPath = null;
        if ($this->icon) {
            $iconPath = $this->icon->store('features', 'public');
        }

        Feature::create([
            'title' => $this->title,
            'description' => $this->description,
            'icon' => $iconPath,
        ]);

        $this->reset(['title', 'description', 'icon', 'existingIcon']);
        session()->flash('message', 'Feature created successfully.');
    }

    public function edit($id)
    {
        $feature = Feature::findOrFail($id);
        $this->featureId = $id;
        $this->title = $feature->title;
        $this->description = $feature->description;
        $this->existingIcon = $feature->icon;
        $this->icon = null;
        $this->isEditing = true;
    }

    public function update()
    {
        $this->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|image|max:1024',
        ]);

        $feature = Feature::findOrFail($this->featureId);
        
        $data = [
            'title' => $this->title,
            'description' => $this->description,
        ];

        if ($this->icon) {
            $data['icon'] = $this->icon->store('features', 'public');
        }

        $feature->update($data);

        $this->reset(['title', 'description', 'icon', 'existingIcon', 'featureId', 'isEditing']);
        session()->flash('message', 'Feature updated successfully.');
    }

    public function delete($id)
    {
        Feature::findOrFail($id)->delete();
        session()->flash('message', 'Feature deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['title', 'description', 'icon', 'existingIcon', 'featureId', 'isEditing']);
    }
}
