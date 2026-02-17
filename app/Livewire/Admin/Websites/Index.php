<?php

namespace App\Livewire\Admin\Websites;

use Livewire\Component;
use App\Models\Website;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
    public function render()
    {
        return view('livewire.admin.websites.index', [
            'websites' => Website::latest()->get(),
        ]);
    }

    public function delete($id)
    {
        $website = Website::findOrFail($id);
        
        // Delete image
        if ($website->image) {
            Storage::disk('public')->delete($website->image);
        }

        // Delete file
        $path = resource_path("views/websites/{$website->slug}.blade.php");
        if (File::exists($path)) {
            File::delete($path);
        }

        $website->delete();
        session()->flash('message', 'Website deleted successfully.');
    }
}
