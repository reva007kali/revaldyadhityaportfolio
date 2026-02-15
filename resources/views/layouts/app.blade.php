<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/png" href="{{ asset('img/logo.png') }}">

    <title>RevaldyAdhitya | Admin</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">

    <!-- Quill Editor -->
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        /* Custom Scrollbar for Sidebar */
        aside::-webkit-scrollbar {
            width: 4px;
        }

        aside::-webkit-scrollbar-track {
            background: #1c1c1e;
        }

        aside::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }

        aside::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    </style>
</head>

<body class="font-sans antialiased bg-[#0b0b0d] text-white selection:bg-swiss-blue selection:text-white"
    x-data="{ sidebarOpen: false }">
    <div class="min-h-screen flex flex-col lg:flex-row">

        <!-- Mobile Header -->
        <header
            class="flex items-center justify-between h-16 bg-[#1c1c1e] border-b border-white/5 px-4 lg:hidden z-40 sticky top-0">
            <a href="{{ route('dashboard') }}" class="text-lg font-bold text-white tracking-tight">
                Admin<span class="text-swiss-blue">.</span>
            </a>
            <button @click="sidebarOpen = !sidebarOpen"
                class="text-gray-400 focus:outline-none hover:text-white transition-colors">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 6H20M4 12H20M4 18H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </header>

        <!-- Sidebar -->
        <aside
            class="fixed inset-y-0 left-0 z-50 w-72 bg-[#1c1c1e] border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:fixed lg:top-0 lg:bottom-0 overflow-y-auto"
            :class="{ 'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen }">

            <div class="h-20 flex items-center px-8 border-b border-white/5 sticky top-0 bg-[#1c1c1e] z-10">
                <a href="{{ route('dashboard') }}" class="text-xl font-black text-white tracking-tight">
                    Admin Panel<span class="text-swiss-blue">.</span>
                </a>
            </div>

            <nav class="mt-6 px-4 flex flex-col space-y-1 pb-10">
                <!-- Close Button (Mobile) -->
                <div class="lg:hidden flex justify-end mb-4 px-2">
                    <button @click="sidebarOpen = false" class="text-gray-400 hover:text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('dashboard')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('dashboard') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {{ __('Dashboard') }}
                </x-nav-link>

                <div class="pt-6 pb-2">
                    <p class="px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Content</p>
                </div>

                <x-nav-link :href="route('admin.hero')" :active="request()->routeIs('admin.hero')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.hero')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.hero') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    {{ __('Hero') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.about')" :active="request()->routeIs('admin.about')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.about')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.about') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ __('About') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.services')" :active="request()->routeIs('admin.services')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.services')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.services') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {{ __('Services') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.projects')" :active="request()->routeIs('admin.projects')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.projects')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.projects') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ __('Projects') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.features')" :active="request()->routeIs('admin.features')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.features')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.features') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    {{ __('Features') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.pricing')" :active="request()->routeIs('admin.pricing')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.pricing')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.pricing') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ __('Pricing') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.testimonials')" :active="request()->routeIs('admin.testimonials')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.testimonials')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.testimonials') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    {{ __('Testimonials') }}
                </x-nav-link>

                <div class="pt-6 pb-2">
                    <p class="px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Settings</p>
                </div>

                <x-nav-link :href="route('admin.footer')" :active="request()->routeIs('admin.footer')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.footer')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.footer') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    {{ __('Footer') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.social-links')" :active="request()->routeIs('admin.social-links')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.social-links')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.social-links') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {{ __('Social Links') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.navigation')" :active="request()->routeIs('admin.navigation')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.navigation')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.navigation') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {{ __('Navigation') }}
                </x-nav-link>

                <x-nav-link :href="route('admin.messages')" :active="request()->routeIs('admin.messages')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('admin.messages')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('admin.messages') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                    </svg>
                    {{ __('Messages') }}
                </x-nav-link>

                <x-nav-link :href="route('profile')" :active="request()->routeIs('profile')"
                    class="group flex items-center px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl mb-1
                    {{ request()->routeIs('profile')
                        ? 'bg-swiss-blue text-white shadow-lg shadow-swiss-blue/20'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="w-5 h-5 mr-4 transition-colors duration-200 {{ request()->routeIs('profile') ? 'text-white' : 'text-gray-500 group-hover:text-white' }}"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ __('Profile') }}
                </x-nav-link>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col overflow-hidden lg:ml-72">
            <!-- Desktop Header -->
            <header class="hidden lg:flex items-center justify-between h-20 bg-[#0b0b0d] border-b border-white/5 px-8">
                <h1 class="text-xl font-bold text-white tracking-tight">
                    @if (isset($header))
                        {{ $header }}
                    @else
                        Dashboard
                    @endif
                </h1>

                <div class="flex items-center ml-auto">
                    <div class="relative" x-data="{ open: false }">
                        <button @click="open = !open"
                            class="flex items-center text-gray-400 focus:outline-none hover:text-white transition-colors">
                            <span
                                class="mr-2 font-bold text-sm uppercase tracking-wide">{{ Auth::user()->name }}</span>
                            <div
                                class="w-8 h-8 rounded-full bg-gradient-to-br from-swiss-blue to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                                {{ substr(Auth::user()->name, 0, 1) }}
                            </div>
                        </button>

                        <div x-show="open" @click.away="open = false"
                            class="absolute right-0 mt-2 w-48 bg-[#1c1c1e] border border-white/10 py-1 z-50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                            x-transition:enter="transition ease-out duration-100"
                            x-transition:enter-start="transform opacity-0 scale-95"
                            x-transition:enter-end="transform opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-75"
                            x-transition:leave-start="transform opacity-100 scale-100"
                            x-transition:leave-end="transform opacity-0 scale-95">
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit"
                                    class="block w-full text-left px-4 py-3 text-sm font-bold text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#0b0b0d] p-4 lg:p-8">
                <div class="max-w-7xl mx-auto">
                    {{ $slot }}
                </div>
            </main>
        </div>

        <!-- Overlay -->
        <div x-show="sidebarOpen" @click="sidebarOpen = false"
            x-transition:enter="transition-opacity ease-linear duration-300" x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-linear duration-300"
            x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
            class="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden">
        </div>
    </div>
</body>

</html>
