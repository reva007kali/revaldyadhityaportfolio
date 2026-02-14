<div
    class="lg:max-w-sm max-w-md min-h-screen mx-auto bg-[#0b0b0d] text-white overflow-x-hidden relative lg:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] pb-24">

    {{-- Back Button --}}
    <div class="absolute bottom-6 left-6 z-50">
        <a href="{{ route('home') }}"
            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </a>
    </div>

    {{-- Hero Image --}}
    @if ($project->image)
        <div class="w-full h-80 relative">
            <img src="{{ Str::startsWith($project->image, 'http') ? $project->image : asset('storage/' . $project->image) }}"
                class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] to-transparent"></div>
        </div>
    @endif

    {{-- Content --}}
    <div class="px-6 {{ $project->image ? '-mt-12' : 'pt-4' }} relative z-10">
        <span class="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">Project</span>
        <h1 class="text-3xl font-bold mb-4 leading-tight">{{ $project->title }}</h1>

        @if ($project->link)
            <a href="{{ $project->link }}" target="_blank"
                class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                <span>View Live Project</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </a>
        @endif

        {{-- Rich Text Content --}}
        <div class="prose prose-invert prose-sm max-w-none text-gray-300">
            {!! $project->content ?? $project->description !!}
        </div>

        {{-- Gallery --}}
        @if ($project->media && $project->media->count() > 0)
            <div class="mt-12">
                <h3 class="text-xl font-bold mb-6">Gallery</h3>
                <div class="space-y-4">
                    @foreach ($project->media as $media)
                        <div class="rounded-2xl overflow-hidden border border-white/5 bg-[#1c1c1e]">
                            @if ($media->file_type === 'video')
                                <video src="{{ asset('storage/' . $media->file_path) }}" controls
                                    class="w-full"></video>
                            @else
                                <img src="{{ asset('storage/' . $media->file_path) }}" class="w-full">
                            @endif
                            @if ($media->caption)
                                <p class="p-3 text-xs text-gray-500 italic">{{ $media->caption }}</p>
                            @endif
                        </div>
                    @endforeach
                </div>
            </div>
        @endif
    </div>
</div>
