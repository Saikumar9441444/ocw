import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    const addHover = () => ring.classList.add('hover');
    const removeHover = () => ring.classList.remove('hover');

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .service-card, .portfolio-card, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    const raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(raf);
    };
  }, []);
};
