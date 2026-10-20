import { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGsap } from '../lib/use-gsap';

/**
 * Headline whose lines rise out of a mask when it enters the viewport.
 * Pass each visual line as an array entry so the break points are deliberate.
 */
export function LineReveal({
  lines,
  as: Tag = 'h2',
  className = '',
  id,
}: {
  lines: ReactNode[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useGsap(ref, (reduced) => {
    if (reduced) return;
    gsap.from(ref.current!.querySelectorAll('.line-mask > span'), {
      yPercent: 105,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
    });
  });
  return (
    <Tag ref={ref} className={className} id={id}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
