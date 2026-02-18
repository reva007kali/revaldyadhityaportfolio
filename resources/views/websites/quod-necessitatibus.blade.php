Laboriosam dolorem <!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JOHN DOE | VISUAL REBEL</title>
    <!-- Google Fonts: Archivo Black & Space Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&family=Syne:wght@800&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'rich-black': '#0A0A0A',
                        'neon-lime': '#CCFF00',
                        'dark-grey': '#1A1A1A',
                        'muted-grey': '#888888',
                    },
                    fontFamily: {
                        archivo: ['"Archivo Black"', 'sans-serif'],
                        mono: ['"Space Mono"', 'monospace'],
                        syne: ['"Syne"', 'sans-serif'],
                    },
                    boxShadow: {
                        'neon': '0 0 15px rgba(204, 255, 0, 0.4)',
                        'neon-strong': '0 0 30px rgba(204, 255, 0, 0.6)',
                    }
                }
            }
        }
    </script>
    <style>
        /* Grainy Texture Overlay */
        .grainy::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            opacity: 0.05;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            z-index: 50;
        }

        .text-outline {
            -webkit-text-stroke: 1px #888888;
            color: transparent;
        }

        .hover-neon-border:hover {
            border-color: #CCFF00;
            box-shadow: 0 0 15px rgba(204, 255, 0, 0.3);
        }

        /* Custom Selection */
        ::selection {
            background-color: #CCFF00;
            color: #0A0A0A;
        }
    </style>
