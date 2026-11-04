import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, ArrowRight, Sparkles, Award, ChevronDown } from 'lucide-react';
import { SITE_CONFIG, STATS } from '../data/siteData';
import { triggerRoyalConfetti } from '../utils/confetti';

// Smooth Counter for Hero Statistics
const HeroCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const duration = 2200;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Ultra-optimized 60FPS Golden Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Pause rendering when Hero is scrolled out of view to save 100% GPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      spin: number;
      angle: number;
    }

    const particles: Particle[] = [];
    const colors = ['#d4af37', '#f7e39a', '#ffd700', '#ffffff', '#e5c44f'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (Math.random() * 2.5 + 1) * dpr,
        speedY: (Math.random() * 0.6 + 0.3) * dpr,
        speedX: (Math.random() - 0.5) * 0.3 * dpr,
        opacity: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        spin: (Math.random() - 0.5) * 0.03,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // High performance Render loop
    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y += p.speedY;
          p.x += p.speedX;
          p.angle += p.spin;

          if (p.y > height) {
            p.y = -10;
            p.x = Math.random() * width;
          }
          if (p.x > width) p.x = 0;
          if (p.x < 0) p.x = width;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;

          // Draw glittering diamond
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size, 0);
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-65"
      />

      {/* Atmospheric Radial Gradients */}
      <div className="royal-glow -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] sm:w-[900px] bg-gold/10" />
      <div className="royal-glow bottom-0 right-0 h-96 w-96 bg-gold-dark/10" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto my-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Established Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md"
        >
          <Award className="h-4 w-4 text-gold animate-spin-slow" />
          <span className="text-xs font-bold tracking-widest text-gold uppercase sm:text-sm">
            Store Established in 2007 • Vaniyambadi
          </span>
        </motion.div>

        {/* Big Royal Emblem / Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 mb-4 flex justify-center"
        >
          <div className="relative">
            <img
              src="/static/Images/LogoWhitenew.png"
              alt="Royal Suppliers Event Decor"
              className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_15px_30px_rgba(212,175,55,0.35)] transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/logo/LogoWhitenew.png';
              }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-white">Elevate Your Events with</span>
          <span className="text-gold-gradient block mt-1">Royal Excellence</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-sm font-normal text-slate-300 sm:text-lg md:text-xl leading-relaxed"
        >
          Suppliers of all marriage materials and luxury stage decor. Bringing majestic ambiance, bespoke floral artistry, and comprehensive hospitality to your unforgettable celebrations.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${SITE_CONFIG.primaryWhatsApp}?text=Hello%20Royal%20Suppliers%2C%20I%20would%20like%20to%20book%20an%20event%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => triggerRoyalConfetti(e)}
            className="group relative flex w-full items-center justify-center space-x-3 overflow-hidden rounded-full bg-gradient-to-r from-gold via-gold-hover to-gold-light px-8 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] sm:w-auto"
          >
            <Sparkles className="h-4 w-4 text-black" />
            <span>Book Your Date</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <a
            href="#gallery"
            className="flex w-full items-center justify-center space-x-2 rounded-full border border-gold/40 bg-gold/5 px-8 py-4 text-sm font-semibold text-gold backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold/15 hover:text-white sm:w-auto"
          >
            <span>Explore Portfolio</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="flex w-full items-center justify-center space-x-2 rounded-full border border-slate-700 bg-slate-800/80 px-6 py-4 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-500 hover:text-white sm:w-auto"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Stats Counter Bar with Animated Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gold/20 bg-slate-900/60 p-6 backdrop-blur-xl md:grid-cols-4 md:divide-x md:divide-gold/15">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-4 py-2 text-center">
              <span className="font-serif text-2xl font-black text-gold sm:text-4xl">
                <HeroCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-1 text-xs font-semibold tracking-wider text-white uppercase sm:text-sm">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400">{stat.description}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mt-6 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center text-xs font-medium text-slate-400 transition-colors hover:text-gold"
        >
          <span className="tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown className="mt-1 h-4 w-4 animate-bounce text-gold" />
        </a>
      </div>
    </section>
  );
};
