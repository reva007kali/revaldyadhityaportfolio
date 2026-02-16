<div class="w-full bg-[#0b0b0d] text-white overflow-x-hidden relative">

    {{-- Global Ambient Glow - Orange --}}
    <div
        class="fixed inset-0 bg-gradient-to-br from-orange-500/[0.03] via-transparent to-transparent pointer-events-none">
    </div>

    <!-- ================= HERO ================= -->
    <section id="home" class="relative min-h-screen flex items-end md:items-center overflow-hidden">

        {{-- Hero Background Image logic preserved --}}
        <div class="absolute inset-0 overflow-hidden">
            <img src="{{ asset('storage/' . ($hero->image ?? 'default.jpg')) }}" alt="Profile"
                class="hero-img w-full h-full object-cover object-[80%_center] md:object-center transition-transform duration-700">

            {{-- Layered Overlays for Depth --}}
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/40 to-transparent"></div>
            <div
                class="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/60 via-transparent to-transparent hidden md:block">
            </div>

            {{-- Subtle Orange Ambient Glow --}}
            <div class="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div class="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-12 md:pt-20">

            {{-- Glass Content Box --}}
            <div class="max-w-3xl p-2 md:p-0">

                {{-- Status Badge --}}
                <div
                    class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 animate-fade-in-up">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span class="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Available for new
                        projects</span>
                </div>

                {{-- Main Heading: Poster Style --}}
                <h1
                    class="text-6xl md:text-8xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-white mb-4 md:mb-8">
                    @php
                        $titleParts = explode(' ', $hero->title ?? 'Reva Adhitya');
                        $lastWord = array_pop($titleParts);
                        $firstPart = implode(' ', $titleParts);
                    @endphp

                    {{ $firstPart }} <br />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                        {{ $lastWord }}<span class="text-white">.</span>
                    </span>
                </h1>

                {{-- Subtitle --}}
                <p class="text-sm md:text-2xl text-white/50 max-w-lg leading-relaxed mb-2 md:mb-12 font-medium">
                    {{ $hero->subtitle ?? 'I craft precise digital experiences with clarity & emotional impact.' }}
                </p>

                {{-- Action Group --}}
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {{-- Main CTA --}}
                    <a href="{{ $hero->cta_link ?? '#' }}"
                        class="group relative px-10 py-5 rounded-full overflow-hidden transition-all duration-300 active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,107,0,0.3)] hover:shadow-[0_25px_50px_-10px_rgba(255,107,0,0.5)]">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <span
                            class="relative z-10 text-black font-black uppercase tracking-widest text-xs group-hover:tracking-[0.25em] transition-all duration-500">
                            {{ $hero->cta_text ?? 'Start a Project' }}
                        </span>
                    </a>
                    {{-- Social Icons: Refined --}}
                    <div class="flex items-center gap-5 pl-2 sm:border-l sm:border-white/10 sm:pl-8">
                        @foreach ($social_links as $link)
                            <a href="{{ $link->url }}" target="_blank"
                                class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-orange-500 group transition-all duration-500">
                                @if ($link->icon)
                                    <img src="{{ asset('storage/' . $link->icon) }}"
                                        class="w-4 h-4 object-contain  transition-all">
                                @else
                                    <span
                                        class="text-[10px] font-black text-white/50 group-hover:text-black transition-colors">{{ substr($link->platform, 0, 1) }}</span>
                                @endif
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>

        {{-- Scroll Indicator --}}
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-30">
            <span class="text-[10px] font-black uppercase tracking-[0.4em] rotate-90 mb-8">Scroll</span>
            <div class="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
    </section>

    <style>
        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
        }
    </style>

    <!-- ================= FEATURED WORK ================= -->
    @if ($projects->count() > 0)
        <section id="works" class="py-24 bg-gradient-to-b from-[#111113] to-[#0b0b0d]">
            <div class="max-w-7xl mx-auto px-6 md:px-12">
                <div class="flex items-end justify-between mb-12">
                    <div>
                        <p class="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">Portfolio</p>
                        <h3 class="text-3xl md:text-5xl font-bold tracking-tight">Creative Highlights</h3>
                    </div>
                    <a href="{{ route('works') }}" wire:navigate
                        class="text-sm font-semibold border-b border-orange-500/40 hover:border-orange-500 hover:text-orange-500 transition pb-1">
                        All Projects →
                    </a>
                </div>

                <div class="swiper mySwiper !pb-14">
                    <div class="swiper-wrapper">
                        @foreach ($projects as $project)
                            <div class="swiper-slide !h-auto">
                                <a href="{{ route('works.show', $project->slug) }}"
                                    class="relative aspect-[4/5] md:aspect-[3/4] rounded-[32px] overflow-hidden group border border-orange-500/20 hover:border-orange-500/40 bg-[#111113] block transition-all">
                                    @if ($project->image)
                                        <img src="{{ Str::startsWith($project->image, 'http') ? $project->image : asset('storage/' . $project->image) }}"
                                            class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                                    @endif
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                                        <h4
                                            class="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                                            {{ $project->title }}</h4>
                                        <p class="text-sm text-white/60 line-clamp-2">{{ $project->description }}</p>
                                    </div>
                                </a>
                            </div>
                        @endforeach
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
    @endif


    <!-- ================= FEATURED WEBSITES ================= -->
    @if ($websites->count() > 0)
        <section id="websites" class="py-24 bg-[#0b0b0d]">
            <div class="max-w-7xl mx-auto px-6 md:px-12">
                <div class="flex items-end justify-between mb-12">
                    <div>
                        <p class="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">Showcase</p>
                        <h3 class="text-3xl md:text-5xl font-bold tracking-tight">Website Gallery</h3>
                    </div>
                    <a href="{{ route('websites') }}" wire:navigate
                        class="text-sm font-semibold border-b border-orange-500/40 hover:border-orange-500 hover:text-orange-500 transition pb-1">
                        View All Websites →
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach ($websites as $website)
                        <div
                            class="group relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#161618] border border-white/5 transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">

                            {{-- Image Layer --}}
                            <div class="absolute inset-0 w-full h-full">
                                @if ($website->image)
                                    <img src="{{ asset('storage/' . $website->image) }}"
                                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]">
                                @else
                                    <div
                                        class="w-full h-full flex items-center justify-center bg-zinc-800 text-white/20 font-black text-4xl">
                                        {{ substr($website->title, 0, 1) }}
                                    </div>
                                @endif
                            </div>

                            {{-- Overlay Content (Visible on Hover) --}}
                            <div
                                class="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/80 to-transparent 
                    opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">

                                {{-- Tags --}}
                                @if ($website->tags)
                                    <div class="flex flex-wrap gap-2 mb-3">
                                        @foreach (array_slice($website->tags, 0, 2) as $tag)
                                            <span
                                                class="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-[9px] font-bold uppercase tracking-wider text-orange-400">
                                                {{ $tag }}
                                            </span>
                                        @endforeach
                                    </div>
                                @endif

                                <h3 class="text-xl font-black text-white mb-2 tracking-tight">
                                    {{ $website->title }}
                                </h3>

                                <p class="text-xs text-white/70 line-clamp-2 leading-relaxed mb-4">
                                    {{ $website->description }}
                                </p>

                                {{-- Action Button --}}
                                <a href="{{ route('websites.show', $website->slug) }}" target="_blank"
                                    class="w-full py-3 rounded-xl bg-orange-500 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-colors text-center">
                                    View Website
                                </a>
                            </div>

                            {{-- Optional: Clickable link for the whole card --}}
                            <a href="{{ route('websites.show', $website->slug) }}" class="absolute inset-0 z-20"
                                aria-label="View {{ $website->title }}"></a>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    @endif


    <!-- ================= SERVICES ================= -->
    @if ($services->count() > 0)
        <section id="services" class="py-12 bg-[#0b0b0d] relative">
            <div class="max-w-7xl mx-auto px-6 md:px-12">

                {{-- Refined Header --}}
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
                    <div class="max-w-xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <p class="text-orange-500 font-black tracking-[0.4em] uppercase text-xs">Expertise</p>
                        </div>
                        <h3 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
                            Specialized <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Solutions.</span>
                        </h3>
                    </div>
                    <p class="text-white/40 text-lg max-w-xs leading-relaxed border-l border-white/10 pl-6">
                        I build digital solutions that simplify, streamline, and strengthen brands. </p>
                </div>

                {{-- Services Grid --}}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach ($services as $index => $service)
                        <a href="{{ route('services.show', $service->slug) }}" class="group relative">

                            {{-- The Card --}}
                            <div
                                class="relative h-full min-h-[320px] p-10 rounded-[40px] bg-[#161618] border border-white/5 overflow-hidden transition-all duration-700 group-hover:border-orange-500/30 group-hover:-translate-y-3 shadow-2xl">

                                {{-- 1. Background Image Layer (Service Icon) --}}
                                @if ($service->icon)
                                    <div class="absolute inset-0 w-full h-full overflow-hidden">
                                        <img src="{{ asset('storage/' . $service->icon) }}"
                                            class="w-full h-full object-cover opacity-[0.75] group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out pointer-events-none">

                                        {{-- 2. Dark Gradient Overlay (Ensures Text Legibility) --}}
                                        <div
                                            class="absolute inset-0 bg-gradient-to-t from-[#161618] via-[#161618]/80 to-transparent">
                                        </div>
                                    </div>
                                @endif

                                {{-- 3. Subtle Accent Glow --}}
                                <div
                                    class="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-600/10 blur-[100px] group-hover:bg-orange-600/30 transition-all duration-700">
                                </div>

                                {{-- 4. Top Decorative Elements (Numbering) --}}
                                <div class="relative z-10 flex justify-between items-start mb-12">
                                    {{-- Dynamic Numbering --}}
                                    <div
                                        class="text-5xl font-black text-white/[0.05] group-hover:text-orange-500/20 transition-colors duration-500 italic">
                                        {{ sprintf('%02d', $index + 1) }}
                                    </div>
                                </div>

                                {{-- 5. Text Content --}}
                                <div class="relative z-10">
                                    <h4
                                        class="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-orange-400 transition-colors">
                                        {{ $service->title }}
                                    </h4>
                                    <p
                                        class="text-white/50 leading-relaxed text-sm group-hover:text-white/80 transition-colors line-clamp-4">
                                        {{ $service->description }}
                                    </p>
                                </div>

                                {{-- 6. Bottom Interaction Reveal --}}
                                <div
                                    class="absolute bottom-7 left-10 right-10 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <div class="flex items-center gap-3">
                                        <span
                                            class="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">Learn
                                            More</span>
                                        <div
                                            class="w-12 h-[1px] bg-orange-500/50 group-hover:w-20 transition-all duration-700">
                                        </div>
                                    </div>

                                    {{-- Tiny arrow indicator --}}
                                    <div
                                        class="w-8 h-8 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-500 text-xs group-hover:bg-orange-500 group-hover:text-black transition-all">
                                        →
                                    </div>
                                </div>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </section>
    @endif


    <!-- ================= WHY CHOOSE ME ================= -->
    @if ($features->count() > 0)
        <section id="features" class="py-24 relative overflow-hidden bg-zinc-950">
            {{-- Section Background Ambient Glow --}}
            <div
                class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none">
            </div>

            <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

                    {{-- Left Content --}}
                    <div class="lg:col-span-1">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-8 h-[2px] bg-orange-500"></span>
                            <p class="text-orange-500 font-black tracking-[0.3em] uppercase text-xs">Advantage</p>
                        </div>
                        <h3 class="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] text-white">
                            Driven by Purpose & <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Precision.</span>
                        </h3>
                        <p class="mt-8 text-white/50 leading-relaxed text-lg">
                            Every decision is intentional. From strategy to execution, I design systems that don’t just
                            look refined — they perform, adapt, and create measurable impact.
                        </p>
                    </div>

                    {{-- Feature Cards Grid --}}
                    <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        @foreach ($features as $feature)
                            <div
                                class="group relative p-10 rounded-[40px] border border-white/10 bg-[#1c1c1e]/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange-500/40 hover:-translate-y-2">

                                {{-- Animated Blobs --}}
                                {{-- Blob 1 --}}
                                <div
                                    class="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-[60px] group-hover:bg-orange-500/40 transition-colors duration-700 animate-blob">
                                </div>
                                {{-- Blob 2 --}}
                                <div
                                    class="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-900/10 rounded-full blur-[60px] group-hover:bg-orange-600/30 transition-colors duration-700 animate-blob animation-delay-2000">
                                </div>

                                {{-- Card Content --}}
                                <div class="relative z-10">
                                    <div
                                        class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] group-hover:scale-110">
                                        @if ($feature->icon)
                                            <img src="{{ asset('storage/' . $feature->icon) }}"
                                                class="w-7 h-7 opacity-70 transition-all">
                                        @else
                                            <span class="text-2xl group-hover:scale-110 transition-transform">✦</span>
                                        @endif
                                    </div>

                                    <h4
                                        class="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                                        {{ $feature->title }}
                                    </h4>

                                    <p
                                        class="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                                        {{ $feature->description }}
                                    </p>
                                </div>

                                {{-- Subtle Bottom Glow Line --}}
                                <div
                                    class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-full transition-all duration-700">
                                </div>
                            </div>
                        @endforeach
                    </div>

                </div>
            </div>
        </section>
    @endif


    <!-- ================= ABOUT ================= -->
    <section id="about" class="relative py-32 overflow-hidden bg-[#0b0b0d]">

        {{-- Large Decorative Background Text --}}
        <div
            class="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none leading-none">
            STORY
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {{-- 1. Image Side (Occupies 5 columns on desktop) --}}
                <div class="lg:col-span-5 relative order-2 lg:order-1">

                    {{-- Decorative Floating Elements --}}
                    <div
                        class="absolute -top-10 -left-10 w-32 h-32 bg-orange-600/20 blur-[60px] rounded-full animate-pulse">
                    </div>
                    <div
                        class="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-600/10 blur-[80px] rounded-full animate-blob">
                    </div>

                    {{-- The Image Frame --}}
                    <div class="relative">
                        {{-- Offset Border Frame --}}
                        <div
                            class="absolute inset-0 border-2 border-orange-500/20 translate-x-4 translate-y-4 rounded-[40px] hidden md:block">
                        </div>

                        {{-- Main Image Container --}}
                        <div
                            class="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900 group shadow-2xl">
                            @if ($about->image)
                                <img src="{{ asset('storage/' . $about->image) }}"
                                    class="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110">
                            @endif

                            {{-- Image Overlay Gradient --}}
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            </div>
                        </div>
                    </div>
                </div>

                {{-- 2. Text Side (Occupies 7 columns on desktop) --}}
                <div class="lg:col-span-7 order-1 lg:order-2 lg:pl-10">
                    <div class="max-w-xl">

                        {{-- Heading --}}
                        <h2 class="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-10">
                            {{ $about->title ?? 'Designing Digital Precision.' }}
                        </h2>

                        {{-- Description with emphasis --}}
                        <div class="space-y-6">
                            <p class="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                                {{-- This assumes your first sentence is the hook --}}
                                {{ Str::before($about->description, '.') }}.
                            </p>
                            <p class="text-lg text-white/40 leading-relaxed">
                                {{ Str::after($about->description, '.') }}
                            </p>
                        </div>

                        {{-- Values/Features Mini-Grid --}}
                        <div class="grid grid-cols-2 gap-8 mt-12 py-8 border-y border-white/5">
                            <div>
                                <h4 class="text-orange-500 font-black text-xs uppercase tracking-widest mb-2">
                                    Philosophy</h4>
                                <p class="text-white/60 text-sm">Form follows function, but emotion leads the way.</p>
                            </div>
                            <div>
                                <h4 class="text-orange-500 font-black text-xs uppercase tracking-widest mb-2">Location
                                </h4>
                                <p class="text-white/60 text-sm">Working globally, based in Indonesia.</p>
                            </div>
                        </div>

                        {{-- CTA --}}
                        @if (isset($about->button_text) && $about->button_text)
                            <div class="mt-12">
                                <a href="{{ $about->button_link ?? '#' }}" class="group flex items-center gap-6">
                                    <div
                                        class="w-16 h-16 rounded-full border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
                                        <span class="text-orange-500 group-hover:text-black transition-colors">→</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span
                                            class="text-white/40 text-[10px] font-black uppercase tracking-widest group-hover:text-orange-500 transition-colors">Next
                                            Step</span>
                                        <span
                                            class="text-white font-black text-lg group-hover:translate-x-2 transition-transform duration-500">{{ $about->button_text }}</span>
                                    </div>
                                </a>
                        @endif
                    </div>
                </div>
            </div>

        </div>
