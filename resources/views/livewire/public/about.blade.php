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
    @if ($about->image)
        <div class="w-full relative">
            <img src="{{ asset('storage/' . $about->image) }}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] to-transparent"></div>
        </div>
    @endif

    {{-- Content --}}
    <div class="px-6 {{ $about->image ? '-mt-12' : 'pt-4' }} relative z-10">
        <span class="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">About Me</span>
        <h1 class="text-3xl font-bold mb-4 leading-tight">{{ $about->title ?? 'About' }}</h1>


        {{-- Rich Text Content --}}
        <div class="prose prose-invert prose-sm max-w-none text-gray-300">
            {!! $about->content !!}
        </div>


    </div>
</div>
