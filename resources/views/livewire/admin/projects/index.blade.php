<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Manage Projects') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <!-- Form Section -->
            <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="max-w-2xl">
                    <header>
                        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                            {{ $isEditing ? 'Edit Project' : 'Add New Project' }}
                        </h2>
                    </header>

                    <form wire:submit.prevent="{{ $isEditing ? 'update' : 'store' }}" class="mt-6 space-y-6" enctype="multipart/form-data">
                        <div>
                            <x-input-label for="title" :value="__('Title')" />
                            <x-text-input wire:model="title" id="title" class="block mt-1 w-full" type="text" required />
                            <x-input-error class="mt-2" :messages="$errors->get('title')" />
                        </div>

                        <div>
                            <x-input-label for="description" :value="__('Description')" />
                            <textarea wire:model="description" id="description" class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm" rows="4" required></textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('description')" />
                        </div>

                        <div>
                            <x-input-label for="link" :value="__('Link URL')" />
                            <x-text-input wire:model="link" id="link" class="block mt-1 w-full" type="text" />
                            <x-input-error class="mt-2" :messages="$errors->get('link')" />
                        </div>

                        <!-- Media Upload Section -->
                        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <h3 class="text-md font-medium text-gray-900 dark:text-gray-100 mb-4">Project Media (Images & Videos)</h3>
                            
                            <!-- Existing Media -->
                            @if($isEditing && count($existingMedia) > 0)
                                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    @foreach($existingMedia as $media)
                                        <div class="relative group">
                                            @if($media->file_type === 'video')
                                                <video src="{{ asset('storage/' . $media->file_path) }}" class="w-full h-32 object-cover rounded-lg"></video>
                                                <div class="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">Video</div>
                                            @else
                                                <img src="{{ asset('storage/' . $media->file_path) }}" class="w-full h-32 object-cover rounded-lg">
                                            @endif
                                            
                                            <button type="button" wire:click="deleteMedia({{ $media->id }})" class="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-75 hover:opacity-100">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </button>
                                            @if($media->caption)
                                                <p class="text-xs text-gray-500 mt-1 truncate">{{ $media->caption }}</p>
                                            @endif
                                        </div>
                                    @endforeach
                                </div>
                            @endif

                            <!-- Upload New Media -->
                            <div>
                                <x-input-label for="mediaFiles" :value="__('Add New Media (Select Multiple)')" />
                                <input type="file" wire:model="mediaFiles" id="mediaFiles" multiple class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/*,video/*">
                                <div wire:loading wire:target="mediaFiles" class="text-sm text-blue-500 mt-2">Uploading...</div>
                                <x-input-error class="mt-2" :messages="$errors->get('mediaFiles')" />
                                <x-input-error class="mt-2" :messages="$errors->get('mediaFiles.*')" />
                            </div>

                            <!-- Captions for New Media -->
                            @if(count($mediaFiles) > 0)
                                <div class="mt-4 space-y-4">
                                    <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Add Captions for New Files:</p>
                                    @foreach($mediaFiles as $index => $file)
                                        <div class="flex items-center gap-4">
                                            <div class="w-16 h-16 flex-shrink-0">
                                                @if(Str::startsWith($file->getMimeType(), 'video'))
                                                    <div class="w-full h-full bg-gray-200 flex items-center justify-center rounded">Video</div>
                                                @else
                                                    <img src="{{ $file->temporaryUrl() }}" class="w-full h-full object-cover rounded">
                                                @endif
                                            </div>
                                            <div class="flex-1">
                                                <x-text-input wire:model="captions.{{ $index }}" placeholder="Caption for this file..." class="block w-full text-sm" type="text" />
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            @endif
                        </div>

                        <div class="flex items-center gap-4">
                            <x-primary-button wire:loading.attr="disabled" wire:target="mediaFiles">{{ $isEditing ? 'Update' : 'Save' }}</x-primary-button>
                            @if($isEditing)
                                <button type="button" wire:click="cancel" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">{{ __('Cancel') }}</button>
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
                                <th scope="col" class="px-6 py-3">Media Count</th>
                                <th scope="col" class="px-6 py-3">Link</th>
                                <th scope="col" class="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($projects as $project)
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $project->title }}</td>
                                    <td class="px-6 py-4">{{ Str::limit($project->description, 50) }}</td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {{ $project->media->count() }} items
                                        </span>
                                    </td>
                                    <td class="px-6 py-4">{{ $project->link }}</td>
                                    <td class="px-6 py-4 space-x-2">
                                        <button wire:click="edit({{ $project->id }})" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                        <button wire:click="delete({{ $project->id }})" wire:confirm="Are you sure?" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
