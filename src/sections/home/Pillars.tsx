import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChartBar, CreditCard, Desktop, TrendUp } from '@phosphor-icons/react';
import { useGsap } from '../../lib/use-gsap';
import { scrollToTarget, useLenis } from '../../lib/smooth-scroll';
import imgPortal from '../../assets/img/ui-vendor-portal.webp';
import imgBooking from '../../assets/img/ui-booking-data.webp';
import imgAnalytics from '../../assets/img/ui-analytics.webp';
import imgCounter from '../../assets/img/ui-counter-booking.webp';
import './Pillars.css';

const PILLARS = [
  {
    tab: 'Vendor dashboard',
    title: 'Complete control centre',
    body: 'One place to manage events, track bookings and run your business operations with real-time insights.',
    icon: Desktop,
    image: imgPortal,
  },
  {
    tab: 'Booking data',
    title: 'Smart customer intelligence',
    body: 'Real-time ticket insights, customer analytics and performance metrics to sharpen your sales strategy.',
    icon: ChartBar,
    image: imgBooking,
  },
  {
    tab: 'Analytics',
    title: 'Predictive business growth',
    body: 'Advanced revenue tracking, customer demographics and AI-powered predictions to grow your business.',
    icon: TrendUp,
    image: imgAnalytics,
  },
  {
    tab: 'Counter booking',
    title: 'Omnichannel bookings',
    body: 'Seamless offline-to-online sync. Accept bookings anywhere with a mobile-first counter.',
    icon: CreditCard,
    image: imgCounter,
  },
];

export default function Pillars() {
  const ref = useRef<HTMLElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const lenis = useLenis();

  // on wide screens the section pins and scroll walks through the four pillars
  useGsap(ref, () => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      trigger.current = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const i = Math.min(PILLARS.length - 1, Math.floor(self.progress * PILLARS.length));
          setActive((cur) => (cur === i ? cur : i));
          ref.current?.style.setProperty('--p', self.progress.toFixed(4));
        },
      });
      return () => {
        trigger.current = null;
      };
    });
  });

  const pick = (i: number) => {
    const st = trigger.current;
    if (!st) {
      setActive(i);
      return;
    }
    const y = st.start + ((i + 0.5) / PILLARS.length) * (st.end - st.start);
    scrollToTarget(lenis, y);
  };

  return (
    <section className="pillars" ref={ref} aria-labelledby="pillars-title" id="pillars">
      <div className="pillars__sticky">
        <div className="wrap pillars__grid">
          <div className="pillars__copy">
            <h2 className="t-h2" id="pillars-title">
              Four pillars of business growth
            </h2>
            <p className="t-muted pillars__lead">
              Everything you need to streamline operations, understand your customers and scale efficiently.
            </p>

            <div className="pillars__tabs" role="tablist" aria-label="Pillars">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <button
                    key={p.tab}
                    type="button"
                    role="tab"
                    id={`pillar-tab-${i}`}
                    aria-selected={active === i}
                    aria-controls="pillar-panel"
                    className="pillars__tab"
                    onClick={() => pick(i)}
                  >
                    <Icon size={20} aria-hidden="true" />
                    {p.tab}
                  </button>
                );
              })}
            </div>

            <div className="pillars__panel" id="pillar-panel" role="tabpanel" aria-labelledby={`pillar-tab-${active}`}>
              <h3 className="t-h3" key={`t${active}`}>
                {PILLARS[active].title}
              </h3>
              <p className="t-muted" key={`b${active}`}>
                {PILLARS[active].body}
              </p>
            </div>
          </div>

          <div className="pillars__frame" aria-hidden="true">
            {PILLARS.map((p, i) => (
              <img key={p.tab} src={p.image} alt="" className={i === active ? 'is-active' : ''} loading="lazy" />
            ))}
            <span className="pillars__progress" />
          </div>
        </div>
      </div>
    </section>
  );
}
