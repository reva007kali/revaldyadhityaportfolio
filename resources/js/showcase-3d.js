import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import gsap from 'gsap';

let scene, camera, renderer, controls;
let raycaster, mouse;
let interactiveObjects = [];
let particlesMesh;
let animationId;

export function initShowcase3D() {
    const container = document.getElementById('showcase-canvas');
    if (!container) return;

    // Clean up if re-initialized
    if (renderer) {
        renderer.dispose();
        container.innerHTML = '';
    }

    // --- SCENE SETUP ---
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // --- CONTROLS ---
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffaa00, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const dirLight = new THREE.DirectionalLight(0x0088ff, 1);
    dirLight.position.set(-20, 20, 20);
    scene.add(dirLight);

    // --- PARTICLES ---
    const particlesGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0xff6600); // Orange
    const color2 = new THREE.Color(0x00aaff); // Blue

    for(let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        posArray[i3] = (Math.random() - 0.5) * 200;
        posArray[i3+1] = (Math.random() - 0.5) * 200;
        posArray[i3+2] = (Math.random() - 0.5) * 200;

        const mixedColor = color1.clone().lerp(color2, Math.random());
        colorsArray[i3] = mixedColor.r;
        colorsArray[i3+1] = mixedColor.g;
        colorsArray[i3+2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- INTERACTIVE GEOMETRY ---
    const shapes = [
        new THREE.IcosahedronGeometry(1, 0),
        new THREE.OctahedronGeometry(1, 0),
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16)
    ];

    const skills = [
        { name: 'Three.js', color: 0xffffff },
        { name: 'WebGL', color: 0x00aaff },
        { name: 'GLSL', color: 0xff00ff },
        { name: 'React Three Fiber', color: 0x61dafb },
        { name: 'Blender', color: 0xe87d0d },
        { name: 'Physics', color: 0x44ff44 }
    ];

    interactiveObjects = [];

    skills.forEach((skill, index) => {
        const geometry = shapes[index % shapes.length];
        const material = new THREE.MeshStandardMaterial({ 
            color: skill.color, 
            roughness: 0.2,
            metalness: 0.8,
            emissive: skill.color,
            emissiveIntensity: 0.2
        });

        const mesh = new THREE.Mesh(geometry, material);
        
        // Random position in a sphere
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const r = 15;

        mesh.position.setFromSphericalCoords(r, phi, theta);
        mesh.userData = { name: skill.name, originalScale: 1, originalColor: skill.color };
        
        scene.add(mesh);
        interactiveObjects.push(mesh);
    });

    // --- RAYCASTER ---
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', onWindowResize);

    animate();
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

let hoveredObj = null;

function onClick(event) {
    if (hoveredObj) {
        // Trigger event
        const detail = hoveredObj.userData.name;
        // Maybe open a modal or show details
        console.log("Clicked:", detail);
        
        gsap.to(hoveredObj.rotation, {
            y: hoveredObj.rotation.y + Math.PI * 2,
            duration: 1,
            ease: "back.out(2)"
        });
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    animationId = requestAnimationFrame(animate);
    
    controls.update();

    const time = Date.now() * 0.001;

    // Animate Particles
    particlesMesh.rotation.y = time * 0.05;

    // Animate Objects
    interactiveObjects.forEach((obj, i) => {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.position.y += Math.sin(time + i) * 0.02; // Floating effect
    });

    // Raycasting
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
        if (hoveredObj !== intersects[0].object) {
            // Mouse Enter
            if (hoveredObj) resetObj(hoveredObj);
            
            hoveredObj = intersects[0].object;
            document.body.style.cursor = 'pointer';
            
            gsap.to(hoveredObj.scale, { x: 2, y: 2, z: 2, duration: 0.4, ease: "elastic.out(1, 0.3)" });
            hoveredObj.material.emissiveIntensity = 1;
            
            // Show Tooltip/Label (Simple DOM element for now)
            showTooltip(hoveredObj);
        }
    } else {
        if (hoveredObj) {
            // Mouse Leave
            resetObj(hoveredObj);
            hoveredObj = null;
            document.body.style.cursor = 'default';
            hideTooltip();
        }
    }

    renderer.render(scene, camera);
}

function resetObj(obj) {
    gsap.to(obj.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
    obj.material.emissiveIntensity = 0.2;
}

// Simple Tooltip logic
let tooltipEl;

function showTooltip(obj) {
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.color = 'white';
        tooltipEl.style.background = 'rgba(0,0,0,0.8)';
        tooltipEl.style.padding = '8px 12px';
        tooltipEl.style.borderRadius = '8px';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.fontWeight = 'bold';
        tooltipEl.style.textTransform = 'uppercase';
        tooltipEl.style.letterSpacing = '1px';
        tooltipEl.style.border = '1px solid rgba(255,255,255,0.2)';
        tooltipEl.style.zIndex = '1000';
        document.body.appendChild(tooltipEl);
    }
    
    tooltipEl.innerText = obj.userData.name;
    tooltipEl.style.opacity = '1';
    
    updateTooltipPos();
}

function hideTooltip() {
    if (tooltipEl) tooltipEl.style.opacity = '0';
}

function updateTooltipPos() {
    if (hoveredObj && tooltipEl) {
        const vector = new THREE.Vector3();
        hoveredObj.getWorldPosition(vector);
        vector.project(camera);
        
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
        
        tooltipEl.style.left = `${x}px`;
        tooltipEl.style.top = `${y - 40}px`;
        tooltipEl.style.transform = 'translate(-50%, -100%)';
        
        requestAnimationFrame(updateTooltipPos);
    }
}

export function cleanupShowcase3D() {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('click', onClick);
    window.removeEventListener('resize', onWindowResize);
    
    if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
    }
    
    if (tooltipEl && tooltipEl.parentNode) {
        tooltipEl.parentNode.removeChild(tooltipEl);
        tooltipEl = null;
    }
}
