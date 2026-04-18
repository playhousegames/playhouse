import Link from 'next/link';
import ArkGame from './components/ArkGame';

export default function Home() {
  const products = [
    { title: 'MIYOO MINI PLUS', desc: 'Best overall retro handheld under £100', href: 'https://amzn.to/4mE11wG', img: 'https://m.media-amazon.com/images/I/61X4gyiZDEL._AC_SL1500_.jpg' },
    { title: '8BITDO SN30 PRO', desc: 'Best retro-style Bluetooth controller', href: 'https://amzn.to/4cBExaZ', img: 'https://m.media-amazon.com/images/I/61gkbOGeFdL._AC_SL1500_.jpg' },
    { title: 'R36S HANDHELD', desc: 'Best budget retro handheld under £40', href: 'https://amzn.to/4tBuZEp', img: 'https://m.media-amazon.com/images/I/71mSHuXCU9L._AC_SL1500_.jpg' },
    { title: 'MINI ARCADE MACHINE', desc: 'Best desktop arcade machine for gifting', href: 'https://amzn.to/4sZwjQl', img: 'https://m.media-amazon.com/images/I/71hsBC7O1kL._AC_SL1500_.jpg' },
  ];

  return (
    <>
      <style>{`
        .cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .guide-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
        .picks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .pick-img { width: 100px; height: 100px; object-fit: contain; background: #1a0a2e; flex-shrink: 0; padding: 8px; border: 2px solid #333060; }
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr; }
          .guide-grid { grid-template-columns: 1fr; }
          .picks-grid { grid-template-columns: 1fr; }
          .section { padding: 24px 16px !important; }
          .table-wrap { overflow-x: auto; }
          .pick-card { flex-direction: column !important; }
          .pick-img { width: 100%; height: 160px; }
        }
      `}</style>

      {/* GAME HERO */}
      <ArkGame />

      {/* Tagline strip */}
      <div style={{ background: '#0d0620', padding: '20px 24px', borderBottom: '3px solid #333060', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#fff', margin: '0 0 8px', textShadow: '2px 2px 0 #d4001a' }}>
          YOUR GUIDE TO RETRO GAMING GEAR
        </p>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', margin: 0 }}>
          Honest reviews and buying guides for retro handhelds, arcade machines and controllers. No hype, just signal.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
          <Link href="/handhelds" className="btn btn-yellow">▶ START HERE</Link>
          <Link href="/guides/best-retro-handheld" className="btn">TOP PICKS 2026</Link>
        </div>
      </div>

      <div className="girder" />

      {/* Categories */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">SELECT CATEGORY</span>
          <div className="section-line" />
        </div>
        <div className="cat-grid">
          {[
            { icon: '🕹️', badge: 'POPULAR', title: 'RETRO HANDHELDS', desc: 'Miyoo Mini, R36S, RG35XX and more. The best pocket emulators reviewed.', href: '/handhelds' },
            { icon: '🎰', badge: 'NEW GUIDES', title: 'MINI ARCADE MACHINES', desc: 'Desktop arcade cabinets that actually deliver. We cut through the noise.', href: '/arcade' },
            { icon: '🎮', badge: null, title: 'RETRO CONTROLLERS', desc: '8BitDo and beyond. Classic feel, modern compatibility.', href: '/controllers' },
          ].map((cat) => (
            <Link key={cat.title} href={cat.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%' }}>
                {cat.badge && <span className="badge">{cat.badge}</span>}
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '10px' }}>{cat.title}</h3>
                <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0' }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="girder-alt" />

      {/* Featured guide */}
      <div className="section" style={{ background: '#0d0620' }}>
        <div className="section-header">
          <span className="section-title">FEATURED GUIDE</span>
          <div className="section-line" />
        </div>
        <div className="guide-grid">
          <div>
            <span className="badge">BUYING GUIDE 2026</span>
            <h2 style={{ fontSize: '11px', color: '#fff', marginBottom: '16px', marginTop: '8px', lineHeight: 1.8 }}>
              BEST RETRO HANDHELDS: MIYOO MINI PLUS vs R36S vs RG35XX
            </h2>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
              We tested the three most popular budget retro handhelds side by side. Here&apos;s what actually matters.
            </p>
            <Link href="/guides/best-retro-handheld" className="btn btn-yellow">READ THE GUIDE</Link>
          </div>
          <div className="table-wrap">
            <table className="compare-table" style={{ minWidth: '400px' }}>
              <thead>
                <tr><th>DEVICE</th><th>PRICE</th><th>SCREEN</th><th>RATING</th></tr>
              </thead>
              <tbody>
                <tr><td className="winner">Miyoo Mini+</td><td>~£60</td><td>3.5&quot; IPS</td><td className="stars">★★★★★</td></tr>
                <tr><td>R36S</td><td>~£35</td><td>3.5&quot; IPS</td><td className="stars">★★★★☆</td></tr>
                <tr><td>RG35XX</td><td>~£45</td><td>3.5&quot; IPS</td><td className="stars">★★★★☆</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="girder" />

      {/* Featured picks */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">FEATURED PICKS</span>
          <div className="section-line" />
        </div>
        <div className="picks-grid">
          {products.map((p) => (
            <div key={p.title} className="pick-card" style={{ background: '#0d0620', border: '3px solid #333060', padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <img src={p.img} alt={p.title} className="pick-img" />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#fff', marginBottom: '6px', lineHeight: 1.8 }}>{p.title}</h4>
                <p style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '10px' }}>{p.desc}</p>
                <a href={p.href} className="btn" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE</a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555', marginTop: '16px' }}>
          * This page contains affiliate links. Playhouse.io may earn a small commission at no extra cost to you.
        </p>
      </div>
    </>
  );
}
