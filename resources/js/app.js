import './bootstrap';
import { init3DBackground } from './background-3d';
import { initShowcase3D, cleanupShowcase3D } from './showcase-3d';

document.addEventListener('DOMContentLoaded', () => {
    // Determine which 3D scene to load based on the page content
    handle3DScene();
});

document.addEventListener('livewire:navigated', () => {
    handle3DScene();
});

function handle3DScene() {
    const showcaseCanvas = document.getElementById('showcase-canvas');
    const heroCanvas = document.getElementById('canvas-container');

    // 1. Showcase Page Logic
    if (showcaseCanvas) {
        // Cleanup background if it exists (though it shouldn't be on this page)
        if (window.cleanup3D) window.cleanup3D();
        
        // Initialize Showcase
        initShowcase3D();
    } 
    // 2. Default/Home Page Logic
    else if (heroCanvas) {
        // Cleanup showcase if it was running
        cleanupShowcase3D();

        // Initialize Background if not already running
        if (!heroCanvas.querySelector('canvas')) {
            init3DBackground();
        }
    } 
    // 3. Other Pages (Cleanup all)
    else {
        if (window.cleanup3D) window.cleanup3D();
        cleanupShowcase3D();
    }
}
