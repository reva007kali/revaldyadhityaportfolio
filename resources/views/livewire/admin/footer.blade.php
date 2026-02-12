<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Manage Footer') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="max-w-xl">
                    <header>
                        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                            {{ __('Footer Content') }}
                        </h2>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {{ __("Update your site's footer information.") }}
                        </p>
                    </header>

                    @if (session()->has('message'))
                        <div class="mt-4 text-green-600 dark:text-green-400">
                            {{ session('message') }}
                        </div>
                    @endif

                    <form wire:submit.prevent="save" class="mt-6 space-y-6">
                        <div>
                            <x-input-label for="about_text" :value="__('About Text')" />
                            <textarea wire:model="about_text" id="about_text" class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm" rows="4"></textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('about_text')" />
                        </div>

                        <div>
                            <x-input-label for="copyright_text" :value="__('Copyright Text')" />
                            <x-text-input wire:model="copyright_text" id="copyright_text" class="block mt-1 w-full" type="text" />
                            <x-input-error class="mt-2" :messages="$errors->get('copyright_text')" />
                        </div>

                        <div class="space-y-4">
                            <h3 class="text-md font-medium text-gray-900 dark:text-gray-100">Social Links</h3>
                            
                            <div>
                                <x-input-label for="twitter_url" :value="__('Twitter URL')" />
                                <x-text-input wire:model="twitter_url" id="twitter_url" class="block mt-1 w-full" type="url" />
                                <x-input-error class="mt-2" :messages="$errors->get('twitter_url')" />
                            </div>

                            <div>
                                <x-input-label for="github_url" :value="__('GitHub URL')" />
                                <x-text-input wire:model="github_url" id="github_url" class="block mt-1 w-full" type="url" />
                                <x-input-error class="mt-2" :messages="$errors->get('github_url')" />
                            </div>

                            <div>
                                <x-input-label for="linkedin_url" :value="__('LinkedIn URL')" />
                                <x-text-input wire:model="linkedin_url" id="linkedin_url" class="block mt-1 w-full" type="url" />
                                <x-input-error class="mt-2" :messages="$errors->get('linkedin_url')" />
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <x-primary-button>{{ __('Save') }}</x-primary-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
