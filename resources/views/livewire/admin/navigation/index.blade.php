<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Navigation Menu') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">

            {{-- Form Section --}}
            <div class="mb-8 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                    {{ $isEditing ? 'Edit Menu Item' : 'Add New Menu Item' }}
                </h3>

                @if (session()->has('message'))
                    <div
                        class="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-900/50 dark:text-green-300">
                        {{ session('message') }}
                    </div>
                @endif

                <form wire:submit.prevent="{{ $isEditing ? 'update' : 'store' }}" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <x-input-label for="label" :value="__('Label')" />
                            <x-text-input wire:model="label" id="label" class="block mt-1 w-full" type="text"
                                placeholder="e.g. Home" />
                            <x-input-error class="mt-2" :messages="$errors->get('label')" />
                        </div>

                        <div>
                            <x-input-label for="url" :value="__('URL')" />
                            <x-text-input wire:model="url" id="url" class="block mt-1 w-full" type="text"
                                placeholder="e.g. #home or /about" />
                            <x-input-error class="mt-2" :messages="$errors->get('url')" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <x-input-label for="sort_order" :value="__('Sort Order')" />
                            <x-text-input wire:model="sort_order" id="sort_order" class="block mt-1 w-full"
                                type="number" />
                            <x-input-error class="mt-2" :messages="$errors->get('sort_order')" />
                        </div>

                        <div class="flex items-center gap-2 mt-6">
                            <input type="checkbox" wire:model="is_active" id="is_active"
                                class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500">
                            <label for="is_active" class="text-sm text-gray-700 dark:text-gray-300">Active</label>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <x-primary-button>{{ $isEditing ? 'Update Item' : 'Add Item' }}</x-primary-button>
                        @if ($isEditing)
                            <button type="button" wire:click="cancel"
                                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Cancel</button>
                        @endif
                    </div>
                </form>
            </div>

            {{-- List Section --}}
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Sort</th>
                            <th scope="col" class="px-6 py-3">Label</th>
                            <th scope="col" class="px-6 py-3">URL</th>
                            <th scope="col" class="px-6 py-3">Status</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($navItems as $item)
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td class="px-6 py-4">{{ $item->sort_order }}</td>
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $item->label }}</td>
                                <td class="px-6 py-4 text-xs font-mono">{{ $item->url }}</td>
                                <td class="px-6 py-4">
                                    <button wire:click="toggleActive({{ $item->id }})"
                                        class="px-2 py-1 text-xs font-bold rounded-full {{ $item->is_active ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' }}">
                                        {{ $item->is_active ? 'Active' : 'Inactive' }}
                                    </button>
                                </td>
                                <td class="px-6 py-4 flex gap-3">
                                    <button wire:click="edit({{ $item->id }})"
                                        class="text-blue-600 dark:text-blue-400 hover:underline">Edit</button>
                                    <button wire:click="delete({{ $item->id }})"
                                        onclick="return confirm('Are you sure?')"
                                        class="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="px-6 py-4 text-center text-gray-500">No menu items found.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>
