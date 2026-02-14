<div
    class="lg:max-w-sm max-w-md min-h-screen mx-auto bg-[#0b0b0d] text-white overflow-x-hidden relative lg:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">

    {{-- subtle ambient glow --}}
    <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none">
    </div>

    <!-- ================= HERO ================= -->
    <div class="relative rounded-b-[40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">

        <img src="{{ asset('storage/' . ($hero->image ?? 'default.jpg')) }}" alt="Profile"
            class="hero-img w-full h-screen object-cover object-top scale-105">

        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div class="absolute bottom-5 p-6 w-full">

            <h2 class="text-2xl font-semibold tracking-tight flex items-center gap-2">
                {{ $hero->title ?? 'Your Name' }}
                <span class="text-[#7a1f2b] text-sm">●</span>
            </h2>

            <p class="text-sm text-white/60 mt-2 max-w-xs leading-relaxed">
                {{ $hero->subtitle ?? 'I craft precise digital experiences with clarity & emotional impact.' }}
            </p>

            {{-- Social --}}
            <div class="flex gap-6 mt-6 text-sm border-t border-white/10 pt-4">
                @foreach ($social_links as $link)
                    <a href="{{ $link->url }}" target="_blank"
                        class="text-white/60 hover:text-white transition group flex items-center gap-2">
                        @if ($link->icon)
                            <img src="{{ asset('storage/' . $link->icon) }}"
                                class="w-4 h-4 object-contain filter invert opacity-60 group-hover:opacity-100 transition-opacity">
                        @endif
                        {{ $link->platform }}
                    </a>
                @endforeach
            </div>

            {{-- CTA --}}
            <div class="mt-6 flex gap-3">

                <a href="{{ $hero->cta_link ?? '#' }}"
                    class="flex-1 text-center py-3 rounded-2xl bg-white text-black font-medium transition-all duration-300 active:scale-95">
                    {{ $hero->cta_text ?? 'Get In Touch' }}
                </a>

                <button
                    class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
                    ☆
                </button>

            </div>
        </div>
    </div>


    <!-- ================= FEATURED WORK ================= -->
    @if ($projects->count() > 0)
        <div class="mt-10 px-6 py-8 bg-gradient-to-b from-zinc-800 to-transparent rounded-t-[40px]">

            <div class="flex items-center justify-between mb-10">
                <h3 class="text-xl font-semibold tracking-tight">Featured Work</h3>
                <a href="{{ route('works') }}" wire:navigate class="text-xs text-white/50 hover:text-white transition">
                    See All →
                </a>
            </div>

            <div class="swiper mySwiper !pb-8">
                <div class="swiper-wrapper">

                    @foreach ($projects as $project)
                        <a href="{{ route('works.show', $project->slug) }}"
                            class="swiper-slide !h-[350px] relative rounded-[32px] overflow-hidden group border border-white/20 bg-[#111113] block">

                            @if ($project->image)
                                @if (Str::startsWith($project->image, 'http'))
                                    <img src="{{ $project->image }}"
                                        class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                                @else
                                    <img src="{{ asset('storage/' . $project->image) }}"
                                        class="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                                @endif
                            @endif

                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                                <h4 class="text-lg font-semibold leading-tight mb-2">
                                    {{ $project->title }}
                                </h4>
                                <p class="text-xs text-white/60 line-clamp-2">
                                    {{ $project->description }}
                                </p>
                            </div>

                        </a>
                    @endforeach

                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    @endif


    <!-- ================= SERVICES ================= -->
    @if ($services->count() > 0)
        <div class="mt-10 px-6 py-10 bg-zinc-100 rounded-[40px]">

            <h3 class="text-xl text-black font-semibold tracking-tight mb-6">Services</h3>

            <div class="grid gap-4">

                @foreach ($services as $service)
                    <a href="{{ route('services.show', $service->slug) }}" class="block">
                        <div
                            class="relative rounded-[32px] overflow-hidden bg-[#141416] border border-white/5 h-[160px] group transition-all duration-500 hover:border-white/10">

                            <div class="absolute inset-0">
                                @if ($service->icon)
                                    <img src="{{ asset('storage/' . $service->icon) }}"
                                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                                @endif
                            </div>

                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            </div>

                            <div class="relative p-5 flex flex-col justify-end h-full">
                                <h4 class="font-semibold mb-1">
                                    {{ $service->title }}
                                </h4>
                                <p class="text-xs text-white/60 line-clamp-2">
                                    {{ $service->description }}
                                </p>
                            </div>

                        </div>
                    </a>
                @endforeach

            </div>
        </div>
    @endif


    <!-- ================= FEATURES ================= -->
    @if ($features->count() > 0)
        <div class="mt-10 px-6 py-10">
            <h3 class="text-xl font-semibold tracking-tight mb-8">Why Choose Me</h3>

            <div class="grid grid-cols-1 gap-6">
                @foreach ($features as $feature)
                    <div
                        class="bg-[#1c1c1e] p-6 rounded-[32px] border border-white/5 hover:bg-[#252527] transition-colors duration-300 flex flex-col items-start group">

                        <div
                            class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                            @if ($feature->icon)
                                <img src="{{ asset('storage/' . $feature->icon) }}"
                                    class="w-6 h-6 object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity">
                            @else
                                <span
                                    class="text-white/60 font-bold text-lg group-hover:text-white">{{ substr($feature->title, 0, 1) }}</span>
                            @endif
                        </div>

                        <h4 class="text-lg font-bold mb-2 text-white">{{ $feature->title }}</h4>
                        <p class="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {{ $feature->description }}
                        </p>
                    </div>
                @endforeach
            </div>
        </div>
    @endif


    <!-- ================= ABOUT ================= -->
    <section class="my-10 px-6 m-4 rounded-[40px] pb-16 bg-zinc-800">

        <div class="grid gap-12 md:grid-cols-1 items-center">

            {{-- Image --}}
            <div class="relative group">
                <div
                    class="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-[40px] blur-2xl opacity-30 group-hover:opacity-50 transition duration-700">
                </div>
            </div>

            {{-- Text --}}
            <div>
                <p class="text-xs tracking-[0.4em] text-white/40 mb-4 uppercase">
                    About
                </p>

                <h2 class="text-3xl font-semibold leading-tight tracking-tight mb-6">
                    {{ $about->title ?? 'Designing Digital Precision.' }}
                </h2>

                <p class="text-base text-white/60 leading-relaxed mb-8">
                    {{ $about->description ?? 'No description available.' }}
                </p>
                @if (isset($about->button_text) && $about->button_text)
                    <a href="{{ $about->button_link ?? '#' }}"
                        class="inline-flex items-center text-sm font-medium text-white hover:opacity-70 transition">
                        {{ $about->button_text }} →
                    </a>
                @endif
            </div>

        </div>
    </section>


    <!-- ================= Pricing section ================= -->
    <section id="pricing" class="relative m-4 py-12 bg-zinc-200 text-black rounded-[40px] overflow-hidden">

        {{-- Subtle Background Glow --}}
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                    bg-white/5 blur-[180px] rounded-full">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6">

            {{-- Heading --}}
            <div class="text-center max-w-3xl mx-auto mb-20">
                <p class="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
                    Pricing
                </p>
                <h2
                    class="text-4xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Simple. Transparent. <br class="hidden md:block">
                    Built for growth.
                </h2>
                <p class="mt-6 text-gray-400 text-lg">
                    Choose the plan that fits your vision. No hidden fees. No surprises.
                </p>
            </div>

            {{-- Pricing Cards --}}
            <div class="grid grid-cols-1 gap-8">

                @foreach ($pricing_plans as $index => $plan)
                    {{-- Highlight middle plan --}}
                    @php
                        $isFeatured = $index === 1;
                    @endphp

                    <div x-data="{ expanded: false }"
                        class="relative rounded-[40px] p-6 transition-all duration-500 flex flex-col justify-between group overflow-hidden
                            {{ $isFeatured
                                ? 'bg-white text-black shadow-3xl shadow-white/20 scale-105'
                                : 'bg-[#1c1c1e] border border-white/5 text-white hover:bg-[#2c2c2e] shadow-xl shadow-black/50' }}">

                        {{-- Background Image --}}
                        @if ($plan->image)
                            <div class="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
                                <img src="{{ asset('storage/' . $plan->image) }}"
                                    class="w-full h-full object-cover rounded-[40px]">
                                <div
                                    class="absolute inset-0 bg-gradient-to-t {{ $isFeatured ? 'from-white via-white/80 to-transparent' : 'from-[#1c1c1e] via-[#1c1c1e]/80 to-transparent' }}">
                                </div>
                            </div>
                        @endif

                        {{-- Featured Badge --}}
                        @if ($isFeatured)
                            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span
                                    class="px-3 py-1 text-[10px] font-bold rounded-full bg-blue-500 text-white tracking-widest uppercase">
                                    Popular
                                </span>
                            </div>
                        @endif

                        <div class="relative z-10">
                            {{-- Plan Name --}}
                            <h3
                                class="text-lg font-bold uppercase tracking-widest mb-2 
                            {{ $isFeatured ? 'text-gray-200' : 'text-gray-100' }}">
                                {{ $plan->name }}
                            </h3>

                            {{-- Price --}}
                            <div class="mb-4">
                                <span class="text-3xl font-semibold tracking-tight">
                                    {{ $plan->price }}
                                </span>
                            </div>

                            {{-- Description --}}
                            <p
                                class="text-xs leading-relaxed line-clamp-3 mb-4
                            {{ $isFeatured ? 'text-gray-600' : 'text-gray-400' }}">
                                {{ $plan->description }}
                            </p>

                            {{-- Features Accordion --}}
                            <div class="mb-4">
                                <button @click="expanded = !expanded"
                                    class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                                    <span x-text="expanded ? 'Hide Features' : 'View Features'"></span>
                                    <svg class="w-3 h-3 transition-transform duration-300"
                                        :class="expanded ? 'rotate-180' : ''" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                <div x-show="expanded" x-collapse
                                    class="mt-3 space-y-2 border-t pt-3 {{ $isFeatured ? 'border-gray-200' : 'border-white/10' }}">
                                    @foreach ($plan->features ?? [] as $feature)
                                        <div class="flex items-start gap-2">
                                            <span
                                                class="mt-1 w-1.5 h-1.5 rounded-full {{ $isFeatured ? 'bg-black' : 'bg-white' }}"></span>
                                            <span
                                                class="text-xs {{ $isFeatured ? 'text-gray-700' : 'text-gray-300' }}">{{ $feature }}</span>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>

                        {{-- CTA --}}
                        <a href="{{ $plan->cta_link ?? '#' }}"
                            class="relative z-10 block w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 mt-auto
                        {{ $isFeatured
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-white/10 text-white hover:bg-white hover:text-black' }}">
                            {{ $plan->cta_text ?? 'Get Started' }}
                        </a>

                    </div>
                @endforeach

            </div>
        </div>
    </section>


    <!-- ================= Testimonial section ================= -->
    <div class="mt-8 px-6 py-16">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-white tracking-tight">Testimonials</h3>
        </div>

        {{-- Testimonial Slider --}}
        @if ($testimonials->count() > 0)
            <div class="swiper testimonialSwiper -mx-6 px-6 !pb-12">
                <div class="swiper-wrapper">
                    @foreach ($testimonials as $index => $testimonial)
                        @php
                            $isDark = $index % 2 === 0;
                        @endphp
                        <div
                            class="swiper-slide !w-[320px] rounded-[32px] p-8 border relative flex flex-col justify-between h-[320px] group transition-colors duration-300
                            {{ $isDark ? 'bg-[#1c1c1e] border-white/5 hover:bg-[#252527] text-white' : 'bg-white border-gray-200 hover:bg-gray-50 text-black' }}">

                            {{-- Background Gradient --}}
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-current to-transparent rounded-[32px] opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                            </div>

                            {{-- Quote Icon --}}
                            <div
                                class="absolute top-8 right-8 transition-colors duration-300
                                {{ $isDark ? 'text-white/5 group-hover:text-white/10' : 'text-black/5 group-hover:text-black/10' }}">
                                <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M14.017 21L14.017 18C14.017 16.0547 15.372 15.1143 15.9142 14.8004L15.9142 14.6508C15.9142 14.6508 14.458 14.8468 14.017 14.2441C13.576 13.6415 13.576 11.9649 13.576 11.9649L14.017 8L19.2249 8L19.2249 11.2311C19.2249 11.2311 18.1102 11.3116 18.0661 12.035C18.022 12.7584 19.2249 13.6596 19.2249 16.0275C19.2249 18.3953 17.558 21 14.017 21ZM6.017 21L6.017 18C6.017 16.0547 7.372 15.1143 7.9142 14.8004L7.9142 14.6508C7.9142 14.6508 6.458 14.8468 6.017 14.2441C5.576 13.6415 5.576 11.9649 5.576 11.9649L6.017 8L11.2249 8L11.2249 11.2311C11.2249 11.2311 10.1102 11.3116 10.0661 12.035C10.022 12.7584 11.2249 13.6596 11.2249 16.0275C11.2249 18.3953 9.558 21 6.017 21Z">
                                    </path>
                                </svg>
                            </div>

                            <div class="relative z-10">
                                {{-- Rating --}}
                                <div class="flex gap-1 mb-4">
                                    @for ($i = 1; $i <= 5; $i++)
                                        <svg class="w-4 h-4 {{ $i <= $testimonial->rating ? 'text-yellow-400 fill-current' : ($isDark ? 'text-gray-700' : 'text-gray-300') }}"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <polygon
                                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                            </polygon>
                                        </svg>
                                    @endfor
                                </div>

                                <p
                                    class="text-sm leading-relaxed line-clamp-4 font-medium {{ $isDark ? 'text-white/80' : 'text-black/80' }}">
                                    "{{ $testimonial->content }}"
                                </p>
                            </div>

                            <div class="flex items-center gap-4 mt-6 relative z-10">
                                <div
                                    class="w-12 h-12 rounded-full overflow-hidden shrink-0 border {{ $isDark ? 'bg-white/10 border-white/10' : 'bg-black/5 border-black/5' }}">
                                    @if ($testimonial->avatar)
                                        <img src="{{ asset('storage/' . $testimonial->avatar) }}"
                                            class="w-full h-full object-cover">
                                    @else
                                        <div
                                            class="w-full h-full flex items-center justify-center font-bold text-lg {{ $isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-black' }}">
                                            {{ substr($testimonial->name, 0, 1) }}
                                        </div>
                                    @endif
                                </div>
                                <div>
                                    <h4 class="font-bold text-sm {{ $isDark ? 'text-white' : 'text-black' }}">
                                        {{ $testimonial->name }}</h4>
                                    <p
                                        class="text-xs uppercase tracking-wide font-semibold {{ $isDark ? 'text-white/40' : 'text-black/40' }}">
                                        {{ $testimonial->position ?? 'Client' }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="swiper-pagination"></div>
            </div>
        @else
            <div class="bg-gray-100 rounded-[32px] p-8 text-center mb-8">
                <p class="text-gray-500">No testimonials yet. Be the first to share your experience!</p>
            </div>
        @endif


        {{-- Submission Form --}}
        <livewire:public.components.testimonial-form />
    </div>

    <script>
        document.addEventListener('livewire:navigated', () => {
            initTestimonialSwiper();
        });

        document.addEventListener('DOMContentLoaded', () => {
            initTestimonialSwiper();
        });

        function initTestimonialSwiper() {
            new Swiper(".testimonialSwiper", {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: false,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    </script>


    {{-- Contact Section --}}
    <section id="contact" class="relative py-16 bg-[#0b0b0d] text-white overflow-hidden">

        {{-- Ambient Glow --}}
        <div class="absolute inset-0 -z-10">
            <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
                    bg-white/5 blur-[200px] rounded-full">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6">

            <div class="grid grid-cols-1 gap-20 items-start">

                {{-- LEFT CONTENT --}}
                <div>
                    <p class="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
                        Contact
                    </p>

                    <h2 class="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-8">
                        Let’s build <br class="hidden md:block">
                        something meaningful.
                    </h2>

                    <p class="text-lg text-white/60 mb-12 max-w-md leading-relaxed">
                        Have a project in mind? Share the details and I’ll respond within 24 hours.
                    </p>

                </div>


                {{-- RIGHT FORM --}}
                <div class="relative rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 p-10">

                    @if (session()->has('message'))
                        <div class="mb-8 p-4 rounded-2xl bg-[#7a1f2b] text-white text-sm">
                            {{ session('message') }}
                        </div>
                    @endif

                    <form wire:submit.prevent="sendMessage" class="space-y-8">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label class="block text-xs uppercase tracking-widest text-white/40 mb-3">
                                    Name
                                </label>
                                <input type="text" wire:model="name"
                                    class="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 
                                       focus:outline-none focus:border-[#7a1f2b] focus:bg-white/10
                                       transition-all duration-300 text-sm"
                                    placeholder="John Doe" required>
                                @error('name')
                                    <span class="text-red-400 text-xs mt-2 block">{{ $message }}</span>
                                @enderror
                            </div>

                            <div>
                                <label class="block text-xs uppercase tracking-widest text-white/40 mb-3">
                                    Email
                                </label>
                                <input type="email" wire:model="email"
                                    class="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 
                                       focus:outline-none focus:border-[#7a1f2b] focus:bg-white/10
                                       transition-all duration-300 text-sm"
                                    placeholder="john@example.com" required>
                                @error('email')
                                    <span class="text-red-400 text-xs mt-2 block">{{ $message }}</span>
                                @enderror
                            </div>

                        </div>

                        <div>
                            <label class="block text-xs uppercase tracking-widest text-white/40 mb-3">
                                Subject
                            </label>
                            <input type="text" wire:model="subject"
                                class="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 
                                   focus:outline-none focus:border-[#7a1f2b] focus:bg-white/10
                                   transition-all duration-300 text-sm"
                                placeholder="Project Inquiry">
                            @error('subject')
                                <span class="text-red-400 text-xs mt-2 block">{{ $message }}</span>
                            @enderror
                        </div>

                        <div>
                            <label class="block text-xs uppercase tracking-widest text-white/40 mb-3">
                                Message
                            </label>
                            <textarea wire:model="message" rows="5"
                                class="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 
                                   focus:outline-none focus:border-[#7a1f2b] focus:bg-white/10
                                   transition-all duration-300 text-sm resize-none"
                                placeholder="Tell me about your project..." required></textarea>
                            @error('message')
                                <span class="text-red-400 text-xs mt-2 block">{{ $message }}</span>
                            @enderror
                        </div>

                        <button type="submit"
                            class="w-full py-4 rounded-2xl bg-white text-black font-medium 
                               transition-all duration-300 hover:opacity-90 active:scale-[0.98]">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    </section>






    <!-- ================= SCRIPTS ================= -->
    <script>
        document.addEventListener('livewire:navigated', () => initSwiper());
        document.addEventListener('DOMContentLoaded', () => initSwiper());
        function initSwiper() {
            // Only initialize if the element exists
            const swiperEl = document.querySelector('.mySwiper');
            if (!swiperEl) return;

            // Destroy existing instance if any
            if (swiperEl.swiper) swiperEl.swiper.destroy(true, true);

            // Create new Swiper instance
            new Swiper('.mySwiper', {
                grabCursor: true,
                spaceBetween: 30,
                centeredSlides: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

        // subtle parallax hero
        window.addEventListener('scroll', () => {
            const img = document.querySelector('.hero-img');
            if (img) {
                img.style.transform = `translateY(${window.scrollY * 0.15}px) scale(1.05)`;
            }
        });
    </script>

</div>
