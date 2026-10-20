import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ArcCarousel, { type ArcCard } from '../../components/ArcCarousel';
import { ButtonLink } from '../../components/ui';
import { onIntroDone } from '../../lib/intro';
import { LINKS } from '../../lib/links';
import { prefersReducedMotion } from '../../lib/smooth-scroll';
import { useGsap } from '../../lib/use-gsap';
import hampta from '../../assets/img/card-hampta.webp';
import rishikesh from '../../assets/img/card-rishikesh.webp';
import concert from '../../assets/img/card-fashion.webp';
import climb from '../../assets/img/card-landing-alt.webp';
import festival from '../../assets/img/card-main.webp';
import tarang from '../../assets/img/card-tarang.webp';
import trek from '../../assets/img/card-landing.webp';
import './Hero.css';

const CARDS: ArcCard[] = [
  { title: 'Hampta Pass', place: 'Manali, Himachal Pradesh', image: hampta },
  { title: 'Rishikesh Day Out', place: 'Rishikesh, Uttarakhand', image: rishikesh },
  { title: 'Sangeet Fest 2025', place: 'Live music', image: concert },
  { title: 'Harihar Trek', place: 'Nashik, Maharashtra', image: climb },
  { title: 'Sarthi Garba Feast', place: 'Jamuri Maidan, Bhopal', image: festival },
  { title: 'Tarang Festival', place: 'DJ night', image: tarang },
  { title: 'Weekend Valley Trail', place: 'Group trek', image: trek },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => onIntroDone(() => setReady(true)), []);

  // headline + copy entrance, once the preloader has lifted (layout effect: no unstyled frame)
  useLayoutEffect(() => {
    if (!ready || !ref.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from('.hero__title .line-mask > span', { yPercent: 108, duration: 1.3, ease: 'expo.out', stagger: 0.09 })
        .from('.hero__sub, .hero__actions', { opacity: 0, y: 18, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.45);
    }, ref);
    return () => ctx.revert();
  }, [ready]);

  // the headline sinks and dims as the page scrolls away from the hero
  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.to('.hero__copy', {
      yPercent: 18,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
    });
  });

  return (
    <section className={`hero ${ready || prefersReducedMotion() ? '' : 'is-intro'}`} ref={ref} aria-labelledby="hero-title">
      <div className="hero__copy wrap">
        <h1 className="hero__title" id="hero-title">
          <span className="line-mask hero__pre">
            <span>India’s AI-powered</span>
          </span>
          <span className="line-mask t-mega">
            <span>Experience OS</span>
          </span>
        </h1>
        <p className="hero__sub">Smart discovery for travellers. Intelligent growth tools for organisers.</p>
        <div className="hero__actions">
          <ButtonLink to="/book-demo" variant="marigold">
            Book a demo
          </ButtonLink>
          <ButtonLink to={LINKS.vendorPortal} variant="ghost" icon={false}>
            Open vendor portal
          </ButtonLink>
        </div>
      </div>
      <ArcCarousel cards={CARDS} ready={ready} />
    </section>
  );
}
