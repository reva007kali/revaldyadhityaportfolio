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
    @if ($service->icon)
        <div class="w-full h-80 relative bg-[#1c1c1e] flex items-center justify-center">
            <img src="{{ asset('storage/' . $service->icon) }}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent h-1/2"></div>
        </div>
    @endif

    {{-- Header --}}
    <div class="px-6 {{ $service->icon ? '-mt-12' : 'pt-12' }} pb-4 relative z-10">
        @if (!$service->icon)
            <div
                class="w-16 h-16 rounded-full bg-[#1c1c1e] border border-white/5 flex items-center justify-center mb-6">
                <span class="text-2xl font-bold text-white">{{ substr($service->title, 0, 1) }}</span>
            </div>
        @endif
        <span class="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">Service</span>
        <h1 class="text-3xl font-bold mb-4 leading-tight">{{ $service->title }}</h1>
    </div>

    {{-- Content --}}
    <div class="px-6 relative z-10">
        {{-- Rich Text Content --}}
        <div class="prose prose-invert prose-sm max-w-none text-gray-300">
            {!! $service->content ?? $service->description !!}
        </div>
    </div>
</div>
