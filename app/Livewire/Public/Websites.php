<?php

namespace App\Livewire\Public;

use App\Models\Website;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Url;

#[Layout('layouts.public')]
class Websites extends Component
{
    #[Url]
    public $search = '';

    #[Url]
    public $tag = '';

    public function render()
    {
        $query = Website::latest();

        if ($this->search) {
            $query->where('title', 'like', '%' . $this->search . '%');
        }

        if ($this->tag) {
            $query->whereJsonContains('tags', $this->tag);
        }

        $websites = $query->get();

        // Get all unique tags
        $allTags = Website::all()->pluck('tags')->flatten()->unique()->filter()->values();

        return view('livewire.public.websites', [
            'websites' => $websites,
            'allTags' => $allTags,
        ]);
    }
}
