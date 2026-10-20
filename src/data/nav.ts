import type { Icon } from '@phosphor-icons/react';
import {
  Airplane,
  ArrowsClockwise,
  Article,
  Bank,
  BookOpen,
  Briefcase,
  CalendarCheck,
  ChartBar,
  ChartLineUp,
  ChatCircleDots,
  Confetti,
  CurrencyInr,
  GitCommit,
  Globe,
  Handshake,
  Headset,
  Info,
  MapPin,
  Megaphone,
  MusicNotes,
  Newspaper,
  Question,
  ShareNetwork,
  SquaresFour,
  Ticket,
  Users,
  UsersFour,
  UsersThree,
} from '@phosphor-icons/react';
import { LINKS } from '../lib/links';

export type NavItem = {
  label: string;
  description: string;
  icon: Icon;
  /** internal route (may include a #hash) or external URL; absent = not live yet */
  to?: string;
};

export type NavGroup = { title: string; items: NavItem[] };

export type NavMenu = { id: string; label: string; groups: NavGroup[]; columns: 1 | 2 };

export const NAV: NavMenu[] = [
  {
    id: 'product',
    label: 'Product',
    columns: 2,
    groups: [
      {
        title: 'Core experience and ops',
        items: [
          { label: 'Easy experience setup', description: 'Quick event builder', icon: CalendarCheck, to: '/products#core-ops' },
          { label: 'Recurring events', description: 'Automated event series', icon: ArrowsClockwise, to: '/products#recurring-events' },
          { label: 'Attendee tracking and insights', description: 'Live attendee data', icon: Users, to: '/products#smart-dashboard' },
          { label: 'Custom registration form', description: 'Build custom forms', icon: Article, to: '/products#registration' },
        ],
      },
      {
        title: 'Operations and management',
        items: [
          { label: 'Smart ticketing and payments', description: 'Easy ticket sales', icon: Ticket, to: '/products#revenue-ticketing' },
          { label: 'Vendor dashboard and analytics', description: 'Simple event reports', icon: ChartBar, to: '/products#operations-analytics' },
          { label: 'Auto communication system', description: 'Automatic alerts and replies', icon: ChatCircleDots, to: '/products#auto-communication' },
        ],
      },
      {
        title: 'Marketing and growth',
        items: [
          { label: 'Social media management', description: 'Schedule social posts', icon: ShareNetwork, to: '/products#social-media' },
          { label: 'Website builder and microsites', description: 'Create event websites', icon: Globe, to: '/products#website-builder' },
        ],
      },
      {
        title: 'Vendor and brand',
        items: [
          { label: 'Sponsor and brand management', description: 'Manage event sponsors', icon: Handshake, to: '/products#vendor-brand' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    columns: 2,
    groups: [
      {
        title: 'Built for',
        items: [
          { label: 'Event & experience organisers', description: 'Create. Manage. Grow easily.', icon: Confetti, to: '/#solutions' },
          { label: 'Tour & activity providers', description: 'Automate bookings. Reach more.', icon: MapPin, to: '/#solutions' },
          { label: 'Venues & experience spaces', description: 'Showcase and manage smartly.', icon: SquaresFour, to: '/#solutions' },
          { label: 'Entertainment & cultural hosts', description: 'Launch shows. Track impact.', icon: MusicNotes, to: '/#solutions' },
          { label: 'Institutions & cultural houses', description: 'Digitise programmes. Engage audiences.', icon: Bank, to: '/#solutions' },
          { label: 'Travel agencies & production houses', description: 'Collaborate. Streamline trips.', icon: Airplane, to: '/#solutions' },
          { label: 'Brands & sponsorship partners', description: 'Connect. Promote. Measure impact.', icon: Megaphone, to: '/#solutions' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    columns: 2,
    groups: [
      {
        title: 'Learn and grow',
        items: [
          { label: 'Case studies', description: 'Customer success stories', icon: BookOpen },
          { label: 'Blog', description: 'Tips and insights', icon: Newspaper },
          { label: 'Comparison', description: 'See how we stack up', icon: ChartLineUp },
        ],
      },
      {
        title: 'Support and community',
        items: [
          { label: 'Support', description: 'Write to our team', icon: Headset, to: `mailto:${LINKS.email}` },
          { label: 'FAQs', description: 'Find answers fast', icon: Question },
          { label: 'Changelog', description: "See what's new", icon: GitCommit },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    columns: 2,
    groups: [
      {
        title: 'Company',
        items: [
          { label: 'About us', description: 'Why we built Trippechalo', icon: Info, to: '/#about' },
          { label: 'Partner with us', description: 'Grow your business with us', icon: UsersFour, to: '/book-demo' },
          { label: 'Pricing', description: 'Find the right plan', icon: CurrencyInr, to: '/book-demo' },
          { label: 'Careers', description: 'Join our growing team', icon: Briefcase, to: `mailto:${LINKS.email}?subject=Careers` },
          { label: 'Our team', description: 'Meet the people behind it', icon: UsersThree },
        ],
      },
    ],
  },
];
