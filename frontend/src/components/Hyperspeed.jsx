import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hyperspeed() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ---------- SCENE ---------- */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ---------- STARS ---------- */
    const starCount = 2200;
    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(starCount * 3);
    const speeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = -Math.random() * 200;
      speeds[i] = 0.6 + Math.random() * 1.6;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0x00eaff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    /* ---------- MOUSE MOVE ---------- */
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    /* ---------- ANIMATION ---------- */
    const animate = () => {
      requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;

      for (let i = 0; i < starCount; i++) {
        pos[i * 3 + 2] += speeds[i];

        if (pos[i * 3 + 2] > 10) {
          pos[i * 3 + 2] = -200;
          pos[i * 3] = (Math.random() - 0.5) * 40;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      /* ✨ CURSOR PARALLAX (SMOOTH) */
      camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.current.y * 1.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, -50);

      renderer.render(scene, camera);
    };

    animate();

    /* ---------- RESIZE ---------- */
    const onResize = () => {
      camera.aspect =
        container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener("resize", onResize);

    /* ---------- CLEANUP ---------- */
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
