import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retro Handheld Guides & Reviews | Playhouse.io',
  description: 'Retro handheld buying guides and reviews — Miyoo Mini Plus, R36S, RG35XX and more. Find the best pocket emulator for your budget.',
};

export default function Handhelds() {
  return (
    <>
      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, textShadow: '3px 3px 0 #d4001a' }}>
            RETRO HANDHELD GUIDES
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', marginTop: '12px' }}>
            Everything you need to know about retro handhelds — from budget picks to full reviews.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { href: '/guides/best-retro-handheld', badge: 'BUYING GUIDE', title: 'Best Retro Handheld 2026: Miyoo Mini Plus vs R36S vs RG35XX', desc: 'Full side-by-side comparison with specs, pros, cons and a clear verdict.' },
            { href: '/guides/miyoo-mini-plus-review', badge: 'FULL REVIEW', title: 'Miyoo Mini Plus Review 2026: Is It Still the Best?', desc: 'Screen quality, build, battery life, Onion OS and honest verdict.' },
            { href: '/guides/best-retro-handheld-under-50', badge: 'BUYING GUIDE', title: 'Best Retro Handheld Under £50 in 2026', desc: 'R36S, RG35XX and more — the best budget handhelds reviewed and ranked.' },
            { href: '/guides/best-retro-handheld-for-kids', badge: 'GIFT GUIDE', title: 'Best Retro Handheld for Kids 2026', desc: 'Age-by-age gift guide for parents — safe, fun and affordable.' },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: 'none' }}>
              <div className="card">
                <span className="badge">{g.badge}</span>
                <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#fff', margin: '8px 0 10px', lineHeight: 1.8 }}>{g.title}</h2>
                <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>{g.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
