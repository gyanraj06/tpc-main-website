import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import logoMark from '../assets/img/logo-mark.png';
import logoText from '../assets/img/logo-text.png';

const isExternal = (to: string) => /^(https?:|mailto:|tel:)/.test(to);

/** Router link for internal paths, plain anchor (new tab for http) for everything else. */
export function SmartLink({
  to,
  children,
  ...rest
}: { to: string; children: ReactNode } & Omit<ComponentPropsWithoutRef<'a'>, 'href'>) {
  if (isExternal(to)) {
    const newTab = to.startsWith('http');
    return (
      <a href={to} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

/** Text that rolls to a duplicate of itself on hover/focus of the parent link or button. */
export function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span className="roll__a">{children}</span>
      <span className="roll__b" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

type ButtonVariant = 'ink' | 'light' | 'marigold' | 'cobalt' | 'ghost';

export function ButtonLink({
  to,
  children,
  variant = 'ink',
  small,
  icon = true,
  className = '',
  ...rest
}: {
  to: string;
  children: string;
  variant?: ButtonVariant;
  small?: boolean;
  icon?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children'>) {
  const cls = [
    'btn',
    variant !== 'ink' && `btn--${variant}`,
    small && 'btn--small',
    !icon && 'btn--plain',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <SmartLink to={to} className={cls} {...rest}>
      <Roll>{children}</Roll>
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpRight size={small ? 15 : 18} weight="bold" />
        </span>
      )}
    </SmartLink>
  );
}

/** The real Trip Pe Chalo lockup (mark + wordmark), recoloured white on dark surfaces. */
export function Logo({ tone = 'light' }: { tone?: 'light' | 'brand' }) {
  return (
    <span className={`logo logo--${tone}`}>
      <span className="logo__badge" aria-hidden="true">
        <img src={logoMark} alt="" width={70} height={96} className="logo__mark" />
      </span>
      <img src={logoText} alt="Trip Pe Chalo" width={287} height={96} className="logo__text" />
    </span>
  );
}
