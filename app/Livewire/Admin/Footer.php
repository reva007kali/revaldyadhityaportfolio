<?php

namespace App\Livewire\Admin;

use App\Models\FooterSetting;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Footer extends Component
{
    public $about_text;
    public $copyright_text;
    public $twitter_url;
    public $github_url;
    public $linkedin_url;

    public function mount()
    {
        $setting = FooterSetting::first();

        if ($setting) {
            $this->about_text = $setting->about_text;
            $this->copyright_text = $setting->copyright_text;
            $links = $setting->social_links ?? [];
            $this->twitter_url = $links['twitter'] ?? '';
            $this->github_url = $links['github'] ?? '';
            $this->linkedin_url = $links['linkedin'] ?? '';
        }
    }

    public function render()
    {
        return view('livewire.admin.footer');
    }

    public function save()
    {
        $this->validate([
            'about_text' => 'nullable|string',
            'copyright_text' => 'nullable|string',
            'twitter_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
        ]);

        $setting = FooterSetting::first();

        $data = [
            'about_text' => $this->about_text,
            'copyright_text' => $this->copyright_text,
            'social_links' => [
                'twitter' => $this->twitter_url,
                'github' => $this->github_url,
                'linkedin' => $this->linkedin_url,
            ],
        ];

        if ($setting) {
            $setting->update($data);
        } else {
            FooterSetting::create($data);
        }

        session()->flash('message', 'Footer settings updated successfully.');
    }
}
