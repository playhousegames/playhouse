'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Handhelds', href: '/handhelds' },
    { label: 'Arcade', href: '/arcade' },
    { label: 'Controllers', href: '/controllers' },
    { label: 'Guides', href: '/guides' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <style>{`
        .nav-links-desktop { display: flex; gap: 28px; font-family: 'VT323', monospace; font-size: 20px; }
        .nav-hamburger { display: none; }
        .nav-mobile-menu { display: none; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .nav-hamburger { display: block; }
          .nav-mobile-menu { display: flex; flex-direction: column; background: #a3000f; border-top: 3px solid #ffd700; padding: 0; }
          .nav-mobile-menu a { padding: 16px 24px; border-bottom: 1px solid rgba(255,215,0,0.2); font-family: 'VT323', monospace; font-size: 22px; color: #fff; text-decoration: none; display: block; }
          .nav-mobile-menu a:hover { background: rgba(255,215,0,0.1); color: #ffd700; }
          .nav-logo { font-size: 11px !important; }
        }
      `}</style>

      <nav style={{ background: '#d4001a', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '6px solid #ffd700' }}>
        <Link href="/" className="nav-logo" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#ffd700', textDecoration: 'none', padding: '14px 0', letterSpacing: '2px' }}>
          PLAY<span style={{ color: '#fff' }}>HOUSE</span>.IO
        </Link>
        <div className="nav-links-desktop">
          {links.map((l) => (
            <Link key={l.label} href={l.href} style={{ color: '#fff', textDecoration: 'none' }}>{l.label}</Link>
          ))}
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', background: 'none', border: '2px solid #ffd700', padding: '8px 12px', cursor: 'pointer' }}>
          {menuOpen ? '✕ CLOSE' : '☰ MENU'}
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              ▶ {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
