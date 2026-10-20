import { useRef } from 'react';
import { gsap } from 'gsap';
import { ButtonLink } from '../../components/ui';
import { LineReveal } from '../../components/Reveal';
import { LINKS } from '../../lib/links';
import { useGsap } from '../../lib/use-gsap';
import uiEvents from '../../assets/img/ui-vendor-portal.webp';
import uiEarnings from '../../assets/img/ui-analytics.webp';
import uiCustomers from '../../assets/img/ui-booking-data.webp';
import './Launch.css';

export default function Launch() {
  const ref = useRef<HTMLElement>(null);

  // the three dashboard panes drift at different speeds
  useGsap(ref, (reduced) => {
    if (reduced) return;
    const panes: [string, number][] = [
      ['.stack__pane--a', -60],
      ['.stack__pane--b', 40],
      ['.stack__pane--c', -140],
    ];
    panes.forEach(([sel, y]) =>
      gsap.fromTo(
        sel,
        { y: -y / 2 },
        { y: y / 2, ease: 'none', scrollTrigger: { trigger: '.stack', start: 'top bottom', end: 'bottom top', scrub: true } },
      ),
    );
  });

  return (
    <section className="launch section" ref={ref} aria-labelledby="launch-title">
      <div className="wrap launch__grid">
        <div className="launch__copy">
          <LineReveal id="launch-title" className="t-h2" lines={['Launch your', 'experience in', 'minutes, not days']} />
          <p className="t-lead t-muted">
            Forget complicated setups. Create, customise and launch any kind of event from one dashboard — from a
            single-ticket sale to a recurring series.
          </p>
          <div className="launch__actions">
            <ButtonLink to={LINKS.vendorPortal}>Open vendor portal</ButtonLink>
            <span className="launch__soon" aria-disabled="true">
              Customer portal <em>Soon</em>
            </span>
          </div>
        </div>

        <div className="stack" aria-hidden="true">
          <img className="stack__pane stack__pane--a" src={uiEvents} alt="" loading="lazy" />
          <img className="stack__pane stack__pane--b" src={uiEarnings} alt="" loading="lazy" />
          <img className="stack__pane stack__pane--c" src={uiCustomers} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
