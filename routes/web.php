<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Public\Home;
use App\Livewire\Public\Works;
use App\Livewire\Admin\Services\Index as ServicesIndex;
use App\Livewire\Admin\Projects\Index as ProjectsIndex;
use App\Livewire\Admin\Footer as FooterSettings;
use App\Livewire\Admin\Hero as HeroSettings;
use App\Livewire\Admin\About as AboutSettings;
use App\Livewire\Admin\Features\Index as FeaturesIndex;
use App\Livewire\Admin\Pricing\Index as PricingIndex;
use App\Livewire\Admin\Messages\Index as MessagesIndex;

Route::get('/', Home::class)->name('home');
Route::get('/works', Works::class)->name('works');

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
    Route::get('footer', FooterSettings::class)->name('footer');
    Route::get('messages', MessagesIndex::class)->name('messages');
});

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__ . '/auth.php';
