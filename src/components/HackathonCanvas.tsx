"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

// Tuned for the light hero: saturated nodes that hold up on cream, joined by
// cool grey links. Cyan-on-white was invisible, hence the slate.
const NODE_COLORS = [
  "rgba(241, 127, 13, 0.85)", // brand orange
  "rgba(241, 127, 13, 0.85)",
  "rgba(241, 127, 13, 0.85)",
  "rgba(14, 116, 144, 0.75)", // teal, for a little variation
];
const LINK_COLOR = "100, 116, 139"; // slate-500

/** Animated neural-network background for the hackathon hero. */
export default function HackathonCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;

    const spawn = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.4 + 1, // slightly larger; thin dots wash out on cream
      color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
    });

    const resize = () => {
      const parent = canvas.parentElement;
      width = canvas.width = parent?.offsetWidth ?? window.innerWidth;
      height = canvas.height = parent?.offsetHeight ?? window.innerHeight;
      const count = width < 768 ? 40 : 80;
      particles = Array.from({ length: count }, spawn);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx = -p.vx;
          if (p.y < 0 || p.y > height) p.vy = -p.vy;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Link nearby particles — opacity falls off with distance
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINK_COLOR}, ${0.28 - distance / 640})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="hk-canvas" aria-hidden="true" />;
}
