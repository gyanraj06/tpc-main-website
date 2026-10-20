import { useState } from 'react';
import { ArrowLeft, ArrowRight, ChartLineUp, Handshake, MegaphoneSimple } from '@phosphor-icons/react';
import { LineReveal } from '../../components/Reveal';
import bgA from '../../assets/img/flexible.webp';
import bgB from '../../assets/img/flexible-2.webp';
import bgC from '../../assets/img/ops-bg.webp';
import './GrowthTools.css';

const TOOLS = [
  {
    title: 'AI-powered marketing suite',
    body: 'Turn every event into a high-performing campaign with automated WhatsApp, email, retargeting and smart recommendations. Sell out faster with AI that markets for you.',
    icon: MegaphoneSimple,
    bg: bgA,
  },
  {
    title: 'Vendor & brand ecosystem',
    body: 'Discover partners instantly, manage collaborations and unlock sponsorships with AI-driven matchmaking that connects you to the right brands and vendors — without the manual chase.',
    icon: Handshake,
    bg: bgB,
  },
  {
    title: 'Attendee tracking & insights',
    body: 'Understand your audience with real-time data on behaviour, sales patterns and engagement. Make smarter decisions and grow every event with actionable insights.',
    icon: ChartLineUp,
    bg: bgC,
  },
];

export default function GrowthTools() {
  const [front, setFront] = useState(0);
  const n = TOOLS.length;
  const go = (d: number) => setFront((f) => (f + d + n) % n);

  return (
    <section className="growth section" aria-labelledby="growth-title">
      <div className="wrap growth__grid">
        <div>
          <LineReveal id="growth-title" className="t-h2" lines={['Go beyond', 'ticketing']} />
          <p className="t-lead t-muted growth__lead">
            Marketing, partnerships and audience data are built into the same dashboard you sell tickets from — so
            growth isn’t another tool to manage.
          </p>
          <div className="growth__controls">
            <button type="button" onClick={() => go(-1)} aria-label="Previous tool">
              <ArrowLeft size={18} weight="bold" />
            </button>
            <span aria-live="polite">
              {front + 1} / {n}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="Next tool">
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </div>

        <div className="deck">
          {TOOLS.map((tool, i) => {
            const pos = (i - front + n) % n; // 0 = front
            const Icon = tool.icon;
            return (
              <article
                key={tool.title}
                className="deck__card"
                data-pos={pos}
                aria-hidden={pos !== 0}
                onClick={() => pos !== 0 && setFront(i)}
              >
                <img src={tool.bg} alt="" className="deck__bg" loading="lazy" />
                <span className="deck__icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="t-h3">{tool.title}</h3>
                  <p>{tool.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
