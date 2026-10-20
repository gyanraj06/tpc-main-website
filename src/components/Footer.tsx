import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleNotch, InstagramLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import { LINKS } from '../lib/links';
import { sendNewsletterSignup } from '../lib/email';
import { Logo, Roll } from './ui';
import './Footer.css';

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const onSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendNewsletterSignup(email);
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__cta">
            <p className="footer__ask">Have an experience to launch?</p>
            <a href={`mailto:${LINKS.email}`} className="footer__mail">
              {LINKS.email}
            </a>
          </div>

          <form className="footer__news" onSubmit={onSubscribe}>
            <label htmlFor="news-email" className="footer__news-label">
              Get product updates in your inbox
            </label>
            <div className="footer__field">
              <input
                id="news-email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== 'sending') setStatus('idle');
                }}
              />
              <button type="submit" disabled={status === 'sending'} aria-label="Subscribe">
                {status === 'sending' ? (
                  <CircleNotch size={18} className="spin" />
                ) : (
                  <ArrowRight size={18} weight="bold" />
                )}
              </button>
            </div>
            <p className="footer__news-status" role="status">
              {status === 'done' && "You're subscribed. Watch for updates from contact@trippechalo.in."}
              {status === 'error' && 'That didn’t go through. Check your connection and try again.'}
            </p>
          </form>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>India’s AI-powered Experience OS. Built by Mounterra Innovations.</p>
          </div>

          <nav aria-label="Footer" className="footer__cols">
            <div>
              <p className="footer__col-title">Platform</p>
              <Link to="/products" className="footer__link"><Roll>Product</Roll></Link>
              <Link to="/#solutions" className="footer__link"><Roll>Solutions</Roll></Link>
              <Link to="/#ops-app" className="footer__link"><Roll>TPC Ops app</Roll></Link>
              <a href={LINKS.vendorPortal} target="_blank" rel="noopener noreferrer" className="footer__link"><Roll>Vendor portal</Roll></a>
            </div>
            <div>
              <p className="footer__col-title">Company</p>
              <Link to="/#about" className="footer__link"><Roll>About</Roll></Link>
              <Link to="/book-demo" className="footer__link"><Roll>Book a demo</Roll></Link>
              <a href={`mailto:${LINKS.email}`} className="footer__link"><Roll>Support</Roll></a>
            </div>
            <div>
              <p className="footer__col-title">Legal</p>
              <Link to="/legal-notice" className="footer__link"><Roll>Legal notice</Roll></Link>
              <Link to="/privacy-policy" className="footer__link"><Roll>Privacy policy</Roll></Link>
              <Link to="/terms-and-conditions" className="footer__link"><Roll>Terms & conditions</Roll></Link>
            </div>
          </nav>
        </div>

        <div className="footer__base">
          <p>© {new Date().getFullYear()} Mounterra. All rights reserved.</p>
          <div className="footer__social">
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="Trippechalo on X">
              <XLogo size={18} />
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Trippechalo on Instagram">
              <InstagramLogo size={20} />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Mounterra Innovations on LinkedIn">
              <LinkedinLogo size={20} />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__deva" aria-hidden="true">ट्रिप पे चलो</p>
    </footer>
  );
}
