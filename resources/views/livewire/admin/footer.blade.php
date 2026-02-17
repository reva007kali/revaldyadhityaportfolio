<div class="min-h-screen py-6 bg-[#0b0b0d]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {{-- Header --}}
        <div class="mb-8">
            <h2 class="font-bold text-3xl text-white tracking-tight">
                {{ __('Footer Settings') }}
            </h2>
            <p class="text-sm text-gray-400 mt-2">Update your site's footer information.</p>
        </div>

        <div class="bg-[#1c1c1e] border border-white/5 rounded-3xl overflow-hidden shadow-xl shadow-black/20">
            <div class="p-6 sm:p-10">
                <form wire:submit.prevent="save" class="space-y-10">
                    
                    {{-- Footer Info --}}
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div class="col-span-1">
                            <h3 class="text-lg font-bold text-white mb-2">General Info</h3>
                            <p class="text-sm text-gray-500 leading-relaxed">Basic details displayed in the footer area.</p>
                        </div>

                        <div class="col-span-2 space-y-6">
                            <div>
                                <label for="about_text" class="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">About Text</label>
                                <textarea wire:model="about_text" id="about_text" rows="4"
                                    class="w-full bg-[#0b0b0d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-swiss-blue focus:ring-1 focus:ring-swiss-blue transition-all outline-none resize-none"
                                    placeholder="Brief description about the site..."></textarea>
                                <x-input-error class="mt-2 text-xs text-red-500" :messages="$errors->get('about_text')" />
                            </div>

                            <div>
                                <label for="copyright_text" class="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Copyright Text</label>
                                <input wire:model="copyright_text" id="copyright_text" type="text" 
                                    class="w-full bg-[#0b0b0d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-swiss-blue focus:ring-1 focus:ring-swiss-blue transition-all outline-none">
                                <x-input-error class="mt-2 text-xs text-red-500" :messages="$errors->get('copyright_text')" />
                            </div>
                        </div>
                    </div>

                    <div class="h-px bg-white/5 w-full"></div>

                    {{-- Social Links --}}
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div class="col-span-1">
                            <h3 class="text-lg font-bold text-white mb-2">Social Media</h3>
                            <p class="text-sm text-gray-500 leading-relaxed">Links to your social profiles shown in the footer.</p>
                        </div>

                        <div class="col-span-2 space-y-6">
                            <div>
                                <label for="twitter_url" class="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Twitter / X URL</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                    </div>
                                    <input wire:model="twitter_url" id="twitter_url" type="url" 
                                        class="w-full bg-[#0b0b0d] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:border-swiss-blue focus:ring-1 focus:ring-swiss-blue transition-all outline-none">
                                </div>
                                <x-input-error class="mt-2 text-xs text-red-500" :messages="$errors->get('twitter_url')" />
                            </div>

                            <div>
                                <label for="github_url" class="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">GitHub URL</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
                                    </div>
                                    <input wire:model="github_url" id="github_url" type="url" 
                                        class="w-full bg-[#0b0b0d] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:border-swiss-blue focus:ring-1 focus:ring-swiss-blue transition-all outline-none">
                                </div>
                                <x-input-error class="mt-2 text-xs text-red-500" :messages="$errors->get('github_url')" />
                            </div>

                            <div>
                                <label for="linkedin_url" class="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">LinkedIn URL</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg class="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg>
                                    </div>
                                    <input wire:model="linkedin_url" id="linkedin_url" type="url" 
                                        class="w-full bg-[#0b0b0d] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:border-swiss-blue focus:ring-1 focus:ring-swiss-blue transition-all outline-none">
                                </div>
                                <x-input-error class="mt-2 text-xs text-red-500" :messages="$errors->get('linkedin_url')" />
                            </div>
                        </div>
                    </div>

                    {{-- Footer Actions --}}
                    <div class="flex items-center justify-between pt-6 border-t border-white/5">
                        <div class="flex items-center">
                            @if (session()->has('message'))
                                <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 3000)"
                                    class="flex items-center px-4 py-2 rounded-lg bg-green-500/10 text-green-500 text-sm font-medium">
                                    <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {{ session('message') }}
                                </div>
                            @endif
                        </div>

                        <button type="submit" wire:loading.attr="disabled"
                            class="px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span wire:loading.remove>Save Changes</span>
                            <span wire:loading>Saving...</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
