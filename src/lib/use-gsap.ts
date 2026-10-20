import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from './smooth-scroll';

/**
 * Runs GSAP setup scoped to a ref and reverts it on unmount.
 * The callback receives `reduced` so it can fall back to a static state.
 */
export function useGsap(scope: RefObject<HTMLElement>, setup: (reduced: boolean) => void, deps: DependencyList = []) {
  useLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => setup(prefersReducedMotion()), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