</div>
</section>

<style>
    @keyframes bounce-slow {

        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-10px);
        }
    }

    .animate-bounce-slow {
        animation: bounce-slow 4s ease-in-out infinite;
    }
</style>


<!-- ================= PRICING / INVESTMENT ================= -->
<section id="pricing" class="py-32 relative bg-[#0b0b0d] overflow-hidden">

    {{-- Background Decorative Glows --}}
    <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none">
    </div>
    <div
        class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/5 blur-[120px] rounded-full pointer-events-none">
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {{-- Header with Strategic Copy --}}
        <div class="text-center max-w-3xl mx-auto mb-24">
            <div class="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/20 bg-orange-500/5">
                <p class="text-orange-500 font-black tracking-[0.3em] uppercase text-[10px]">Pricing & Plans</p>
            </div>
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
                Ready to <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Level
                    Up?</span>
            </h2>
            <p class="text-white/50 text-xl leading-relaxed">
                Choose a plan that fits your stage of growth. No hidden fees, just high-impact digital solutions
                designed to convert.
            </p>
        </div>

        {{-- Pricing Grid --}}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            @foreach ($pricing_plans as $index => $plan)
                <div
                    class="group relative flex flex-col p-1 bg-[#161618] rounded-[48px] border border-white/5 transition-all duration-700 hover:border-orange-500/30">

                    {{-- Card Inner --}}
                    <div
                        class="flex flex-col h-full p-10 rounded-[44px] bg-gradient-to-b from-white/[0.02] to-transparent">

                        {{-- Plan Header --}}
                        <div class="mb-10">
                            <h3 class="text-orange-500 font-black text-lg uppercase tracking-[0.3em] mb-4">
                                {{ $plan->name }}
                            </h3>
                            <div class="flex items-baseline gap-1">
                                <span class="text-5xl md:text-4xl font-black text-white tracking-tighter">
                                    {{ $plan->price }}
                                </span>
                            </div>
                            <p class="mt-6 text-white/50 text-sm leading-relaxed">
                                {{ $plan->description }}
                            </p>
                        </div>

                        {{-- Features List --}}
                        <div class="space-y-5 mb-12 flex-grow">
                            @foreach ($plan->features ?? [] as $feature)
                                <div class="flex items-start gap-4 group/item">
                                    <div
                                        class="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-orange-500/30 flex items-center justify-center group-hover/item:border-orange-500 transition-colors">
                                        <svg class="w-2.5 h-2.5 text-orange-500" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-white/70 text-sm group-hover/item:text-white transition-colors">
                                        {{ $feature }}
                                    </span>
                                </div>
                            @endforeach
                        </div>

                        {{-- CTA Button --}}
                        <a href="{{ $plan->cta_link ?? '#' }}"
                            class="relative group/btn overflow-hidden block w-full text-center py-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-all duration-500 bg-white/5 text-white hover:bg-orange-500 hover:text-black border border-white/10 hover:border-orange-500">

                            <span class="relative z-10">{{ $plan->cta_text ?? 'Get Started' }}</span>

                            {{-- Button Shine Effect --}}
                            <div
                                class="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out">
                            </div>
                        </a>
                    </div>
                </div>
            @endforeach
        </div>

        {{-- Bottom Value Proposition --}}
        <div
            class="mt-20 p-10 rounded-[40px] border border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                    <span class="text-orange-500 text-3xl">💡</span>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-white">Need a custom solution?</h4>
                    <p class="text-white/40">If your project doesn't fit these plans, let's talk and build a custom
                        quote.</p>
                </div>
            </div>
            <a href="#contact"
                class="text-orange-500 font-black uppercase tracking-widest text-sm border-b-2 border-orange-500/20 hover:border-orange-500 transition-all pb-1">
                Contact for Custom Work →
            </a>
        </div>
    </div>
