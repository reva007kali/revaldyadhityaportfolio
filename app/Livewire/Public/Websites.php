<?php

namespace App\Livewire\Public;

use App\Models\Website;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Url;
use Livewire\WithPagination; // 1. Import the trait

#[Layout('layouts.public')]
class Websites extends Component
{
    use WithPagination; // 2. Use the trait

    #[Url]
    public $search = '';

    #[Url]
    public $tag = '';

    /**
     * Resets pagination to page 1 when search or tag changes
     */
    public function updatedSearch()
    {
        $this->resetPage();
    }

    public function updatedTag()
    {
        $this->resetPage();
    }

    public function render()
    {
        $query = Website::latest();

        if ($this->search) {
            $query->where('title', 'like', '%' . $this->search . '%');
        }

        if ($this->tag) {
            $query->whereJsonContains('tags', $this->tag);
        }

        // 3. Change ->get() to ->paginate(20)
        $websites = $query->paginate(15);

        // Get all unique tags (Keep this as is to show all available filter options)
        $allTags = Website::all()->pluck('tags')->flatten()->unique()->filter()->values();

        return view('livewire.public.websites', [
            'websites' => $websites,
            'allTags' => $allTags,
        ]);
    }
}