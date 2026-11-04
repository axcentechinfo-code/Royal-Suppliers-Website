import confetti from 'canvas-confetti';

export function triggerRoyalConfetti(event?: React.MouseEvent) {
  const count = 60;
  const defaults = {
    origin: event
      ? {
          x: event.clientX / window.innerWidth,
          y: event.clientY / window.innerHeight,
        }
      : { y: 0.7 },
    colors: ['#d4af37', '#f7e39a', '#ffd700', '#ffffff', '#e5c44f'],
    disableForReducedMotion: true,
  };

  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.6),
    spread: 60,
    startVelocity: 35,
  });

  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.4),
    spread: 100,
    startVelocity: 45,
    decay: 0.92,
    scalar: 1.2,
  });
}

