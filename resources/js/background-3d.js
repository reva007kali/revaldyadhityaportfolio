import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import gsap from "gsap";

let renderer, scene, camera, animationId;
let activeModel;

// Separate target state for GSAP to tween to, so we can add noise on top
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

    // REDUCED FOV TO REDUCE DISTORTION/STRETCHING
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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Enable SRGB for accurate colors
    container.appendChild(renderer.domElement);

    // --- ENVIRONMENT MAP (For better reflections) ---
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04,
    ).texture;

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048; // High quality shadows
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.bias = -0.0001; // Reduce artifacts
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x0088ff, 1);
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
                    }
                });

                // Center and Scale
                activeModel.scale.set(1.6, 1.6, 1.6);

                const box = new THREE.Box3().setFromObject(activeModel);
                const center = box.getCenter(new THREE.Vector3());
                activeModel.position.sub(center);

                // Set initial position (Home)
                activeModel.position.set(0, 0, 8);
                activeModel.rotation.set(0, 0, 0);

                // Initialize target state
                targetState.position.copy(activeModel.position);
                targetState.rotation.copy(activeModel.rotation);

                scene.add(activeModel);
            },
            (xhr) => {
                // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error(
                    "An error happened loading the DROID model:",
                    error,
                );
            },
        );
    });

    // --- SCROLL INTERACTION ---
    const sections = [
        {
            id: "home",
            // Posisi Kanan, Menghadap Kiri (ke User)
            pos: { x: 0, y: 0, z: 8 },
            rot: { x: 0, y: 0, z: 0 },
            text: "Hello! I'm your guide. Welcome to Revaldy's portfolio!",
        },
        // {
        //     id: "works",
        //     // Posisi Kiri, Menghadap Kanan (ke User)
        //     pos: { x: 0, y: 0, z: 0 },
        //     rot: { x: 0, y: 0, z: 0 },
        //     text: "Check out these cool projects!",
        // },
        {
            id: "works-swiper",
            // Posisi Kanan, Menghadap Kiri
            pos: { x: 30, y: 1, z: -1 },
            rot: { x: 0, y: -7.3, z: 0 },
            text: "Here are some highlighted projects.",
        },

        // {
        //     id: "websites",
        //     // Posisi Kiri
        //     pos: { x: -9, y: -1, z: -2 },
        //     rot: { x: 0.2, y: 2.5, z: 0.2 },
        //     text: "Websites gallery incoming!",
        // },
        {
            id: "websites-grid",
            // Posisi Kanan
            pos: { x: -30, y: 2, z: 4 },
            rot: { x: 0, y: 0.8, z: 0 },
            text: "Explore these website designs.",
        },

        {
            id: "servicesHeader",
            // Posisi Kiri
            pos: { x: 30, y: 2.5, z: 4 },
            rot: { x: 0, y: -0.9, z: -0.2 },
            text: "We offer specialized solutions.",
        },
        {
            id: "servicesScroll",
            // Posisi Kiri
            pos: { x: 30, y: 2.5, z: 4 },
            rot: { x: 0, y: -0.9, z: -0.2 },
            text: "We offer specialized solutions.",
        },

        {
            id: "features",
            // Posisi Kanan
            pos: { x: 0, y: 0, z: -8 },
            rot: { x: 0, y: 0, z: 0 },
            text: "Why choose us? Here's why.",
        },

        {
            id: "about",
            // Posisi Kiri
            pos: { x: -35, y: 0, z: -1 },
            rot: { x: 0, y: 0.7, z: 0 },
            text: "A little story about the journey.",
        },
        // {
        //     id: "about-grid",
        //     // Posisi Kanan
        //     pos: { x: 9, y: 2, z: 0 },
        //     rot: { x: 0.2, y: 4.8, z: 0 },
        //     text: "More details about the background.",
        // },

        {
            id: "pricing",
            // Posisi Kiri
            pos: { x: 0, y: 0, z: 20 },
            rot: { x: 0, y: 0, z: 0 },
            text: "Transparent pricing plans for you.",
        },
        // {
        //     id: "pricing-grid",
        //     // Posisi Kanan
        //     pos: { x: 9, y: 0, z: 0 },
        //     rot: { x: 0, y: 4.2, z: 0 },
        //     text: "Choose the best plan!",
        // },

        {
            id: "testimonials",
            // Posisi Kiri
            pos: { x: 30, y: 1, z: 0 },
            rot: { x: 0, y: -0.8, z: 0 },
            text: "See what clients say about us.",
        },
        // {
        //     id: "testimonials-swiper",
        //     // Posisi Kanan
        //     pos: { x: 9, y: -1, z: 0 },
        //     rot: { x: 0.2, y: 4.5, z: 0 },
        //     text: "Real feedback from real people.",
        // },

        {
            id: "contact",
            // Pojok Kanan Bawah
            pos: { x: -15, y: -4, z: 30 },
            rot: { x: 0, y: 7.3, z: 0 },
            text: "Ready to connect? Drop a message!",
        },
        {
            id: "footer",
            // Pojok Kanan Bawah
            pos: { x: 35, y: -4, z: 0 },
            rot: { x: 0, y: -0.8, z: 0 },
            text: "Thanks for visiting!",
        },
    ];

    const bubbleEl = document.getElementById("robot-bubble");
    const bubbleText = document.getElementById("robot-text");

    const updateBubblePosition = () => {
        if (!activeModel || !bubbleEl || !camera) return;

        // Get robot's screen position
        const vector = new THREE.Vector3();
        activeModel.getWorldPosition(vector);

        // Add offset to be above the robot's head
        vector.y += 1.8; // Slightly higher to clear the model

        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

        // Use transform directly for better performance, no transition lag on movement
        bubbleEl.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;

        // Hide if behind camera
        if (vector.z > 1) {
            bubbleEl.style.opacity = 0;
        }
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && activeModel) {
                    const config = sections.find(
                        (s) => s.id === entry.target.id,
                    );
                    if (config) {
                        // Tween the TARGET state, not the model directly
                        gsap.to(targetState.position, {
                            ...config.pos,
                            duration: 2,
                            ease: "power2.inOut",
                        });
                        gsap.to(targetState.rotation, {
                            ...config.rot,
                            duration: 2,
                            ease: "power2.inOut",
                        });

                        // UPDATE CHAT BUBBLE
                        if (bubbleEl && bubbleText && config.text) {
                            if (bubbleText.innerText !== config.text) {
                                // Fade out old text
                                bubbleEl.classList.remove("opacity-100");
                                bubbleEl.classList.add("opacity-0");

                                setTimeout(() => {
                                    bubbleText.innerText = config.text;
                                    // Fade in new text
                                    bubbleEl.classList.remove("opacity-0");
                                    bubbleEl.classList.add("opacity-100");
                                }, 300);
                            } else {
                                // Ensure it's visible if text matches
                                bubbleEl.classList.add("opacity-100");
                                bubbleEl.classList.remove("opacity-0");
                            }
                        } else if (bubbleEl && !config.text) {
                            bubbleEl.classList.remove("opacity-100");
                            bubbleEl.classList.add("opacity-0");
                        }
                    }
                }
            });
        },
        { threshold: 0.2 },
    );

    sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
    });

    // --- MOUSE PARALLAX ---
    let mouseX = 0,
        mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX - windowHalfX) * 0.008;
        mouseY = (e.clientY - windowHalfY) * 0.008;
    });

    // --- ANIMATION LOOP ---
    function animate() {
        animationId = requestAnimationFrame(animate);

        if (activeModel) {
            const time = Date.now() * 0.001;

            // "Funny Robot" Free Flying Motion
            // We apply noise/sine waves ON TOP of the target position

            // Bobbing up and down (Y)
            const bobY = Math.sin(time * 1.5) * 0.15;

            // Drifting Left/Right (X)
            const driftX = Math.sin(time * 0.8) * 0.1;

            // Drifting Forward/Back (Z)
            const driftZ = Math.cos(time * 0.5) * 0.1;

            // Rotation wobble (banking)
            const rotWobbleX = Math.sin(time * 1.2) * 0.05;
            const rotWobbleY = Math.cos(time * 0.9) * 0.05;
            const rotWobbleZ = Math.sin(time * 0.7) * 0.02; // Slight tilt

            // Apply Target + Noise
            activeModel.position.x = targetState.position.x + driftX;
            activeModel.position.y = targetState.position.y + bobY;
            activeModel.position.z = targetState.position.z + driftZ;

            // Apply Rotation + Mouse Parallax + Wobble
            // Note: We use rotation.set to ensure clean state
            activeModel.rotation.x =
                targetState.rotation.x + rotWobbleX + mouseY * 0.1;
            activeModel.rotation.y =
                targetState.rotation.y + rotWobbleY + mouseX * 0.1;
            activeModel.rotation.z = targetState.rotation.z + rotWobbleZ;
        }

        renderer.render(scene, camera);
        updateBubblePosition(); // Update bubble position every frame
    }

    animate();

    // --- RESIZE ---
    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // --- CLEANUP EXPORT ---
    window.cleanup3D = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", onResize);
        observer.disconnect();
        if (renderer && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
    };
}