</section>



<!-- ================= TESTIMONIALS ================= -->
<section id="testimonials"
    class="py-24 bg-gradient-to-b from-zinc-900 to-transparent text-white rounded-[40px] md:rounded-[60px] mx-4 shadow-2xl shadow-orange-500/5">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <h3 class="text-3xl md:text-7xl font-extrabold tracking-tight mb-12 text-center">What <span
                class="text-orange-500">Clients Say</span></h3>
        <div class="swiper testimonialSwiper !pb-12">
            <div class="swiper-wrapper">
                @foreach ($testimonials as $testimonial)
                    <div class="swiper-slide !h-auto py-10"> {{-- Added padding for hover lift --}}
                        <div class="group relative h-full transition-all duration-500">

                            {{-- 1. Hover Glow Effect (Behind the card) --}}
                            <div
                                class="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-[45px] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500">
                            </div>

                            {{-- 2. Main Glass Card --}}
                            <div
                                class="relative h-full flex flex-col p-8 md:p-10 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:border-orange-500/50 group-hover:-translate-y-2 transition-all duration-500 shadow-2xl">

                                {{-- Decorative Quote Icon --}}
                                <div
                                    class="absolute top-8 right-10 text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                                    <svg class="w-16 h-16 fill-currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017C1.46472 13 1.017 12.5523 1.017 12V9C1.017 7.34315 2.36015 6 4.017 6H10.017C11.6738 6 13.017 7.34315 13.017 9V15C13.017 17.7614 10.7786 20 8.017 20H5.017V21Z" />
                                    </svg>
                                </div>

                                {{-- Star Rating --}}
                                <div class="flex gap-1 mb-8">
                                    @for ($i = 1; $i <= 5; $i++)
                                        <svg class="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform duration-300"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    @endfor
                                </div>

                                {{-- Testimonial Content --}}
                                <p class="text-xl md:text-2xl leading-relaxed text-white/90 mb-10 font-medium italic">
                                    "{{ $testimonial->content }}"
                                </p>

                                {{-- Author Info --}}
                                <div class="flex items-center gap-5 mt-auto">
                                    <div class="relative">
                                        {{-- Avatar Ring --}}
                                        <div
                                            class="absolute -inset-1 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full opacity-50">
                                        </div>
                                        <div
                                            class="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#0b0b0d] bg-zinc-800">
                                            @if ($testimonial->avatar)
                                                <img src="{{ asset('storage/' . $testimonial->avatar) }}"
                                                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                                            @else
                                                <div
                                                    class="w-full h-full flex items-center justify-center text-white/20 font-black">
                                                    {{ substr($testimonial->name, 0, 1) }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div>
                                        <h4
                                            class="text-lg font-black text-white group-hover:text-orange-500 transition-colors">
                                            {{ $testimonial->name }}
                                        </h4>
                                        <p
                                            class="text-[10px] text-orange-500/60 font-black uppercase tracking-[0.2em]">
                                            {{ $testimonial->position ?? 'CEO & Founder' }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="max-w-2xl mx-auto mt-12">
            <livewire:public.components.testimonial-form />
        </div>
    </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact" class="py-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <p class="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Contact</p>
                <h2 class="text-5xl md:text-7xl font-bold leading-tight mb-8">Let's build your <span
                        class="text-orange-500">vision.</span></h2>
                <p class="text-xl text-white/50 leading-relaxed mb-12">I am currently available for new projects
                    and collaborations. Send me a message and let's talk.</p>
            </div>

            <div
                class="bg-gradient-to-br from-orange-500/5 to-orange-600/5 p-8 md:p-12 rounded-[40px] border border-orange-500/20 backdrop-blur-xl">
                @if (session()->has('message'))
                    <div
                        class="mb-8 p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm shadow-lg">
                        {{ session('message') }}
                    </div>
                @endif

                <form wire:submit.prevent="sendMessage" class="space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="text" wire:model="name" placeholder="Name"
                            class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-orange-500/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                            required>
                        <input type="email" wire:model="email" placeholder="Email"
                            class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-orange-500/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                            required>
                    </div>
                    <input type="text" wire:model="subject" placeholder="Subject"
                        class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-orange-500/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all">
                    <textarea wire:model="message" rows="5" placeholder="Your Message"
                        class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-orange-500/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                        required></textarea>
                    <button type="submit"
                        class="w-full py-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold uppercase tracking-widest text-sm hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95">Send
                        Message</button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- ================= SCRIPTS ================= -->
<script>
    document.addEventListener('livewire:navigated', () => initAllSwipers());
    document.addEventListener('DOMContentLoaded', () => initAllSwipers());

    function initAllSwipers() {
        // Projects Swiper
        new Swiper('.mySwiper', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            grabCursor: true,
            autoplay: {
                delay: 4000
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });

        // Testimonials Swiper
        new Swiper(".testimonialSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            autoplay: {
                delay: 5000
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 2
                }
            }
        });
    }
</script>

<style>
    @keyframes blob {
        0% {
            transform: translate(0px, 0px) scale(1);
        }

        33% {
            transform: translate(30px, -50px) scale(1.1);
        }

        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }

        100% {
            transform: translate(0px, 0px) scale(1);
        }
    }

    .animate-blob {
        animation: blob 7s infinite;
    }

    .animation-delay-2000 {
        animation-delay: 2s;
    }

    /* Orange-themed Swiper pagination */
    .swiper-pagination-bullet {
        background: rgba(249, 115, 22, 0.3);
    }

    .swiper-pagination-bullet-active {
        background: rgb(249, 115, 22);
    }
</style>
</div>
