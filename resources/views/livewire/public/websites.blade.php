<div class="min-h-screen bg-[#0b0b0d] text-white antialiased selection:bg-orange-500 selection:text-white">

    {{-- 1. Premium Ambient Background --}}
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        
        {{-- Large Background Text --}}
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] select-none uppercase leading-none">
            Websites
        </div>
    </div>

    {{-- 2. Header --}}
    <header class="relative pt-32 pb-20 px-6 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md mb-8">
            <span class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            <span class="text-[10px] uppercase tracking-[0.3em] font-black text-white/60">Live Projects</span>
        </div>

        <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 text-center leading-none">
            Web <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Gallery.</span>
        </h1>

        <p class="text-lg md:text-xl text-white/40 text-center max-w-xl leading-relaxed mb-12">
            A showcase of static websites and landing pages, designed for performance and aesthetic impact.
        </p>

        {{-- Filters Section --}}
        <div class="w-full max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            {{-- Search --}}
            <div class="relative flex-grow group">
                <input wire:model.live.debounce.300ms="search" type="text" placeholder="Search websites..."
                    class="w-full pl-12 pr-4 py-4 bg-[#161618] border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-300">
                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-blue-500 transition-colors"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>

            {{-- Tag Filter --}}
            <div class="relative min-w-[200px]">
                <select wire:model.live="tag"
                    class="w-full appearance-none px-6 py-4 bg-[#161618] border border-white/10 rounded-full text-white focus:outline-none focus:border-blue-500/50 cursor-pointer transition-all duration-300">
                    <option value="">All Tags</option>
                    @foreach ($allTags as $t)
                        <option value="{{ $t }}">{{ $t }}</option>
                    @endforeach
                </select>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg class="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    </header>

    {{-- 3. Websites Grid --}}
    <main class="relative px-6 pb-32 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @foreach ($websites as $website)
                <div class="group h-full perspective-1000">
                    <div class="relative flex flex-col h-full rounded-[32px] overflow-hidden bg-[#161618] border border-white/5 
                                transform-gpu will-change-transform transition-all duration-500 
                                hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl">
                        
                        {{-- Image Container --}}
                        <div class="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                            @if ($website->image)
                                <img src="{{ asset('storage/' . $website->image) }}" 
                                     class="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105">
                            @else
                                <div class="w-full h-full flex items-center justify-center bg-zinc-800 text-white/20 font-black text-4xl">
                                    {{ substr($website->title, 0, 1) }}
                                </div>
                            @endif

                            {{-- Overlay Gradient --}}
                            <div class="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent opacity-80"></div>
                        </div>

                        {{-- Content --}}
                        <div class="p-8 flex flex-col flex-grow relative z-10">
                            {{-- Tags --}}
                            @if($website->tags)
                                <div class="flex flex-wrap gap-2 mb-4">
                                    @foreach(array_slice($website->tags, 0, 3) as $tag)
                                        <span class="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-wider text-white/50">
                                            {{ $tag }}
                                        </span>
                                    @endforeach
                                </div>
                            @endif

                            <h3 class="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                                {{ $website->title }}
                            </h3>

                            <p class="text-sm text-white/40 line-clamp-3 leading-relaxed mb-8 flex-grow">
                                {{ $website->description }}
                            </p>

                            {{-- Action Button --}}
                            <a href="{{ route('websites.show', $website->slug) }}" target="_blank" 
                               class="mt-auto w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all text-center">
                                View Website
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

        @if($websites->isEmpty())
            <div class="text-center py-20 border border-dashed border-white/10 rounded-3xl">
                <p class="text-white/30 text-lg">No websites available yet.</p>
            </div>
        @endif
    </main>

</div>