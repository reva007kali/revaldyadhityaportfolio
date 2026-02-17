<?php

namespace App\Livewire\Admin;

use Livewire\Component;
use App\Models\Project;
use App\Models\Website;
use App\Models\Service;
use App\Models\ContactMessage;
use App\Models\Testimonial;

class Dashboard extends Component
{
                    public function render()
                    {
                                        return view('livewire.admin.dashboard', [
                                                            'totalProjects' => Project::count(),
                                                            'totalWebsites' => Website::count(),
                                                            'totalServices' => Service::count(),
                                                            'totalMessages' => ContactMessage::count(),
                                                            'totalTestimonials' => Testimonial::count(),
                                                            'recentMessages' => ContactMessage::latest()->take(5)->get(),
                                                            // Placeholder for visitor stats
                                                            'visitorCount' => 0,
                                        ])->layout('layouts.app', ['header' => 'Dashboard']);
                    }
}
