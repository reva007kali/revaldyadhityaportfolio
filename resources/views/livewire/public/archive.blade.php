<div class="min-h-screen bg-[#0b0b0d] text-white antialiased selection:bg-orange-500 selection:text-white">

    {{-- 1. Premium Ambient Background --}}
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] bg-zinc-800/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-zinc-900/10 blur-[120px] rounded-full"></div>
        
        {{-- Large Background Text --}}
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] select-none uppercase leading-none">
            Archive
        </div>
    </div>

    {{-- 2. Header --}}
    <header class="relative pt-32 pb-20 px-6 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md mb-8">
            <span class="w-2 h-2 rounded-full bg-white/20"></span>
            <span class="text-[10px] uppercase tracking-[0.3em] font-black text-white/60">Legacy Projects</span>
        </div>

        <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 text-center leading-none">
            The <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Archive.</span>
        </h1>

        <p class="text-lg md:text-xl text-white/40 text-center max-w-xl leading-relaxed mb-12">
            A repository of past experiments, concepts, and retired projects. Publicly preserved for transparency and reflection.
        </p>
        
        <div class="mb-12">
            <a href="{{ route('works') }}" wire:navigate class="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 hover:text-white transition-colors border-b border-orange-500/30 hover:border-white pb-1">
                ← Back to Active Works
            </a>
        </div>
    </header>

    {{-- 3. Archive List --}}
    <main class="relative px-6 pb-32 max-w-5xl mx-auto">
        
        @if($projects->count() > 0)
            <div class="space-y-4">
                {{-- Table Header --}}
                <div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    <div class="col-span-2 md:col-span-1">Year</div>
                    <div class="col-span-6 md:col-span-5">Project</div>
                    <div class="col-span-4 md:col-span-3">Category</div>
                    <div class="hidden md:block md:col-span-2 text-right">Client</div>
                    <div class="hidden md:block md:col-span-1 text-right">Link</div>
                </div>

                {{-- Table Body --}}
                @foreach ($projects as $project)
                    <a href="{{ route('works.show', $project->slug) }}" class="group grid grid-cols-12 gap-4 px-6 py-6 items-center rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-300">
                        
                        {{-- Year --}}
                        <div class="col-span-2 md:col-span-1 text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                            {{ $project->year ?? '—' }}
                        </div>

                        {{-- Project --}}
                        <div class="col-span-6 md:col-span-5 flex items-center gap-4">
                            @if($project->image)
                                <div class="w-10 h-10 rounded bg-zinc-800 overflow-hidden hidden sm:block">
                                    <img src="{{ Str::startsWith($project->image, 'http') ? $project->image : asset('storage/' . $project->image) }}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity">
                                </div>
                            @endif
                            <span class="text-base font-bold text-white group-hover:text-orange-500 transition-colors truncate">
                                {{ $project->title }}
                            </span>
                        </div>

                        {{-- Category --}}
                        <div class="col-span-4 md:col-span-3">
                            <span class="inline-flex px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-bold uppercase tracking-wider text-white/50 group-hover:border-orange-500/30 group-hover:text-white transition-all">
                                {{ $project->category ?? 'Uncategorized' }}
                            </span>
                        </div>

                        {{-- Client --}}
                        <div class="hidden md:block md:col-span-2 text-right text-sm text-white/40 group-hover:text-white transition-colors truncate">
                            {{ $project->client ?? '—' }}
                        </div>

                        {{-- Link Arrow --}}
                        <div class="hidden md:flex md:col-span-1 justify-end">
                            <div class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-orange-500 group-hover:text-orange-500 transition-all transform group-hover:-rotate-45">
                                →
                            </div>
                        </div>
                    </a>
                @endforeach
            </div>

            <div class="mt-12">
                {{ $projects->links() }}
            </div>
        @else
            <div class="text-center py-20 border border-dashed border-white/10 rounded-3xl">
                <p class="text-white/30 text-lg">No archived projects found.</p>
            </div>
        @endif

    </main>

</div>