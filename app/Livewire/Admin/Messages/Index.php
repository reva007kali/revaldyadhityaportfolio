<?php

namespace App\Livewire\Admin\Messages;

use App\Models\ContactMessage;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.admin.messages.index', [
            'messages' => ContactMessage::latest()->get(),
        ]);
    }

    public function markAsRead($id)
    {
        $message = ContactMessage::findOrFail($id);
        $message->update(['is_read' => true]);
    }

    public function delete($id)
    {
        ContactMessage::findOrFail($id)->delete();
        session()->flash('message', 'Message deleted successfully.');
    }
}
