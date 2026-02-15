<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Manage Services') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <!-- Form Section -->
            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="max-w-xl">
                    <header>
                        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                            {{ $isEditing ? 'Edit Service' : 'Add New Service' }}
                        </h2>
                    </header>

                    <form wire:submit.prevent="{{ $isEditing ? 'update' : 'store' }}" class="mt-6 space-y-6">
                        <div>
                            <x-input-label for="title" :value="__('Title')" />
                            <x-text-input wire:model="title" id="title" class="block mt-1 w-full" type="text"
                                required />
                            <x-input-error class="mt-2" :messages="$errors->get('title')" />
                        </div>

                        <div>
                            <x-input-label for="description" :value="__('Description')" />
                            <textarea wire:model="description" id="description"
                                class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                rows="4" required></textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('description')" />
                        </div>

                        <div wire:ignore>
                            <x-input-label for="content" :value="__('Rich Content (Details)')" />
                            <div id="editor-container"
                                class="h-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"></div>
                            <input type="hidden" id="content" wire:model="content">
                        </div>
                        <x-input-error class="mt-2" :messages="$errors->get('content')" />

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <x-input-label for="features" :value="__('Included Features (Comma separated)')" />
                                <x-text-input wire:model="features" id="features" class="block mt-1 w-full" type="text" placeholder="e.g. Design, Development, Support" />
                                <x-input-error class="mt-2" :messages="$errors->get('features')" />
                            </div>
                            <div>
                                <x-input-label for="turnaround_time" :value="__('Turnaround Time')" />
                                <x-text-input wire:model="turnaround_time" id="turnaround_time" class="block mt-1 w-full" type="text" placeholder="e.g. 2-4 Weeks" />
                                <x-input-error class="mt-2" :messages="$errors->get('turnaround_time')" />
                            </div>
                        </div>

                        <div>
                            <x-input-label for="icon" :value="__('Icon Image')" />

                            @if ($icon)
                                <div class="mt-2 mb-2">
                                    <img src="{{ $icon->temporaryUrl() }}"
                                        class="w-16 h-16 object-cover rounded-lg border border-gray-300 dark:border-gray-700">
                                    <p class="text-xs text-gray-500 mt-1">New icon preview</p>
                                </div>
                            @elseif ($isEditing && $currentIcon)
                                <div class="mt-2 mb-2">
                                    <img src="{{ asset('storage/' . $currentIcon) }}"
                                        class="w-16 h-16 object-cover rounded-lg border border-gray-300 dark:border-gray-700">
                                    <p class="text-xs text-gray-500 mt-1">Current icon</p>
                                </div>
                            @endif

                            <input type="file" wire:model="icon" id="icon"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                accept="image/*">
                            <div wire:loading wire:target="icon" class="text-sm text-blue-500 mt-2">Uploading...</div>
                            <x-input-error class="mt-2" :messages="$errors->get('icon')" />
                        </div>

                        <div class="flex items-center gap-4">
                            <x-primary-button wire:loading.attr="disabled"
                                wire:target="icon">{{ $isEditing ? 'Update' : 'Save' }}</x-primary-button>
                            @if ($isEditing)
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
                            @foreach ($services as $service)
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        {{ $service->title }}
                                    </td>
                                    <td class="px-6 py-4">{{ Str::limit($service->description, 50) }}</td>
                                    <td class="px-6 py-4">
                                        @if ($service->icon)
                                            <img src="{{ asset('storage/' . $service->icon) }}"
                                                class="w-8 h-8 rounded-full object-cover">
                                        @else
                                            <span class="text-xs text-gray-400">No Icon</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 space-x-2">
                                        <button wire:click="edit({{ $service->id }})"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                        <button wire:click="delete({{ $service->id }})" wire:confirm="Are you sure?"
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

    <script>
        document.addEventListener('livewire:navigated', function() {
            initializeQuill();
        });

        document.addEventListener('DOMContentLoaded', function() {
            initializeQuill();
        });

        function initializeQuill() {
            if (document.getElementById('editor-container')) {
                var quill = new Quill('#editor-container', {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{
                                'header': [1, 2, 3, false]
                            }],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{
                                'list': 'ordered'
                            }, {
                                'list': 'bullet'
                            }],
                            [{
                                'color': []
                            }, {
                                'background': []
                            }],
                            ['link', 'image', 'video'],
                            ['clean']
                        ]
                    }
                });

                // Sync with Livewire
                quill.on('text-change', function() {
                    var html = document.querySelector('.ql-editor').innerHTML;
                    @this.set('content', html);
                });

                // Load initial content if editing
                window.addEventListener('contentUpdated', event => {
                    quill.root.innerHTML = event.detail;
                });

                // Set initial content if available (for page refresh/first load)
                if (@this.content) {
                    quill.root.innerHTML = @this.content;
                }
            }
        }
    </script>
</div>
