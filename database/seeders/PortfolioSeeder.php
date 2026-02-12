<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HeroSection;
use App\Models\AboutSection;
use App\Models\Service;
use App\Models\Project;
use App\Models\Feature;
use App\Models\PricingPlan;
use App\Models\FooterSetting;
use Illuminate\Support\Facades\DB;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        DB::table('hero_sections')->truncate();
        DB::table('about_sections')->truncate();
        DB::table('services')->truncate();
        DB::table('projects')->truncate();
        DB::table('features')->truncate();
        DB::table('pricing_plans')->truncate();
        DB::table('footer_settings')->truncate();

        // 1. Hero Section
        HeroSection::create([
            'title' => 'DIGITAL',
            'subtitle' => 'EXPERIENCE.',
            'cta_text' => 'EXPLORE WORK',
            'cta_link' => '#projects',
            // No image by default for the clean Swiss look, or use a placeholder
            'image' => null,
        ]);

        // 2. About Section
        AboutSection::create([
            'title' => 'FORM FOLLOWS FUNCTION.',
            'description' => 'We are a multidisciplinary design studio rooted in the principles of the International Typographic Style. We believe in grids, asymmetry, and the power of whitespace to create clarity in a chaotic digital world.',
            'button_text' => 'OUR PHILOSOPHY',
            'button_link' => '#contact',
            'image' => null,
        ]);

        // 3. Services
        $services = [
            [
                'title' => 'Brand Identity',
                'description' => 'Crafting visual systems that communicate your essence with precision and objectivity.',
                'icon' => null, // Icons will be handled by the SVG fallback or text in the view
            ],
            [
                'title' => 'Digital Product',
                'description' => 'User-centric interfaces designed with strict grid systems and intuitive hierarchies.',
                'icon' => null,
            ],
            [
                'title' => 'Art Direction',
                'description' => 'Curating visual narratives that resonate through bold imagery and typography.',
                'icon' => null,
            ],
            [
                'title' => 'Development',
                'description' => 'Clean, semantic code that ensures performance and accessibility across all devices.',
                'icon' => null,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }

        // 4. Projects (Works)
        $projects = [
            [
                'title' => 'Project A-01',
                'description' => 'A comprehensive rebranding for a fintech startup, focusing on trust and clarity.',
                'link' => '#',
                'image' => 'https://placehold.co/800x800/F5F5F5/111111?text=A-01',
            ],
            [
                'title' => 'Helvetica Type',
                'description' => 'An interactive digital specimen for the world\'s most famous typeface.',
                'link' => '#',
                'image' => 'https://placehold.co/800x800/0055FF/FFFFFF?text=Type',
            ],
            [
                'title' => 'Mono Architecture',
                'description' => 'Web platform for a brutalist architecture firm based in Zurich.',
                'link' => '#',
                'image' => 'https://placehold.co/800x800/111111/FFFFFF?text=Mono',
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // 5. Features
        $features = [
            [
                'title' => 'Precision',
                'description' => 'Every pixel is placed with purpose.',
                'icon' => null,
            ],
            [
                'title' => 'Objectivity',
                'description' => 'Design that communicates without bias.',
                'icon' => null,
            ],
            [
                'title' => 'Grid Systems',
                'description' => 'Order and structure in every layout.',
                'icon' => null,
            ],
            [
                'title' => 'Typography',
                'description' => 'The voice of your brand, clearly spoken.',
                'icon' => null,
            ],
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }

        // 6. Pricing Plans
        $plans = [
            [
                'name' => 'ESSENTIAL',
                'price' => '$2,000',
                'description' => 'Perfect for small businesses and startups.',
                'features' => ['Brand Identity', 'Basic Website', 'Style Guide', '2 Revisions'],
                'cta_text' => 'SELECT PLAN',
                'cta_link' => '#contact',
            ],
            [
                'name' => 'PROFESSIONAL',
                'price' => '$5,000',
                'description' => 'Comprehensive solution for growing brands.',
                'features' => ['Full Rebranding', 'E-commerce Site', 'Design System', '5 Revisions', 'SEO Optimization'],
                'cta_text' => 'SELECT PLAN',
                'cta_link' => '#contact',
            ],
            [
                'name' => 'CORPORATE',
                'price' => 'CUSTOM',
                'description' => 'Tailored enterprise solutions.',
                'features' => ['Global Strategy', 'Custom Development', 'Dedicated Team', 'Unlimited Support', 'Audit & Analytics'],
                'cta_text' => 'CONTACT US',
                'cta_link' => '#contact',
            ],
        ];

        foreach ($plans as $plan) {
            PricingPlan::create($plan);
        }

        // 7. Footer
        FooterSetting::create([
            'about_text' => 'Crafting digital experiences with precision and clarity.',
            'copyright_text' => '&copy; ' . date('Y') . ' Revaldy Adhitya. Swiss Design Edition.',
            'social_links' => json_encode([
                'facebook' => '#',
                'twitter' => '#',
                'instagram' => '#',
                'linkedin' => '#',
            ]),
        ]);
    }
}
