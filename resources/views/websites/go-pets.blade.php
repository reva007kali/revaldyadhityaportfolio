<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PawAdopt | Find Your Best Friend</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .blue-accent { color: #3b82f6; }
        .bg-blue-accent { background-color: #3b82f6; }
        .btn-hover:hover { transform: translateY(-2px); transition: all 0.2s; }
    </style>
</head>
<body class="bg-slate-50 text-slate-800">

    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <i data-lucide="paw-print"></i>
                <span>PawAdopt</span>
            </div>
            <div class="hidden md:flex gap-8 font-medium text-slate-600">
                <a href="#" class="hover:text-blue-600 transition">Find a Pet</a>
                <a href="#" class="hover:text-blue-600 transition">How it Works</a>
                <a href="#" class="hover:text-blue-600 transition">About Us</a>
                <a href="#" class="bg-blue-600 text-white px-5 py-2 rounded-full text-sm btn-hover">Donate</a>
            </div>
            <button class="md:hidden text-slate-600"><i data-lucide="menu"></i></button>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
            <span class="text-blue-600 font-semibold tracking-wide uppercase text-sm">Waiting for you</span>
            <h1 class="text-5xl md:text-6xl font-extrabold mt-4 leading-tight">
                Find your new <br><span class="text-blue-600">best friend</span> today.
            </h1>
            <p class="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">
                We bridge the gap between loving homes and pets in need. Browse hundreds of adorable companions looking for their forever family.
            </p>
            <div class="mt-10 flex gap-4">
                <a href="#browse" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 btn-hover">Browse Pets</a>
                <a href="#" class="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-700 btn-hover flex items-center gap-2">
                    Learn More <i data-lucide="arrow-right" class="w-4"></i>
                </a>
            </div>
        </div>
        <div class="relative">
            <div class="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
                 alt="Happy Dog" class="rounded-3xl shadow-2xl relative z-10 border-8 border-white">
        </div>
    </header>

    <!-- Filter/Category Section -->
    <section id="browse" class="max-w-7xl mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <h2 class="text-3xl font-bold">Available Pets</h2>
            <div class="flex gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-100">
                <button class="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium">All</button>
                <button class="px-6 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition">Dogs</button>
                <button class="px-6 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-medium transition">Cats</button>
            </div>
        </div>

        <!-- Pet Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div class="relative h-64 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">Recently Added</span>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold">Cooper</h3>
                        <span class="text-slate-400 text-sm">2 Years</span>
                    </div>
                    <div class="flex items-center text-slate-500 text-sm gap-1 mb-6">
                        <i data-lucide="map-pin" class="w-4"></i> New York, NY
                    </div>
                    <button class="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">View Details</button>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div class="relative h-64 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold">Luna</h3>
                        <span class="text-slate-400 text-sm">6 Months</span>
                    </div>
                    <div class="flex items-center text-slate-500 text-sm gap-1 mb-6">
                        <i data-lucide="map-pin" class="w-4"></i> Austin, TX
                    </div>
                    <button class="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">View Details</button>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div class="relative h-64 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold">Max</h3>
                        <span class="text-slate-400 text-sm">4 Years</span>
                    </div>
                    <div class="flex items-center text-slate-500 text-sm gap-1 mb-6">
                        <i data-lucide="map-pin" class="w-4"></i> Seattle, WA
                    </div>
                    <button class="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">View Details</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <footer class="bg-white mt-24 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="bg-blue-600 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-blue-200">
                <div class="max-w-md text-center md:text-left mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold mb-4">Stay paw-sitive!</h2>
                    <p class="text-blue-100">Get updates on new pets and success stories delivered to your inbox weekly.</p>
                </div>
                <div class="flex w-full md:w-auto gap-2 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
                    <input type="email" placeholder="Email address" class="bg-transparent px-4 py-2 focus:outline-none placeholder:text-blue-200 w-full md:w-64">
                    <button class="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold">Subscribe</button>
                </div>
            </div>
            <p class="text-center mt-12 text-slate-400 text-sm">© 2026 PawAdopt. Made with 💙 for furry friends.</p>
        </div>
    </footer>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();
    </script>
</body>
</html>