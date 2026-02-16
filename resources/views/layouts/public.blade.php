<!DOCTYPE html>
<html style="scroll-behavior: smooth;" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" type="image/png" href="{{ asset('img/logo.png') }}">
    <title>Reva Adhitya | Portfolio</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">

    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <style>
        [x-cloak] {
            display: none !important;
        }

        /* Smooth Navbar Transition */
        #navbar {
            transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                background-color 0.4s ease,
                backdrop-filter 0.4s ease,
                border-color 0.4s ease;
            will-change: padding, background-color, backdrop-filter;
        }

        /* Scrolled State */
        .nav-scrolled {
            padding-top: 1rem !important;
            /* Equivalent to py-4 */
            padding-bottom: 1rem !important;
            background-color: rgba(11, 11, 13, 0.85) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Mobile Menu Animation */
        #mobile-menu {
            transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
            will-change: transform;
        }

        #menu-toggle {
            z-index: 120 !important;
        }

        ::selection {
            background: #f97316;
            color: white;
        }
    </style>
</head>

<body class="font-sans antialiased text-white bg-[#0b0b0d]">

    <!-- ================= NAVBAR ================= -->
    <nav id="navbar"
        class="fixed top-0 left-0 w-full z-[100] py-7 px-6 md:px-12 transition-all duration-300 pointer-events-none">
        <div class="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">

            <!-- Logo -->
            <a href="/"
                class="relative z-[110] text-2xl font-black tracking-tighter group transition-transform duration-300 hover:scale-105">
                REVA<span class="text-orange-500 group-hover:animate-pulse">.</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-10">
                @php
                    $navItems = \App\Models\NavigationItem::where('is_active', true)->orderBy('sort_order')->get();
                @endphp

                @forelse($navItems as $item)
                    <a href="{{ $item->url }}"
                        class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-orange-500 transition-colors">
                        {{ $item->label }}
                    </a>
                @empty
                    <a href="#works"
                        class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-orange-500 transition-colors">Works</a>
                    <a href="#services"
                        class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-orange-500 transition-colors">Services</a>
                    <a href="{{ route('websites') }}"
                        class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-orange-500 transition-colors">Websites</a>
                    <a href="#about"
                        class="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-orange-500 transition-colors">About</a>
                @endforelse

                <a href="#contact"
                    class="px-8 py-3 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300">
                    Let's Talk
                </a>
            </div>

            <!-- Hamburger Button -->
            <button id="menu-toggle" style="z-index: 120;"
                class="relative w-11 h-11 flex flex-col justify-center items-center focus:outline-none md:hidden bg-white/5 rounded-full border border-white/10 transition-colors hover:bg-white/10">
                <span class="line block w-5 h-0.5 bg-white transition-all duration-300 pointer-events-none"
                    style="transform: translateY(-3px)"></span>
                <span class="line block w-5 h-0.5 bg-white transition-all duration-300 pointer-events-none"
                    style="transform: translateY(3px)"></span>
            </button>
        </div>
    </nav>

    <!-- Fullscreen Mobile Menu -->
    <div id="mobile-menu"
        class="fixed inset-0 bg-[#0b0b0d] z-[105] flex flex-col justify-center items-center space-y-8 
               transform translate-x-full md:hidden transition-transform duration-500 ease-in-out pointer-events-auto">

        <!-- Mobile Close Button -->
        <button id="mobile-menu-close" style="pointer-events: auto !important; z-index: 200 !important;"
            class="absolute top-7 right-6 w-11 h-11 flex flex-col justify-center items-center focus:outline-none bg-white/5 rounded-full border border-white/10 transition-colors hover:bg-white/10">
            <span class="block w-5 h-0.5 bg-white transform rotate-45 translate-y-[1px]"></span>
            <span class="block w-5 h-0.5 bg-white transform -rotate-45 -translate-y-[1px]"></span>
        </button>

        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black">MENU</div>
        </div>

        @forelse($navItems as $item)
            <a href="{{ $item->url }}"
                class="text-5xl font-black tracking-tighter hover:text-orange-500 transition-all duration-300 active:scale-90">
                {{ $item->label }}<span class="text-orange-500">.</span>
            </a>
        @empty
            <a href="#works" class="text-5xl font-black tracking-tighter">Works</a>
        @endforelse
    </div>

    <!-- Page Content -->
    <main class="min-h-screen">
        {{ $slot }}
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="relative bg-[#0b0b0d] pt-32 pb-12 overflow-hidden border-t border-white/5">
        <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[25vw] font-black text-white/[0.02] select-none pointer-events-none leading-none">
            REVALDY
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
                <div class="md:col-span-5">
                    <a href="/" class="text-3xl font-black tracking-tighter mb-8 block group">
                        REVA<span class="text-orange-500 group-hover:animate-pulse">.</span>
                    </a>
                    <p class="text-white/40 text-lg leading-relaxed max-w-sm mb-10">
                        Crafting high-performance digital experiences that merge aesthetic precision with technical
                        excellence.
                    </p>
                    <div class="flex items-center gap-4">
                        <div
                            class="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                        </div>
                        <span class="text-xs font-black uppercase tracking-widest text-white/60">Available for
                            projects</span>
                    </div>
                </div>

                <div class="md:col-span-3">
                    <h4 class="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8">Navigation</h4>
                    <ul class="space-y-4">
                        @php
                            $navItems = \App\Models\NavigationItem::where('is_active', true)
                                ->orderBy('sort_order')
                                ->get();
                        @endphp

                        @forelse($navItems as $item)
                            <li>
                                <a href="{{ $item->url }}"
                                    class="text-white/60 hover:text-orange-500 font-bold transition-colors">
                                    {{ $item->label }}
                                </a>
                            </li>
                        @empty
                            <li><a href="#works"
                                    class="text-white/60 hover:text-orange-500 font-bold transition-colors">Works</a>
                            </li>
                            <li><a href="#services"
                                    class="text-white/60 hover:text-orange-500 font-bold transition-colors">Expertise</a>
                            </li>
                            <li><a href="#about"
                                    class="text-white/60 hover:text-orange-500 font-bold transition-colors">My Story</a>
                            </li>
                        @endforelse
                    </ul>
                </div>

                <div class="md:col-span-4">
                    <h4 class="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8">Connect</h4>
                    <p class="text-xl font-bold mb-2 hover:text-orange-500 transition-colors cursor-pointer">
                        le.revaldy@gmail.com
                    </p>
                    <p class="text-xl font-bold mb-8 hover:text-orange-500 transition-colors cursor-pointer">
                        +62 822-6089-4009
                    </p>

                    @php
                        $footerSocialLinks = \App\Models\SocialLink::where('is_active', true)
                            ->orderBy('sort_order')
                            ->get();
                    @endphp

                    <div class="flex flex-wrap gap-4">
                        @foreach ($footerSocialLinks as $link)
                            <a href="{{ $link->url }}" target="_blank"
                                class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-orange-500 hover:border-orange-500 transition-all duration-500">
                                @if ($link->icon)
                                    <img src="{{ asset('storage/' . $link->icon) }}"
                                        class="w-5 h-5 object-contain opacity-60 group-hover:brightness-0 transition-all">
                                @else
                                    <span
                                        class="text-[10px] font-black text-white group-hover:text-black">{{ substr($link->platform, 0, 2) }}</span>
                                @endif
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>

            <div
                class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                <div>&copy; {{ date('Y') }} REVALDY ADHITYA.</div>
                <div class="flex gap-8">
                    <a href="{{ route('privacy-policy') }}" class="hover:text-white transition">Privacy</a>
                    <a href="{{ route('terms-of-service') }}" class="hover:text-white transition">Terms</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- ================= FLOATING CONTACT FAB ================= -->
    <div x-data="{ open: false }" class="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-4">

        <!-- WhatsApp Button -->
        <a href="https://wa.me/6282260894009" target="_blank" x-show="open"
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-10 scale-70"
            x-transition:enter-end="opacity-100 translate-y-0 scale-90"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0 scale-100"
            x-transition:leave-end="opacity-0 translate-y-10 scale-90" class="group flex items-center gap-4">
            <span
                class="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
                WhatsApp
            </span>
            <div
                class="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </div>
        </a>

        <!-- Email Button -->
        <a href="mailto:le.revaldy@gmail.com" x-show="open"
            x-transition:enter="transition ease-out duration-300 delay-[50ms]"
            x-transition:enter-start="opacity-0 translate-y-10 scale-90"
            x-transition:enter-end="opacity-100 translate-y-0 scale-100"
            x-transition:leave="transition ease-in duration-200 delay-[50ms]"
            x-transition:leave-start="opacity-100 translate-y-0 scale-100"
            x-transition:leave-end="opacity-0 translate-y-10 scale-90" class="group flex items-center gap-4">
            <span
                class="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
                Email Me
            </span>
            <div
                class="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
        </a>

        <!-- Main Toggle Button -->
        <button @click="open = !open"
            class="relative w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(249,115,22,0.6)] active:scale-90 transition-all duration-300 z-50 overflow-hidden group">

            <!-- Background Shine Animation -->
            <div class="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400"></div>
            <div
                class="absolute inset-0 w-full h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000">
            </div>

            <!-- Ping Animation (Only visible when closed) -->
            <span x-show="!open" class="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40"></span>

            <!-- Icons -->
            <div class="relative transition-transform duration-500" :class="open ? 'rotate-180' : ''">
                <!-- Message Icon -->
                <svg x-show="!open" class="w-8 h-8 text-black" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <!-- Close Icon -->
                <svg x-show="open" class="w-8 h-8 text-black" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </button>
    </div>

    <!-- Scripts -->
    <script>
        // --- Smooth Navbar Logic ---
        const navbar = document.getElementById('navbar');
        let isScrolled = false;

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY > 30;
            // Only update DOM if the state actually changes
            if (scrollPos !== isScrolled) {
                isScrolled = scrollPos;
                if (isScrolled) {
                    navbar.classList.add('nav-scrolled');
                } else {
                    navbar.classList.remove('nav-scrolled');
                }
            }
        }, {
            passive: true
        }); // Improved scroll performance

        // --- Mobile Menu Toggle ---
        const toggle = document.getElementById('menu-toggle');
        const mobileClose = document.getElementById('mobile-menu-close');
        const menu = document.getElementById('mobile-menu');
        const lines = toggle.querySelectorAll('.line');
        let isOpen = false;

        function toggleMenu() {
            isOpen = !isOpen;
            if (isOpen) {
                menu.classList.remove('translate-x-full');
                menu.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden';
                // Hide the navbar toggle when menu is open since we have the inner close button
                toggle.style.opacity = '0';
                toggle.style.pointerEvents = 'none';
            } else {
                menu.classList.add('translate-x-full');
                menu.classList.remove('translate-x-0');
                document.body.style.overflow = '';
                // Show the navbar toggle again
                toggle.style.opacity = '1';
                toggle.style.pointerEvents = 'auto';
            }
        }

        toggle.addEventListener('click', toggleMenu);
        mobileClose.addEventListener('click', toggleMenu);

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (isOpen) toggleMenu();
            });
        });
    </script>
</body>

</html>
