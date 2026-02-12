<!DOCTYPE html>
<html style="scroll-behavior: smooth;" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>{{ config('app.name', 'Portfolio') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased text-swiss-dark bg-white selection:bg-swiss-blue selection:text-white">
    <div class="min-h-screen flex flex-col">
        <!-- Navbar -->
        <nav class="bg-white border-b border-gray-200 sticky top-0 z-50" x-data="{ open: false }">
            <div class=" mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20 items-center">
                    <div class="flex">
                        <div class="shrink-0 flex items-center">
                            <a href="/" wire:navigate
                                class="font-black text-2xl tracking-tighter text-black hover:text-swiss-blue transition-colors">
                                revaldyadhitya<span class="text-swiss-blue">.</span>
                            </a>
                        </div>
                    </div>
                    <div class="hidden sm:flex items-center space-x-8">
                        <a href="/#services"
                            class="text-sm font-semibold uppercase tracking-wide hover:text-swiss-blue transition-colors">Services</a>
                        <a href="/#projects"
                            class="text-sm font-semibold uppercase tracking-wide hover:text-swiss-blue transition-colors">Works</a>
                        <a href="/#about"
                            class="text-sm font-semibold uppercase tracking-wide hover:text-swiss-blue transition-colors">About</a>
                        <a href="/#contact"
                            class="text-sm font-semibold uppercase tracking-wide hover:text-swiss-blue transition-colors">Contact</a>

                        <a href="/#contact"
                            class="px-4 py-2 bg-black text-white text-sm font-bold uppercase hover:bg-swiss-blue transition-colors"
                            wire:navigate>Contact Me</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="flex items-center sm:hidden">
                        <button @click="open = !open"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-swiss-blue"
                            aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!-- Icon when menu is closed. -->
                            <svg :class="{'hidden': open, 'block': !open }" class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <!-- Icon when menu is open. -->
                            <svg :class="{'block': open, 'hidden': !open }" class="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div :class="{'block': open, 'hidden': !open}" class="hidden sm:hidden bg-white border-t border-gray-200">
                <div class="pt-2 pb-3 space-y-1">
                    <a href="#services" @click="open = false"
                        class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold uppercase text-gray-600 hover:bg-gray-50 hover:border-swiss-blue hover:text-swiss-blue transition-colors">Services</a>
                    <a href="#projects" @click="open = false"
                        class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold uppercase text-gray-600 hover:bg-gray-50 hover:border-swiss-blue hover:text-swiss-blue transition-colors">Works</a>
                    <a href="#about" @click="open = false"
                        class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold uppercase text-gray-600 hover:bg-gray-50 hover:border-swiss-blue hover:text-swiss-blue transition-colors">About</a>
                    <a href="#contact" @click="open = false"
                        class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold uppercase text-gray-600 hover:bg-gray-50 hover:border-swiss-blue hover:text-swiss-blue transition-colors">Contact</a>
                    <a href="#contact" @click="open = false"
                        class="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold uppercase text-swiss-blue hover:bg-gray-50 hover:border-swiss-blue transition-colors">Contact
                        Me</a>
                </div>
            </div>
        </nav>

        <!-- Page Content -->
        <main class="flex-grow">
            {{ $slot }}
        </main>

        <footer class="bg-black text-white py-12 border-t-4 border-swiss-blue">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="font-black text-2xl mb-4">RevaldyAdhitya<span class="text-swiss-blue">.</span></h3>
                    <p class="text-gray-400 text-sm">Crafting digital experiences with precision and clarity.</p>
                </div>
                <div>
                    <h4 class="font-bold uppercase tracking-widest mb-4 text-xs text-gray-500">Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#services" class="hover:text-swiss-blue transition-colors">Services</a></li>
                        <li><a href="#projects" class="hover:text-swiss-blue transition-colors">Works</a></li>
                        <li><a href="#about" class="hover:text-swiss-blue transition-colors">About</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold uppercase tracking-widest mb-4 text-xs text-gray-500">Contact</h4>
                    <p class="text-sm text-gray-400">le.revaldy@gmail.com</p>
                </div>
            </div>
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 uppercase tracking-widest">
                &copy; {{ date('Y') }} revaldyadhitya.com
            </div>
        </footer>
    </div>
</body>

</html>