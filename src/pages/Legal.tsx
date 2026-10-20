import { useEffect, useMemo, useState } from 'react';
import legalNotice from '../data/legal/legal-notice.json';
import privacyPolicy from '../data/legal/privacy-policy.json';
import terms from '../data/legal/terms-and-conditions.json';
import { scrollToTarget, useLenis } from '../lib/smooth-scroll';
import './Legal.css';

type Block =
  | { t: 'h2' | 'h3' | 'h4'; x: string }
  | { t: 'p'; x: string }
  | { t: 'ul'; x: string[] }
  | { t: 'table'; head: string[]; rows: string[][] };

const DOCS = {
  'legal-notice': { title: 'Legal notice', blocks: legalNotice as Block[] },
  'privacy-policy': { title: 'Privacy policy', blocks: privacyPolicy as Block[] },
  'terms-and-conditions': { title: 'Terms & conditions', blocks: terms as Block[] },
} as const;

export type LegalDoc = keyof typeof DOCS;

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// content is the company's own legal copy, extracted from the current site
const html = (x: string) => ({ __html: x });

export default function Legal({ doc }: { doc: LegalDoc }) {
  const { title, blocks } = DOCS[doc];
  const lenis = useLenis();
  const toc = useMemo(
    () => blocks.filter((b): b is { t: 'h2'; x: string } => b.t === 'h2').map((b) => ({ id: slug(b.x), label: b.x })),
    [blocks],
  );
  const [current, setCurrent] = useState(toc[0]?.id);

  // highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id));
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [toc]);

  return (
    <article className="legal">
      <header className="legal__head wrap">
        <p className="kicker">Legal</p>
        <h1 className="t-h1">{title}</h1>
      </header>

      <div className="wrap legal__grid">
        <nav className="legal__toc" aria-label="On this page">
          <p className="legal__toc-title">On this page</p>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={current === item.id ? 'true' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget(lenis, `#${item.id}`, { offset: -110 });
                    history.replaceState(history.state, '', `#${item.id}`);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal__body">
          {blocks.map((b, i) => {
            switch (b.t) {
              case 'h2':
                return (
                  <h2 key={i} id={slug(b.x)}>
                    {b.x}
                  </h2>
                );
              case 'h3':
              case 'h4':
                return <h3 key={i}>{b.x}</h3>;
              case 'p':
                return <p key={i} dangerouslySetInnerHTML={html(b.x)} />;
              case 'ul':
                return (
                  <ul key={i}>
                    {b.x.map((li, j) => (
                      <li key={j} dangerouslySetInnerHTML={html(li)} />
                    ))}
                  </ul>
                );
              case 'table':
                return (
                  <div className="legal__table" key={i} data-lenis-prevent>
                    <table>
                      <thead>
                        <tr>
                          {b.head.map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map((row, r) => (
                          <tr key={r}>
                            {row.map((cell, c) => (
                              <td key={c}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </article>
  );
}
