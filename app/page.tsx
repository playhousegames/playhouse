import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: '#1a0a2e', padding: '48px 32px 40px', borderBottom: '6px solid #d4001a' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#d4001a', letterSpacing: '3px', marginBottom: '16px' }}>
              // RETRO GAMING GUIDES & REVIEWS
            </p>
            <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '18px', color: '#fff', lineHeight: 2, marginBottom: '20px', textShadow: '3px 3px 0 #d4001a', maxWidth: '600px' }}>
              YOUR GUIDE TO RETRO GAMING GEAR
            </h1>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', maxWidth: '500px', marginBottom: '28px' }}>
              Honest reviews and buying guides for retro handhelds, mini arcade machines and classic controllers. No hype, just signal — so you spend your money on the right gear.
            </p>
            <Link href="/handhelds" className="btn btn-yellow" style={{ marginRight: '16px' }}>▶ START HERE</Link>
            <Link href="/guides/best-retro-handheld" className="btn">TOP PICKS 2026</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
            {[['HI-SCORE', '999999'], ['GUIDES', '10+'], ['PRODUCTS', '50+']].map(([label, val]) => (
              <div key={label} style={{ background: '#0d0620', border: '3px solid #d4001a', padding: '12px 20px', textAlign: 'center', minWidth: '140px' }}>
                <span style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#d4001a', display: 'block', letterSpacing: '2px' }}>{label}</span>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '16px', color: '#ffd700' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="girder" />

      {/* Categories */}
      <div className="section">
        <div className="section-header">
          <span className="section-title">SELECT CATEGORY</span>
          <div className="section-line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: '🕹️', badge: 'POPULAR', title: 'RETRO HANDHELDS', desc: 'Miyoo Mini, R36S, RG35XX and more. The best pocket emulators reviewed and compared.', href: '/handhelds' },
            { icon: '🎰', badge: 'NEW GUIDES', title: 'MINI ARCADE MACHINES', desc: 'Desktop arcade cabinets that actually deliver. We cut through the noise.', href: '/arcade' },
            { icon: '🎮', badge: null, title: 'RETRO CONTROLLERS', desc: '8BitDo and beyond. Classic feel, modern compatibility — the definitive guide.', href: '/controllers' },
          ].map((cat) => (
            <Link key={cat.title} href={cat.href} style={{ textDecoration: 'none' }}>
              <div className="card">
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

      {/* Featured buying guide preview */}
      <div className="section" style={{ background: '#0d0620' }}>
        <div className="section-header">
          <span className="section-title">FEATURED GUIDE</span>
          <div className="section-line" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          <div>
            <span className="badge">BUYING GUIDE 2026</span>
            <h2 style={{ fontSize: '11px', color: '#fff', marginBottom: '16px', marginTop: '8px' }}>BEST RETRO HANDHELDS: MIYOO MINI PLUS vs R36S vs RG35XX</h2>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
              We tested the three most popular budget retro handhelds side by side. Same ROMs, same games, same conditions. Here's what actually matters when picking your first — or next — retro handheld.
            </p>
            <Link href="/guides/best-retro-handheld" className="btn btn-yellow">READ THE GUIDE</Link>
          </div>
          <div>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>DEVICE</th>
                  <th>PRICE</th>
                  <th>SCREEN</th>
                  <th>RATING</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="winner">Miyoo Mini+</td>
                  <td>~£60</td>
                  <td>3.5" IPS</td>
                  <td className="stars">★★★★★</td>
                </tr>
                <tr>
                  <td>R36S</td>
                  <td>~£35</td>
                  <td>3.5" IPS</td>
                  <td className="stars">★★★★☆</td>
                </tr>
                <tr>
                  <td>RG35XX</td>
                  <td>~£45</td>
                  <td>3.5" IPS</td>
                  <td className="stars">★★★★☆</td>
                </tr>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {[
            { icon: '🕹️', title: 'MIYOO MINI PLUS', desc: 'Best overall retro handheld under £100', href: 'https://amzn.to/placeholder1' },
            { icon: '🎮', title: '8BITDO SN30 PRO', desc: 'Best retro-style controller for PC & Switch', href: 'https://amzn.to/placeholder2' },
            { icon: '🕹️', title: 'R36S HANDHELD', desc: 'Best budget retro handheld under £40', href: 'https://amzn.to/placeholder3' },
            { icon: '🎰', title: 'MINI ARCADE CABINET', desc: 'Best desktop arcade machine for gifting', href: 'https://amzn.to/placeholder4' },
          ].map((p) => (
            <div key={p.title} style={{ background: '#0d0620', border: '3px solid #333060', padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: '#d4001a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0, boxShadow: '3px 3px 0 #8b0000' }}>
                {p.icon}
              </div>
              <div>
                <h4 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#fff', marginBottom: '6px', lineHeight: 1.8 }}>{p.title}</h4>
                <p style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '10px' }}>{p.desc}</p>
                <a href={p.href} className="btn" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE</a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555', marginTop: '16px' }}>
          * This page contains affiliate links. If you purchase through these links, Playhouse.io may earn a small commission at no extra cost to you.
        </p>
      </div>
    </>
  );
}
