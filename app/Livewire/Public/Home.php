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
use Illuminate\Support\Facades\Mail;
use App\Mail\NewContactMessage;
use Illuminate\Support\Facades\Log;

#[Layout('layouts.public')]
class Home extends Component
{
    // Contact Form Fields
    public $name;
    public $email;
    public $subject;
    public $message;

    // Cached data
    public $hero;
    public $about;
    public $services;
    public $projects;
    public $websites;
    public $features;
    public $pricing_plans;
    public $testimonials;
    public $footer;
    public $social_links;

    public function mount()
    {
        $this->hero = HeroSection::first();
        $this->about = AboutSection::first();

        $this->services = Service::all();
        $this->features = Feature::all();
        $this->pricing_plans = PricingPlan::all();

        $this->projects = Project::with('media')
            ->where('is_featured', true)
            ->where('is_archived', false)
            ->orderBy('sort_order')
            ->latest()
            ->get();

        $this->websites = Website::latest()->take(6)->get();

        $this->testimonials = Testimonial::where('is_active', true)
            ->latest()
            ->get();

        $this->footer = FooterSetting::first();

        $this->social_links = SocialLink::where('is_active', true)
            ->orderBy('sort_order')
            ->get();
    }

    public function render()
    {
        return view('livewire.public.home');
    }

    public function sendMessage()
    {
        $this->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        $contactMessage = ContactMessage::create([
            'name' => $this->name,
            'email' => $this->email,
            'subject' => $this->subject,
            'message' => $this->message,
        ]);

        try {
            Mail::to('le.revaldy@gmail.com')->send(new NewContactMessage($contactMessage));
        } catch (\Exception $e) {
            Log::error("Failed to send contact email: " . $e->getMessage());
        }

        $this->reset(['name', 'email', 'subject', 'message']);
        session()->flash('message', 'Thank you! Your message has been sent successfully.');
    }
}