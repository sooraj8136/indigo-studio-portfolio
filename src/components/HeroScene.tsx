import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.06);

    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lighting — soft ambient + indigo points
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const p1 = new THREE.PointLight(0x6366f1, 2.2, 60);
    p1.position.set(6, 4, 6);
    scene.add(p1);
    const p2 = new THREE.PointLight(0x8b5cf6, 1.4, 50);
    p2.position.set(-6, -3, 2);
    scene.add(p2);

    // Frames (translucent glass cards)
    const frames: THREE.Mesh[] = [];
    const FRAME_COUNT = 10;
    const geometry = new THREE.PlaneGeometry(4.2, 2.6, 1, 1);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x1a1a22),
        transparent: true,
        opacity: 0.55,
        roughness: 0.25,
        metalness: 0.1,
        transmission: 0.6,
        thickness: 0.4,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x6366f1),
        emissiveIntensity: 0.04,
      });
      const mesh = new THREE.Mesh(geometry, mat);
      const z = -i * 6;
      const side = i % 2 === 0 ? 1 : -1;
      mesh.position.set(side * (1.4 + Math.random() * 0.6), (Math.random() - 0.5) * 1.6, z);
      mesh.rotation.y = side * 0.25;
      mesh.rotation.x = (Math.random() - 0.5) * 0.15;
      scene.add(mesh);
      frames.push(mesh);

      // thin indigo edge
      const edges = new THREE.EdgesGeometry(geometry);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.6 })
      );
      line.position.copy(mesh.position);
      line.rotation.copy(mesh.rotation);
      scene.add(line);
      // sync edge with mesh on each tick — store reference
      (mesh as any).__edge = line;
    }

    // Particle dust
    const particleCount = 350;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = -Math.random() * 80;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Scroll animation — dolly camera through tunnel
    const heroEl = mount.parentElement as HTMLElement;
    let scrollProgress = 0;
    const trigger = ScrollTrigger.create({
      trigger: heroEl,
      start: "top top",
      end: "+=1200",
      scrub: true,
      onUpdate: (self) => {
        scrollProgress = self.progress;
      },
    });

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const targetZ = 14 - scrollProgress * 55;
      camera.position.z += (targetZ - camera.position.z) * 0.08;

      frames.forEach((f, i) => {
        if (!reduced) {
          f.rotation.y += 0.0015 * (i % 2 === 0 ? 1 : -1);
          f.position.y += Math.sin(t * 0.6 + i) * 0.0008;
        }
        const edge = (f as any).__edge as THREE.LineSegments;
        if (edge) {
          edge.position.copy(f.position);
          edge.rotation.copy(f.rotation);
        }
      });

      particles.rotation.y = t * 0.02;
      const pos = particles.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let z = pos.getZ(i) + 0.04;
        if (z > camera.position.z) z = -80;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      trigger.kill();
      renderer.dispose();
      geometry.dispose();
      pGeo.dispose();
      pMat.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
