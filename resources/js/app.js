import './bootstrap';
import { init3DBackground } from './background-3d';

document.addEventListener('DOMContentLoaded', () => {
    init3DBackground();
});

document.addEventListener('livewire:navigated', () => {
    // Check if the container exists and isn't already populated
    const container = document.getElementById('canvas-container');
    
    // If container exists but has no canvas, re-init
    // If container doesn't exist (navigated to a page without it), cleanup
    if (container) {
        if (!container.querySelector('canvas')) {
            init3DBackground();
        }
    } else {
        if (window.cleanup3D) {
            window.cleanup3D();
        }
    }
});
