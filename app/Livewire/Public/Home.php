<?php

namespace App\Livewire\Public;

use App\Models\Service;
use App\Models\Project;
use App\Models\FooterSetting;
use App\Models\HeroSection;
use App\Models\AboutSection;
use App\Models\Feature;
use App\Models\PricingPlan;
use App\Models\Testimonial;
use App\Models\ContactMessage;
use App\Models\SocialLink;
use App\Models\Website;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.public')]
class Home extends Component
{
    // Contact Form Fields
    public $name;
    public $email;
    public $subject;
    public $message;

    public function render()
    {
        return view('livewire.public.home', [
            'hero' => HeroSection::first(),
            'about' => AboutSection::first(),
            'services' => Service::all(),
            'projects' => Project::with('media')
                ->where('is_featured', true)
                ->where('is_archived', false)
                ->orderBy('sort_order')
                ->latest()
                ->get(),
            'websites' => Website::latest()->take(10)->get(),
            'features' => Feature::all(),
            'pricing_plans' => PricingPlan::all(),
            'testimonials' => Testimonial::where('is_active', true)->latest()->get(),
            'footer' => FooterSetting::first(),
            'social_links' => SocialLink::where('is_active', true)->orderBy('sort_order')->get(),
        ]);
    }

    public function sendMessage()
    {
        $this->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        ContactMessage::create([
            'name' => $this->name,
            'email' => $this->email,
            'subject' => $this->subject,
            'message' => $this->message,
        ]);

        $this->reset(['name', 'email', 'subject', 'message']);
        session()->flash('message', 'Thank you! Your message has been sent successfully.');
    }
}