</head>
<body class="bg-rich-black text-white font-mono grainy overflow-x-hidden">

    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-[100] px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
        <a href="#" class="font-archivo text-3xl tracking-tighter text-white">JD<span class="text-neon-lime">.</span></a>
        <a href="#contact" class="border border-neon-lime text-neon-lime px-6 py-2 font-bold text-sm uppercase tracking-widest hover:bg-neon-lime hover:text-black transition-all duration-300 shadow-neon">
            [ LET'S TALK ]
        </a>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 pt-20 relative overflow-hidden">
        <!-- Background Moving Text (Brutalist Style) -->
        <div class="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap font-archivo text-[25vw] leading-none uppercase">
            Visual Rebel Visual Rebel
        </div>

        <h1 class="font-archivo text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter mb-8 z-10 animate-pulse-slow">
            VISUAL<br><span class="text-neon-lime">REBEL.</span>
        </h1>
        
        <div class="max-w-2xl z-10">
            <p class="text-muted-grey text-lg md:text-xl leading-relaxed mb-8 border-l-4 border-neon-lime pl-6">
                John Doe — Menghancurkan batas visual melalui desain grafis yang berani. 
                Berbasis di Jakarta, bekerja secara global.
            </p>
            <div class="flex items-center gap-4">
                <span class="w-12 h-[2px] bg-neon-lime"></span>
                <p class="uppercase tracking-widest text-xs font-bold italic">Available for new projects 2026</p>
            </div>
        </div>
    </section>

    <!-- Services Bento Grid -->
    <section class="py-24 px-6 md:px-12 bg-rich-black">
        <h2 class="font-archivo text-5xl md:text-7xl mb-16 uppercase tracking-tighter">Core<br><span class="text-outline">Capabilities</span></h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            <!-- Box 1: Wide -->
            <div class="bg-dark-grey p-10 border border-white/5 md:col-span-2 flex flex-col justify-between group hover-neon-border transition-all duration-500">
                <div class="text-neon-lime font-archivo text-4xl mb-10">01</div>
                <div>
                    <h3 class="font-archivo text-3xl uppercase mb-4">Brand Destruction & Rebirth</h3>
                    <p class="text-muted-grey">Bukan sekadar logo. Saya menciptakan identitas yang menonjol di tengah kebisingan digital melalui estetika brutalist.</p>
                </div>
            </div>

            <!-- Box 2: Tall -->
            <div class="bg-dark-grey p-10 border border-white/5 md:row-span-2 flex flex-col justify-between group hover-neon-border transition-all duration-500">
                <div class="text-neon-lime font-archivo text-4xl mb-10">02</div>
                <div>
                    <h3 class="font-archivo text-3xl uppercase mb-4">Motion<br>Graphics</h3>
                    <p class="text-muted-grey">Memberikan nyawa pada desain statis melalui animasi yang memicu adrenalin dan distorsi visual.</p>
                </div>
            </div>

            <!-- Box 3: Square -->
            <div class="bg-dark-grey p-10 border border-white/5 group hover-neon-border transition-all duration-500">
                <div class="text-neon-lime font-archivo text-2xl mb-6">03</div>
                <h3 class="font-archivo text-2xl uppercase mb-4">3D Visualizer</h3>
                <p class="text-muted-grey text-sm">Eksplorasi dimensi baru dengan render 3D untuk produk dan environment futuristik.</p>
            </div>

            <!-- Box 4: Square -->
            <div class="bg-dark-grey p-10 border border-white/5 group hover-neon-border transition-all duration-500">
                <div class="text-neon-lime font-archivo text-2xl mb-6">04</div>
                <h3 class="font-archivo text-2xl uppercase mb-4">Poster Art</h3>
                <p class="text-muted-grey text-sm">Desain cetak dengan estetika teknis untuk musik, film, dan event underground.</p>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-24 px-6 md:px-12 bg-rich-black">
        <div class="flex justify-between items-end mb-16">
            <h2 class="font-archivo text-5xl md:text-7xl uppercase tracking-tighter italic">Featured<br>Works</h2>
            <p class="text-neon-lime font-bold hidden md:block uppercase tracking-widest">[ Scroll to explore ]</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Project 1 -->
            <div class="relative group overflow-hidden bg-dark-grey border border-white/10">
                <div class="aspect-[4/5] md:aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200" alt="Vortex Energy" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0">
                </div>
                <div class="absolute inset-0 bg-neon-lime/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-black p-10 text-center">
                    <span class="font-bold uppercase tracking-widest text-sm mb-2">Branding & Motion</span>
                    <h4 class="font-archivo text-4xl uppercase leading-none">VORTEX ENERGY</h4>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="relative group overflow-hidden bg-dark-grey border border-white/10">
                <div class="aspect-[4/5] md:aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" alt="Cyberpunk Jakarta" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0">
                </div>
                <div class="absolute inset-0 bg-neon-lime/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-black p-10 text-center">
                    <span class="font-bold uppercase tracking-widest text-sm mb-2">Digital Illustration</span>
                    <h4 class="font-archivo text-4xl uppercase leading-none">CYBERPUNK JAKARTA 2077</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- About & Stats -->
    <section class="py-24 px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center border-t border-white/5">
        <div>
            <h2 class="font-archivo text-5xl uppercase mb-8 leading-none italic">I Don't Play<br><span class="text-neon-lime">Safe.</span></h2>
            <p class="text-muted-grey text-xl leading-relaxed font-mono">
                "Desain bagi saya adalah tentang provokasi. Saya tidak tertarik pada hal yang 'aman'. 
                Sejak 2018, saya telah membantu brand-brand pemberontak untuk menemukan suara mereka melalui visual yang tajam, kontras tinggi, dan eksekusi yang presisi."
            </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="border border-white/10 p-8 flex flex-col items-center justify-center group hover:bg-neon-lime transition-all duration-300">
                <span class="font-archivo text-5xl group-hover:text-black">50+</span>
                <span class="text-xs uppercase tracking-widest mt-2 group-hover:text-black font-bold">Clients</span>
            </div>
            <div class="border border-white/10 p-8 flex flex-col items-center justify-center group hover:bg-neon-lime transition-all duration-300">
                <span class="font-archivo text-5xl group-hover:text-black">120+</span>
                <span class="text-xs uppercase tracking-widest mt-2 group-hover:text-black font-bold">Projects</span>
            </div>
            <div class="border border-white/10 p-8 col-span-2 flex flex-col items-center justify-center group hover:bg-neon-lime transition-all duration-300">
                <span class="font-archivo text-5xl group-hover:text-black">05</span>
                <span class="text-xs uppercase tracking-widest mt-2 group-hover:text-black font-bold">Global Awards</span>
            </div>
        </div>
    </section>

    <!-- Footer / Contact -->
    <footer id="contact" class="pt-32 pb-12 px-6 md:px-12 bg-rich-black overflow-hidden relative">
        <div class="max-w-7xl mx-auto border-b border-white/10 pb-20">
            <h2 class="font-archivo text-[12vw] leading-none uppercase tracking-tighter mb-12 hover:text-neon-lime transition-colors duration-500 cursor-default">
                WANT TO CREATE<br>CHAOS?
            </h2>
            
            <div class="flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <p class="uppercase font-bold tracking-widest text-xs text-muted-grey mb-4">Email Me</p>
                    <a href="mailto:john.doe@visualrebel.com" class="text-2xl md:text-4xl font-archivo hover:text-neon-lime underline decoration-neon-lime transition-all">
                        john.doe@visualrebel.com
                    </a>
                </div>
                <div class="flex gap-8">
                    <a href="#" class="text-neon-lime font-bold hover:underline">[ INSTAGRAM ]</a>
                    <a href="#" class="text-neon-lime font-bold hover:underline">[ BEHANCE ]</a>
                    <a href="#" class="text-neon-lime font-bold hover:underline">[ DRIBBBLE ]</a>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-center mt-12 text-[10px] uppercase tracking-[0.4em] text-muted-grey gap-4">
            <p>©2026 JOHN DOE. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED TO BE LOUD.</p>
        </div>
    </footer>

    <!-- Cursor Follower (Optional Visual enhancement) -->
    <div id="cursor" class="hidden md:block fixed w-8 h-8 border border-neon-lime rounded-full pointer-events-none z-[999] transition-transform duration-100 ease-out"></div>

    <script>
        // Simple Cursor Follower
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        });

        // Hover effect for links
        const links = document.querySelectorAll('a, button, .group');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.backgroundColor = '#CCFF00';
                cursor.style.mixBlendMode = 'difference';
                cursor.style.scale = '2';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.backgroundColor = 'transparent';
                cursor.style.mixBlendMode = 'normal';
                cursor.style.scale = '1';
            });
        });
    </script>
</body>
</html>