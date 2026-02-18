import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
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
    camera.position.z = 15;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x0088ff, 1);
    fillLight.position.set(-5, 0, 5);
    scene.add(fillLight);

    // --- MATERIALS ---
    // Skema Warna Baru: Dominan Hitam & Oranye, Aksen Putih/Silver
    const materials = {
        // BODY: Hitam Metalik (Sleek Black Metal)
        body: new THREE.MeshStandardMaterial({
            color: 0x111111, // Hitam pekat (bukan 0x000000 agar tetap merespon cahaya)
            roughness: 0.15, // Lebih halus, lebih mengkilap
            metalness: 0.9,  // Sangat metalik
        }),

        // WING: Oranye Menyala (Vibrant Orange Glow)
        wing: new THREE.MeshStandardMaterial({
            color: 0xff4500, // Oranye kemerahan yang lebih tajam (OrangeRed)
            roughness: 0.2,
            metalness: 0.8,
            emissive: 0xff3300, // Cahaya berpendar oranye
            emissiveIntensity: 0.5, // Intensitas cahaya ditingkatkan agar lebih "pop"
        }),

        // WEAPON: Metal Gelap (Dark Gunmetal)
        weapon: new THREE.MeshStandardMaterial({
            color: 0x222222, // Abu-abu sangat tua, hampir hitam
            roughness: 0.4,  // Sedikit kasar
            metalness: 1.0,  // Full metal
        }),

        // PISTON: Aksen Putih/Silver Mengkilap (Shiny White Chrome Accent)
        piston: new THREE.MeshStandardMaterial({
            color: 0xffffff, // Putih murni
            roughness: 0.05, // Sangat licin/dipoles
            metalness: 1.0,  // Efek chrome
        }),

        // DEFAULT: Aksen Putih Matte untuk detail/sendi lainnya
        default: new THREE.MeshStandardMaterial({
            color: 0xeeeeee, // Putih agak abu (off-white)
            roughness: 0.4,  // Matte, tidak terlalu mengkilap
            metalness: 0.3,  // Sedikit metalik
        }),
    };

    // --- LOAD MODEL ---
    const loader = new OBJLoader();
    loader.load(
        "/DROID.obj",
        (object) => {
            activeModel = object;

            activeModel.traverse((child) => {
                if (child.isMesh) {
                    const name = child.name.toUpperCase();

                    if (name.includes("FLOOR") || name.includes("ENV")) {
                        child.visible = false;
                        return;
                    }

                    if (name.includes("WING")) {
                        child.material = materials.wing;
                    } else if (name.includes("BODY")) {
                        child.material = materials.body;
                    } else if (
                        name.includes("WEAPON") ||
                        name.includes("GUN")
                    ) {
                        child.material = materials.weapon;
                    } else if (name.includes("PISTON")) {
                        child.material = materials.piston;
                    } else {
                        child.material = materials.default;
                    }

                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Center and Scale
            activeModel.scale.set(0.5, 0.5, 0.5);

            const box = new THREE.Box3().setFromObject(activeModel);
            const center = box.getCenter(new THREE.Vector3());
            activeModel.position.sub(center);

            // Set initial position (Home)
            activeModel.position.set(7, -3, 0);
            activeModel.rotation.set(0, 4.5, 0);

            // Initialize target state
            targetState.position.copy(activeModel.position);
            targetState.rotation.copy(activeModel.rotation);

            scene.add(activeModel);
        },
        (xhr) => {
            // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.error("An error happened loading the DROID model:", error);
        },
    );

    // --- SCROLL INTERACTION ---
    const sections = [
        {
            id: "home",
            // Posisi Kanan, Menghadap Kiri (ke User)
            pos: { x: 7, y: -3, z: 0 },
            rot: { x: 0, y: 4.5, z: 0 },
        },
        {
            id: "hero-scroll",
            // Transisi
            pos: { x: 8, y: -4, z: -2 },
            rot: { x: 0.2, y: 4.0, z: 0 },
        },

        {
            id: "works",
            // Posisi Kiri, Menghadap Kanan (ke User)
            pos: { x: -9, y: 0, z: 0 },
            rot: { x: 0, y: 2.0, z: 0 },
        },
        {
            id: "works-swiper",
            // Posisi Kanan, Menghadap Kiri
            pos: { x: 9, y: 1, z: -1 },
            rot: { x: 0.2, y: 4.5, z: 0 },
        },

        {
            id: "websites",
            // Posisi Kiri
            pos: { x: -9, y: -1, z: -2 },
            rot: { x: 0.2, y: 2.5, z: 0.2 },
        },
        {
            id: "websites-grid",
            // Posisi Kanan
            pos: { x: 9, y: -2, z: -3 },
            rot: { x: 0.5, y: 4.0, z: 0 },
        },

        {
            id: "services",
            // Posisi Kiri
            pos: { x: -9, y: 1.5, z: 0 },
            rot: { x: 0, y: 2.2, z: 0.2 },
        },

        {
            id: "features",
            // Posisi Kanan
            pos: { x: 9, y: -1, z: 0 },
            rot: { x: 0.1, y: 5.0, z: 0 },
        },

        {
            id: "about",
            // Posisi Kiri
            pos: { x: -9, y: 0, z: -1 },
            rot: { x: 0, y: 1.5, z: 0 },
        },
        {
            id: "about-grid",
            // Posisi Kanan
            pos: { x: 9, y: 2, z: 0 },
            rot: { x: 0.2, y: 4.8, z: 0 },
        },

        {
            id: "pricing",
            // Posisi Kiri
            pos: { x: -9, y: -1.5, z: 0 },
            rot: { x: 0, y: 2.0, z: 0 },
        },
        {
            id: "pricing-grid",
            // Posisi Kanan
            pos: { x: 9, y: 0, z: 0 },
            rot: { x: 0, y: 4.2, z: 0 },
        },

        {
            id: "testimonials",
            // Posisi Kiri
            pos: { x: -9, y: 1, z: 0 },
            rot: { x: 0, y: 1.8, z: 0 },
        },
        {
            id: "testimonials-swiper",
            // Posisi Kanan
            pos: { x: 9, y: -1, z: 0 },
            rot: { x: 0.2, y: 4.5, z: 0 },
        },

        {
            id: "contact",
            // Pojok Kanan Bawah
            pos: { x: 8, y: -4, z: 2 },
            rot: { x: -0.2, y: 4.0, z: 0 },
        },
    ];

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
                targetState.rotation.x + rotWobbleX + mouseY * 0.2;
            activeModel.rotation.y =
                targetState.rotation.y + rotWobbleY + mouseX * 0.2;
            activeModel.rotation.z = targetState.rotation.z + rotWobbleZ;
        }

        renderer.render(scene, camera);
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
