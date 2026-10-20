import calendar from '../assets/img/calendar.webp';
import planner from '../assets/img/planner.webp';
import dashboard from '../assets/img/dashboard.webp';
import registration from '../assets/img/registration.webp';
import revenue from '../assets/img/revenue.webp';
import analytics from '../assets/img/analytics.webp';
import website from '../assets/img/website.webp';
import sponsor from '../assets/img/sponsor.webp';

export type Point = { title: string; note?: string; body: string };

export type ProductSection = {
  id: string;
  title: string;
  lead: string[];
  media:
    | { kind: 'pair'; images: [string, string] }
    | { kind: 'image'; image: string; overlay?: 'match' }
    | { kind: 'social' }
    | { kind: 'none' };
  points: Point[];
};

export type ProductGroup = { id: string; label: string; sections: ProductSection[] };

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: 'core',
    label: 'Core experience',
    sections: [
      {
        id: 'recurring-events',
        title: 'Stop recreating the same experience every time',
        lead: [
          'Tired of setting up the same event week after week? Recurring Experience Mode removes the repetitive work. Whether it’s a weekly class, a monthly workshop, a daily tour or a seasonal festival, set it up once and let the system handle the rest.',
        ],
        media: { kind: 'pair', images: [calendar, planner] },
        points: [
          { title: 'Set it and forget it', body: 'Create a single template, define its schedule — daily, weekly, monthly or custom — and every future instance is generated for you.' },
          { title: 'Time-saving automation', body: 'No more manual duplication, date changes or one-by-one event setups.' },
          { title: 'Seamless management', body: 'All instances stay linked, so one change from a single control panel updates the entire series.' },
          { title: 'Consistent experience', body: 'Attendees always get accurate information and the same booking flow, whatever the date.' },
          { title: 'Boost capacity', body: 'Free your team to improve the experience instead of managing logistics.' },
        ],
      },
      {
        id: 'smart-dashboard',
        title: 'Attendee tracking and insights',
        lead: ['Know who’s arrived, which sessions are full and where the energy is — while the event is still running.'],
        media: { kind: 'image', image: dashboard },
        points: [
          { title: 'Real-time engagement metrics', note: 'Not just post-event reports', body: 'Live updates on check-ins, session capacity and the busiest areas, so you can adjust staffing, content or flow on the spot.' },
          { title: '360° attendee profiles', body: 'Registration data merged with check-in times, session attendance and interaction points. Understand individual journeys, not just totals.' },
          { title: 'Actionable visual dashboards', note: 'Not complex spreadsheets', body: 'Clear charts instead of Excel exports. Spot trends, bottlenecks and what’s working at a glance.' },
          { title: 'Predictive & behavioural insights', body: 'AI surfaces patterns in attendee behaviour — popular sessions, crowd movement, preferences — to sharpen your next programme.' },
        ],
      },
      {
        id: 'registration',
        title: 'The intelligent registration experience',
        lead: [
          'Generic forms end where your event experience begins. Smart Registration & Ticketing is built for organisers who want a professional, integrated and effortless flow — not just a form builder, but the backbone of your attendee management.',
        ],
        media: { kind: 'image', image: registration },
        points: [
          { title: 'Seamless payments & ticketing', note: 'Not a workaround', body: 'Go from registration to revenue in one step. Accept card payments, sell multiple ticket tiers and manage discount codes inside the form — no payment links, no manual invoices.' },
        ],
      },
    ],
  },
  {
    id: 'operations',
    label: 'Operations and management',
    sections: [
      {
        id: 'revenue-ticketing',
        title: 'Intelligent ticketing & seamless payments',
        lead: [
          'Clunky payment links and basic forms cost you revenue and attendee trust. Smart Ticketing & Payments is a secure, flexible system that turns your sales process into an advantage — optimising every transaction, not just taking money.',
        ],
        media: { kind: 'image', image: revenue },
        points: [
          { title: 'Integrated revenue engine', note: 'Not a separate link', body: 'Ticketing and payments are native, so attendees get one unbroken checkout — less cart abandonment, more conversions.' },
          { title: 'Dynamic pricing & tiered sales', body: 'Early Bird, VIP, General Admission, time-based pricing and group discounts. Maximise revenue with smarter sales strategies.' },
          { title: 'Effortless refunds & management', body: 'Handle cancellations and refunds from your dashboard in a few clicks, with no manual reconciliation.' },
          { title: 'Granular sales insights', body: 'Track revenue by ticket type and watch sales trends in real time, so you can adjust strategy quickly.' },
        ],
      },
      {
        id: 'operations-analytics',
        title: 'See your entire experience business',
        lead: [
          'A real-time analytics engine that turns every booking, click and interaction into insight. No guessing, no gut feel — clean data that helps you sell more, plan smarter and grow faster.',
        ],
        media: { kind: 'image', image: analytics },
        points: [
          { title: 'Audience intelligence', body: 'Who attends — age, interests, booking behaviour — so you reach the right people every time.' },
          { title: 'Revenue & payout tracking', body: 'Earnings, dues and settlements in one transparent dashboard. No hidden math.' },
          { title: 'Experience performance reports', body: 'See which events, workshops or treks are trending and which need work. Compare past, current and recurring events in seconds.' },
          { title: 'Conversion analytics', body: 'Follow how people discover, click and buy, then fix drop-offs to lift ticket sales.' },
          { title: 'Marketing effectiveness', body: 'See which channels — Instagram, WhatsApp, website, partners — actually bring customers. Amplify what works.' },
        ],
      },
      {
        id: 'auto-communication',
        title: 'Auto communication system',
        lead: [
          'Running an experience means endless WhatsApp replies, confirmations, reminders, changes and last-minute clarifications.',
          'Trippechalo’s AI-driven Auto Communication System handles all of it, instantly and intelligently.',
        ],
        media: { kind: 'none' },
        points: [
          { title: 'AI-powered WhatsApp automation', body: 'Guest operations on autopilot. AI resolves queries, negotiates deals and personalises the experience across the whole lifecycle.' },
          { title: 'Personalised invites & negotiation', body: 'Send invites to VIPs and sponsors that negotiate for you, with automated group discounts and smart follow-ups.' },
          { title: 'AI voice call assistant', body: 'Recover abandoned bookings with smart calls. A multilingual AI delivers invites, reminders and urgent updates by phone.' },
          { title: 'Branded confirmation emails', body: 'Branded QR tickets and real-time updates, from sponsor placement to targeted post-event marketing.' },
        ],
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing and growth',
    sections: [
      {
        id: 'social-media',
        title: 'Social media that runs itself',
        lead: [
          'Instagram here, WhatsApp there, insights somewhere else — juggling apps breaks consistency. One intelligent dashboard manages every channel, automates content and keeps your brand active.',
        ],
        media: { kind: 'social' },
        points: [
          { title: 'AI content creation', body: 'Ready-to-post captions, hashtags and visual ideas tailored to your vibe.' },
          { title: 'Cross-platform sync', body: 'Publish to Instagram, Facebook and YouTube from one place.' },
          { title: 'Engagement hub', body: 'One inbox for every DM and comment. Reply faster, never miss a lead.' },
          { title: 'Effortless growth', body: 'Consistent posting grows audiences. Stay active without the burnout.' },
        ],
      },
      {
        id: 'website-builder',
        title: 'Website builder & microsites',
        lead: [
          'Launch a microsite for any experience in minutes — no code, no designers, no delays. Add your event details and Trippechalo generates a modern, mobile-first site ready to share and sell.',
        ],
        media: { kind: 'image', image: website },
        points: [
          { title: 'AI-designed layouts', body: 'Design tailored automatically to your experience’s vibe.' },
          { title: 'SEO-optimised', body: 'Built-in best practices so your events get found on Google.' },
          { title: 'Instant publishing', body: 'Go live in seconds with your branding, rules and images.' },
          { title: 'Sales-ready', body: 'Built for conversions, ticket sales and sponsor visibility.' },
        ],
      },
    ],
  },
  {
    id: 'vendor',
    label: 'Vendor and brand',
    sections: [
      {
        id: 'vendor-brand',
        title: 'Sponsorship & brand matchmaking',
        lead: [
          'Finding sponsors shouldn’t mean chasing people on Instagram, emailing PDFs or waiting for callbacks.',
          'Trippechalo turns sponsorship into an automated system that connects organisers with brands instantly and at scale.',
        ],
        media: { kind: 'image', image: sponsor, overlay: 'match' },
        points: [
          { title: 'AI-powered matching', body: 'The engine reads your category, audience, location and pricing, then matches you with relevant brands.' },
          { title: 'Smart packages', body: 'Plug-and-play tiers — Title Sponsor, Co-Sponsor, Media Partner and more — with deliverables pre-built.' },
          { title: 'Automated outreach', body: 'Send proposals in one click. AI handles follow-ups, reminders, negotiation nudges and even declines, professionally.' },
          { title: 'Revenue boost', body: 'Recommended sponsorship combinations that maximise earnings for your category, audience and local demand.' },
        ],
      },
    ],
  },
];
