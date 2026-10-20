import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { markIntroDone } from '../lib/intro';
import { prefersReducedMotion, useLenis } from '../lib/smooth-scroll';
import './Preloader.css';

const SEEN_KEY = 'tpc-intro-seen';

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

/** First-visit intro: a counter runs to 100 over the Devanagari wordmark, then the cobalt sheet lifts. */
export default function Preloader() {
  const [show] = useState(() => !alreadySeen() && !prefersReducedMotion());
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);
  const lenis = useLenis();

  // hold the page still while the intro plays
  useEffect(() => {
    if (!lenis) return;
    if (show && !gone) lenis.stop();
    else lenis.start();
  }, [lenis, show, gone]);

  useEffect(() => {
    if (!show) {
      markIntroDone();
      return;
    }
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode — the intro will simply play again next visit */
    }
    document.documentElement.style.overflow = 'hidden';
    const counter = { v: 0 };
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        document.documentElement.style.overflow = '';
        setGone(true);
      },
    });
    tl.fromTo('.pre__word > span', { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08 })
      .to(
        counter,
        {
          v: 100,
          duration: 1.7,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
          },
        },
        0.1,
      )
      .fromTo('.pre__bar > span', { scaleX: 0 }, { scaleX: 1, duration: 1.7, ease: 'power2.inOut' }, 0.1)
      .to('.pre__word > span', { yPercent: -110, duration: 0.6, ease: 'expo.in', stagger: 0.05 }, '+=0.1')
      .add(markIntroDone, '-=0.05')
      .to(root.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '<');

    // start once the Devanagari face is ready (or after a short grace period)
    let started = false;
    let cancelled = false;
    const start = () => {
      if (started || cancelled) return;
      started = true;
      tl.play();
    };
    document.fonts?.load('800 64px "Anek Devanagari"', 'ट्रिप पे चलो').then(start, start);
    const fallback = window.setTimeout(start, 900);
    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      tl.kill();
      document.documentElement.style.overflow = '';
    };
  }, [show]);

  if (!show || gone) return null;

  return (
    <div className="pre" ref={root} aria-hidden="true">
      <p className="pre__word" lang="hi">
        <span>ट्रिप</span> <span>पे</span> <span>चलो</span>
      </p>
      <div className="pre__foot">
        <span className="pre__label">Trip pe chalo</span>
        <span className="pre__bar">
          <span />
        </span>
        <span className="pre__count" ref={count}>
          000
        </span>
      </div>
    </div>
  );
}
