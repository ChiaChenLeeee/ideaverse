
import React, { useEffect, useRef } from 'react';

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random()
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle nebula glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 1.5
      );
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.03)'); // Purple accent
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${star.opacity})`; // Faint purple stars
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        
        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.05;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 0.6) star.opacity = 0.6;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative pt-64 pb-32 px-6 text-center max-w-5xl mx-auto min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
      <GalaxyBackground />
      
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
          欢迎来到思想宇宙
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-light mb-12">
          每个想法都是一颗星，每天进步一点点
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="w-px h-24 bg-gradient-to-b from-purple-600 via-purple-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
