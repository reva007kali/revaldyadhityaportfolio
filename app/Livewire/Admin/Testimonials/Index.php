<?php

namespace App\Livewire\Admin\Testimonials;

use App\Models\Testimonial;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;

#[Layout('layouts.app')]
class Index extends Component
{
    use WithFileUploads;

    public $name;
    public $position;
    public $content;
    public $avatar;
    public $existingAvatar;
    public $testimonialId;
    public $isEditing = false;

    public function render()
    {
        return view('livewire.admin.testimonials.index', [
            'testimonials' => Testimonial::latest()->get()
        ]);
    }

    public function store()
    {
        $this->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'content' => 'required|string',
            'avatar' => 'nullable|image|max:1024',
        ]);

        $avatarPath = null;
        if ($this->avatar) {
            $avatarPath = $this->avatar->store('testimonials', 'public');
        }

        Testimonial::create([
            'name' => $this->name,
            'position' => $this->position,
            'content' => $this->content,
            'avatar' => $avatarPath,
            'is_active' => true,
        ]);

        $this->reset(['name', 'position', 'content', 'avatar', 'existingAvatar']);
        session()->flash('message', 'Testimonial created successfully.');
    }

    public function edit($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $this->testimonialId = $id;
        $this->name = $testimonial->name;
        $this->position = $testimonial->position;
        $this->content = $testimonial->content;
        $this->existingAvatar = $testimonial->avatar;
        $this->avatar = null;
        $this->isEditing = true;
    }

    public function update()
    {
        $this->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'content' => 'required|string',
            'avatar' => 'nullable|image|max:1024',
        ]);

        $testimonial = Testimonial::findOrFail($this->testimonialId);
        
        $data = [
            'name' => $this->name,
            'position' => $this->position,
            'content' => $this->content,
        ];

        if ($this->avatar) {
            $data['avatar'] = $this->avatar->store('testimonials', 'public');
        }

        $testimonial->update($data);

        $this->reset(['name', 'position', 'content', 'avatar', 'existingAvatar', 'testimonialId', 'isEditing']);
        session()->flash('message', 'Testimonial updated successfully.');
    }

    public function cancel()
    {
        $this->reset(['name', 'position', 'content', 'avatar', 'existingAvatar', 'testimonialId', 'isEditing']);
    }

    public function toggleStatus($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->update(['is_active' => !$testimonial->is_active]);
        session()->flash('message', 'Testimonial status updated.');
    }

    public function delete($id)
    {
        Testimonial::findOrFail($id)->delete();
        session()->flash('message', 'Testimonial deleted successfully.');
    }
}
