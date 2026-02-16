<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CC Bohay Catering | Cita Rasa Nusantara Premium</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#fffbeb',
                            100: '#fef3c7',
                            500: '#f59e0b', // Amber (Rempah)
                            600: '#d97706',
                            800: '#92400e',
                            900: '#78350f',
                        },
                        fresh: {
                            600: '#059669', // Emerald (Segar)
                            900: '#064e3b',
                        }
                    },
                    fontFamily: {
                        sans: ['Lexend', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .glass-header {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(245, 158, 11, 0.2);
        }
        .bento-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-card:hover {
            transform: scale(1.02);
        }
    </style>
</head>
<body class="bg-brand-50 text-slate-900 font-sans overflow-x-hidden">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-header">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="bg-brand-600 p-2 rounded-lg">
                    <span class="text-white font-bold text-xl">CC</span>
                </div>
                <span class="text-2xl font-serif font-bold text-brand-900 tracking-tight">Bohay <span class="text-brand-600 italic">Catering</span></span>
            </div>
            <div class="hidden md:flex space-x-8 font-medium text-brand-900">
                <a href="#home" class="hover:text-brand-600 transition">Beranda</a>
                <a href="#layanan" class="hover:text-brand-600 transition">Layanan</a>
                <a href="#menu" class="hover:text-brand-600 transition">Menu Andalan</a>
                <a href="#paket" class="hover:text-brand-600 transition">Paket Harga</a>
            </div>
            <a href="https://wa.me/628123456789" class="bg-fresh-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-fresh-900 transition shadow-lg flex items-center gap-2">
                <span>Pesan Sekarang</span>
            </a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-r from-brand-50 via-brand-50/80 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=2070" class="w-full h-full object-cover" alt="Indonesian Food Spread">
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-20">
            <div class="max-w-2xl" data-aos="fade-right" data-aos-duration="1000">
                <span class="bg-brand-100 text-brand-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 inline-block">
                    Katering No. 1 di Kota Anda
                </span>
                <h1 class="text-6xl md:text-7xl font-serif font-bold text-brand-900 leading-[1.1] mb-6">
                    Lezatnya Masakan <span class="text-brand-600">Nusantara</span> di Setiap Acara
                </h1>
                <p class="text-lg text-slate-700 mb-8 leading-relaxed">
                    CC Bohay Catering menghadirkan hidangan tradisional Indonesia dengan bahan premium, porsi mantap (bohay), dan rasa yang tak terlupakan untuk momen spesial Anda.
                </p>
                <div class="flex flex-wrap gap-4">
                    <button class="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition shadow-2xl shadow-brand-200">Lihat Menu</button>
                    <button class="bg-white border-2 border-brand-200 text-brand-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-50 transition">Konsultasi Gratis</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Bento Grid Gallery -->
    <section id="menu" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-serif font-bold text-brand-900 mb-4">Eksplorasi Rasa Kami</h2>
                <p class="text-slate-600 max-w-xl mx-auto">Dari rendang yang empuk hingga tumpeng megah, setiap hidangan disiapkan dengan resep rahasia keluarga.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[600px]">
                <!-- Big Item -->
                <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2rem] bento-card group" data-aos="zoom-in">
                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Nasi Tumpeng">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent flex items-end p-8">
                        <div>
                            <span class="text-brand-400 font-bold uppercase tracking-tighter">Ikonik</span>
                            <h3 class="text-white text-3xl font-serif font-bold">Tumpeng Megah Nusantara</h3>
                        </div>
                    </div>
                </div>

                <!-- Medium Item 1 -->
                <div class="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] bento-card group" data-aos="zoom-in" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Sate Ayam">
                    <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h3 class="text-white text-xl font-bold">Sate Madura Bumbu Meresap</h3>
                    </div>
                </div>

                <!-- Medium Item 2 -->
                <div class="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-[2rem] bento-card group" data-aos="zoom-in" data-aos-delay="200">
                    <img src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Rendang">
                    <div class="absolute inset-0 bg-brand-900/40 p-6 flex flex-col justify-end">
                        <h3 class="text-white text-xl font-bold">Rendang Daging Premium</h3>
                        <p class="text-brand-200 text-sm">Dimasak 8 jam dengan rempah pilihan.</p>
                    </div>
                </div>

                <!-- Small Item -->
                <div class="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] bento-card group" data-aos="zoom-in" data-aos-delay="300">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Ayam Goreng">
                    <div class="absolute inset-0 bg-brand-600/20 group-hover:bg-brand-600/40 transition-colors flex items-center justify-center">
                        <span class="text-white font-bold">Aneka Sambal</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Packages Section -->
    <section id="paket" class="py-24 bg-brand-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-serif font-bold text-brand-900 mb-2">Pilihan Paket Katering</h2>
                    <p class="text-slate-600">Sesuaikan dengan kebutuhan acara Anda.</p>
                </div>
                <div class="flex gap-2 bg-brand-200 p-1.5 rounded-2xl" data-aos="fade-left">
                    <button class="bg-white text-brand-900 px-6 py-2 rounded-xl font-bold shadow-sm">Harian</button>
                    <button class="text-brand-800 px-6 py-2 rounded-xl font-bold">Event/Wedding</button>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Paket 1 -->
                <div class="bg-white p-8 rounded-[2.5rem] border border-brand-100 hover:shadow-2xl transition group" data-aos="fade-up">
                    <div class="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition">🍱</div>
                    <h3 class="text-2xl font-bold text-brand-900 mb-2">Nasi Kotak Bohay</h3>
                    <p class="text-slate-500 mb-6 text-sm">Cocok untuk meeting kantor atau syukuran rumah.</p>
                    <div class="text-3xl font-bold text-brand-600 mb-8">Rp 25.000 <span class="text-sm font-normal text-slate-400">/pax</span></div>
                    <ul class="space-y-4 mb-8 text-slate-700">
                        <li class="flex items-center gap-2">✅ Nasi Putih/Kuning</li>
                        <li class="flex items-center gap-2">✅ Ayam Bakar/Goreng</li>
                        <li class="flex items-center gap-2">✅ 2 Macam Sayuran</li>
                        <li class="flex items-center gap-2">✅ Sambal & Kerupuk</li>
                    </ul>
                    <button class="w-full py-4 rounded-2xl border-2 border-brand-600 text-brand-600 font-bold hover:bg-brand-600 hover:text-white transition">Pilih Paket</button>
                </div>

                <!-- Paket 2 (Featured) -->
                <div class="bg-brand-900 p-8 rounded-[2.5rem] text-white transform md:-translate-y-6 shadow-2xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                    <div class="absolute top-0 right-0 bg-brand-600 px-6 py-2 rounded-bl-2xl font-bold text-xs">TERLARIS</div>
                    <div class="w-16 h-16 bg-brand-800 rounded-2xl flex items-center justify-center text-3xl mb-8">🥘</div>
                    <h3 class="text-2xl font-bold mb-2">Prasmanan Premium</h3>
                    <p class="text-brand-300 mb-6 text-sm">Layanan lengkap untuk pernikahan & pesta besar.</p>
                    <div class="text-3xl font-bold text-brand-500 mb-8">Rp 75.000 <span class="text-sm font-normal text-brand-400">/pax</span></div>
                    <ul class="space-y-4 mb-8 text-brand-100">
                        <li class="flex items-center gap-2">✨ Menu Utama Lengkap (6 Macam)</li>
                        <li class="flex items-center gap-2">✨ Meja & Dekorasi Buffet</li>
                        <li class="flex items-center gap-2">✨ Tim Waiter Profesional</li>
                        <li class="flex items-center gap-2">✨ Dessert & Minuman Segar</li>
                    </ul>
                    <button class="w-full py-4 rounded-2xl bg-brand-600 text-white font-bold hover:bg-brand-500 transition shadow-lg shadow-brand-900/50">Hubungi Admin</button>
                </div>

                <!-- Paket 3 -->
                <div class="bg-white p-8 rounded-[2.5rem] border border-brand-100 hover:shadow-2xl transition group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition">🍪</div>
                    <h3 class="text-2xl font-bold text-brand-900 mb-2">Snack Box Premium</h3>
                    <p class="text-slate-500 mb-6 text-sm">Jajanan pasar kualitas hotel bintang lima.</p>
                    <div class="text-3xl font-bold text-brand-600 mb-8">Rp 15.000 <span class="text-sm font-normal text-slate-400">/pax</span></div>
                    <ul class="space-y-4 mb-8 text-slate-700">
                        <li class="flex items-center gap-2">✅ 3 Macam Kue (Asin & Manis)</li>
                        <li class="flex items-center gap-2">✅ Air Mineral</li>
                        <li class="flex items-center gap-2">✅ Packaging Eksklusif</li>
                        <li class="flex items-center gap-2">✅ Custom Menu</li>
                    </ul>
                    <button class="w-full py-4 rounded-2xl border-2 border-brand-600 text-brand-600 font-bold hover:bg-brand-600 hover:text-white transition">Pilih Paket</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <h2 class="text-5xl font-serif font-bold text-brand-900 mb-6">Cerita Pelanggan <br>Setia Kami</h2>
                    <p class="text-lg text-slate-600 mb-8 italic">"Porsinya benar-benar 'bohay', rasanya authentic seperti masakan nenek. Tamu undangan saya semuanya puas!"</p>
                    <div class="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?u=a" class="w-16 h-16 rounded-full border-4 border-brand-100" alt="User">
                        <div>
                            <h4 class="font-bold text-brand-900 text-xl">Ibu Ratna Kumala</h4>
                            <p class="text-brand-600">Client Wedding & Arisan</p>
                        </div>
                    </div>
                </div>
                <div class="relative" data-aos="fade-left">
                    <div class="absolute -inset-4 bg-brand-100 rounded-[3rem] rotate-3"></div>
                    <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800" class="relative z-10 rounded-[3rem] shadow-2xl shadow-brand-200" alt="Plating">
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 md:col-span-1">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="bg-brand-600 p-2 rounded-lg">
                            <span class="text-white font-bold text-xl">CC</span>
                        </div>
                        <span class="text-2xl font-serif font-bold tracking-tight text-white">Bohay <span class="text-brand-500 italic">Catering</span></span>
                    </div>
                    <p class="text-brand-300 leading-relaxed">
                        Menyajikan kebahagiaan melalui hidangan Nusantara yang melimpah dan lezat sejak 2015.
                    </p>
                </div>
                <div>
                    <h4 class="font-bold mb-6 text-brand-500 uppercase tracking-widest text-sm">Kontak Kami</h4>
                    <p class="text-brand-200">Jl. Melati No. 45, Jakarta Selatan</p>
                    <p class="text-brand-200 mt-2">WhatsApp: +62 812-3456-7890</p>
                    <p class="text-brand-200">Email: halo@ccbohay.com</p>
                </div>
                <div>
                    <h4 class="font-bold mb-6 text-brand-500 uppercase tracking-widest text-sm">Media Sosial</h4>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition">IG</a>
                        <a href="#" class="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition">FB</a>
                        <a href="#" class="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition">TT</a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-6 text-brand-500 uppercase tracking-widest text-sm">Jam Operasional</h4>
                    <p class="text-brand-200">Setiap Hari: 08:00 - 20:00 WIB</p>
                    <p class="text-brand-400 text-xs mt-4">*Pemesanan katering minimal H-3 acara.</p>
                </div>
            </div>
            <div class="pt-8 border-t border-brand-800 text-center text-brand-400 text-sm">
                <p>&copy; 2024 CC Bohay Catering. Made with ❤️ for Indonesian Foodies.</p>
            </div>
        </div>
    </footer>

    <!-- AOS Script -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    </script>
</body>
</html>