<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Manage Pricing Plans') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <!-- Form Section -->
        <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="max-w-xl">
                <header>
                    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {{ $isEditing ? 'Edit Plan' : 'Add New Plan' }}
                    </h2>
                </header>

                <form wire:submit.prevent="{{ $isEditing ? 'update' : 'store' }}" class="mt-6 space-y-6">
                    <div>
                        <x-input-label for="name" :value="__('Plan Name')" />
                        <x-text-input wire:model="name" id="name" class="block mt-1 w-full" type="text" required />
                        <x-input-error class="mt-2" :messages="$errors->get('name')" />
                    </div>

                    <div>
                        <x-input-label for="price" :value="__('Price')" />
                        <x-text-input wire:model="price" id="price" class="block mt-1 w-full" type="text" required />
                        <x-input-error class="mt-2" :messages="$errors->get('price')" />
                    </div>

                    <div>
                        <x-input-label for="description" :value="__('Description')" />
                        <textarea wire:model="description" id="description"
                            class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            rows="3"></textarea>
                        <x-input-error class="mt-2" :messages="$errors->get('description')" />
                    </div>

                    <div>
                        <x-input-label for="featuresInput" :value="__('Features (comma separated)')" />
                        <x-text-input wire:model="featuresInput" id="featuresInput" class="block mt-1 w-full"
                            type="text" placeholder="Feature 1, Feature 2, Feature 3" />
                        <x-input-error class="mt-2" :messages="$errors->get('featuresInput')" />
                    </div>

                    <div>
                        <x-input-label for="image" :value="__('Image (Optional)')" />
                        <input type="file" wire:model="image" id="image" class="block mt-1 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                        <div wire:loading wire:target="image" class="text-sm text-blue-500 mt-2">Uploading...</div>
                        @if ($image) 
                            <img src="{{ $image->temporaryUrl() }}" class="w-20 h-20 object-cover mt-2 rounded-lg">
                        @elseif ($isEditing && $planId && \App\Models\PricingPlan::find($planId)->image)
                            <img src="{{ asset('storage/' . \App\Models\PricingPlan::find($planId)->image) }}" class="w-20 h-20 object-cover mt-2 rounded-lg">
                        @endif
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
                            <th scope="col" class="px-6 py-3">Name</th>
                            <th scope="col" class="px-6 py-3">Price</th>
                            <th scope="col" class="px-6 py-3">Features</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($plans as $plan)
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $plan->name }}</td>
                                <td class="px-6 py-4">{{ $plan->price }}</td>
                                <td class="px-6 py-4">{{ implode(', ', $plan->features ?? []) }}</td>
                                <td class="px-6 py-4 space-x-2">
                                    <button wire:click="edit({{ $plan->id }})"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                    <button wire:click="delete({{ $plan->id }})" wire:confirm="Are you sure?"
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