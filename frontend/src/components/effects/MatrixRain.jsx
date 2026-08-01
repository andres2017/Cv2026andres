import React, { useEffect, useRef, useState } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Desactivar en pantallas pequeñas o si el usuario prefiere menos movimiento
    const mq = window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const chars = '01アイウエオカキクケコ{}[]<>ABCDEF#@!$%';
    const fontSize = 13;
    let columns;
    let drops;
    let animationId;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => Math.floor(Math.random() * -50));
    };

    init();

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() > 0.97) {
          ctx.fillStyle = '#00ff41';
          ctx.font = `bold ${fontSize}px monospace`;
        } else {
          ctx.fillStyle = 'rgba(0, 255, 65, 0.1)';
          ctx.font = `${fontSize}px monospace`;
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(() => {
        // ~15 fps para ahorrar batería en laptops
        setTimeout(draw, 65);
      });
    };

    draw();

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
