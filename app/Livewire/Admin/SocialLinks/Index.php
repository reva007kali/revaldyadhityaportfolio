<?php

namespace App\Livewire\Admin\SocialLinks;

use App\Models\SocialLink;
use Livewire\Component;
use Livewire\Attributes\Layout;
use Livewire\WithFileUploads;
use App\Traits\HandlesFileUploads;

#[Layout('layouts.app')]
class Index extends Component
{
    use WithFileUploads, HandlesFileUploads;

    public $platform;
    public $url;
    public $icon;
    public $currentIcon;
    public $is_active = true;
    public $sort_order = 0;
    public $socialLinkId;
    public $isEditing = false;

    public function render()
    {
        return view('livewire.admin.social-links.index', [
            'socialLinks' => SocialLink::orderBy('sort_order')->get(),
        ]);
    }

    public function store()
    {
        $this->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|url',
            'icon' => 'nullable|image|max:2048', // Max 2MB
            'sort_order' => 'integer',
        ]);

        $iconPath = null;
        if ($this->icon) {
            $iconPath = $this->handleFileUpload($this->icon, 'social-icons');
        }

        SocialLink::create([
            'platform' => $this->platform,
            'url' => $this->url,
            'icon' => $iconPath,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
        ]);

        $this->reset(['platform', 'url', 'icon', 'is_active', 'sort_order']);
        session()->flash('message', 'Social link added successfully.');
    }

    public function edit($id)
    {
        $link = SocialLink::findOrFail($id);
        $this->socialLinkId = $id;
        $this->platform = $link->platform;
        $this->url = $link->url;
        $this->currentIcon = $link->icon;
        $this->is_active = $link->is_active;
        $this->sort_order = $link->sort_order;
        $this->isEditing = true;
    }

    public function update()
    {
        $this->validate([
            'platform' => 'required|string|max:255',
            'url' => 'required|url',
            'icon' => 'nullable|image|max:2048',
            'sort_order' => 'integer',
        ]);

        $link = SocialLink::findOrFail($this->socialLinkId);
        $iconPath = $this->currentIcon;

        if ($this->icon) {
            $iconPath = $this->handleFileUpload($this->icon, 'social-icons');
        }

        $link->update([
            'platform' => $this->platform,
            'url' => $this->url,
            'icon' => $iconPath,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
        ]);

        $this->reset(['platform', 'url', 'icon', 'currentIcon', 'is_active', 'sort_order', 'socialLinkId', 'isEditing']);
        session()->flash('message', 'Social link updated successfully.');
    }

    public function delete($id)
    {
        $link = SocialLink::findOrFail($id);
        $link->delete();
        session()->flash('message', 'Social link deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['platform', 'url', 'icon', 'currentIcon', 'is_active', 'sort_order', 'socialLinkId', 'isEditing']);
    }

    public function toggleActive($id)
    {
        $link = SocialLink::findOrFail($id);
        $link->update(['is_active' => !$link->is_active]);
    }
}
