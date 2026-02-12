<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Manage Features') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <!-- Form Section -->
        <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="max-w-xl">
                <header>
                    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {{ $isEditing ? 'Edit Feature' : 'Add New Feature' }}
                    </h2>
                </header>

                <form wire:submit.prevent="{{ $isEditing ? 'update' : 'store' }}" class="mt-6 space-y-6">
                    <div>
                        <x-input-label for="title" :value="__('Title')" />
                        <x-text-input wire:model="title" id="title" class="block mt-1 w-full" type="text" required />
                        <x-input-error class="mt-2" :messages="$errors->get('title')" />
                    </div>

                    <div>
                        <x-input-label for="description" :value="__('Description')" />
                        <textarea wire:model="description" id="description"
                            class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            rows="3" required></textarea>
                        <x-input-error class="mt-2" :messages="$errors->get('description')" />
                    </div>

                    <div>
                        <x-input-label for="icon" :value="__('Icon (Class or SVG)')" />
                        <x-text-input wire:model="icon" id="icon" class="block mt-1 w-full" type="text" />
                        <x-input-error class="mt-2" :messages="$errors->get('icon')" />
                    </div>

                    <div class="flex items-center gap-4">
                        <x-primary-button>{{ $isEditing ? 'Update' : 'Save' }}</x-primary-button>
                        @if($isEditing)
                            <button type="button" wire:click="cancel"
                                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">{{ __('Cancel') }}</button>
                        @endif
                    </div>
                </form>
            </div>
        </div>

        <!-- List Section -->
        <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            @if (session()->has('message'))
                <div class="mb-4 text-green-600 dark:text-green-400">
                    {{ session('message') }}
                </div>
            @endif

            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Title</th>
                            <th scope="col" class="px-6 py-3">Description</th>
                            <th scope="col" class="px-6 py-3">Icon</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($features as $feature)
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $feature->title }}</td>
                                <td class="px-6 py-4">{{ Str::limit($feature->description, 50) }}</td>
                                <td class="px-6 py-4">{{ $feature->icon }}</td>
                                <td class="px-6 py-4 space-x-2">
                                    <button wire:click="edit({{ $feature->id }})"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                    <button wire:click="delete({{ $feature->id }})" wire:confirm="Are you sure?"
                                        class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>