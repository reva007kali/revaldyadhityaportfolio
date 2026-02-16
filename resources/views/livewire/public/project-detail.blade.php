<div class="min-h-screen bg-[#0b0b0d] text-white antialiased selection:bg-orange-500 selection:text-white">

    {{-- 1. Floating Navigation --}}
    <div class="fixed bottom-8 left-6 md:left-12 z-[100]">
        <a href="{{ route('home') }}"
            class="group flex items-center justify-center w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:scale-110 shadow-2xl">
            <svg class="w-6 h-6 text-orange-500 group-hover:-translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </a>
    </div>

    {{-- 2. Cinematic Hero Section --}}
    <header class="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        @if ($project->image)
            <img src="{{ Str::startsWith($project->image, 'http') ? $project->image : asset('storage/' . $project->image) }}"
                class="w-full h-full object-cover transform scale-105" id="hero-image">
        @endif

        {{-- High-End Overlays --}}
        <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/20 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>

        {{-- Title Area --}}
        <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-20">
            <div class="max-w-7xl mx-auto">
                <div class="flex items-center gap-3 mb-6 animate-fade-in">
                    <span class="w-12 h-[2px] bg-orange-500"></span>
                    <span class="text-orange-500 text-xs font-black uppercase tracking-[0.4em]">Case Study</span>
                </div>
                <h1 class="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-8">
                    {{ $project->title }}<span class="text-orange-500">.</span>
                </h1>
            </div>
        </div>
    </header>

    {{-- 3. Project Metadata Bar --}}
    <section class="relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-6 md:px-12 py-10">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <p class="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">Category</p>
                    <p class="text-white font-bold">{{ $project->category ?? 'Digital Design' }}</p>
                </div>
                <div>
                    <p class="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">Role</p>
                    <p class="text-white font-bold">{{ $project->role ?? 'Creative Lead' }}</p>
                </div>
                <div>
                    <p class="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">Year</p>
                    <p class="text-white font-bold">{{ $project->year ?? date('Y') }}</p>
                </div>
                <div>
                    <p class="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">Client</p>
                    <p class="text-white font-bold">{{ $project->client ?? 'Confidential' }}</p>
                </div>
            </div>

            @if ($project->link)
                <div class="mt-8 pt-8 border-t border-white/5">
                    <a href="{{ $project->link }}" target="_blank" class="inline-flex items-center gap-3 group">
                        <div>
                            <p
                                class="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2 group-hover:text-white transition-colors">
                                Visit Project</p>
                            <p class="text-white font-bold">Live Preview →</p>
                        </div>
                    </a>
                </div>
            @endif
        </div>
    </section>

    {{-- 4. Main Content Area --}}
    <main class="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

            {{-- Project Story/Description --}}
            <div class="lg:col-span-7">
                <h3 class="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-8">The Story</h3>
                <div
                    class="prose prose-invert prose-lg max-w-none text-white/60 leading-relaxed font-medium 
                            prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
                            prose-strong:text-orange-500 prose-a:text-orange-500">
                    {!! $project->content ?? $project->description !!}
                </div>
            </div>

            {{-- Tech Stack / Deliverables --}}
            <div class="lg:col-span-5">
                <div class="sticky top-32 p-10 rounded-[40px] bg-[#161618] border border-white/5">
                    <h3 class="text-white font-black text-xl mb-8 tracking-tight">Key Deliverables</h3>
                    <ul class="space-y-6">
                        @foreach (['Art Direction', 'UI/UX Strategy', 'Technical Architecture', 'Motion Design'] as $item)
                            <li class="flex items-center justify-between group">
                                <span
                                    class="text-white/40 group-hover:text-white transition-colors">{{ $item }}</span>
                                <span class="text-orange-500">✓</span>
                            </li>
                        @endforeach
                    </ul>

                    <div class="mt-12 pt-12 border-t border-white/5">
                        <p class="text-white/40 text-sm italic mb-6">"Crafting digital excellence through obsessive
                            attention to detail."</p>
                        <div class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-black text-black text-xs">
                                RA</div>
                            <span class="font-bold text-xs uppercase tracking-widest text-white/60">Reva Adhitya</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- 5. Premium Media Gallery --}}
        @if ($project->media && $project->media->count() > 0)
            <div class="mt-32">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <p class="text-orange-500 font-black tracking-[0.4em] uppercase text-xs mb-4">The Gallery</p>
                        <h3 class="text-4xl md:text-6xl font-black tracking-tighter text-white">Visual <span
                                class="text-orange-500">Insights.</span></h3>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    @foreach ($project->media as $index => $media)
                        <div
                            class="group relative rounded-[48px] overflow-hidden bg-[#161618] border border-white/5 {{ $index % 3 == 0 ? 'md:col-span-2' : '' }}">
                            @if ($media->file_type === 'video')
                                <video src="{{ asset('storage/' . $media->file_path) }}" controls
                                    class="w-full h-full object-cover min-h-[400px]"></video>
                            @else
                                <img src="{{ asset('storage/' . $media->file_path) }}"
                                    class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
                            @endif

                            @if ($media->caption)
                                <div
                                    class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <p class="text-sm font-bold text-white/70">{{ $media->caption }}</p>
                                </div>
                            @endif
                        </div>
                    @endforeach
                </div>
            </div>
        @endif
    </main>

    {{-- 6. Footer Call-to-Action --}}
    <footer class="py-32 bg-white text-black rounded-t-[60px] md:rounded-t-[100px] text-center px-6">
        <p class="text-gray-400 font-black uppercase tracking-[0.4em] text-xs mb-8">Next Step</p>
        <h2 class="text-5xl md:text-8xl font-black tracking-tighter mb-12">Inspired by this project?</h2>
        <a href="{{ route('home') }}#contact"
            class="inline-flex px-12 py-6 rounded-full bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all active:scale-95 shadow-2xl">
            Start Your Project →
        </a>
    </footer>
</div>

<script>
    // Subtle Parallax on scroll for hero image
    window.addEventListener('scroll', () => {
        const heroImg = document.getElementById('hero-image');
        if (heroImg) {
            heroImg.style.transform = `translateY(${window.scrollY * 0.1}px) scale(1.05)`;
        }
    });
</script>
