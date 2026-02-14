<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Social Links') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">

            {{-- Form Section --}}
            <div class="mb-8 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                    {{ $isEditing ? 'Edit Social Link' : 'Add New Social Link' }}
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
                            <x-input-label for="platform" :value="__('Platform Name')" />
                            <x-text-input wire:model="platform" id="platform" class="block mt-1 w-full" type="text"
                                placeholder="e.g. Instagram" />
                            <x-input-error class="mt-2" :messages="$errors->get('platform')" />
                        </div>

                        <div>
                            <x-input-label for="url" :value="__('URL')" />
                            <x-text-input wire:model="url" id="url" class="block mt-1 w-full" type="url"
                                placeholder="https://..." />
                            <x-input-error class="mt-2" :messages="$errors->get('url')" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <x-input-label for="icon" :value="__('Icon (Optional)')" />
                            <input type="file" wire:model="icon" id="icon"
                                class="block mt-1 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                            <x-input-error class="mt-2" :messages="$errors->get('icon')" />

                            @if ($icon)
                                <div class="mt-2">
                                    <img src="{{ $icon->temporaryUrl() }}" class="h-8 w-8 object-contain">
                                </div>
                            @elseif ($currentIcon)
                                <div class="mt-2">
                                    <img src="{{ asset('storage/' . $currentIcon) }}"
                                        class="h-8 w-8 object-contain filter invert dark:invert-0">
                                </div>
                            @endif
                        </div>

                        <div>
                            <x-input-label for="sort_order" :value="__('Sort Order')" />
                            <x-text-input wire:model="sort_order" id="sort_order" class="block mt-1 w-full"
                                type="number" />
                            <x-input-error class="mt-2" :messages="$errors->get('sort_order')" />
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <input type="checkbox" wire:model="is_active" id="is_active"
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500">
                        <label for="is_active" class="text-sm text-gray-700 dark:text-gray-300">Active</label>
                    </div>

                    <div class="flex items-center gap-4">
                        <x-primary-button>{{ $isEditing ? 'Update Link' : 'Add Link' }}</x-primary-button>
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
                            <th scope="col" class="px-6 py-3">Icon</th>
                            <th scope="col" class="px-6 py-3">Platform</th>
                            <th scope="col" class="px-6 py-3">URL</th>
                            <th scope="col" class="px-6 py-3">Status</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($socialLinks as $link)
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td class="px-6 py-4">{{ $link->sort_order }}</td>
                                <td class="px-6 py-4">
                                    @if ($link->icon)
                                        <img src="{{ asset('storage/' . $link->icon) }}"
                                            class="h-6 w-6 object-contain filter invert dark:invert-0">
                                    @else
                                        <span class="text-xs text-gray-400">No Icon</span>
                                    @endif
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $link->platform }}
                                </td>
                                <td class="px-6 py-4 text-xs">{{ Str::limit($link->url, 30) }}</td>
                                <td class="px-6 py-4">
                                    <button wire:click="toggleActive({{ $link->id }})"
                                        class="px-2 py-1 text-xs font-bold rounded-full {{ $link->is_active ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' }}">
                                        {{ $link->is_active ? 'Active' : 'Inactive' }}
                                    </button>
                                </td>
                                <td class="px-6 py-4 flex gap-3">
                                    <button wire:click="edit({{ $link->id }})"
                                        class="text-blue-600 dark:text-blue-400 hover:underline">Edit</button>
                                    <button wire:click="delete({{ $link->id }})"
                                        onclick="return confirm('Are you sure?')"
                                        class="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="px-6 py-4 text-center text-gray-500">No social links found.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>
