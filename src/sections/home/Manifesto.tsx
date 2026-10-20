import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrubText from '../../components/ScrubText';
import { LINKS } from '../../lib/links';
import { useGsap } from '../../lib/use-gsap';
import './Manifesto.css';

// the video's own YouTube thumbnail
const POSTER = `https://i.ytimg.com/vi/${LINKS.video}/maxresdefault.jpg`;

const COPY =
  'Trippechalo is the infrastructure layer powering India’s growing experience economy. We make real-world adventures instantly discoverable and bookable for travellers, while giving organisers intelligent, AI-driven tools to operate smoothly and grow revenue with confidence.';

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.fromTo(
      '.film',
      { scale: 0.82, borderRadius: 48 },
      {
        scale: 1,
        borderRadius: 20,
        ease: 'none',
        scrollTrigger: { trigger: '.film', start: 'top bottom', end: 'center center', scrub: true },
      },
    );
  });

  return (
    <section className="manifesto section" ref={ref} aria-label="About Trippechalo">
      <div className="wrap">
        <ScrubText text={COPY} className="manifesto__text" />

        <div className="film">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${LINKS.video}?start=5&autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Trippechalo product film"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            />
          ) : (
            <button type="button" className="film__cover" onClick={() => setPlaying(true)} aria-label="Play the Trippechalo film on YouTube">
              <img src={POSTER} alt="" loading="lazy" />
              <svg className="film__yt" viewBox="0 0 68 48" aria-hidden="true">
                <path
                  className="film__yt-bg"
                  d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                />
                <path d="M45 24 27 14v20" fill="#fff" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
