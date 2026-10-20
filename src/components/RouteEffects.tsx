import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToTarget, useLenis } from '../lib/smooth-scroll';

const TITLES: Record<string, string> = {
  '/': "Trippechalo — India's AI-powered Experience OS",
  '/products': 'Product — Trippechalo',
  '/book-demo': 'Book a demo — Trippechalo',
  '/legal-notice': 'Legal notice — Trippechalo',
  '/privacy-policy': 'Privacy policy — Trippechalo',
  '/terms-and-conditions': 'Terms & conditions — Trippechalo',
};

/**
 * Handles everything that should happen when the route changes:
 * scroll position (top, or the #hash target), ScrollTrigger refresh,
 * document title, and the cobalt curtain that wipes off the new page.
 */
export default function RouteEffects() {
  const location = useLocation();
  const lenis = useLenis();
  const prevPath = useRef(location.pathname);
  const [curtainKey, setCurtainKey] = useState(0);

  useEffect(() => {
    document.title = TITLES[location.pathname] ?? 'Page not found — Trippechalo';
    const pathChanged = prevPath.current !== location.pathname;
    prevPath.current = location.pathname;
    if (pathChanged) setCurtainKey((k) => k + 1);

    if (!location.hash) {
      if (pathChanged) scrollToTarget(lenis, 0, { immediate: true });
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    // give the new page a moment to lay out before measuring the target
    const id = window.setTimeout(
      () => {
        ScrollTrigger.refresh();
        const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) scrollToTarget(lenis, el, { immediate: pathChanged && !lenis });
      },
      pathChanged ? 450 : 30,
    );
    if (pathChanged) scrollToTarget(lenis, 0, { immediate: true });
    return () => window.clearTimeout(id);
    // location.key changes even when the same link is clicked twice
  }, [location.pathname, location.hash, location.key, lenis]);

  // late-loading images change page height; keep trigger positions honest
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return curtainKey > 0 ? <div key={curtainKey} className="curtain is-playing" aria-hidden="true" /> : null;
}
