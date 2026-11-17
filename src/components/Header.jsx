import '../styles/header.css';
import { useEffect, useRef, useState } from 'react';
import { NAV } from '../content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Header gains a quiet backdrop once the hero has left the viewport.
  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: '-64px 0px 0px 0px',
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('is-locked');
    panelRef.current?.querySelector('a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('is-locked');
    };
  }, [open]);

  // Close the menu when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 721px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <a className="wordmark intro intro--1" href="#top" aria-label="Purple Desert — back to arrival">
        Purple<span aria-hidden="true"> </span>Desert
      </a>

      <nav className="site-nav intro intro--1" aria-label="Primary">
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a className="link" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle mono intro intro--1"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <i aria-hidden="true" />
      </button>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
        <ol>
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                <span className="mono">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
        <p className="mono mobile-menu__note">An expedition beyond the familiar.</p>
      </div>
    </header>
  );
}
