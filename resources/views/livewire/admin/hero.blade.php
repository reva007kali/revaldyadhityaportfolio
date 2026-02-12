<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Hero Section') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="max-w-xl">
                <header>
                    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {{ __('Update Hero Content') }}
                    </h2>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {{ __("Customize the main banner of your portfolio.") }}
                    </p>
                </header>

                @if (session()->has('message'))
                    <div class="mt-4 text-green-600 dark:text-green-400">
                        {{ session('message') }}
                    </div>
                @endif

                <form wire:submit.prevent="save" class="mt-6 space-y-6">
                    <div>
                        <x-input-label for="title" :value="__('Title')" />
                        <x-text-input wire:model="title" id="title" class="block mt-1 w-full" type="text" />
                        <x-input-error class="mt-2" :messages="$errors->get('title')" />
                    </div>

                    <div>
                        <x-input-label for="subtitle" :value="__('Subtitle')" />
                        <textarea wire:model="subtitle" id="subtitle"
                            class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            rows="3"></textarea>
                        <x-input-error class="mt-2" :messages="$errors->get('subtitle')" />
                    </div>

                    <div>
                        <x-input-label for="image" :value="__('Background Image')" />

                        @if ($image)
                            <div class="mt-2 mb-2">
                                <img src="{{ $image->temporaryUrl() }}"
                                    class="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-700">
                                <p class="text-xs text-gray-500 mt-1">New image preview</p>
                            </div>
                        @elseif ($currentImage)
                            <div class="mt-2 mb-2">
                                <img src="{{ asset('storage/' . $currentImage) }}"
                                    class="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-700">
                                <p class="text-xs text-gray-500 mt-1">Current image</p>
                            </div>
                        @endif

                        <input type="file" wire:model="image" id="image"
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            accept="image/*">
                        <div wire:loading wire:target="image" class="text-sm text-blue-500 mt-2">Uploading...</div>
                        <x-input-error class="mt-2" :messages="$errors->get('image')" />
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <x-input-label for="cta_text" :value="__('Button Text')" />
                            <x-text-input wire:model="cta_text" id="cta_text" class="block mt-1 w-full" type="text" />
                            <x-input-error class="mt-2" :messages="$errors->get('cta_text')" />
                        </div>
                        <div>
                            <x-input-label for="cta_link" :value="__('Button Link')" />
                            <x-text-input wire:model="cta_link" id="cta_link" class="block mt-1 w-full" type="text" />
                            <x-input-error class="mt-2" :messages="$errors->get('cta_link')" />
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <x-primary-button wire:loading.attr="disabled"
                            wire:target="image">{{ __('Save') }}</x-primary-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>