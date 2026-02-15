<div x-data="{ open: false }" class="relative group">
    
    {{-- Decorative Glow behind the button --}}
    <div x-show="!open" class="absolute inset-0 bg-orange-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {{-- Main Toggle Button --}}
    <button
        @click="open = !open"
        class="relative w-full flex items-center justify-between px-10 py-6 rounded-full overflow-hidden transition-all duration-500 active:scale-[0.98] shadow-2xl border border-white/10 group/btn"
    >
        {{-- Button Background Gradient --}}
        <div class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 transition-transform group-hover/btn:scale-105"></div>
        
        {{-- Text & Icon --}}
        <div class="relative z-10 flex items-center gap-4">
            <span class="text-black text-2xl">✍️</span>
            <h3 class="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-black">Share Your Story</h3>
        </div>
        
        <div class="relative z-10 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-500" :class="open ? 'rotate-45' : ''">
            <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
            </svg>
        </div>
    </button>

    {{-- The Form Container --}}
    <div
        x-show="open"
        x-collapse
        x-cloak
        class="mt-6 p-8 md:p-12 rounded-[48px] bg-[#161618] border border-white/5 shadow-3xl relative overflow-hidden"
    >
        {{-- Subtle background texture --}}
        <div class="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[80px] -mr-32 -mt-32"></div>

        @if (session()->has('message'))
            <div class="relative z-10 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-6 py-4 rounded-3xl mb-8 text-sm flex items-center gap-3 animate-pulse">
                <span class="text-xl">✨</span> {{ session('message') }}
            </div>
        @endif

        <form wire:submit.prevent="submit" class="relative z-10 space-y-8">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {{-- Name Input --}}
                <div class="space-y-3">
                    <label class="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Full Name</label>
                    <input wire:model="name" type="text" placeholder="John Doe" 
                        class="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-4 text-white placeholder-white/10 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all text-sm">
                    @error('name') <span class="text-orange-500 text-[10px] font-bold uppercase tracking-widest ml-4 mt-1 block">{{ $message }}</span> @enderror
                </div>

                {{-- Position Input --}}
                <div class="space-y-3">
                    <label class="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Position / Company</label>
                    <input wire:model="position" type="text" placeholder="CEO at TechFlow"
                        class="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-4 text-white placeholder-white/10 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all text-sm">
                    @error('position') <span class="text-orange-500 text-[10px] font-bold uppercase tracking-widest ml-4 mt-1 block">{{ $message }}</span> @enderror
                </div>
            </div>

            {{-- Rating System --}}
            <div class="space-y-4 py-4 border-y border-white/5">
                <label class="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Overall Rating</label>
                <div class="flex items-center gap-3 ml-4">
                    @for($i = 1; $i <= 5; $i++)
                        <button type="button" wire:click="$set('rating', {{ $i }})" 
                            class="focus:outline-none group/star transition-transform hover:scale-125 active:scale-95">
                            <svg class="w-8 h-8 transition-colors duration-300 {{ $rating >= $i ? 'text-orange-500 fill-current' : 'text-white/10' }}" 
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </button>
                    @endfor
                </div>
                @error('rating') <span class="text-orange-500 text-[10px] font-bold uppercase tracking-widest ml-4 mt-1 block">{{ $message }}</span> @enderror
            </div>

            {{-- Testimonial Content --}}
            <div class="space-y-3">
                <label class="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Your Feedback</label>
                <textarea wire:model="content" rows="4" placeholder="How was your experience working with me?"
                    class="w-full bg-white/[0.03] border border-white/10 rounded-[32px] px-8 py-6 text-white placeholder-white/10 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all text-base resize-none"></textarea>
                @error('content') <span class="text-orange-500 text-[10px] font-bold uppercase tracking-widest ml-4 mt-1 block">{{ $message }}</span> @enderror
            </div>

            {{-- Custom File Upload --}}
            <div class="space-y-3">
                <label class="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Profile Photo (Optional)</label>
                <label class="relative flex flex-col items-center justify-center w-full h-40 bg-white/[0.02] border-2 border-dashed border-white/10 rounded-[32px] cursor-pointer hover:bg-white/[0.05] hover:border-orange-500/30 transition-all group/upload">
                    @if ($avatar)
                        <div class="flex flex-col items-center">
                            <span class="text-orange-500 font-bold text-xs">✓ Image Selected</span>
                            <span class="text-[10px] text-white/30 mt-1">Click to change</span>
                        </div>
                    @else
                        <div class="flex flex-col items-center transition-transform group-hover/upload:-translate-y-1">
                            <div class="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-3">
                                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span class="text-xs font-bold text-white/40 uppercase tracking-widest">Upload Portrait</span>
                        </div>
                    @endif
                    <input wire:model="avatar" type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                </label>
                @error('avatar') <span class="text-orange-500 text-[10px] font-bold uppercase tracking-widest ml-4 mt-1 block">{{ $message }}</span> @enderror
            </div>

            {{-- Submit Button --}}
            <button type="submit" 
                class="w-full relative group/submit py-6 rounded-full bg-white text-black font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-95">
                <span class="relative z-10">Send My Testimonial</span>
                <div class="absolute inset-0 bg-orange-500 rounded-full scale-x-0 group-hover/submit:scale-x-100 origin-left transition-transform duration-500"></div>
            </button>
            
            <p class="text-center text-[9px] text-white/20 font-bold uppercase tracking-[0.2em]">
                Your review helps others build trust. Thank you!
            </p>
        </form>
    </div>
</div>