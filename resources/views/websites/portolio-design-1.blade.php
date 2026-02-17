<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lead Visual Architect</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        :root {
            --swiss-red: #ff3e3e; /* Classic Swiss Red option, but we'll stick to your Emerald */
            --emerald: #10b981;
        }
        body { 
            font-family: 'Inter', sans-serif; 
            background-color: #050505;
            color: #fafafa;
            -webkit-font-smoothing: antialiased;
            cursor: none; /* Custom cursor */
        }
        h1, h2, h3, .font-heading { font-family: 'Space Grotesk', sans-serif; }
        
        .swiss-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1.5rem;
        }

        .text-huge {
            font-size: clamp(3.5rem, 15vw, 10rem);
            line-height: 0.8;
            letter-spacing: -0.05em;
        }

        /* Custom Cursor */
        #cursor {
            width: 20px;
            height: 20px;
            background: var(--emerald);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.15s ease-out;
        }

        /* Reveal animations */
        [x-cloak] { display: none !important; }
        
        .line-grow {
            transform-origin: left;
            transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .grain {
            position: fixed;
            top: 0; left: 0; height: 100%; width: 100%;
            pointer-events: none;
            z-index: 90;
            opacity: 0.04;
            background-image: url('https://grainy-gradients.vercel.app/noise.svg');
        }

        .progress-bar {
            position: fixed;
            top: 0; left: 0; height: 3px;
            background: var(--emerald);
            z-index: 100;
        }

        /* Border accent */
        .swiss-border { border-color: rgba(255,255,255,0.08); }
    </style>
</head>
<body x-data="{ 
    openModal: false, 
    activeProject: {}, 
    scrolled: false,
    scrollProgress: 0,
    init() {
        window.addEventListener('scroll', () => {
            this.scrolled = window.scrollY > 50;
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.scrollProgress = (winScroll / height) * 100;
        });
    }
}" @mousemove="moveCursor($event)">

    <div id="cursor" class="hidden md:block"></div>
    <div class="grain"></div>
    <div class="progress-bar" :style="'width: ' + scrollProgress + '%'"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-40 transition-all duration-500" 
         :class="scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'">
        <div class="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
            <div class="font-black text-2xl tracking-tighter flex items-center gap-2">
                <div class="w-6 h-6 bg-emerald-500"></div>
                <span>M.S<span class="text-emerald-500">.</span></span>
            </div>
            <div class="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                <a href="#work" class="hover:text-emerald-400 transition-colors">Work</a>
                <a href="#about" class="hover:text-emerald-400 transition-colors">Philosophy</a>
                <a href="#services" class="hover:text-emerald-400 transition-colors">Services</a>
                <button @click="openModal = true; activeProject = { title: 'Contact', category: 'General', image: '' }" class="text-emerald-500">Connect</button>
            </div>
            <!-- Mobile Menu Toggle -->
            <button class="md:hidden text-neutral-400"><i data-lucide="menu"></i></button>
        </div>
    </nav>

    <main class="max-w-[1400px] mx-auto px-6">
        
        <!-- HERO SECTION -->
        <header class="min-h-screen flex flex-col justify-center pt-20">
            <div class="swiss-grid">
                <div class="col-span-12 lg:col-span-11">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="h-[1px] w-12 bg-emerald-500"></span>
                        <span class="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-500">Available for Freelance — 2026</span>
                    </div>
                    <h1 class="text-huge font-black uppercase italic leading-none mb-12">
                        Precision<br>
                        <span class="text-neutral-800 outline-text" style="-webkit-text-stroke: 1px #404040;">Over</span> Chaos<span class="text-emerald-500 font-normal">.</span>
                    </h1>
                </div>
            </div>
            
            <div class="swiss-grid items-end">
                <div class="col-span-12 md:col-span-4 text-neutral-500 text-sm leading-relaxed mb-8 md:mb-0">
                    Zurich-based Visual Architect specializing in digital systems, typography-driven identities, and functional interfaces. I strip away the noise to find the core message.
                </div>
                <div class="col-span-12 md:col-start-6 md:col-span-3 flex flex-col gap-6">
                    <div class="flex gap-8 text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                        <div><span class="block text-white">08+</span> Years Exp.</div>
                        <div><span class="block text-white">124+</span> Projects</div>
                        <div><span class="block text-white">12</span> Awards</div>
                    </div>
                </div>
                <div class="col-span-12 md:col-start-11 md:col-span-2 flex justify-end">
                    <a href="#work" class="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-700 group">
                        <i data-lucide="arrow-down" class="w-6 text-white group-hover:text-black transition-colors"></i>
                    </a>
                </div>
            </div>
        </header>

        <!-- PHILOSOPHY / ABOUT SECTION -->
        <section id="about" class="py-32 border-t swiss-border">
            <div class="swiss-grid">
                <div class="col-span-12 md:col-span-4">
                    <h2 class="text-xs font-bold uppercase tracking-[0.5em] text-emerald-500 mb-12">The Philosophy</h2>
                </div>
                <div class="col-span-12 md:col-span-8">
                    <h3 class="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-16">
                        "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects."
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-400 text-sm leading-loose">
                        <p>I follow the Swiss School of Design principles: objectivity, legibility, and the grid. Every pixel must serve a purpose. If a design element doesn't contribute to the message, it is deleted.</p>
                        <p>In a world of visual clutter, I provide clarity. My work is built on the belief that functional design is timeless design. I help brands build systems that are scalable, accessible, and mathematically balanced.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SERVICES ACCORDION -->
        <section id="services" class="py-32 border-t swiss-border" x-data="{ active: 1 }">
            <div class="swiss-grid">
                <div class="col-span-12 md:col-span-4">
                    <h2 class="text-xs font-bold uppercase tracking-[0.5em] text-emerald-500 mb-12">Capabilities</h2>
                </div>
                <div class="col-span-12 md:col-span-8">
                    <!-- Service 01 -->
                    <div class="border-b swiss-border py-8 group cursor-pointer" @click="active = 1">
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl font-bold uppercase tracking-tighter" :class="active === 1 ? 'text-emerald-500' : ''">01 — Identity Systems</h4>
                            <i data-lucide="plus" class="w-5 transition-transform" :class="active === 1 ? 'rotate-45' : ''"></i>
                        </div>
                        <div x-show="active === 1" x-collapse class="mt-6 text-neutral-400 max-w-xl text-sm">
                            Comprehensive branding including logo construction, typographic guidelines, and color theory. I build scalable visual languages that work across all touchpoints.
                        </div>
                    </div>
                    <!-- Service 02 -->
                    <div class="border-b swiss-border py-8 group cursor-pointer" @click="active = 2">
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl font-bold uppercase tracking-tighter" :class="active === 2 ? 'text-emerald-500' : ''">02 — Digital Architecture</h4>
                            <i data-lucide="plus" class="w-5 transition-transform" :class="active === 2 ? 'rotate-45' : ''"></i>
                        </div>
                        <div x-show="active === 2" x-collapse class="mt-6 text-neutral-400 max-w-xl text-sm">
                            UI/UX design focused on conversion and clarity. From wireframing to high-fidelity prototypes, I prioritize user flow and grid-based layouts.
                        </div>
                    </div>
                    <!-- Service 03 -->
                    <div class="border-b swiss-border py-8 group cursor-pointer" @click="active = 3">
                        <div class="flex justify-between items-center">
                            <h4 class="text-2xl font-bold uppercase tracking-tighter" :class="active === 3 ? 'text-emerald-500' : ''">03 — Editorial Design</h4>
                            <i data-lucide="plus" class="w-5 transition-transform" :class="active === 3 ? 'rotate-45' : ''"></i>
                        </div>
                        <div x-show="active === 3" x-collapse class="mt-6 text-neutral-400 max-w-xl text-sm">
                            Layout design for digital and print publications. Mastering the hierarchy of information to ensure the reader is guided through the content seamlessly.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- WORK GRID (ENHANCED) -->
        <section id="work" class="py-32 border-t swiss-border">
            <div class="swiss-grid mb-24">
                <div class="col-span-12">
                    <h2 class="text-xs font-bold uppercase tracking-[0.5em] text-emerald-500 mb-4">Selected Work</h2>
                    <p class="text-neutral-500 font-mono">2022 — 2025 Portfolio</p>
                </div>
            </div>

            <div class="swiss-grid gap-y-32">
                <!-- Project 01 -->
                <div class="col-span-12 md:col-span-7 group">
                    <div class="relative overflow-hidden bg-neutral-900 aspect-[16/10] cursor-pointer" 
                         @click="openModal = true; activeProject = {title: 'Aethelred Bank', category: 'Fintech Identity', year: '2025', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200', tools: 'Figma, Webflow, After Effects'}">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105">
                        <div class="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div class="mt-8 flex justify-between items-end">
                        <div>
                            <span class="text-[10px] font-bold uppercase text-emerald-500 tracking-widest">01 / Digital System</span>
                            <h3 class="text-3xl font-black uppercase mt-2">Aethelred Bank</h3>
                        </div>
                        <div class="text-right">
                            <span class="block text-xs font-mono text-neutral-600">CLIENT</span>
                            <span class="text-xs font-bold uppercase tracking-widest text-neutral-400">Zurich Financials</span>
                        </div>
                    </div>
                </div>

                <!-- Project 02 -->
                <div class="col-span-12 md:col-span-4 md:col-start-9 group self-center">
                    <div class="relative overflow-hidden bg-neutral-900 aspect-[3/4] cursor-pointer"
                         @click="openModal = true; activeProject = {title: 'Onyx Editorial', category: 'Print & Digital', year: '2024', image: 'https://images.unsplash.com/photo-1635427441235-8a307a772242?q=80&w=800', tools: 'InDesign, Photoshop'}">
                        <img src="https://images.unsplash.com/photo-1635427441235-8a307a772242?q=80&w=800" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
                    </div>
                    <div class="mt-8">
                        <span class="text-[10px] font-bold uppercase text-emerald-500 tracking-widest">02 / Typography</span>
                        <h3 class="text-3xl font-black uppercase mt-2">Onyx Series</h3>
                    </div>
                </div>

                <!-- Project 03 -->
                <div class="col-span-12 lg:col-span-10 lg:col-start-2 group">
                    <div class="relative overflow-hidden bg-neutral-900 aspect-video cursor-pointer"
                         @click="openModal = true; activeProject = {title: 'Neo-Bauhaus', category: 'Visual Language', year: '2024', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600', tools: 'Illustrator, 3D Max'}">
                        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
                    </div>
                    <div class="mt-8 flex justify-between">
                        <h3 class="text-3xl font-black uppercase">Neo-Bauhaus</h3>
                        <span class="text-neutral-500 font-mono italic">Inquiry into form vs function</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- EXPERIENCE SECTION -->
        <section class="py-32 border-t swiss-border">
            <div class="swiss-grid">
                <div class="col-span-12 md:col-span-4">
                    <h2 class="text-xs font-bold uppercase tracking-[0.5em] text-emerald-500 mb-12">Experience</h2>
                </div>
                <div class="col-span-12 md:col-span-8 space-y-16">
                    <div class="flex flex-col md:flex-row md:justify-between gap-4">
                        <span class="text-neutral-600 font-mono">2023 — Present</span>
                        <div class="flex-1 md:ml-20">
                            <h4 class="text-xl font-bold uppercase tracking-tight">Lead Brand Designer</h4>
                            <p class="text-neutral-500 text-sm mt-2 font-mono">Studio Helvetica, Zurich</p>
                        </div>
                        <p class="md:max-w-xs text-xs text-neutral-500 leading-relaxed">Directing visual systems for European tech startups and legacy financial firms.</p>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between gap-4">
                        <span class="text-neutral-600 font-mono">2020 — 2023</span>
                        <div class="flex-1 md:ml-20">
                            <h4 class="text-xl font-bold uppercase tracking-tight">Senior Product Designer</h4>
                            <p class="text-neutral-500 text-sm mt-2 font-mono">Vanguard Labs</p>
                        </div>
                        <p class="md:max-w-xs text-xs text-neutral-500 leading-relaxed">Built design systems used by over 2 million active daily users across SaaS platforms.</p>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between gap-4">
                        <span class="text-neutral-600 font-mono">2017 — 2020</span>
                        <div class="flex-1 md:ml-20">
                            <h4 class="text-xl font-bold uppercase tracking-tight">Visual Designer</h4>
                            <p class="text-neutral-500 text-sm mt-2 font-mono">Modernist Agency</p>
                        </div>
                        <p class="md:max-w-xs text-xs text-neutral-500 leading-relaxed">Specializing in editorial layouts and brand guidelines for international culture magazines.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="bg-white text-black py-32 mt-20">
        <div class="max-w-[1400px] mx-auto px-6">
            <div class="swiss-grid">
                <div class="col-span-12 md:col-span-7">
                    <h2 class="text-huge font-black uppercase italic leading-none mb-12">Work<br>With Me.</h2>
                    <a href="mailto:hello@studio.ch" class="text-3xl md:text-5xl font-light hover:text-emerald-500 transition-colors break-words">hello@studio.ch</a>
                </div>
                <div class="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end">
                    <div class="space-y-4 text-xs font-bold uppercase tracking-widest mt-12 md:mt-0">
                        <p class="flex justify-between border-b border-black/10 pb-2"><span>Instagram</span> <span>@m.s_design</span></p>
                        <p class="flex justify-between border-b border-black/10 pb-2"><span>LinkedIn</span> <span>/in/msvisual</span></p>
                        <p class="flex justify-between border-b border-black/10 pb-2"><span>Behance</span> <span>/ms_visual</span></p>
                    </div>
                    <p class="mt-20 text-[10px] uppercase font-mono text-neutral-400">© 2026 Zurich, Switzerland. Built with Precision.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- DETAILED PROJECT MODAL -->
    <div 
        x-show="openModal" 
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6"
        x-cloak
    >
        <div class="absolute inset-0 bg-black/95" @click="openModal = false"></div>

        <div 
            x-show="openModal"
            x-transition:enter="transition ease-out duration-500"
            x-transition:enter-start="opacity-0 translate-y-20"
            x-transition:enter-end="opacity-100 translate-y-0"
            class="relative bg-[#0a0a0a] border border-white/10 w-full max-w-6xl h-full md:h-auto overflow-y-auto max-h-[95vh]"
        >
            <div class="swiss-grid min-h-[70vh]">
                <div class="col-span-12 md:col-span-7 bg-neutral-900">
                    <template x-if="activeProject.image">
                        <img :src="activeProject.image" class="w-full h-full object-cover grayscale">
                    </template>
                    <div x-if="!activeProject.image" class="w-full h-full flex items-center justify-center p-20">
                         <h2 class="text-huge opacity-10">CONTACT</h2>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-5 p-8 md:p-16 flex flex-col justify-between">
                    <button @click="openModal = false" class="absolute top-8 right-8 text-white hover:text-emerald-500 transition-all">
                        <i data-lucide="x" class="w-10 h-10"></i>
                    </button>
                    
                    <div>
                        <div class="flex gap-4 mb-8">
                            <span class="text-[10px] font-bold uppercase text-emerald-500 tracking-[0.3em]" x-text="activeProject.category"></span>
                            <span class="text-[10px] font-bold uppercase text-neutral-600 tracking-[0.3em]" x-text="activeProject.year"></span>
                        </div>
                        <h2 class="text-5xl font-black uppercase italic tracking-tighter mb-8" x-text="activeProject.title"></h2>
                        
                        <div class="space-y-8">
                            <section>
                                <h5 class="text-[10px] font-bold uppercase text-neutral-500 mb-2">The Challenge</h5>
                                <p class="text-sm text-neutral-300 leading-relaxed">To create a visual system that communicates stability and modernity while maintaining strict adherence to accessibility standards for a global audience.</p>
                            </section>
                            
                            <section>
                                <h5 class="text-[10px] font-bold uppercase text-neutral-500 mb-2">Toolkit</h5>
                                <p class="text-xs font-mono text-emerald-500" x-text="activeProject.tools || 'Creative Suite'"></p>
                            </section>
                        </div>
                    </div>

                    <div class="pt-12">
                        <button class="group flex items-center gap-4 bg-emerald-500 text-black px-8 py-5 w-full font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
                            <span>Launch Live Project</span>
                            <i data-lucide="external-link" class="w-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Lucide Icons
        lucide.createIcons();

        // Custom Cursor Movement
        function moveCursor(e) {
            const cursor = document.getElementById('cursor');
            cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        }

        // Hover effect for cursor
        document.querySelectorAll('a, button, [@click]').forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.getElementById('cursor').style.transform += ' scale(2.5)';
                document.getElementById('cursor').style.background = '#ffffff';
            });
            el.addEventListener('mouseleave', () => {
                document.getElementById('cursor').style.transform = document.getElementById('cursor').style.transform.replace(' scale(2.5)', '');
                document.getElementById('cursor').style.background = '#10b981';
            });
        });
    </script>
</body>
</html>