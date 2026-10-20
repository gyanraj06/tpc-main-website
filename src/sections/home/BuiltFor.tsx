import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight, Bank, Camera, Compass, Handshake, MicrophoneStage } from '@phosphor-icons/react';
import { LineReveal } from '../../components/Reveal';
import { useGsap } from '../../lib/use-gsap';
import organisers from '../../assets/img/organisers.webp';
import venues from '../../assets/img/venues.webp';
import './BuiltFor.css';

const FEATURED = [
  {
    title: 'Event & experience organisers',
    body: 'From intimate gatherings to large-scale festivals, get the tools you need to plan, sell and manage experiences effortlessly.',
    image: organisers,
  },
  {
    title: 'Venues & experience spaces',
    body: 'Maximise space utilisation, streamline bookings and run operations from a dashboard built for your venue.',
    image: venues,
  },
];

const OTHERS = [
  { icon: Bank, title: 'Institutions & cultural houses', body: 'Modernise visitor management while preserving heritage.' },
  { icon: Handshake, title: 'Brands & sponsorship partners', body: 'Reach engaged audiences through curated events.' },
  { icon: Compass, title: 'Tour & activity providers', body: 'Automate bookings and focus on delivering great tours.' },
  { icon: MicrophoneStage, title: 'Entertainment & cultural hosts', body: 'Showcase talent and manage gigs with zero hassle.' },
  { icon: Camera, title: 'Travel agencies & production houses', body: 'Curate unique itineraries with seamless backend execution.' },
];

export default function BuiltFor() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.utils.toArray<HTMLElement>('.who__media img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
    });
  });

  return (
    <section className="who section" id="solutions" ref={ref} aria-labelledby="who-title">
      <div className="wrap">
        <div className="who__head">
          <LineReveal id="who-title" className="t-h2" lines={['Who we’re', 'built for']} />
          <p className="t-lead t-muted">
            AI, automation and intelligent tools that help experience providers scale with ease and deliver
            unforgettable moments.
          </p>
        </div>

        <div className="who__featured">
          {FEATURED.map((f) => (
            <Link key={f.title} to="/book-demo" className="who__card">
              <div className="who__media">
                <img src={f.image} alt="" loading="lazy" />
              </div>
              <div className="who__card-row">
                <div>
                  <h3 className="t-h3">{f.title}</h3>
                  <p className="t-muted">{f.body}</p>
                </div>
                <span className="who__arrow" aria-hidden="true">
                  <ArrowUpRight size={20} weight="bold" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <ul className="who__list">
          {OTHERS.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <Link to="/book-demo" className="who__row">
                <Icon size={26} className="who__row-icon" aria-hidden="true" />
                <span className="who__row-title">{title}</span>
                <span className="who__row-body">{body}</span>
                <ArrowUpRight size={20} weight="bold" className="who__row-arrow" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
