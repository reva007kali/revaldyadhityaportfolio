<div>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Contact Messages') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
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
                            <th scope="col" class="px-6 py-3">Email</th>
                            <th scope="col" class="px-6 py-3">Subject</th>
                            <th scope="col" class="px-6 py-3">Message</th>
                            <th scope="col" class="px-6 py-3">Date</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($messages as $message)
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 {{ !$message->is_read ? 'bg-gray-50 dark:bg-gray-700' : '' }}">
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ $message->name }}</td>
                                <td class="px-6 py-4">{{ $message->email }}</td>
                                <td class="px-6 py-4">{{ $message->subject }}</td>
                                <td class="px-6 py-4">{{ Str::limit($message->message, 50) }}</td>
                                <td class="px-6 py-4">{{ $message->created_at->format('M d, Y') }}</td>
                                <td class="px-6 py-4 space-x-2">
                                    @if(!$message->is_read)
                                        <button wire:click="markAsRead({{ $message->id }})"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mark
                                            Read</button>
                                    @endif
                                    <button wire:click="delete({{ $message->id }})" wire:confirm="Are you sure?"
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