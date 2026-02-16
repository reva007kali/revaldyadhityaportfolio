<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">{{ __('Manage Websites') }}</h2>
                </div>

                @if (session()->has('message'))
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span class="block sm:inline">{{ session('message') }}</span>
                    </div>
                @endif

                <div class="mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 class="text-lg font-medium mb-4">{{ $isEditing ? 'Edit Website' : 'Create New Website' }}</h3>
                    
                    <form wire:submit.prevent="{{ $isEditing ? 'update' : 'store' }}">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <x-input-label for="title" :value="__('Title')" />
                                <x-text-input wire:model.live="title" id="title" class="block mt-1 w-full" type="text" placeholder="e.g. My Awesome Landing Page" />
                                <x-input-error class="mt-2" :messages="$errors->get('title')" />
                            </div>

                            <div>
                                <x-input-label for="slug" :value="__('Slug')" />
                                <x-text-input wire:model="slug" id="slug" class="block mt-1 w-full bg-gray-100 dark:bg-gray-600" type="text" readonly />
                                <x-input-error class="mt-2" :messages="$errors->get('slug')" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <x-input-label for="description" :value="__('Description')" />
                            <textarea wire:model="description" id="description" rows="3" class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"></textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('description')" />
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <x-input-label for="tags" :value="__('Tags (Comma separated)')" />
                                <x-text-input wire:model="tags" id="tags" class="block mt-1 w-full" type="text" placeholder="e.g. Landing Page, Marketing, 2024" />
                                <x-input-error class="mt-2" :messages="$errors->get('tags')" />
                            </div>
                            <div>
                                <x-input-label for="color" :value="__('Color Theme')" />
                                <div class="flex items-center gap-2 mt-1">
                                    <input type="color" wire:model="color" class="h-10 w-10 rounded border border-gray-300 cursor-pointer">
                                    <x-text-input wire:model="color" id="color" class="block w-full" type="text" />
                                </div>
                                <x-input-error class="mt-2" :messages="$errors->get('color')" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <x-input-label for="image" :value="__('Cover Image')" />
                            <input type="file" wire:model="image" id="image" class="block mt-1 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                            <x-input-error class="mt-2" :messages="$errors->get('image')" />
                            
                            @if ($image)
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-1">Preview:</p>
                                    <img src="{{ $image->temporaryUrl() }}" class="w-32 h-32 object-cover rounded-lg border border-gray-300">
                                </div>
                            @elseif ($currentImage)
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-1">Current Image:</p>
                                    <img src="{{ asset('storage/' . $currentImage) }}" class="w-32 h-32 object-cover rounded-lg border border-gray-300">
                                </div>
                            @endif
                        </div>

                        <div class="mt-4">
                            <x-input-label for="content" :value="__('Website Content (Blade/HTML)')" />
                            <p class="text-xs text-gray-500 mb-2">Paste your HTML/Blade code here. This will be saved as <code>resources/views/websites/{slug}.blade.php</code>.</p>
                            <textarea wire:model="content" id="content" rows="15" class="block mt-1 w-full font-mono text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"></textarea>
                            <x-input-error class="mt-2" :messages="$errors->get('content')" />
                        </div>

                        <div class="flex items-center gap-4 mt-6">
                            <x-primary-button>{{ $isEditing ? 'Update Website' : 'Create Website' }}</x-primary-button>
                            @if($isEditing)
                                <x-secondary-button wire:click="cancel">Cancel</x-secondary-button>
                            @endif
                        </div>
                    </form>
                </div>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Image</th>
                                <th scope="col" class="px-6 py-3">Title / Slug</th>
                                <th scope="col" class="px-6 py-3">Tags</th>
                                <th scope="col" class="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($websites as $website)
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">
                                        @if($website->image)
                                            <img src="{{ asset('storage/' . $website->image) }}" alt="{{ $website->title }}" class="w-16 h-16 object-cover rounded">
                                        @else
                                            <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                                                No Img
                                            </div>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="font-medium text-gray-900 dark:text-white">{{ $website->title }}</div>
                                        <div class="text-xs text-gray-500">/{{ $website->slug }}</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        @if($website->tags)
                                            <div class="flex flex-wrap gap-1">
                                                @foreach($website->tags as $tag)
                                                    <span class="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">{{ $tag }}</span>
                                                @endforeach
                                            </div>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 space-x-2">
                                        <a href="{{ url('websites/' . $website->slug) }}" target="_blank" class="font-medium text-green-600 dark:text-green-500 hover:underline">View</a>
                                        <button wire:click="edit({{ $website->id }})" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                        <button wire:click="delete({{ $website->id }})" class="font-medium text-red-600 dark:text-red-500 hover:underline" onclick="return confirm('Are you sure you want to delete this website?') || event.stopImmediatePropagation()">Delete</button>
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