<?php

namespace App\Livewire\Public\Components;

use Livewire\Component;
use App\Models\Testimonial;
use Livewire\WithFileUploads;

class TestimonialForm extends Component
{
    use WithFileUploads;

    public $name;
    public $position;
    public $content;
    public $avatar;
    public $rating = 5;

    public function submit()
    {
        $this->validate([
            'name' => 'required|min:3',
            'position' => 'nullable|string',
            'content' => 'required|min:10',
            'rating' => 'required|integer|min:1|max:5',
            'avatar' => 'nullable|image|max:1024', // 1MB Max
        ]);

        $avatarPath = null;
        if ($this->avatar) {
            $avatarPath = $this->avatar->store('testimonials', 'public');
        }

        Testimonial::create([
            'name' => $this->name,
            'position' => $this->position,
            'content' => $this->content,
            'rating' => $this->rating,
            'avatar' => $avatarPath,
            'is_active' => false, // Default to inactive until approved
        ]);

        $this->reset();
        session()->flash('message', 'Thank you! Your testimonial has been submitted for review.');
    }

    public function render()
    {
        return view('livewire.public.components.testimonial-form');
    }
}
