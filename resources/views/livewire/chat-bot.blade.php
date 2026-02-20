<div x-data="{ 
    scrollToBottom() { 
        $nextTick(() => { 
            const container = $refs.chatContainer;
            if(container) container.scrollTop = container.scrollHeight;
        }); 
    } 
}" x-on:scroll-to-bottom.window="scrollToBottom()">

    <!-- Library Markdown (Wajib ada agar poin-poin rapi) -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

    <style>
        .prose-chat ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 0.8rem; }
        .prose-chat ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 0.8rem; }
        .prose-chat p { margin-bottom: 0.6rem; }
        .glass-panel {
            background: rgba(22, 22, 24, 0.85) !important;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
    </style>
    
    <!-- TRIGGER BUTTON -->
    <button wire:click="toggleChat" class="fixed bottom-8 right-8 z-[1000] flex items-center gap-3 px-5 py-3 bg-[#161618] border border-white/10 rounded-full shadow-2xl hover:scale-105 transition-all group">
        <div class="relative"><span class="w-2 h-2 bg-green-500 rounded-full block"></span><span class="absolute inset-0 bg-green-500 rounded-full animate-ping"></span></div>
        <span class="text-[10px] font-black uppercase tracking-widest text-white">Ai Assistant</span>
    </button>

    @if($isOpen)
    <div x-transition class="fixed bottom-24 right-6 md:right-8 w-[92vw] md:w-[420px] h-[600px] max-h-[75vh] flex flex-col z-[1001] rounded-3xl overflow-hidden shadow-2xl glass-panel">
        
        <!-- Header -->
        <div class="px-6 py-5 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="p-2 bg-orange-500 rounded-lg text-black">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                    <h3 class="text-xs font-black uppercase tracking-widest text-white">Reva AI</h3>
                    <p class="text-[9px] text-green-500 font-bold uppercase">Online Now</p>
                </div>
            </div>
            <button wire:click="toggleChat" class="text-white/20 hover:text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
        
        <!-- Chat Area -->
        <div x-ref="chatContainer" class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            @foreach($messages as $index => $message)
                {{-- Hanya tampilkan pesan user atau pesan asisten yang ada isinya --}}
                @if(($message['role'] === 'user' || $message['role'] === 'assistant') && isset($message['content']))
                <div class="flex {{ $message['role'] === 'user' ? 'justify-end' : 'justify-start' }}">
                    <div class="max-w-[85%]">
                        <span class="text-[9px] font-bold text-white/20 uppercase mb-1 block {{ $message['role'] === 'user' ? 'text-right' : 'text-left' }}">
                            {{ $message['role'] === 'user' ? 'You' : 'AI Reva' }}
                        </span>
                        <div class="p-4 rounded-2xl text-[13px] {{ $message['role'] === 'user' ? 'bg-orange-500 text-black font-semibold' : 'bg-white/5 text-gray-300 border border-white/10' }}">
                            @if($message['role'] === 'user')
                                {{ $message['content'] }}
                            @else
                                <div class="prose-chat" 
                                     x-data="{ 
                                        raw: @js($message['content']),
                                        displayed: '',
                                        idx: 0,
                                        type() {
                                            if(this.idx < this.raw.length) {
                                                this.displayed += this.raw.charAt(this.idx);
                                                this.idx++;
                                                setTimeout(() => this.type(), 5);
                                                $dispatch('scroll-to-bottom');
                                            }
                                        }
                                     }" 
                                     x-init="if({{ $index }} === $wire.messages.length - 1) { type() } else { displayed = raw }"
                                     x-html="marked.parse(displayed)">
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
                @endif
            @endforeach

            <div wire:loading wire:target="sendMessage" class="flex justify-start">
                <div class="bg-white/5 p-4 rounded-2xl animate-pulse text-[10px] text-white/40 uppercase tracking-widest">Reva Thinking...</div>
            </div>
        </div>

        <!-- Input Area -->
        <div class="p-5 border-t border-white/5">
            <form wire:submit.prevent="sendMessage" class="relative">
                <textarea wire:model="userInput" 
                    @keydown.enter.prevent.exact="$wire.sendMessage()"
                    placeholder="Tanya harga atau contoh web..." 
                    class="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs text-white focus:outline-none focus:border-orange-500 transition-all resize-none scrollbar-hide"
                    rows="1"></textarea>
                <button type="submit" class="absolute right-3 bottom-3 p-2 bg-orange-500 text-black rounded-xl">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
            </form>
        </div>
    </div>
    @endif
</div>