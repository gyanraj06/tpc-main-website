import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../lib/smooth-scroll';
import './Ticket.css';
import './ArcCarousel.css';

export type ArcCard = { title: string; place: string; image: string };

const wrap = gsap.utils.wrap;

/**
 * Experience "tickets" riding a wide circular arc. Drifts slowly on its own,
 * speeds up with page scroll velocity, and can be dragged.
 * Positions are written straight to the DOM every frame — React renders once.
 */
export default function ArcCarousel({ cards, ready }: { cards: ArcCard[]; ready: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLDivElement[]>([]);
  const deck = [...cards, ...cards];

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();

    let radius = 1200;
    let step = 18; // degrees between cards
    const measure = () => {
      const card = items.current[0];
      const w = card?.offsetWidth ?? 260;
      const h = card?.offsetHeight ?? w * 1.4;
      radius = Math.max(window.innerWidth * 0.95, 760);
      step = (((w + Math.min(32, w * 0.12)) / radius) * 180) / Math.PI;

      // The paper horizon is a circle concentric with the ticket path, sitting just
      // under the stubs. The block is made tall enough for that curve to reach both
      // viewport edges, so the hero ends on a clean arc instead of a straight cut.
      const gap = Math.max(10, w * 0.045);
      const horizon = radius - h - gap;
      const half = window.innerWidth / 2;
      const drop = horizon > half ? horizon - Math.sqrt(horizon * horizon - half * half) : horizon;
      el.style.setProperty('--arc-r', `${radius}px`);
      el.style.setProperty('--arc-horizon', `${horizon}px`);
      el.style.setProperty('--arc-top', `${h + gap}px`);
      el.style.setProperty('--arc-h', `${Math.ceil(h + gap + drop + 2)}px`);
    };
    measure();

    let offset = 0;
    let dragVel = 0;
    let dragging = false;
    let lastX = 0;
    let lastScroll = window.scrollY;
    let scrollBoost = 0;
    const drift = reduced ? 0 : -2.2; // deg per second

    const render = () => {
      const span = step * deck.length;
      items.current.forEach((node, i) => {
        const a = wrap(-span / 2, span / 2, offset + i * step);
        const fade = 1 - gsap.utils.clamp(0, 1, (Math.abs(a) - 38) / 22);
        node.style.transform = `translateX(-50%) rotate(${a.toFixed(3)}deg)`;
        node.style.opacity = fade.toFixed(3);
        node.style.visibility = fade <= 0 ? 'hidden' : 'visible';
      });
    };

    const tick = (_t: number, dtMs: number) => {
      const dt = Math.min(dtMs, 50) / 1000;
      const y = window.scrollY;
      scrollBoost = gsap.utils.interpolate(scrollBoost, (y - lastScroll) * -0.06, 0.12);
      lastScroll = y;
      if (!dragging) {
        offset += drift * dt + scrollBoost + dragVel;
        dragVel *= 0.94;
      }
      render();
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      dragVel = 0;
      lastX = e.clientX;
      el.setPointerCapture(e.pointerId);
      el.classList.add('is-dragging');
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      const deg = ((dx / radius) * 180) / Math.PI;
      offset += deg;
      dragVel = deg * 0.6;
    };
    const onUp = () => {
      dragging = false;
      el.classList.remove('is-dragging');
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    window.addEventListener('resize', measure);
    gsap.ticker.add(tick);
    render();

    return () => {
      gsap.ticker.remove(tick);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      window.removeEventListener('resize', measure);
    };
  }, [deck.length]);

  // entrance: tickets rise into the arc once the intro has lifted
  useEffect(() => {
    if (!ready || !track.current) return;
    if (prefersReducedMotion()) {
      gsap.set(track.current, { opacity: 1 });
      return;
    }
    const tween = gsap.fromTo(
      track.current,
      { opacity: 0, y: 220 },
      { opacity: 1, y: 0, duration: 1.6, ease: 'expo.out', delay: 0.25 },
    );
    return () => {
      tween.kill();
    };
  }, [ready]);

  return (
    <div className="arc" ref={root} aria-label="Experiences listed on Trippechalo" role="group">
      <div className="arc__track" ref={track}>
        {deck.map((card, i) => (
          <div
            className="arc__card"
            key={i}
            ref={(n) => {
              if (n) items.current[i] = n;
            }}
            aria-hidden={i >= cards.length}
          >
            <div className="ticket">
              <div className="ticket__img">
                <img src={card.image} alt={i < cards.length ? card.title : ''} draggable={false} loading={i < 4 ? 'eager' : 'lazy'} />
              </div>
              <div className="ticket__stub">
                <span className="ticket__title">{card.title}</span>
                <span className="ticket__place">{card.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arc__horizon" aria-hidden="true" />
    </div>
  );
}
