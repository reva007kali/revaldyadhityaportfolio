<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} Admin</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased bg-swiss-offwhite text-swiss-dark selection:bg-swiss-blue selection:text-white"
    x-data="{ sidebarOpen: false }">
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside
            class="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0"
            :class="{'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen}">

            <div class="h-20 flex items-center justify-center border-b border-gray-200">
                <a href="{{ route('dashboard') }}" class="text-xl font-black text-black">
                    Admin Panel<span class="text-swiss-blue">.</span>
                </a>
            </div>

            <nav class="mt-8 px-4 space-y-2">
                <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('dashboard') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('dashboard') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {{ __('Dashboard') }}
                </x-nav-link>

                <div class="pt-6 pb-2">
                    <p class="px-4 text-xs font-black text-gray-400 uppercase tracking-widest">Content</p>
                </div>

                <x-nav-link :href="route('admin.hero')" :active="request()->routeIs('admin.hero')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.hero') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.hero') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    {{ __('Hero') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.about')" :active="request()->routeIs('admin.about')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.about') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.about') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ __('About') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.services')" :active="request()->routeIs('admin.services')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.services') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.services') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {{ __('Services') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.projects')" :active="request()->routeIs('admin.projects')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.projects') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.projects') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ __('Projects') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.features')" :active="request()->routeIs('admin.features')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.features') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.features') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    {{ __('Features') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.pricing')" :active="request()->routeIs('admin.pricing')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.pricing') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.pricing') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ __('Pricing') }}
                </x-nav-link>

                <div class="pt-6 pb-2">
                    <p class="px-4 text-xs font-black text-gray-400 uppercase tracking-widest">Settings</p>
                </div>

                <x-nav-link :href="route('admin.footer')" :active="request()->routeIs('admin.footer')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.footer') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.footer') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    {{ __('Footer') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.messages')" :active="request()->routeIs('admin.messages')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('admin.messages') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.messages') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                    </svg>
                    {{ __('Messages') }}
                </x-nav-link>

                <x-nav-link :href="route('profile')" :active="request()->routeIs('profile')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-gray-50 hover:text-swiss-blue rounded-none border-l-4 {{ request()->routeIs('profile') ? 'border-swiss-blue text-swiss-blue bg-gray-50' : 'border-transparent text-gray-600' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('profile') ? 'text-swiss-blue' : 'text-gray-400 group-hover:text-swiss-blue' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ __('Profile') }}
                </x-nav-link>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Header -->
            <header class="flex items-center justify-between h-20 bg-white border-b border-gray-200 px-8">
                <button @click="sidebarOpen = !sidebarOpen"
                    class="text-gray-500 focus:outline-none lg:hidden hover:text-swiss-blue transition-colors">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

                <div class="flex items-center ml-auto">
                    <div class="relative" x-data="{ open: false }">
                        <button @click="open = !open"
                            class="flex items-center text-gray-500 focus:outline-none hover:text-swiss-blue transition-colors">
                            <span class="ml-2 font-bold text-sm uppercase tracking-wide">{{ Auth::user()->name }}</span>
                            <svg class="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>

                        <div x-show="open" @click.away="open = false"
                            class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 py-1 z-50 rounded-none shadow-none ring-1 ring-black ring-opacity-5">
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit"
                                    class="block w-full text-left px-4 py-3 text-sm font-bold uppercase text-gray-700 hover:bg-swiss-blue hover:text-white transition-colors">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-swiss-offwhite">
                @if (isset($header))
                    <div class="bg-white border-b border-gray-200">
                        <div class="max-w-7xl mx-auto py-8 px-8">
                            {{ $header }}
                        </div>
                    </div>
                @endif

                <div class="container mx-auto px-8 py-12">
                    {{ $slot }}
                </div>
            </main>
        </div>

        <!-- Overlay -->
        <div x-show="sidebarOpen" @click="sidebarOpen = false" class="fixed inset-0 z-40 bg-black opacity-50 lg:hidden">
        </div>
    </div>
</body>

</html>