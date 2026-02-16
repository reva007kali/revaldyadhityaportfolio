<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LUMIÈRE | Radiance Redefined</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        cream: { 50: '#fcfaf7', 100: '#f7f3ed', 200: '#ede4d5' },
                        rose: { 50: '#fff1f2', 400: '#fb7185', 700: '#be123c' },
                        luxury: '#1a1a1a',
                        gold: '#af9164'
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Instrument Sans', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(15px); }
        .product-card:hover .quick-add { transform: translateY(0); opacity: 1; }
        .bento-item { overflow: hidden; position: relative; border-radius: 2rem; }
        .bento-item img { transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .bento-item:hover img { transform: scale(1.05); }
    </style>
</head>
<body class="bg-cream-50 text-luxury font-sans selection:bg-rose-100 selection:text-rose-700">

    <!-- Navbar -->
    <nav class="fixed w-full z-50 glass border-b border-cream-200">
        <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div class="flex gap-8 items-center">
                <a href="#" class="text-xs uppercase tracking-widest font-semibold hover:text-gold transition">Shop</a>
                <a href="#" class="text-xs uppercase tracking-widest font-semibold hover:text-gold transition">About</a>
            </div>
            
            <a href="#" class="text-3xl font-serif tracking-tighter font-bold">LUMIÈRE</a>
            
            <div class="flex gap-6 items-center">
                <button class="hover:text-gold transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button class="relative hover:text-gold transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    <span class="absolute -top-1 -right-1 bg-rose-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20">
        <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover" alt="Luxury Skincare">
            <div class="absolute inset-0 bg-gradient-to-r from-cream-100/80 via-cream-100/20 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="max-w-2xl" data-aos="fade-up" data-aos-duration="1000">
                <span class="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">Ethereal Glow</span>
                <h1 class="text-7xl md:text-8xl font-serif leading-[0.9] mb-8">Skin that <br><span class="italic text-gray-500">speaks</span> for itself</h1>
                <p class="text-lg text-gray-700 mb-10 max-w-md leading-relaxed">
                    Dermatologist-tested, nature-infused formulas designed to bring your inner radiance to the surface.
                </p>
                <div class="flex items-center gap-6">
                    <button class="bg-luxury text-white px-10 py-5 rounded-full font-semibold hover:bg-gold transition-all duration-300 transform hover:-translate-y-1">Shop The Collection</button>
                    <button class="group flex items-center gap-3 font-semibold hover:text-gold transition">
                        Watch Film 
                        <span class="w-12 h-12 rounded-full border border-luxury flex items-center justify-center group-hover:bg-luxury group-hover:text-white transition">▶</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Bento Grid Categories -->
    <section class="py-24 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-end mb-12" data-aos="fade-up">
                <div>
                    <h2 class="text-4xl font-serif">Curated Collections</h2>
                </div>
                <a href="#" class="text-sm font-bold border-b-2 border-luxury pb-1">View All</a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                <div class="md:col-span-2 md:row-span-2 bento-item group" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Skincare">
                    <div class="absolute inset-0 bg-black/10 flex flex-col justify-end p-10">
                        <h3 class="text-white text-3xl font-serif mb-2">The Ritual</h3>
                        <p class="text-white/80 text-sm mb-4">Complete 5-step morning routine</p>
                        <button class="w-fit bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-luxury transition">Explore</button>
                    </div>
                </div>

                <div class="md:col-span-2 md:row-span-1 bento-item group" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Serums">
                    <div class="absolute inset-0 bg-rose-900/10 flex items-center justify-between p-10">
                        <h3 class="text-white text-3xl font-serif">Pure Serums</h3>
                        <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-luxury">→</div>
                    </div>
                </div>

                <div class="md:col-span-1 md:row-span-1 bento-item group" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="Candles">
                    <div class="absolute inset-0 bg-black/20 flex items-end p-6">
                        <h3 class="text-white text-xl font-serif">Self Care</h3>
                    </div>
                </div>

                <div class="md:col-span-1 md:row-span-1 bento-item group" data-aos="fade-up" data-aos-delay="300">
                    <img src="https://images.unsplash.com/photo-1590156221170-cc3d399c054c?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" alt="New Drops">
                    <div class="absolute inset-0 bg-gold/10 flex items-end p-6">
                        <h3 class="text-white text-xl font-serif">New Drops</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Showcase -->
    <section class="py-24 bg-cream-100">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-center text-4xl font-serif mb-16" data-aos="fade-up">Most Coveted</h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Product 1 -->
                <div class="product-card group" data-aos="fade-up" data-aos-delay="100">
                    <div class="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                        <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Product">
                        <div class="quick-add absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 transition-all duration-300">
                            <button class="w-full bg-white py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-luxury hover:text-white transition">Quick Add +</button>
                        </div>
                        <span class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Bestseller</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-1">Velvet Cleansing Milk</h3>
                    <p class="text-gray-500 text-sm mb-3">Soothing & Nourishing</p>
                    <p class="font-bold">$42.00</p>
                </div>

                <!-- Product 2 -->
                <div class="product-card group" data-aos="fade-up" data-aos-delay="200">
                    <div class="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Product">
                        <div class="quick-add absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 transition-all duration-300">
                            <button class="w-full bg-white py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-luxury hover:text-white transition">Quick Add +</button>
                        </div>
                    </div>
                    <h3 class="font-semibold text-lg mb-1">Lumiere Face Oil</h3>
                    <p class="text-gray-500 text-sm mb-3">24k Gold Infused</p>
                    <p class="font-bold">$88.00</p>
                </div>

                <!-- Product 3 -->
                <div class="product-card group" data-aos="fade-up" data-aos-delay="300">
                    <div class="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                        <img src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Product">
                        <div class="quick-add absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 transition-all duration-300">
                            <button class="w-full bg-white py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-luxury hover:text-white transition">Quick Add +</button>
                        </div>
                        <span class="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">New</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-1">Aura Hydration Mist</h3>
                    <p class="text-gray-500 text-sm mb-3">Rosewater & Aloe</p>
                    <p class="font-bold">$34.00</p>
                </div>

                <!-- Product 4 -->
                <div class="product-card group" data-aos="fade-up" data-aos-delay="400">
                    <div class="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                        <img src="https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="Product">
                        <div class="quick-add absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 transition-all duration-300">
                            <button class="w-full bg-white py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-luxury hover:text-white transition">Quick Add +</button>
                        </div>
                    </div>
                    <h3 class="font-semibold text-lg mb-1">Night Repair Elixir</h3>
                    <p class="text-gray-500 text-sm mb-3">Retinol & Bakuchiol</p>
                    <p class="font-bold">$96.00</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Brand Philosophy -->
    <section class="py-24 bg-luxury text-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
                <h2 class="text-5xl font-serif mb-8 leading-tight">Science backed, <br><span class="italic text-gold">Soul balanced.</span></h2>
                <div class="space-y-8">
                    <div class="flex gap-6">
                        <div class="text-gold text-2xl font-serif italic">01.</div>
                        <div>
                            <h4 class="text-xl font-semibold mb-2">Vegan & Cruelty Free</h4>
                            <p class="text-gray-400">We never test on animals and our packaging is 100% recyclable glass.</p>
                        </div>
                    </div>
                    <div class="flex gap-6">
                        <div class="text-gold text-2xl font-serif italic">02.</div>
                        <div>
                            <h4 class="text-xl font-semibold mb-2">Bio-Active Ingredients</h4>
                            <p class="text-gray-400">Concentrated botanicals that work in harmony with your skin's natural pH.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative" data-aos="fade-left">
                <img src="https://images.unsplash.com/photo-1559591937-e62030c61eec?auto=format&fit=crop&q=80&w=800" class="rounded-[4rem] rotate-3 shadow-2xl" alt="Model">
                <div class="absolute -bottom-10 -left-10 bg-gold p-8 rounded-full w-40 h-40 flex items-center text-center leading-tight font-bold text-luxury italic animate-pulse">
                    Awarded Beauty of 2024
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white pt-24 pb-12 border-t border-cream-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div class="col-span-1 md:col-span-1">
                    <a href="#" class="text-2xl font-serif font-bold tracking-tighter mb-6 block">LUMIÈRE</a>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6">
                        Sign up for our newsletter to receive 15% off your first order and exclusive access to new launches.
                    </p>
                    <div class="flex gap-2">
                        <input type="email" placeholder="Email address" class="bg-cream-100 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-gold outline-none w-full">
                        <button class="bg-luxury text-white p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-[0.2em] mb-8">Shop</h4>
                    <ul class="space-y-4 text-sm text-gray-600">
                        <li><a href="#" class="hover:text-gold transition">Face</a></li>
                        <li><a href="#" class="hover:text-gold transition">Body</a></li>
                        <li><a href="#" class="hover:text-gold transition">Sets & Gifts</a></li>
                        <li><a href="#" class="hover:text-gold transition">Lumiere Journal</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-[0.2em] mb-8">Support</h4>
                    <ul class="space-y-4 text-sm text-gray-600">
                        <li><a href="#" class="hover:text-gold transition">Shipping & Returns</a></li>
                        <li><a href="#" class="hover:text-gold transition">Track Order</a></li>
                        <li><a href="#" class="hover:text-gold transition">Contact Us</a></li>
                        <li><a href="#" class="hover:text-gold transition">Stockists</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-[0.2em] mb-8">Follow</h4>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-luxury hover:text-white transition">In</a>
                        <a href="#" class="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-luxury hover:text-white transition">Ti</a>
                        <a href="#" class="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-luxury hover:text-white transition">Pi</a>
                    </div>
                </div>
            </div>
            <div class="pt-8 border-t border-cream-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <p>© 2024 Lumiere Cosmetics Inc.</p>
                <div class="flex gap-8">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-quart'
        });
    </script>
</body>
</html>