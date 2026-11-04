import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { LocationMap } from './components/LocationMap';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { FloatingActions } from './components/FloatingActions';

// Global Lenis Reference for seamless anchor scrolling anywhere
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll Progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Initialize Lenis Smooth Momentum Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global listener for all #anchor links to use buttery Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element as HTMLElement, {
            offset: -75,
            duration: 1.3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06090e] text-slate-100 selection:bg-gold selection:text-black">
      {/* Top Golden Laser Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9990] h-[3px] origin-left bg-gradient-to-r from-gold-600 via-gold to-gold-light shadow-[0_0_12px_#d4af37]"
        style={{ scaleX }}
      />

      {/* Luxury Trailing Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Dual-Curtain Emblem Preloader */}
      <Preloader onLoaded={() => setIsLoaded(true)} />

      {/* Main Website Structure with Staggered Entrance */}
      <div
        className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Process />
          <Reviews />
          <LocationMap />
          <FAQ />
          <CTA />
        </main>

        <Footer />

        {/* Floating Interactive Elements */}
        <Chatbot />
        <FloatingActions />
      </div>
    </div>
  );
}

export default App;
