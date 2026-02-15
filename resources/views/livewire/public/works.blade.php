<div class="min-h-screen bg-[#0b0b0d] text-white antialiased selection:bg-white selection:text-black">

    {{-- Backdrop Ambient Glow --}}
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div class="absolute top-[20%] -right-[10%] w-[60%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
    </div>

    <header class="relative pt-16 pb-12 px-6 flex flex-col items-center">

        <h1 class="text-3xl font-bold tracking-tight text-white mb-2">{{ config('portfolio.name') }}</h1>
        <p class="text-sm text-zinc-400 text-center max-w-[280px] leading-relaxed mb-6">{{ config('portfolio.bio') }}</p>
        
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md">
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300">Available for Projects</span>
        </div>
    </header>

    <main class="relative px-6 pb-32 max-w-7xl mx-auto">
        <h2 class="text-[16px] uppercase tracking-[0.3em] font-black text-zinc-500 mb-6 text-center">Featured Works</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            @foreach ($projects as $project)
                <a href="{{ route('works.show', $project->slug) }}"
                    class="relative h-[200px] rounded-[12px] overflow-hidden group border border-white/20 bg-[#111113] block transition-transform duration-300 hover:-translate-y-1">

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
                        <h4 class="text-sm font-semibold leading-tight mb-1 text-white">
                            {{ $project->title }}
                        </h4>
                        <p class="text-[10px] text-white/60 line-clamp-2">
                            {{ $project->description }}
                        </p>
                    </div>

                </a>
            @endforeach
        </div>
    </main>

</div>