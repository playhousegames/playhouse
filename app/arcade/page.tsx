import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mini Arcade Machine Guides & Reviews | Playhouse.io',
  description: 'Mini arcade machine buying guides — desktop cabinets, licensed machines and budget picks reviewed honestly.',
};

export default function Arcade() {
  return (
    <>
      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, textShadow: '3px 3px 0 #d4001a' }}>
            MINI ARCADE MACHINE GUIDES
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', marginTop: '12px' }}>
            Desktop arcade cabinets reviewed — from budget plug-and-play to licensed machines.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { href: '/guides/best-mini-arcade-machines', badge: 'BUYING GUIDE', title: 'Best Mini Arcade Machines 2026', desc: 'Desktop cabinets reviewed with real Amazon UK ratings — find the right one for your desk or as a gift.' },
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
