import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Fondo 3D: red de particulas + wireframes (icosaedro / torus)
 * - Mouse parallax en desktop
 * - Menos particulas en mobile
 * - Respeta prefers-reduced-motion
 */
const Scene3D = ({ className = '', intensity = 'full' }) => {
  const mountRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled || !mountRef.current) return;

    const mount = mountRef.current;
    const isMobile = window.innerWidth < 768;
    const particleCount = intensity === 'hero'
      ? (isMobile ? 80 : 180)
      : (isMobile ? 60 : 140);

    // --- Scene ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.1,
      100
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Lights ---
    const ambient = new THREE.AmbientLight(0x00ff41, 0.15);
    scene.add(ambient);
    const pointGreen = new THREE.PointLight(0x00ff41, 1.2, 20);
    pointGreen.position.set(3, 2, 4);
    scene.add(pointGreen);
    const pointCyan = new THREE.PointLight(0x00d4ff, 0.8, 18);
    pointCyan.position.set(-3, -1, 3);
    scene.add(pointCyan);

    // --- Particle network ---
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      velocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004,
        z: (Math.random() - 0.5) * 0.003,
      });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00ff41,
      size: isMobile ? 0.04 : 0.035,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lines between close particles
    const lineMax = isMobile ? 80 : 160;
    const linePositions = new Float32Array(lineMax * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00ff41,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // --- Central wireframe icosahedron ---
    const icoGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00ff41,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Inner solid core with low opacity
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Torus ring
    const torusGeo = new THREE.TorusGeometry(1.85, 0.02, 8, 64);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.4,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2.5;
    scene.add(torus);

    // Second torus (perpendicular)
    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.015, 8, 64),
      new THREE.MeshBasicMaterial({
        color: 0x00ff41,
        transparent: true,
        opacity: 0.25,
      })
    );
    torus2.rotation.x = Math.PI / 3;
    torus2.rotation.y = Math.PI / 4;
    scene.add(torus2);

    // --- Mouse / touch parallax ---
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointer = (e) => {
      const rect = mount.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      target.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      target.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', onPointer, { passive: true });
    window.addEventListener('touchmove', onPointer, { passive: true });

    // --- Resize ---
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // --- Animation loop ---
    let frameId;
    let t = 0;
    const connectDist = isMobile ? 1.6 : 1.9;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.005;

      // Smooth mouse
      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;

      // Rotate geometry
      ico.rotation.x = t * 0.3 + mouse.y * 0.3;
      ico.rotation.y = t * 0.45 + mouse.x * 0.4;
      core.rotation.x = -t * 0.5;
      core.rotation.y = t * 0.6;
      torus.rotation.z = t * 0.25;
      torus2.rotation.z = -t * 0.2;
      torus2.rotation.x = Math.PI / 3 + mouse.y * 0.15;

      // Camera slight drift
      camera.position.x = mouse.x * 0.6;
      camera.position.y = mouse.y * 0.4;
      camera.lookAt(0, 0, 0);

      // Move particles
      const pos = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Soft bounds bounce
        if (Math.abs(pos[i * 3]) > 6) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 4) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 4) velocities[i].z *= -1;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Rebuild nearby connections (every other frame for perf)
      if (Math.floor(t * 60) % 2 === 0) {
        let lineIdx = 0;
        for (let i = 0; i < particleCount && lineIdx < lineMax; i++) {
          for (let j = i + 1; j < particleCount && lineIdx < lineMax; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < connectDist) {
              linePositions[lineIdx * 6] = pos[i * 3];
              linePositions[lineIdx * 6 + 1] = pos[i * 3 + 1];
              linePositions[lineIdx * 6 + 2] = pos[i * 3 + 2];
              linePositions[lineIdx * 6 + 3] = pos[j * 3];
              linePositions[lineIdx * 6 + 4] = pos[j * 3 + 1];
              linePositions[lineIdx * 6 + 5] = pos[j * 3 + 2];
              lineIdx++;
            }
          }
        }
        // Zero out unused
        for (let k = lineIdx; k < lineMax; k++) {
          for (let n = 0; n < 6; n++) linePositions[k * 6 + n] = 0;
        }
        lineGeo.attributes.position.needsUpdate = true;
      }

      // Pulse opacity of ico
      icoMat.opacity = 0.28 + Math.sin(t * 2) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onPointer);
      window.removeEventListener('touchmove', onPointer);
      window.removeEventListener('resize', onResize);
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [enabled, intensity]);

  if (!enabled) return null;

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default Scene3D;
