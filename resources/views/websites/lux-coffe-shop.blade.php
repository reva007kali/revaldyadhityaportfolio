<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aroma Bliss | Premium Coffee House</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        coffee: {
                            50: '#fdf8f6',
                            100: '#f2e8e5',
                            200: '#eaddd7',
                            300: '#e0c1b3',
                            400: '#d3a28e',
                            600: '#967259', // Primary Brown
                            700: '#634832', // Darker Brown
                            800: '#3d2b1f', // Espresso
                            900: '#261c15', // Deep Bean
                        },
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .glass-nav {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(150, 114, 89, 0.1);
        }
        .bento-item {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-item:hover {
            transform: translateY(-5px);
        }
    </style>
</head>
<body class="bg-coffee-50 font-sans text-coffee-900 overflow-x-hidden">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-nav">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-serif font-bold text-coffee-800 tracking-tight">AROMA<span class="text-coffee-600">BLISS</span></div>
            <div class="hidden md:flex space-x-8 font-medium">
                <a href="#home" class="hover:text-coffee-600 transition">Home</a>
                <a href="#about" class="hover:text-coffee-600 transition">Our Story</a>
                <a href="#menu" class="hover:text-coffee-600 transition">Menu</a>
                <a href="#gallery" class="hover:text-coffee-600 transition">Gallery</a>
            </div>
            <button class="bg-coffee-700 text-white px-6 py-2 rounded-full hover:bg-coffee-800 transition-all shadow-lg hover:shadow-coffee-300">
                Order Now
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center pt-20">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" class="w-full h-full object-cover opacity-20" alt="Coffee background">
            <div class="absolute inset-0 bg-gradient-to-b from-coffee-50/0 via-coffee-50/50 to-coffee-50"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
                <span class="text-coffee-600 font-semibold tracking-widest uppercase text-sm mb-4 block">Crafted with passion</span>
                <h1 class="text-6xl md:text-8xl font-serif text-coffee-900 leading-tight mb-6">
                    Better Days <br> Start With <span class="italic text-coffee-700">Coffee</span>
                </h1>
                <p class="text-lg text-coffee-700 mb-8 max-w-md">
                    Experience the art of roasting and the warmth of a perfect cup in every sip. Locally sourced, ethically roasted.
                </p>
                <div class="flex gap-4">
                    <button class="bg-coffee-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-coffee-900 transition shadow-xl">Explore Menu</button>
                    <button class="border-2 border-coffee-800 text-coffee-800 px-8 py-4 rounded-xl font-bold hover:bg-coffee-800 hover:text-white transition">Visit Us</button>
                </div>
            </div>
            <div class="relative" data-aos="zoom-in" data-aos-duration="1200">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" alt="Latte Art" class="rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div class="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block" data-aos="fade-up" data-aos-delay="400">
                    <div class="flex items-center gap-4">
                        <div class="bg-coffee-100 p-3 rounded-full">☕</div>
                        <div>
                            <p class="font-bold text-coffee-900">100% Organic</p>
                            <p class="text-sm text-coffee-600">Arabica Beans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bento Grid Gallery Section -->
    <section id="gallery" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-serif text-coffee-900 mb-4" data-aos="fade-up">Atmosphere & Art</h2>
                <div class="w-24 h-1 bg-coffee-600 mx-auto" data-aos="fade-up" data-aos-delay="100"></div>
            </div>

            <!-- Bento Grid -->
            <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bento-item group" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Shop Interior">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-8">
                        <h3 class="text-white text-2xl font-serif">Cozy Corners</h3>
                    </div>
                </div>
                
                <div class="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bento-item group" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Coffee beans">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center">
                        <span class="text-white font-medium uppercase tracking-widest">Premium Beans</span>
                    </div>
                </div>

                <div class="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-3xl bento-item group" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Espresso Shot">
                    <div class="absolute inset-0 bg-gradient-to-t from-coffee-900/80 to-transparent flex items-end p-8">
                        <p class="text-white/80 text-sm">Every shot is calibrated for perfection.</p>
                    </div>
                </div>

                <div class="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl bento-item group" data-aos="fade-up" data-aos-delay="300">
                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Pastry">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center">
                        <span class="text-white font-medium uppercase tracking-widest">Fresh Pastries</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Highlights -->
    <section id="menu" class="py-24 bg-coffee-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex justify-between items-end mb-16">
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-serif text-coffee-900 mb-2">Our Menu Highlights</h2>
                    <p class="text-coffee-600">From classic espresso to our seasonal specials.</p>
                </div>
                <a href="#" class="text-coffee-800 font-bold border-b-2 border-coffee-800 pb-1 hover:text-coffee-600 hover:border-coffee-600 transition">View Full Menu</a>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Item 1 -->
                <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-20 h-20 bg-coffee-100 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">☕</div>
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-bold text-coffee-900">Caramel Macchiato</h3>
                        <span class="text-coffee-600 font-bold">$5.50</span>
                    </div>
                    <p class="text-coffee-700 text-sm">Freshly steamed milk with vanilla-flavored syrup marked with espresso.</p>
                </div>
                <!-- Item 2 -->
                <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-20 h-20 bg-coffee-100 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">🥛</div>
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-bold text-coffee-900">Flat White</h3>
                        <span class="text-coffee-600 font-bold">$4.75</span>
                    </div>
                    <p class="text-coffee-700 text-sm">Smooth ristretto shots of espresso and steamed whole milk.</p>
                </div>
                <!-- Item 3 -->
                <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition group" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-20 h-20 bg-coffee-100 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">🥐</div>
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-bold text-coffee-900">Almond Croissant</h3>
                        <span class="text-coffee-600 font-bold">$3.95</span>
                    </div>
                    <p class="text-coffee-700 text-sm">Buttery, flaky pastry filled with sweet almond cream.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-coffee-900 text-coffee-50 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div class="relative" data-aos="fade-right">
                <div class="absolute -top-4 -left-4 w-64 h-64 border-4 border-coffee-600 rounded-3xl z-0"></div>
                <img src="https://images.unsplash.com/photo-1497933321021-949f42771568?auto=format&fit=crop&q=80&w=800" class="relative z-10 rounded-3xl shadow-2xl" alt="Roasting Process">
            </div>
            <div data-aos="fade-left">
                <h2 class="text-5xl font-serif mb-8">Roasted with Heart, <br>Served with Soul</h2>
                <p class="text-coffee-300 text-lg mb-6">
                    Founded in 2012, Aroma Bliss began as a small cart on the corner of 5th street. Our mission has always been simple: to source the highest quality beans and roast them to highlight their unique character.
                </p>
                <div class="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 class="text-3xl font-serif text-coffee-400">12+</h4>
                        <p class="text-sm uppercase tracking-widest text-coffee-500">Years Experience</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-serif text-coffee-400">24</h4>
                        <p class="text-sm uppercase tracking-widest text-coffee-500">Farm Partners</p>
                    </div>
                </div>
                <button class="bg-coffee-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-coffee-500 transition shadow-lg">Learn Our Process</button>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-4xl font-serif text-coffee-900 mb-4" data-aos="fade-up">What Our Locals Say</h2>
                <p class="text-coffee-600" data-aos="fade-up" data-aos-delay="100">The community is at the heart of everything we do.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-coffee-50 p-10 rounded-[2.5rem] relative" data-aos="fade-up">
                    <span class="text-6xl text-coffee-200 absolute top-8 left-8 font-serif">“</span>
                    <div class="relative z-10">
                        <p class="text-xl text-coffee-800 mb-8 italic">"The best atmosphere for working remotely. The baristas know exactly how I like my latte, and the background jazz is just perfect."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-coffee-300 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=1" alt="Avatar">
                            </div>
                            <div>
                                <h4 class="font-bold">Sarah Jenkins</h4>
                                <p class="text-sm text-coffee-600">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-coffee-800 p-10 rounded-[2.5rem] relative text-white" data-aos="fade-up" data-aos-delay="200">
                    <span class="text-6xl text-coffee-700 absolute top-8 left-8 font-serif">“</span>
                    <div class="relative z-10">
                        <p class="text-xl text-coffee-100 mb-8 italic">"Their Ethiopian single-origin pour-over is life-changing. You can really taste the notes of blueberry and jasmine."</p>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-coffee-600 overflow-hidden">
                                <img src="https://i.pravatar.cc/150?u=2" alt="Avatar">
                            </div>
                            <div>
                                <h4 class="font-bold">Michael Chen</h4>
                                <p class="text-sm text-coffee-400">Coffee Enthusiast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-coffee-900 text-coffee-200 py-16 border-t border-coffee-800">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div class="col-span-1 md:col-span-1">
                <div class="text-2xl font-serif font-bold text-white mb-6">AROMA<span class="text-coffee-600">BLISS</span></div>
                <p class="text-coffee-400 leading-relaxed">
                    Crafting extraordinary coffee experiences for the dreamers and the doers.
                </p>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6 uppercase tracking-widest text-sm">Visit Us</h4>
                <p class="text-coffee-400">123 Espresso Way</p>
                <p class="text-coffee-400">Brew City, BC 56789</p>
                <p class="mt-4 text-coffee-400">Mon - Fri: 7am - 8pm</p>
                <p class="text-coffee-400">Sat - Sun: 8am - 9pm</p>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
                <ul class="space-y-4">
                    <li><a href="#" class="hover:text-coffee-600 transition">Our Menu</a></li>
                    <li><a href="#" class="hover:text-coffee-600 transition">Coffee Subscription</a></li>
                    <li><a href="#" class="hover:text-coffee-600 transition">Wholesale</a></li>
                    <li><a href="#" class="hover:text-coffee-600 transition">Careers</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
                <p class="text-sm text-coffee-400 mb-4">Get brewing tips and first access to new roasts.</p>
                <form class="flex flex-col gap-2">
                    <input type="email" placeholder="Email Address" class="bg-coffee-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-coffee-600 outline-none">
                    <button class="bg-coffee-600 text-white font-bold py-2 rounded-lg hover:bg-coffee-700 transition">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-coffee-800 text-center text-coffee-500 text-sm">
            <p>&copy; 2024 Aroma Bliss Coffee House. All rights reserved.</p>
        </div>
    </footer>

    <!-- AOS Script Integration -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-quad'
        });
    </script>
</body>
</html>