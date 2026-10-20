import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  CheckCircle,
  CurrencyInr,
  FacebookLogo,
  Lightning,
  SquaresFour,
  Translate,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
import { ButtonLink } from '../components/ui';
import { LineReveal } from '../components/Reveal';
import { PRODUCT_GROUPS, type ProductSection } from '../data/products';
import { scrollToTarget, useLenis, prefersReducedMotion } from '../lib/smooth-scroll';
import { useGsap } from '../lib/use-gsap';
import hampta from '../assets/img/hampta.webp';
import rishikesh from '../assets/img/rishikesh.webp';
import fashion from '../assets/img/fashion.webp';
import tarang from '../assets/img/tarang.webp';
import '../components/Ticket.css';
import './Products.css';

const SLIDES = [
  { title: 'Hampta Pass', place: 'Manali, Himachal Pradesh', image: hampta },
  { title: 'Rishikesh Day Out', place: 'Rishikesh, Uttarakhand', image: rishikesh },
  { title: 'Divyafal Fashion Show', place: 'Runway night', image: fashion },
  { title: 'Sangeet Fest 2025', place: 'Live music', image: tarang },
];

const HERO_FEATURES = [
  { icon: Lightning, title: 'AI autofill', body: 'Generate content instantly' },
  { icon: SquaresFour, title: 'Templates', body: 'Ready-to-use workflows' },
  { icon: CurrencyInr, title: 'Advanced ticketing', body: 'Complex pricing made simple' },
  { icon: Translate, title: 'Launch anywhere', body: 'Multi-currency and language' },
];

function ProductHero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="phero" id="core-ops" aria-labelledby="phero-title">
      <div className="wrap phero__grid">
        <div>
          <LineReveal as="h1" id="phero-title" className="t-h1" lines={['Create any', 'experience in', 'minutes, not hours']} />
          <p className="t-lead t-muted phero__lead">
            Trippechalo gives organisers one command centre to launch, manage and scale recurring events, tours and
            activities.
          </p>
          <ul className="phero__features">
            {HERO_FEATURES.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <Icon size={22} aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  {body}
                </span>
              </li>
            ))}
          </ul>
          <ButtonLink to="/book-demo">Book a demo</ButtonLink>
        </div>

        <div className="phero__show">
          <div className="phero__ticket ticket">
            <div className="ticket__img">
              {SLIDES.map((s, i) => (
                <img key={s.title} src={s.image} alt={s.title} className={i === slide ? 'is-active' : ''} />
              ))}
            </div>
            <div className="ticket__stub">
              <span className="ticket__title" key={`t${slide}`}>
                {SLIDES[slide].title}
              </span>
              <span className="ticket__place">{SLIDES[slide].place}</span>
            </div>
          </div>
          <div className="phero__dots" role="tablist" aria-label="Example experiences">
            {SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === slide}
                aria-label={s.title}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialTiles() {
  return (
    <div className="psoc" aria-hidden="true">
      <span className="psoc__tile psoc__tile--ig">
        <InstagramLogo size={56} weight="fill" />
      </span>
      <span className="psoc__tile psoc__tile--wa">
        <WhatsappLogo size={48} weight="fill" />
      </span>
      <span className="psoc__tile psoc__tile--fb">
        <FacebookLogo size={48} weight="fill" />
      </span>
      <span className="psoc__tile psoc__tile--yt">
        <YoutubeLogo size={52} weight="fill" />
      </span>
    </div>
  );
}

function Media({ media, title }: { media: ProductSection['media']; title: string }) {
  switch (media.kind) {
    case 'pair':
      return (
        <div className="pmedia pmedia--pair">
          <div className="pmedia__frame">
            <img src={media.images[0]} alt="" loading="lazy" />
          </div>
          <div className="pmedia__frame">
            <img src={media.images[1]} alt="" loading="lazy" />
          </div>
        </div>
      );
    case 'image':
      return (
        <div className="pmedia">
          <div className="pmedia__frame">
            <img src={media.image} alt={title} loading="lazy" />
          </div>
          {media.overlay === 'match' && (
            <div className="pmatch" aria-hidden="true">
              <CheckCircle size={28} weight="fill" />
              <div>
                <p className="pmatch__label">Match found</p>
                <p className="pmatch__name">Sponsor</p>
                <span className="pmatch__bar">
                  <span />
                </span>
              </div>
              <span className="pmatch__score">94%</span>
            </div>
          )}
        </div>
      );
    case 'social':
      return (
        <div className="pmedia">
          <SocialTiles />
        </div>
      );
    default:
      return null;
  }
}

function Block({ section }: { section: ProductSection }) {
  const wide = section.media.kind === 'none';
  return (
    <section className={`pblock ${wide ? 'pblock--wide' : ''}`} id={section.id} aria-labelledby={`${section.id}-title`}>
      <div className="pblock__intro">
        <div>
          <LineReveal id={`${section.id}-title`} className="t-h2 pblock__title" lines={[section.title]} />
          {section.lead.map((p, i) => (
            <p key={i} className="pblock__lead">
              {p}
            </p>
          ))}
        </div>
        <Media media={section.media} title={section.title} />
      </div>

      <dl className={`ppoints ${section.points.length === 1 ? 'ppoints--single' : ''}`}>
        {section.points.map((pt) => (
          <div key={pt.title} className="ppoint">
            <dt>
              {pt.title}
              {pt.note && <span>{pt.note}</span>}
            </dt>
            <dd>{pt.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [current, setCurrent] = useState(PRODUCT_GROUPS[0].sections[0].id);

  // scroll-spy for the side index
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    );
    document.querySelectorAll('.pblock').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.utils.toArray<HTMLElement>('.pmedia__frame img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6, scale: 1.12 },
        {
          yPercent: 6,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
    });
  });

  return (
    <div className="products" ref={ref}>
      <ProductHero />

      <div className="wrap pbody">
        <nav className="pindex" aria-label="Product sections">
          <ol>
            {PRODUCT_GROUPS.map((g, gi) => (
              <li key={g.id}>
                <p className="pindex__group">
                  <span>{String(gi + 1).padStart(2, '0')}</span>
                  {g.label}
                </p>
                <ul>
                  {g.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        aria-current={current === s.id ? 'true' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTarget(lenis, `#${s.id}`);
                          history.replaceState(history.state, '', `#${s.id}`);
                        }}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </nav>

        <div className="pmain">
          {PRODUCT_GROUPS.map((g, gi) => (
            <div key={g.id} className="pgroup" id={`group-${g.id}`}>
              <p className="pgroup__label">
                <span>{String(gi + 1).padStart(2, '0')}</span>
                {g.label}
              </p>
              {g.sections.map((s) => (
                <Block key={s.id} section={s} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="pcta" aria-labelledby="pcta-title">
        <div className="wrap pcta__inner">
          <h2 className="t-h1" id="pcta-title">
            See it running on your own events
          </h2>
          <ButtonLink to="/book-demo" variant="marigold">
            Book a demo
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
