import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, CircleNotch } from '@phosphor-icons/react';
import { sendDemoRequest, type DemoRequest } from '../lib/email';
import { LINKS } from '../lib/links';
import './BookDemo.css';

const SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'];
const INTERESTS = ['Event Builder', 'Ticketing', 'Analytics', 'Vendor Management', 'Other'];

const EMPTY: DemoRequest = { email: '', firstName: '', lastName: '', companyName: '', companySize: '', interest: '' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

function ChipGroup({
  legend,
  name,
  options,
  value,
  onChange,
  suffix,
}: {
  legend: string;
  name: keyof DemoRequest;
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  suffix?: string;
}) {
  return (
    <fieldset className="field field--chips">
      <legend>{legend}</legend>
      <div className="chips">
        {options.map((opt, i) => (
          <label key={opt} className="chip">
            <input type="radio" name={name} value={opt} checked={value === opt} onChange={onChange} required={i === 0} />
            <span>
              {opt}
              {suffix}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function BookDemo() {
  const [form, setForm] = useState<DemoRequest>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');

  const update = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendDemoRequest(form);
      setStatus('sent');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="demo">
      <div className="demo__aside">
        <div className="demo__aside-inner">
          <h1 className="t-h1">Ready to book a demo?</h1>
          <p className="t-lead">
            Fill in your details and one of our advisors will be in touch to schedule a walk-through and answer any
            questions.
          </p>
          <div className="demo__contact">
            <p>Prefer email?</p>
            <a href={`mailto:${LINKS.email}`} className="u-link">
              {LINKS.email}
            </a>
          </div>
        </div>
      </div>

      <div className="demo__main">
        {status === 'sent' ? (
          <div className="demo__done" role="status">
            <CheckCircle size={56} weight="fill" />
            <h2 className="t-h2">Request sent</h2>
            <p className="t-lead t-muted">
              Thanks — we’ve got your details. An advisor will reach out to schedule your walk-through.
            </p>
            <div className="demo__done-actions">
              <Link to="/products" className="btn">
                <span>Explore the product</span>
                <span className="btn__icon" aria-hidden="true">
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </Link>
              <button type="button" className="btn btn--ghost btn--plain" onClick={() => setStatus('idle')}>
                Send another request
              </button>
            </div>
          </div>
        ) : (
          <form className="demo__form" onSubmit={submit}>
            <label className="field">
              <span>Work email</span>
              <input type="email" name="email" required autoComplete="email" placeholder="name@company.com" value={form.email} onChange={update} />
            </label>
            <div className="field-row">
              <label className="field">
                <span>First name</span>
                <input name="firstName" required autoComplete="given-name" value={form.firstName} onChange={update} />
              </label>
              <label className="field">
                <span>Last name</span>
                <input name="lastName" required autoComplete="family-name" value={form.lastName} onChange={update} />
              </label>
            </div>
            <label className="field">
              <span>Company name</span>
              <input name="companyName" required autoComplete="organization" value={form.companyName} onChange={update} />
            </label>

            <ChipGroup legend="Company size" name="companySize" options={SIZES} value={form.companySize} onChange={update} suffix=" people" />
            <ChipGroup legend="I’m interested in" name="interest" options={INTERESTS} value={form.interest} onChange={update} />

            <p className="demo__fine">
              We’ll use these details to contact you about Trippechalo. Read more in our{' '}
              <Link to="/privacy-policy" className="u-link">
                privacy policy
              </Link>
              .
            </p>

            <div className="demo__submit">
              <button type="submit" className="btn btn--cobalt" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending…' : 'Book my demo'}</span>
                <span className="btn__icon" aria-hidden="true">
                  {status === 'sending' ? <CircleNotch size={18} className="spin" /> : <ArrowUpRight size={18} weight="bold" />}
                </span>
              </button>
              <p className="demo__error" role="alert">
                {status === 'error' && 'Your request didn’t go through. Check your connection and try again, or email us directly.'}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
