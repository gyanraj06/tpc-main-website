import { useRef } from 'react';
import { gsap } from 'gsap';
import { DownloadSimple } from '@phosphor-icons/react';
import { LINKS } from '../../lib/links';
import { useGsap } from '../../lib/use-gsap';
import phone from '../../assets/img/app-mock.webp';
import qr from '../../assets/img/app-qr.png';
import './OpsApp.css';

export default function OpsApp() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.fromTo(
      '.ops__phone',
      { yPercent: 28, rotate: -6 },
      {
        yPercent: 0,
        rotate: 0,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'center center', scrub: true },
      },
    );
  });

  return (
    <section className="ops" id="ops-app" ref={ref} aria-labelledby="ops-title">
      <div className="wrap ops__grid">
        <div className="ops__copy">
          <p className="kicker ops__kicker">For your on-ground team</p>
          <h2 className="t-h2" id="ops-title">
            Introducing the TPC Ops app
          </h2>
          <p className="t-lead ops__lead">
            Powering seamless operations for Trip Pe Chalo. Manage trips, vendors and bookings — all in one place.
          </p>
        </div>

        <img className="ops__phone" src={phone} alt="TPC Ops app sign-in screen" loading="lazy" />

        <div className="ops__get">
          <a href={LINKS.opsApk} className="ops__qr" aria-label="Download the TPC Ops app for Android (APK)">
            <img src={qr} alt="" width={148} height={148} loading="lazy" />
          </a>
          <p>Scan with your phone, or</p>
          <a href={LINKS.opsApk} className="btn btn--light btn--small">
            <span>Download for Android</span>
            <span className="btn__icon" aria-hidden="true">
              <DownloadSimple size={15} weight="bold" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
