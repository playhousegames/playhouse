import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retro Gaming Guides & Reviews 2026 | Playhouse.io',
  description: 'All retro gaming buying guides and reviews — handhelds, arcade machines, controllers and more. Honest verdicts, no fluff.',
};

const guides = [
  { href: '/guides/best-retro-handheld', badge: 'BUYING GUIDE', title: 'Best Retro Handheld 2026: Miyoo Mini Plus vs R36S vs RG35XX', desc: 'Full side-by-side comparison with specs, pros, cons and a clear verdict.' },
  { href: '/guides/miyoo-mini-plus-review', badge: 'FULL REVIEW', title: 'Miyoo Mini Plus Review 2026: Is It Still the Best?', desc: 'Screen quality, build, battery life, Onion OS and honest verdict after extensive testing.' },
  { href: '/guides/best-retro-handheld-under-50', badge: 'BUYING GUIDE', title: 'Best Retro Handheld Under £50 in 2026', desc: 'R36S and RG35XX reviewed and ranked with real Amazon UK ratings.' },
  { href: '/guides/best-retro-controllers', badge: 'BUYING GUIDE', title: 'Best Retro Controllers 2026: 8BitDo and Beyond', desc: 'The best retro-style controllers for PC, Switch, Android and Raspberry Pi.' },
  { href: '/guides/best-mini-arcade-machines', badge: 'BUYING GUIDE', title: 'Best Mini Arcade Machines 2026', desc: 'Desktop cabinets from budget plug-and-play to licensed machines — reviewed with Amazon UK ratings.' },
  { href: '/guides/best-retro-handheld-for-kids', badge: 'GIFT GUIDE', title: 'Best Retro Handheld for Kids 2026', desc: 'Age-by-age gift guide for parents — safe, fun and affordable retro gaming for children.' },
];

export default function GuidesIndex() {
  return (
    <>
      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, textShadow: '3px 3px 0 #d4001a' }}>
            ALL GUIDES & REVIEWS
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', marginTop: '12px' }}>
            Honest retro gaming buying guides. No sponsored content, no fluff — just clear verdicts.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} style={{ textDecoration: 'none' }}>
              <div className="card">
                <span className="badge">{guide.badge}</span>
                <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#fff', margin: '8px 0 10px', lineHeight: 1.8 }}>{guide.title}</h2>
                <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>{guide.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
