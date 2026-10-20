import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, CaretDown, List, X } from '@phosphor-icons/react';
import { NAV, type NavItem } from '../data/nav';
import { SmartLink, Roll, Logo, ButtonLink } from './ui';
import { useLenis } from '../lib/smooth-scroll';
import './Header.css';

function MenuItem({ item, onPick }: { item: NavItem; onPick: () => void }) {
  const Icon = item.icon;
  const body = (
    <>
      <span className="mi__icon" aria-hidden="true">
        <Icon size={18} />
      </span>
      <span className="mi__text">
        <span className="mi__label">
          {item.label}
          {!item.to && <span className="mi__soon">Soon</span>}
        </span>
        <span className="mi__desc">{item.description}</span>
      </span>
    </>
  );
  if (!item.to) {
    return (
      <span className="mi mi--off" aria-disabled="true">
        {body}
      </span>
    );
  }
  return (
    <SmartLink to={item.to} className="mi" onClick={onPick}>
      {body}
    </SmartLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>('product');
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const lenis = useLenis();

  // close everything on navigation
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash, location.key]);

  // hide on scroll down, reveal on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 240);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes menus; mobile overlay locks the page scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const wasOpen = useRef(false);
  useEffect(() => {
    if (mobileOpen) {
      lenis?.stop();
      document.documentElement.style.overflow = 'hidden';
    } else if (wasOpen.current) {
      // only release what we locked — the preloader may be holding the scroll too
      lenis?.start();
      document.documentElement.style.overflow = '';
    }
    wasOpen.current = mobileOpen;
  }, [mobileOpen, lenis]);

  const active = NAV.find((m) => m.id === open);

  return (
    <>
      <div className={`nav-scrim ${open ? 'is-on' : ''}`} onClick={() => setOpen(null)} aria-hidden="true" />
      <header
        ref={navRef}
        className={`nav ${hidden && !open && !mobileOpen ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`}
        onMouseLeave={() => setOpen(null)}
        onBlur={(e) => {
          if (!navRef.current?.contains(e.relatedTarget as Node)) setOpen(null);
        }}
      >
        <div className="nav__bar">
          <Link to="/" className="nav__home" aria-label="Trippechalo home">
            <Logo />
          </Link>

          <nav className="nav__links" aria-label="Main">
            {NAV.map((menu) => (
              <button
                key={menu.id}
                type="button"
                className={`nav__trigger ${open === menu.id ? 'is-open' : ''}`}
                aria-expanded={open === menu.id}
                aria-controls="nav-panel"
                onMouseEnter={() => setOpen(menu.id)}
                onClick={() => setOpen((cur) => (cur === menu.id ? null : menu.id))}
              >
                <Roll>{menu.label}</Roll>
                <CaretDown size={12} weight="bold" aria-hidden="true" />
              </button>
            ))}
          </nav>

          <ButtonLink to="/book-demo" variant="light" small className="nav__cta">
            Book a demo
          </ButtonLink>

          <button
            type="button"
            className="nav__burger"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span>{mobileOpen ? 'Close' : 'Menu'}</span>
            <span className="nav__burger-icon" aria-hidden="true">
              {mobileOpen ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
            </span>
          </button>
        </div>

        <div id="nav-panel" className={`nav__panel ${active ? 'is-open' : ''}`} data-lenis-prevent>
          {active && (
            <div className="nav__panel-inner" key={active.id}>
              {active.groups.map((group) => (
                <div key={group.title} className={`nav__group ${group.items.length > 4 ? 'is-wide' : ''}`}>
                  <p className="nav__group-title">{group.title}</p>
                  <div className="nav__group-items">
                    {group.items.map((item) => (
                      <MenuItem key={item.label} item={item} onPick={() => setOpen(null)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <div id="mobile-menu" className={`mnav ${mobileOpen ? 'is-open' : ''}`} data-lenis-prevent aria-hidden={!mobileOpen}>
        <div className="mnav__inner">
          {NAV.map((menu) => (
            <div key={menu.id} className={`mnav__menu ${mobileGroup === menu.id ? 'is-open' : ''}`}>
              <button
                type="button"
                className="mnav__trigger"
                aria-expanded={mobileGroup === menu.id}
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setMobileGroup((g) => (g === menu.id ? null : menu.id))}
              >
                {menu.label}
                <CaretDown size={20} weight="bold" aria-hidden="true" />
              </button>
              <div className="mnav__items">
                <div>
                  {menu.groups.flatMap((g) => g.items).map((item) => (
                    <MenuItem key={item.label} item={item} onPick={() => setMobileOpen(false)} />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link to="/book-demo" className="mnav__cta" tabIndex={mobileOpen ? 0 : -1}>
            Book a demo
            <ArrowUpRight size={22} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
