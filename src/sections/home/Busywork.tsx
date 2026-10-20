import { ArrowsClockwise, ChartLineUp, ChatCircleDots, Handshake, Lightning, Ticket } from '@phosphor-icons/react';
import { LineReveal } from '../../components/Reveal';
import './Busywork.css';

const ITEMS = [
  {
    icon: Lightning,
    title: 'Instant experience publishing',
    body: 'TPC auto-creates the description, poster, pricing suggestions and SEO text in seconds. Publish with almost zero manual work.',
  },
  {
    icon: Ticket,
    title: 'Zero-stress ticketing & payments',
    body: 'Ticketing, payouts, QR codes, attendee lists and confirmations run on their own — all synced in real time.',
  },
  {
    icon: ChatCircleDots,
    title: 'Automated attendee communication',
    body: 'WhatsApp, SMS and email updates go out automatically for:',
    list: ['Registration confirmations', 'Audition details', 'Payment reminders', 'Entry passes', 'Day-of instructions'],
  },
  {
    icon: ChartLineUp,
    title: 'Smart insights instead of guesswork',
    body: 'AI-powered insights show you:',
    list: ['Who’s visiting your page', 'When people drop off', 'Optimal pricing windows', 'Predicted attendance', 'Repeat visitors'],
  },
  {
    icon: Handshake,
    title: 'Vendor & sponsor discovery, done for you',
    body: 'Finding DJs, anchors, photographers, venues, partners or sponsors usually takes days. Trippechalo connects you to a curated vendor pool and brand sponsors through AI matching.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Recurring events in one click',
    body: 'Duplicate and relaunch an experience instead of rebuilding it. Work once, host again, earn more.',
  },
];

export default function Busywork() {
  return (
    <section className="busy section" aria-labelledby="busy-title">
      <div className="wrap">
        <LineReveal id="busy-title" className="t-h2 busy__title" lines={['How Trippechalo', 'eliminates the busywork']} />
        <div className="busy__grid">
          {ITEMS.map(({ icon: Icon, title, body, list }) => (
            <article key={title} className="busy__item">
              <span className="busy__icon" aria-hidden="true">
                <Icon size={24} weight="fill" />
              </span>
              <h3 className="busy__h">{title}</h3>
              <p className="t-muted">{body}</p>
              {list && (
                <ul className="busy__list">
                  {list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
