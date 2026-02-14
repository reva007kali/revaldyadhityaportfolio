<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Manage Testimonials') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
            @if (session()->has('message'))
                <div class="mb-4 text-green-600 dark:text-green-400">
                    {{ session('message') }}
                </div>
            @endif

            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Avatar</th>
                            <th scope="col" class="px-6 py-3">Name</th>
                            <th scope="col" class="px-6 py-3">Content</th>
                            <th scope="col" class="px-6 py-3">Status</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($testimonials as $testimonial)
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4">
                                    @if($testimonial->avatar)
                                        <img src="{{ asset('storage/' . $testimonial->avatar) }}" class="w-10 h-10 rounded-full object-cover">
                                    @else
                                        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                            {{ substr($testimonial->name, 0, 1) }}
                                        </div>
                                    @endif
                                </td>
                                <td class="px-6 py-4">
                                    <div class="font-medium text-gray-900 dark:text-white">{{ $testimonial->name }}</div>
                                    <div class="text-xs">{{ $testimonial->position }}</div>
                                </td>
                                <td class="px-6 py-4 max-w-xs truncate">{{ $testimonial->content }}</td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 rounded-full text-xs font-bold {{ $testimonial->is_active ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800' }}">
                                        {{ $testimonial->is_active ? 'Active' : 'Pending' }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 space-x-2">
                                    <button wire:click="toggleStatus({{ $testimonial->id }})" 
                                        class="font-medium {{ $testimonial->is_active ? 'text-yellow-600' : 'text-green-600' }} hover:underline">
                                        {{ $testimonial->is_active ? 'Deactivate' : 'Approve' }}
                                    </button>
                                    <button wire:click="delete({{ $testimonial->id }})" wire:confirm="Are you sure?"
                                        class="font-medium text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
