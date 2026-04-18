import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retro Controller Guides & Reviews | Playhouse.io',
  description: 'Retro controller buying guides — 8BitDo SN30 Pro, Pro 2, M30 and more reviewed with real Amazon UK ratings.',
};

export default function Controllers() {
  return (
    <>
      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, textShadow: '3px 3px 0 #d4001a' }}>
            RETRO CONTROLLER GUIDES
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', marginTop: '12px' }}>
            The best retro-style controllers for PC, Switch, Android and Raspberry Pi — honestly reviewed.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { href: '/guides/best-retro-controllers', badge: 'BUYING GUIDE', title: 'Best Retro Controllers 2026: 8BitDo and Beyond', desc: '8BitDo SN30 Pro, Pro 2 and M30 reviewed with real Amazon UK ratings. Classic feel, modern compatibility.' },
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
