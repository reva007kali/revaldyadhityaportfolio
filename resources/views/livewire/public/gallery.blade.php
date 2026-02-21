<div class="bg-[#0b0b0d] min-h-screen text-white pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        {{-- Header --}}
        <div class="text-center max-w-4xl mx-auto mb-24 reveal-text">
            <div class="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <p class="text-orange-500 font-black tracking-[0.4em] uppercase text-[10px]">Gallery</p>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                Visual <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Collection.</span>
            </h1>
            
            <p class="text-white/40 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                A curated selection of moments, designs, and visual experiments.
            </p>
        </div>

        {{-- Gallery Grid --}}
        <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            @foreach($media as $item)
                <div class="break-inside-avoid relative group rounded-2xl overflow-hidden bg-[#161618] border border-white/5 hover:border-orange-500/50 transition-all duration-500">
                    @if($item['type'] === 'image')
                        <img src="{{ $item['url'] }}" alt="{{ $item['name'] }}" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in" 
                             onclick="window.open('{{ $item['url'] }}', '_blank')" loading="lazy">
                    @else
                        <video src="{{ $item['url'] }}" controls class="w-full h-auto rounded-xl"></video>
                    @endif

                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                        <p class="text-white text-sm font-bold truncate opacity-80">{{ $item['name'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>

        @if(count($media) === 0)
            <div class="text-center py-20 border border-dashed border-white/10 rounded-3xl">
                <p class="text-white/30 text-xl">No media found in the gallery.</p>
            </div>
        @endif
    </div>
</div>
