<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Public\Home;
use App\Livewire\Public\Works;
use App\Livewire\Public\Archive;
use App\Livewire\Public\About;
use App\Livewire\Public\PrivacyPolicy;
use App\Livewire\Public\TermsOfService;
use App\Livewire\Public\ProjectDetail;
use App\Livewire\Public\ServiceDetail;
use App\Livewire\Admin\Services\Index as ServicesIndex;
use App\Livewire\Admin\Projects\Index as ProjectsIndex;
use App\Livewire\Admin\Footer as FooterSettings;
use App\Livewire\Admin\Hero as HeroSettings;
use App\Livewire\Admin\About as AboutSettings;
use App\Livewire\Admin\Features\Index as FeaturesIndex;
use App\Livewire\Admin\Pricing\Index as PricingIndex;
use App\Livewire\Admin\Messages\Index as MessagesIndex;
use App\Livewire\Admin\Testimonials\Index as TestimonialsIndex;
use App\Livewire\Admin\SocialLinks\Index as SocialLinksIndex;
use App\Livewire\Admin\Navigation\Index as NavigationIndex;

Route::get('/', Home::class)->name('home');
Route::get('/works', Works::class)->name('works');
Route::get('/archive', Archive::class)->name('archive');
Route::get('/works/{slug}', ProjectDetail::class)->name('works.show');
Route::get('/services/{slug}', ServiceDetail::class)->name('services.show');
Route::get('/about', About::class)->name('about');
Route::get('/privacy-policy', PrivacyPolicy::class)->name('privacy-policy');
Route::get('/terms-of-service', TermsOfService::class)->name('terms-of-service');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('hero', HeroSettings::class)->name('hero');
    Route::get('about', AboutSettings::class)->name('about');
    Route::get('services', ServicesIndex::class)->name('services');
    Route::get('projects', ProjectsIndex::class)->name('projects');
    Route::get('features', FeaturesIndex::class)->name('features');
    Route::get('pricing', PricingIndex::class)->name('pricing');
    Route::get('testimonials', TestimonialsIndex::class)->name('testimonials');
    Route::get('footer', FooterSettings::class)->name('footer');
    Route::get('social-links', SocialLinksIndex::class)->name('social-links');
    Route::get('navigation', NavigationIndex::class)->name('navigation');
    Route::get('messages', MessagesIndex::class)->name('messages');
});

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__ . '/auth.php';
