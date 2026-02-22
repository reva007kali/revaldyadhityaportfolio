<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;

class SitemapController extends Controller
{
    public function index()
    {
        $posts = [];

        // Static Pages
        $staticPages = [
            '/',
            '/about',
            '/works',
            '/websites',
            '/gallery',
            '/archive',
            '/privacy-policy',
            '/terms-of-service',
            '/3d-showcase',
        ];

        foreach ($staticPages as $page) {
            $posts[] = [
                'loc' => url($page),
                'lastmod' => now()->toAtomString(),
                'changefreq' => 'weekly',
                'priority' => 0.8,
            ];
        }

        // Projects (Works)
        $projects = Project::where('is_archived', false)->get();
        foreach ($projects as $project) {
            $posts[] = [
                'loc' => route('works.show', $project->slug),
                'lastmod' => $project->updated_at->toAtomString(),
                'changefreq' => 'weekly',
                'priority' => 0.9,
            ];
        }

        // Websites (Portfolio specific)
        $websites = Website::all();
        foreach ($websites as $website) {
            $posts[] = [
                'loc' => route('websites.show', $website->slug),
                'lastmod' => $website->updated_at->toAtomString(),
                'changefreq' => 'monthly',
                'priority' => 0.8,
            ];
        }

        // Services
        $services = Service::all();
        foreach ($services as $service) {
            $posts[] = [
                'loc' => route('services.show', $service->slug),
                'lastmod' => $service->updated_at->toAtomString(),
                'changefreq' => 'monthly',
                'priority' => 0.8,
            ];
        }

        return response()->view('sitemap.index', [
            'posts' => $posts,
        ])->header('Content-Type', 'text/xml');
    }
}
