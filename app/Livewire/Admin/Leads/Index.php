<?php

namespace App\Livewire\Admin\Leads;

use App\Models\Lead;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';
    public $statusFilter = '';

    protected $queryString = ['search', 'statusFilter'];

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        $lead = Lead::findOrFail($id);
        $lead->delete();
        session()->flash('message', 'Lead deleted successfully.');
    }

    public function markAsRead($id)
    {
        $lead = Lead::findOrFail($id);
        $lead->update(['status' => 'read']);
        session()->flash('message', 'Lead marked as read.');
    }
    
    public function markAsContacted($id)
    {
        $lead = Lead::findOrFail($id);
        $lead->update(['status' => 'contacted']);
        session()->flash('message', 'Lead marked as contacted.');
    }

    public function render()
    {
        $leads = Lead::query()
            ->when($this->search, function ($query) {
                $query->where('name', 'like', '%' . $this->search . '%')
                    ->orWhere('contact', 'like', '%' . $this->search . '%')
                    ->orWhere('project_type', 'like', '%' . $this->search . '%');
            })
            ->when($this->statusFilter, function ($query) {
                $query->where('status', $this->statusFilter);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('livewire.admin.leads.index', [
            'leads' => $leads
        ])->layout('layouts.app', ['header' => 'Leads Management']);
    }
}
