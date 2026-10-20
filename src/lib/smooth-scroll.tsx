import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const LenisContext = createContext<Lenis | null>(null);

/**
 * One Lenis instance for the whole app, driven by GSAP's ticker so ScrollTrigger
 * and the smooth scroll stay on the same frame. Skipped entirely when the visitor
 * asks for reduced motion — native scrolling takes over.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.3,
    });

    instance.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export const useLenis = () => useContext(LenisContext);

const HEADER_OFFSET = -96;

/** Scrolls to an element (or y position) through Lenis when it's running, natively otherwise. */
export function scrollToTarget(
  lenis: Lenis | null,
  target: string | number | HTMLElement,
  opts: { immediate?: boolean; offset?: number } = {},
) {
  const offset = opts.offset ?? (typeof target === 'number' ? 0 : HEADER_OFFSET);
  if (lenis) {
    lenis.scrollTo(target, { offset, immediate: opts.immediate, duration: 1.4 });
    return;
  }
  const el =
    typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target instanceof HTMLElement ? target : null;
  const top = typeof target === 'number' ? target : el ? el.getBoundingClientRect().top + window.scrollY + offset : 0;
  window.scrollTo({ top, behavior: opts.immediate || prefersReducedMotion() ? 'auto' : 'smooth' });
}
