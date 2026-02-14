<div class="py-6 bg-[#fafafa] dark:bg-[#0a0a0a] min-h-screen">
    <x-slot name="header">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="font-bold text-2xl text-gray-900 dark:text-white tracking-tight">
                {{ __('Hero Settings') }}
            </h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your website's first impression and main
                call-to-action.</p>
        </div>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
            class="bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/5 shadow-sm sm:rounded-2xl overflow-hidden">
            <div class="p-6 sm:p-10">
                <form wire:submit.prevent="save" class="space-y-8">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="col-span-1">
                            <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Text Content</h3>
                            <p class="text-xs text-gray-500 mt-1 leading-relaxed">This information will be displayed
                                prominently at the top of your page.</p>
                        </div>

                        <div class="col-span-2 space-y-5">
                            <div>
                                <x-input-label for="title" :value="__('Hero Title')"
                                    class="text-xs font-medium uppercase tracking-wider text-gray-400" />
                                <x-text-input wire:model="title" id="title"
                                    class="block mt-1.5 w-full bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl focus:ring-black dark:focus:ring-white transition-all"
                                    type="text" placeholder="Enter a catchy headline..." />
                                <x-input-error class="mt-2 text-xs" :messages="$errors->get('title')" />
                            </div>

                            <div>
                                <x-input-label for="subtitle" :value="__('Hero Subtitle')"
                                    class="text-xs font-medium uppercase tracking-wider text-gray-400" />
                                <textarea wire:model="subtitle" id="subtitle"
                                    class="block mt-1.5 w-full bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10 focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white rounded-xl shadow-sm text-sm transition-all"
                                    rows="4" placeholder="Briefly describe what you do..."></textarea>
                                <x-input-error class="mt-2 text-xs" :messages="$errors->get('subtitle')" />
                            </div>
                        </div>
                    </div>

                    <hr class="border-gray-100 dark:border-white/5">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="col-span-1">
                            <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Visual Assets</h3>
                            <p class="text-xs text-gray-500 mt-1 leading-relaxed">Upload a high-resolution background
                                image to make your hero section stand out.</p>
                        </div>

                        <div class="col-span-2">
                            <div
                                class="group relative mt-1 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl p-4 transition-all hover:border-gray-400 dark:hover:border-white/20">
                                @if ($image)
                                    <div
                                        class="relative aspect-square mb-4 overflow-hidden rounded-xl border border-white/10">
                                        <img src="{{ $image->temporaryUrl() }}" class="w-full h-full object-cover">
                                        <div
                                            class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium">
                                            New Preview</div>
                                    </div>
                                @elseif ($currentImage)
                                    <div
                                        class="relative aspect-square mb-4 overflow-hidden rounded-xl border border-white/10">
                                        <img src="{{ asset('storage/' . $currentImage) }}"
                                            class="w-full h-full object-cover">
                                    </div>
                                @endif

                                <div class="flex items-center justify-center w-full">
                                    <label
                                        class="w-full flex flex-col items-center px-4 py-6 bg-transparent text-gray-500 tracking-wide cursor-pointer transition-colors">
                                        <svg class="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                        <span class="text-sm font-medium">Click to upload or drag and drop</span>
                                        <span class="text-[10px] text-gray-400 mt-1 uppercase">PNG, JPG up to 5MB</span>
                                        <input type="file" wire:model="image" class="hidden" accept="image/*" />
                                    </label>
                                </div>
                                <div wire:loading wire:target="image"
                                    class="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center rounded-2xl z-10">
                                    <span
                                        class="text-xs font-semibold animate-pulse text-indigo-600 dark:text-indigo-400">Uploading
                                        media...</span>
                                </div>
                            </div>
                            <x-input-error class="mt-2 text-xs" :messages="$errors->get('image')" />
                        </div>
                    </div>

                    <hr class="border-gray-100 dark:border-white/5">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="col-span-1">
                            <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Call to Action</h3>
                            <p class="text-xs text-gray-500 mt-1 leading-relaxed">Direct your visitors to a specific
                                page or action.</p>
                        </div>

                        <div class="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <x-input-label for="cta_text" :value="__('Button Text')"
                                    class="text-xs font-medium uppercase tracking-wider text-gray-400" />
                                <x-text-input wire:model="cta_text" id="cta_text"
                                    class="block mt-1.5 w-full bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl"
                                    type="text" placeholder="e.g. Get Started" />
                            </div>
                            <div>
                                <x-input-label for="cta_link" :value="__('Button Link')"
                                    class="text-xs font-medium uppercase tracking-wider text-gray-400" />
                                <x-text-input wire:model="cta_link" id="cta_link"
                                    class="block mt-1.5 w-full bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl"
                                    type="text" placeholder="https://..." />
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-end pt-6 border-t border-gray-100 dark:border-white/5">
                        @if (session()->has('message'))
                            <span x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 3000)"
                                class="text-sm text-green-500 mr-4 font-medium italic">
                                ✨ {{ session('message') }}
                            </span>
                        @endif

                        <button type="submit" wire:loading.attr="disabled"
                            class="px-8 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-50">
                            {{ __('Save Changes') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
