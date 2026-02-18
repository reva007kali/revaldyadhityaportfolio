import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],

    server: {
        host: '0.0.0.0', // Izinkan akses dari luar container
        hmr: {
            host: 'localhost', // Di Project IDX kadang perlu diset spesifik, tapi coba default dulu
        },
        allowedHosts: true, // Izinkan semua host (penting untuk cloud IDE)
        cors: true, // Izinkan resource diload cross-origin
    },
});
