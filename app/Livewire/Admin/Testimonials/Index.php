<?php

namespace App\Livewire\Admin\Testimonials;

use App\Models\Testimonial;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
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

    public function render()
    {
        return view('livewire.admin.testimonials.index', [
            'testimonials' => Testimonial::latest()->get()
        ]);
    }
}
