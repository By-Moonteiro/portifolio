"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  direction: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = (count: number): Star[] =>
      Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.2 + 0.2,
        opacity: Math.random(),
        speed: Math.random() * 0.008 + 0.002,
        direction: Math.random() > 0.5 ? 1 : -1,
      }));

    resize();
    const stars = createStars(180);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += star.speed * star.direction;

        if (star.opacity >= 1) {
          star.direction = -1;
        } else if (star.opacity <= 0) {
          star.direction = 1;
        }

        const isAccent = star.radius > 1.1;

        if (isAccent) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(167, 139, 250, 0.5)";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isAccent
          ? `rgba(167, 139, 250, ${star.opacity * 0.6})`
          : `rgba(240, 240, 240, ${star.opacity * 0.6})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}