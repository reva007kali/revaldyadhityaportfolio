<div x-data="{ 
    scrollToBottom() { 
        $nextTick(() => { 
            const container = $refs.chatContainer;
            if(container) container.scrollTop = container.scrollHeight;
        }); 
    } 
}" x-on:scroll-to-bottom.window="scrollToBottom()">

    <style>
        /* Styling tambahan untuk list agar rapi */
        .prose-chat ul { list-style-type: disc; margin-left: 1rem; margin-bottom: 0.5rem; color: #d1d5db; }
        .prose-chat ol { list-style-type: decimal; margin-left: 1rem; margin-bottom: 0.5rem; color: #d1d5db; }
        .prose-chat p { margin-bottom: 0.5rem; line-height: 1.6; }
        
        /* Glassmorphism khusus Desktop */
        @media (min-width: 768px) {
            .glass-panel {
                background: rgba(22, 22, 24, 0.7) !important;
                backdrop-filter: blur(16px) saturate(180%);
                -webkit-backdrop-filter: blur(16px) saturate(180%);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
        }
        /* Sembunyikan Scrollbar */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
    
    <!-- ================= TRIGGER BUTTON ================= -->
    <button id="ai-reva-trigger" wire:click="toggleChat" 
            class="fixed bottom-8 right-8 z-[1000] flex items-center gap-3 px-4 py-2.5 bg-[#161618] border border-white/10 rounded-full shadow-2xl hover:border-orange-500/50 transition-all duration-500 group">
        
        <!-- Status Indicator (Green Dot) -->
        <div class="relative flex items-center justify-center">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            <span class="absolute w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></span>
        </div>

        <span class="text-[8px] font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
            Ai Reva
        </span>

    </button>

    @if($isOpen)
    <!-- ================= CHAT WINDOW ================= -->
    <div x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0 translate-y-10 scale-95"
         x-transition:enter-end="opacity-100 translate-y-0 scale-100"
         class="fixed bottom-24 right-6 md:right-8 w-[92vw] md:w-[420px] h-[600px] max-h-[75vh] flex flex-col z-[1001] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#161618] glass-panel">
        
        <!-- Header -->
        <div class="px-6 py-5 flex flex-col gap-4 border-b border-white/5 bg-white/[0.02]">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-orange-500 rounded-xl text-black">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                        <h3 class="text-xs font-black uppercase tracking-widest text-white">Ai Assistant</h3>
                        <p class="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Online & Ready</p>
                    </div>
                </div>
                <button wire:click="toggleChat" class="text-white/20 hover:text-white transition-colors p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>

            <!-- Quick Contact Buttons -->
            <div class="flex gap-2">
                <a href="https://wa.me/6282260894009" target="_blank" 
                   class="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/60 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300">
                   <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                   WhatsApp
                </a>
                <a href="mailto:le.revaldy@gmail.com" 
                   class="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/60 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300">
                   <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                   Email Me
                </a>
            </div>
        </div>
        
        <!-- Area Chat -->
        <div x-ref="chatContainer" x-init="scrollToBottom()" class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-transparent">
            @foreach($messages as $index => $message)
                <div class="flex {{ $message['role'] === 'user' ? 'justify-end' : 'justify-start' }}">
                    <div class="max-w-[85%] relative">
                        <span class="text-[9px] font-black uppercase tracking-widest text-white/20 mb-2 block {{ $message['role'] === 'user' ? 'text-right' : 'text-left' }}">
                            {{ $message['role'] === 'user' ? 'You' : 'Reva AI' }}
                        </span>

                        <div class="p-4 rounded-2xl text-[13px] leading-relaxed {{ $message['role'] === 'user' ? 'bg-orange-500 text-black font-bold rounded-tr-none shadow-[0_10px_20px_-5px_rgba(249,115,22,0.3)]' : 'bg-white/5 text-gray-300 border border-white/10 rounded-tl-none' }}">
                            
                            @if($message['role'] === 'user')
                                {{ $message['content'] }}
                            @else
                                <div class="prose-chat" 
                                     x-data="{ 
                                        rawContent: @js($message['content']),
                                        displayedContent: '',
                                        index: 0,
                                        speed: 5,
                                        type() {
                                            if (this.index < this.rawContent.length) {
                                                this.displayedContent += this.rawContent.charAt(this.index);
                                                this.index++;
                                                setTimeout(() => this.type(), this.speed);
                                                $dispatch('scroll-to-bottom');
                                            }
                                        }
                                     }" 
                                     x-init="if({{ $index }} === $wire.messages.length - 1) { type() } else { displayedContent = rawContent }"
                                     x-html="marked.parse(displayedContent)">
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach

            <!-- Loading Indicator -->
            <div wire:loading wire:target="sendMessage" class="flex justify-start">
                <div class="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                    <div class="flex gap-1.5">
                        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></span>
                        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Form Input (Auto-Expand Textarea) -->
        <div class="p-5 bg-white/[0.02] border-t border-white/5">
            <form wire:submit.prevent="sendMessage" class="relative flex items-end gap-2">
                <div class="relative flex-1">
                    <textarea 
                        wire:model="userInput" 
                        x-data="{ 
                            resize() { 
                                $el.style.height = '0px'; 
                                $el.style.height = $el.scrollHeight + 'px' 
                            } 
                        }"
                        x-init="resize()"
                        x-on:input="resize()"
                        @keydown.enter.prevent.exact="$wire.sendMessage(); $el.style.height = '52px'"
                        @keydown.enter.shift.enter.stop=""
                        rows="1"
                        placeholder="Ask about projects or pricing..." 
                        class="w-full bg-white/5 border border-white/10 rounded-2xl pl-5 pr-14 py-4 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none overflow-hidden max-h-32"
                        style="min-height: 52px;"
                    ></textarea>

                    <button type="submit" wire:loading.attr="disabled" 
                            class="absolute right-2 bottom-2 p-3 bg-orange-500 text-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                </div>
            </form>
            <p class="text-[9px] text-center text-white/10 mt-4 uppercase tracking-[0.2em]">Powered by Reva AI • Shift + Enter for new line</p>
        </div>
    </div>
    @endif
</div>