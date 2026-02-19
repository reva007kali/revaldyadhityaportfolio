import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import gsap from "gsap";

let renderer, scene, camera, animationId;
let activeModel;

const targetState = {
    position: new THREE.Vector3(0, -1.3, 0),
    rotation: new THREE.Euler(0, Math.PI / 2, 0),
};

export function init3DBackground() {
    const container = document.getElementById("canvas-container");
    if (!container) return;

    // --- CLEANUP ---
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode)
            renderer.domElement.parentNode.removeChild(renderer.domElement);
    }

    // --- SCENE SETUP ---
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
    );
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- LIGHTING & COLOR CALIBRATION (FIX DARKNESS) ---
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8; // Ditingkatkan agar lebih cerah
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // --- ENVIRONMENT MAP ---
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04,
    ).texture;
    scene.environmentIntensity = 2.0; // Memberikan pantulan cahaya yang lebih kuat

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Fill light dasar
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 4); // Key light utama
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.set(2048, 2048);
    scene.add(mainLight);

    const pointLight = new THREE.PointLight(0xffffff, 50); // Spot light tambahan untuk detail
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    const fillLight = new THREE.DirectionalLight(0x0088ff, 2); // Rim light biru
    fillLight.position.set(-5, 0, 5);
    scene.add(fillLight);

    // --- LOAD MODEL ---
    const mtlLoader = new MTLLoader();
    mtlLoader.load("/untitled.mtl", (materials) => {
        materials.preload();

        const loader = new OBJLoader();
        loader.setMaterials(materials);
        loader.load(
            "/untitled.obj",
            (object) => {
                activeModel = object;

                activeModel.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        // Memastikan material merespons cahaya dengan benar
                        if (child.material) {
                            child.material.envMapIntensity = 1.5;
                        }
                    }
                });

                activeModel.scale.set(1.6, 1.6, 1.6);

                const box = new THREE.Box3().setFromObject(activeModel);
                const center = box.getCenter(new THREE.Vector3());
                activeModel.position.sub(center);

                // Initial Position
                activeModel.position.set(0, 0, 8);
                activeModel.rotation.set(0, 0, 0);

                targetState.position.copy(activeModel.position);
                targetState.rotation.copy(activeModel.rotation);

                scene.add(activeModel);
            },
            undefined,
            (error) => console.error("Error loading model:", error)
        );
    });

    // --- SCROLL INTERACTION ---
    const sections = [
        { id: "home", pos: { x: 0, y: 0, z: 8 }, rot: { x: 0, y: 0, z: 0 }, text: "Hello! I'm your guide. Welcome to Revaldy's portfolio!" },
        { id: "works-swiper", pos: { x: 30, y: 1, z: -1 }, rot: { x: 0, y: -7.3, z: 0 }, text: "Here are some highlighted projects." },
        { id: "websites-grid", pos: { x: -30, y: 2, z: 4 }, rot: { x: 0, y: 0.8, z: 0 }, text: "Explore these website designs." },
        { id: "servicesHeader", pos: { x: 30, y: 2.5, z: 4 }, rot: { x: 0, y: -0.9, z: -0.2 }, text: "We offer specialized solutions." },
        { id: "servicesScroll", pos: { x: 30, y: 2.5, z: 4 }, rot: { x: 0, y: -0.9, z: -0.2 }, text: "We offer specialized solutions." },
        { id: "features", pos: { x: 0, y: 0, z: -8 }, rot: { x: 0, y: 0, z: 0 } },
        { id: "about", pos: { x: -35, y: 0, z: -1 }, rot: { x: 0, y: 0.7, z: 0 }, text: "A little story about the journey." },
        { id: "pricing", pos: { x: 0, y: 0, z: 20 }, rot: { x: 0, y: 0, z: 0 } },
        { id: "testimonials", pos: { x: 30, y: 1, z: 0 }, rot: { x: 0, y: -0.8, z: 0 }, text: "See what clients say about us." },
        { id: "contact", pos: { x: -15, y: -4, z: 30 }, rot: { x: 0, y: 7.3, z: 0 } },
        { id: "footer", pos: { x: 35, y: -4, z: 0 }, rot: { x: 0, y: -0.8, z: 0 }, text: "Thanks for visiting!" },
    ];

    const bubbleEl = document.getElementById("robot-bubble");
    const bubbleText = document.getElementById("robot-text");

    const updateBubblePosition = () => {
        if (!activeModel || !bubbleEl || !camera) return;
        const vector = new THREE.Vector3();
        activeModel.getWorldPosition(vector);
        vector.y += 1.8;
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

        bubbleEl.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
        bubbleEl.style.opacity = vector.z > 1 ? 0 : 1;
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && activeModel) {
                const config = sections.find((s) => s.id === entry.target.id);
                if (config) {
                    gsap.to(targetState.position, { ...config.pos, duration: 2, ease: "power2.inOut" });
                    gsap.to(targetState.rotation, { ...config.rot, duration: 2, ease: "power2.inOut" });

                    if (bubbleEl && bubbleText && config.text) {
                        if (bubbleText.innerText !== config.text) {
                            bubbleEl.style.opacity = "0";
                            setTimeout(() => {
                                bubbleText.innerText = config.text;
                                bubbleEl.style.opacity = "1";
                            }, 300);
                        }
                    } else if (bubbleEl) {
                        bubbleEl.style.opacity = "0";
                    }
                }
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
    });

    let mouseX = 0, mouseY = 0;
    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.008;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.008;
    });

    function animate() {
        animationId = requestAnimationFrame(animate);
        if (activeModel) {
            const time = Date.now() * 0.001;
            const bobY = Math.sin(time * 1.5) * 0.15;
            const driftX = Math.sin(time * 0.8) * 0.1;
            const driftZ = Math.cos(time * 0.5) * 0.1;

            activeModel.position.x = targetState.position.x + driftX;
            activeModel.position.y = targetState.position.y + bobY;
            activeModel.position.z = targetState.position.z + driftZ;

            activeModel.rotation.x = targetState.rotation.x + Math.sin(time * 1.2) * 0.05 + mouseY * 0.1;
            activeModel.rotation.y = targetState.rotation.y + Math.cos(time * 0.9) * 0.05 + mouseX * 0.1;
            activeModel.rotation.z = targetState.rotation.z + Math.sin(time * 0.7) * 0.02;
        }
        renderer.render(scene, camera);
        updateBubblePosition();
    }

    animate();

    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    window.cleanup3D = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", onResize);
        observer.disconnect();
        if (renderer && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
    };
}