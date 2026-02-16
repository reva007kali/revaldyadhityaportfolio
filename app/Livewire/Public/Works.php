<?php

namespace App\Livewire\Public;

use App\Models\Project;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Url;
use Livewire\WithPagination;

#[Layout('layouts.public')]
class Works extends Component
{
    use WithPagination;

    #[Url]
    public $search = '';

    #[Url]
    public $category = '';

    #[Url]
    public $year = '';

    public function updated($property)
    {
        if ($property === 'search' || $property === 'category' || $property === 'year') {
            $this->resetPage();
        }
    }

    public function render()
    {
        $query = Project::with('media')
            ->where('is_archived', false)
            ->orderBy('sort_order')
            ->latest();

        if ($this->search) {
            $query->where('title', 'like', '%' . $this->search . '%');
        }

        if ($this->category) {
            $query->where('category', $this->category);
        }

        if ($this->year) {
            $query->where('year', $this->year);
        }

        $projects = $query->paginate(9); // Pagination added

        // Get unique categories and years for filters
        $categories = Project::select('category')->distinct()->whereNotNull('category')->orderBy('category')->pluck('category');
        $years = Project::select('year')->distinct()->whereNotNull('year')->orderBy('year', 'desc')->pluck('year');

        return view('livewire.public.works', [
            'projects' => $projects,
            'categories' => $categories,
            'years' => $years,
        ]);
    }
}
