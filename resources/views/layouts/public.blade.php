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
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;
            /* IE and Edge */
            scrollbar-width: none;
            /* Firefox */
        }
    </style>
</head>

<body
    class="font-sans antialiased text-swiss-dark bg-white selection:bg-swiss-blue selection:text-white lg:bg-[#000000] lg:flex lg:items-center lg:justify-center lg:h-screen lg:overflow-hidden"
    x-data="{ scale: 1, isDesktop: false }" x-init="isDesktop = window.innerWidth >= 1024;
    scale = isDesktop ? 0.75 : 1">

    <!-- Zoom Controls -->
    <div
        class="hidden lg:flex fixed bottom-8 right-8 z-[100] gap-2 bg-[#1c1c1e] p-2 rounded-full border border-white/10 shadow-xl">
        <button @click="scale = Math.max(0.5, scale - 0.1)"
            class="w-10 h-10 rounded-full bg-black hover:bg-white/10 text-white flex items-center justify-center transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
        </button>
        <div class="w-16 flex items-center justify-center text-white font-mono text-sm">
            <span x-text="Math.round(scale * 100) + '%'"></span>
        </div>
        <button @click="scale = Math.min(1.2, scale + 0.1)"
            class="w-10 h-10 rounded-full bg-black hover:bg-white/10 text-white flex items-center justify-center transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>
    </div>

    <!-- Phone Container Wrapper for Centering and Scaling -->
    <div class="relative transition-transform duration-300 ease-out origin-center"
        :style="isDesktop ? `transform: scale(${scale})` : ''">
        <div
            class="relative w-full lg:w-[400px] lg:h-[850px] lg:bg-black lg:rounded-[60px] lg:border-[8px] lg:border-[#0a0a0a] lg:shadow-[0_0_100px_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,0.6),0_0_20px_rgba(0,0,0,0.4)] lg:overflow-hidden bg-white lg:ring-[6px] lg:ring-[#D56718] lg:ring-opacity-60">

            <!-- Dynamic Notch / Status Bar Area for Desktop -->
            <div
                class="hidden lg:block absolute top-4 left-1/2 transform -translate-x-1/2 w-[120px] h-[36px] bg-[#000000] rounded-[20px] z-[60] p-[10px]">
                <!-- Glass-like camera circle -->
                <div
                    class="w-3 h-3 ml-auto rounded-full bg-gradient-to-br from-blue-500/30 to-white/10 border border-white/20 shadow-inner backdrop-blur-sm">
                </div>
            </div>

            <!-- Scrollable Container -->
            <div class="w-full overflow-x-hidden lg:h-full lg:overflow-y-auto scrollbar-hide">

                <!-- Navbar -->
                <nav
                    class="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-black/50 to-transparent lg:absolute">
                    <div class="max-w-sm mx-auto flex justify-between items-center h-16 px-6 relative z-50">

                        <a href="/" class="text-xl font-black text-white">
                            Reva<span class="text-swiss-blue">.</span>
                        </a>

                        <!-- Hamburger / Close Button -->
                        <button id="menu-toggle"
                            class="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none z-50">
                            <span class="line block absolute w-6 h-0.5 bg-white transition-all duration-300"></span>
                            <span class="line block absolute w-6 h-0.5 bg-white transition-all duration-300"></span>
                            <span class="line block absolute w-6 h-0.5 bg-white transition-all duration-300"></span>
                        </button>

                    </div>
                </nav>

                <!-- Fullscreen Menu -->
                <div id="mobile-menu"
                    class="fixed inset-0 bg-black/70 backdrop-blur-md text-white flex flex-col justify-center items-center space-y-10 
               transform translate-y-full opacity-0 transition-all duration-500 ease-in-out z-40 lg:absolute">

                    @php
                        $navItems = \App\Models\NavigationItem::where('is_active', true)->orderBy('sort_order')->get();
                    @endphp

                    @forelse($navItems as $item)
                        <a href="{{ $item->url }}"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">{{ $item->label }}</a>
                    @empty
                        <a href="#home"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">Home</a>
                        <a href="#works"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">Works</a>
                        <a href="#services"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">Services</a>
                        <a href="#about"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">About</a>
                        <a href="#pricing"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">Pricing</a>
                        <a href="#contact"
                            class="text-3xl font-bold tracking-wide hover:text-swiss-blue transition">Contact</a>
                    @endforelse

                </div>

                <script>
                    const toggle = document.getElementById('menu-toggle');
                    const menu = document.getElementById('mobile-menu');
                    const lines = toggle.querySelectorAll('.line');
                    let isOpen = false;

                    // Set initial positions
                    lines[0].style.transform = "translateY(-6px)";
                    lines[2].style.transform = "translateY(6px)";

                    toggle.addEventListener('click', () => {
                        isOpen = !isOpen;

                        if (isOpen) {
                            // Open menu
                            menu.classList.remove('translate-y-full', 'opacity-0');
                            menu.classList.add('translate-y-0', 'opacity-100');
                            document.body.classList.add('overflow-hidden');

                            // Morph to X
                            lines[0].style.transform = "rotate(45deg)";
                            lines[1].style.opacity = "0";
                            lines[2].style.transform = "rotate(-45deg)";
                        } else {
                            // Close menu
                            menu.classList.add('translate-y-full', 'opacity-0');
                            menu.classList.remove('translate-y-0', 'opacity-100');
                            document.body.classList.remove('overflow-hidden');

                            // Back to hamburger
                            lines[0].style.transform = "translateY(-6px)";
                            lines[1].style.opacity = "1";
                            lines[2].style.transform = "translateY(6px)";
                        }
                    });

                    // Auto close when clicking menu link
                    document.querySelectorAll('#mobile-menu a').forEach(link => {
                        link.addEventListener('click', () => {
                            toggle.click();
                        });
                    });
                </script>





                <!-- Page Content -->
                <main class="">
                    {{ $slot }}
                </main>

                <footer class="bg-black text-white py-12 border-t-4 border-swiss-blue">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8">
                        <div>
                            <h3 class="font-black text-2xl mb-4">RevaldyAdhitya<span class="text-swiss-blue">.</span>
                            </h3>
                            <p class="text-gray-400 text-sm">Crafting digital experiences with precision and clarity.
                            </p>
                        </div>
                        <div>
                            <h4 class="font-bold uppercase tracking-widest mb-4 text-xs text-gray-500">Links</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#services" class="hover:text-swiss-blue transition-colors">Services</a>
                                </li>
                                <li><a href="#projects" class="hover:text-swiss-blue transition-colors">Works</a></li>
                                <li><a href="#about" class="hover:text-swiss-blue transition-colors">About</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-bold uppercase tracking-widest mb-4 text-xs text-gray-500">Contact</h4>
                            <p class="text-sm text-gray-400">le.revaldy@gmail.com</p>

                            @php
                                $footerSocialLinks = \App\Models\SocialLink::where('is_active', true)
                                    ->orderBy('sort_order')
                                    ->get();
                            @endphp

                            @if ($footerSocialLinks->count() > 0)
                                <div class="flex gap-4 mt-6">
                                    @foreach ($footerSocialLinks as $link)
                                        <a href="{{ $link->url }}" target="_blank"
                                            class="text-gray-400 hover:text-white transition-colors group">
                                            @if ($link->icon)
                                                <img src="{{ asset('storage/' . $link->icon) }}"
                                                    class="w-5 h-5 object-contain filter invert opacity-60 group-hover:opacity-100 transition-opacity">
                                            @else
                                                {{ $link->platform }}
                                            @endif
                                        </a>
                                    @endforeach
                                </div>
                            @endif
                        </div>
                    </div>
                    <div
                        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 uppercase tracking-widest">
                        &copy; {{ date('Y') }} revaldyadhitya.com
                    </div>
                </footer>

            </div>
        </div>
    </div>
</body>

</html>
