"use client";

import { useEffect, useRef } from "react";

export default function ParticleGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates (relative to canvas)
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 130, // Cursor influence radius
      active: false,
    };

    // Dot class
    class Dot {
      constructor(baseX, baseY) {
        this.baseX = baseX;
        this.baseY = baseY;
        this.x = baseX;
        this.y = baseY;
        this.vx = 0;
        this.vy = 0;
        this.baseRadius = 1.6;
        this.radius = this.baseRadius;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(time) {
        if (prefersReducedMotion) return;

        // Ambient idle gentle wave
        const ambientOffset = Math.sin(time * 0.0018 + this.phase + this.baseX * 0.008) * 2.5;
        const targetBaseY = this.baseY + ambientOffset;

        // Cursor interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (mouse.active && distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Push away slightly with elastic ease
          const pushDistance = force * 24;
          const targetX = this.baseX - Math.cos(angle) * pushDistance;
          const targetY = targetBaseY - Math.sin(angle) * pushDistance;

          this.vx += (targetX - this.x) * 0.15;
          this.vy += (targetY - this.y) * 0.15;
          this.radius = this.baseRadius + force * 1.8;
        } else {
          // Spring back to base position
          this.vx += (this.baseX - this.x) * 0.08;
          this.vy += (targetBaseY - this.y) * 0.08;
          this.radius += (this.baseRadius - this.radius) * 0.1;
        }

        // Apply friction
        this.vx *= 0.82;
        this.vy *= 0.82;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw(context) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        let color = "rgba(100, 116, 139, 0.28)"; // Distinct slate-500 dot

        if (mouse.active && distance < mouse.radius) {
          const ratio = 1 - distance / mouse.radius;
          // Gradient highlight towards blue-600
          color = `rgba(37, 99, 235, ${0.4 + ratio * 0.6})`;
        }

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
      }
    }

    let dots = [];

    // Initialize dots in a responsive grid
    const initDots = () => {
      dots = [];
      const spacing = window.innerWidth < 768 ? 42 : 34; // Responsive spacing
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      const offsetX = (width - cols * spacing) / 2 + spacing / 2;
      const offsetY = (height - rows * spacing) / 2 + spacing / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push(new Dot(offsetX + i * spacing, offsetY + j * spacing));
        }
      }
    };

    // Handle canvas sizing for sharp retina resolution
    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for battery/GPU balance

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initDots();
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Mouse movement listener on hero section container
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Connect to window / parent element
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Animation render loop
    let lastTime = 0;
    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines between cursor-activated neighboring dots
      if (mouse.active && !prefersReducedMotion) {
        ctx.lineWidth = 1.0;
        const activeRadius = mouse.radius;

        for (let i = 0; i < dots.length; i++) {
          const d1 = dots[i];
          const distToMouse = Math.hypot(mouse.x - d1.x, mouse.y - d1.y);
          if (distToMouse > activeRadius) continue;

          for (let j = i + 1; j < dots.length; j++) {
            const d2 = dots[j];
            const distBetween = Math.hypot(d1.x - d2.x, d1.y - d2.y);

            // Connect nearby points
            if (distBetween < 52) {
              const alpha = (1 - distBetween / 52) * (1 - distToMouse / activeRadius) * 0.65;
              ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(d1.x, d1.y);
              ctx.lineTo(d2.x, d2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Update & draw each dot
      for (let i = 0; i < dots.length; i++) {
        dots[i].update(time);
        dots[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-700"
        aria-hidden="true"
      />
      {/* Subtle radial fade mask around the edges so dots fade softly into the background */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#f8fafc]/60 pointer-events-none" />
    </div>
  );
}
