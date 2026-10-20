import { useRef, type ElementType } from 'react';
import { gsap } from 'gsap';
import { useGsap } from '../lib/use-gsap';

/**
 * Paragraph whose words light up one by one as it scrolls through the viewport.
 * Words are real text nodes, so screen readers and copy/paste get the sentence intact.
 */
export default function ScrubText({
  text,
  as: Tag = 'p',
  className = '',
  start = 'top 85%',
  end = 'bottom 45%',
}: {
  text: string;
  as?: ElementType;
  className?: string;
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.fromTo(
      '.scrub-word',
      { opacity: 0.16 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start, end, scrub: 0.6 },
      },
    );
  });

  const words = text.split(' ');
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="scrub-word">
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
