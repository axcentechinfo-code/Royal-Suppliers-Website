import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Direct RAF animation for 120Hz zero-latency cursor tracking
  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Instantly position the center dot without ANY React state lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Smooth tight spring for outer ring
    const render = () => {
      // Lerp ring towards mouse with high response (0.28 factor)
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    // Throttled target detector for links/buttons
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive-target');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring - hardware accelerated translate3d */}
      <div
        ref={ringRef}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border border-gold/70 transition-[width,height,background-color,border-color] duration-150 ease-out ${
          isHovered
            ? 'h-12 w-12 -ml-6 -mt-6 bg-gold/15 border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
            : 'h-8 w-8'
        } ${isClicking ? 'scale-90 bg-gold/30' : 'scale-100'}`}
      />

      {/* Center Precision Dot - zero lag */}
      <div
        ref={dotRef}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_#d4af37] transition-transform duration-75 ${
          isClicking ? 'scale-50' : 'scale-100'
        }`}
      />
    </div>
  );
};
