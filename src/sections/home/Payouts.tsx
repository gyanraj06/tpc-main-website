import { LineReveal } from '../../components/Reveal';
import './Payouts.css';

const STEPS = [
  { title: 'Instant confirmation', body: 'See sales and revenue in your wallet the moment a booking is confirmed.' },
  { title: 'Clear fund management', body: 'Track your earnings, fees and payouts in one transparent ledger.' },
  { title: 'Effortless bank transfers', body: 'Schedule and receive payouts directly to your bank account with a clear, simple structure.' },
];

export default function Payouts() {
  return (
    <section className="payouts section" aria-labelledby="payouts-title">
      <div className="wrap">
        <div className="payouts__head">
          <LineReveal id="payouts-title" className="t-h2" lines={['Simplify payouts', 'and build trust']} />
          <p className="t-lead t-muted">
            Every rupee is accounted for, from the moment a ticket sells to the moment it lands in your bank.
          </p>
        </div>

        <ol className="ledger">
          {STEPS.map((s, i) => (
            <li key={s.title} className="ledger__step">
              <span className="ledger__no">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="t-h3">{s.title}</h3>
              <p className="t-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
