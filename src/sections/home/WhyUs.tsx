import {
  CalendarCheck,
  ChartLineUp,
  Globe,
  Handshake,
  Leaf,
  QrCode,
  Ticket,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { LineReveal } from '../../components/Reveal';
import logoMark from '../../assets/img/logo-mark.png';
import './WhyUs.css';

// what Trippechalo unifies — discovery, ticketing, operations, growth, sustainability
const ORBIT = [
  { icon: Globe, label: 'Discovery' },
  { icon: Ticket, label: 'Ticketing' },
  { icon: QrCode, label: 'Check-in' },
  { icon: WhatsappLogo, label: 'Messaging' },
  { icon: ChartLineUp, label: 'Analytics' },
  { icon: Handshake, label: 'Sponsors' },
  { icon: CalendarCheck, label: 'Scheduling' },
  { icon: Leaf, label: 'Sustainability' },
];

export default function WhyUs() {
  return (
    <section className="why section" id="about" aria-labelledby="why-title">
      <div className="wrap why__grid">
        <div>
          <LineReveal id="why-title" className="t-h2" lines={['Why Trippechalo', 'over traditional', 'options?']} />
          <p className="t-lead why__lead">
            Built by travellers, tech innovators and experience creators, Trippechalo is the first AI-powered
            ecosystem designed for India’s fast-growing experience economy.
          </p>
          <p className="why__body">
            We go beyond traditional platforms by unifying discovery, ticketing, operations and sustainability in
            one intelligent system. With real-time data, automation and deep local insight, we make discovering and
            running experiences effortless, scalable and future-ready.
          </p>
        </div>

        <div className="orbit" aria-label="One system for discovery, ticketing, check-in, messaging, analytics, sponsors, scheduling and sustainability" role="img">
          <span className="orbit__ring orbit__ring--1" />
          <span className="orbit__ring orbit__ring--2" />
          <div className="orbit__core">
            <img src={logoMark} alt="" />
          </div>
          <div className="orbit__track">
            {ORBIT.map(({ icon: Icon, label }, i) => (
              <div key={label} className="orbit__item" style={{ ['--a' as string]: `${(360 / ORBIT.length) * i}deg` }}>
                <div className="orbit__chip">
                  <Icon size={22} />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
