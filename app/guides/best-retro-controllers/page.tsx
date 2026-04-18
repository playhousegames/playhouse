import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Retro Controllers 2026: 8BitDo and Beyond | Playhouse.io',
  description: 'The best retro-style controllers for PC, Switch, Android and Raspberry Pi. 8BitDo SN30 Pro, Pro 2, M30 reviewed with real Amazon UK ratings.',
};

export default function BestControllers() {
  return (
    <>
      <style>{`
        .guide-wrap { max-width: 860px; margin: 0 auto; padding: 0 24px; }
        .pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .product-hero { display: flex; gap: 24px; align-items: flex-start; margin-bottom: 24px; }
        .product-img { width: 140px; height: 140px; object-fit: contain; background: #1a0a2e; flex-shrink: 0; padding: 8px; border: 2px solid #333060; }
        @media (max-width: 768px) {
          .pc-grid { grid-template-columns: 1fr; }
          .guide-h1 { font-size: 11px !important; }
          .table-scroll { overflow-x: auto; }
          .section { padding: 24px 16px !important; }
          .product-hero { flex-direction: column; }
          .product-img { width: 100%; height: 180px; }
        }
      `}</style>

      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div className="guide-wrap">
          <span className="badge">BUYING GUIDE — UPDATED APRIL 2026</span>
          <h1 className="guide-h1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, margin: '16px 0', textShadow: '3px 3px 0 #d4001a' }}>
            BEST RETRO CONTROLLERS 2026
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '12px' }}>
            The best retro-style controllers for PC, Mac, Switch, Android and Raspberry Pi. Classic feel, modern compatibility — with real Amazon UK ratings.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555' }}>
            * This article contains affiliate links. Playhouse.io may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section guide-wrap">

        <div className="verdict" style={{ marginBottom: '40px' }}>
          <div className="verdict-label">⚡ QUICK VERDICT</div>
          <p>The <strong style={{ color: '#ffd700' }}>8BitDo SN30 Pro</strong> is the best retro controller for most people. The <strong style={{ color: '#ffd700' }}>8BitDo Pro 2</strong> (4.6★ on Amazon UK) is worth the extra if you want back paddles and use it for modern games too. The <strong style={{ color: '#ffd700' }}>M30</strong> (4.4★) is the pick for Sega fans.</p>
        </div>

        <div className="section-header">
          <span className="section-title">COMPARISON</span>
          <div className="section-line" />
        </div>

        <div className="table-scroll" style={{ marginBottom: '40px' }}>
          <table className="compare-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>CONTROLLER</th>
                <th>PRICE</th>
                <th>STYLE</th>
                <th>STICKS</th>
                <th>AMAZON UK</th>
                <th>RATING</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['8BitDo SN30 Pro', '~£40', 'SNES', '✓', '4.5★', '★★★★★'],
                ['8BitDo Pro 2', '~£45', 'Modern', '✓', '4.6★', '★★★★★'],
                ['8BitDo M30', '~£30', 'Mega Drive', '✗', '4.4★', '★★★★☆'],
              ].map(([name, price, style, sticks, amazon, rating]) => (
                <tr key={name}>
                  <td className={name === '8BitDo SN30 Pro' ? 'winner' : ''} style={{ color: '#fff' }}>{name}</td>
                  <td>{price}</td>
                  <td>{style}</td>
                  <td className={sticks === '✓' ? 'check' : 'cross'}>{sticks}</td>
                  <td style={{ color: '#39ff14' }}>{amazon}</td>
                  <td className="stars">{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SN30 Pro */}
        <div className="section-header">
          <span className="section-title">1. 8BITDO SN30 PRO — BEST OVERALL</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/61gkbOGeFdL._AC_SL1500_.jpg" alt="8BitDo SN30 Pro controller" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★★★</span>
                <span className="badge">EDITOR&apos;S CHOICE</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#39ff14' }}>4.5★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£40</span></div>
              </div>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6' }}>
                The 8BitDo SN30 Pro is the gold standard retro controller. SNES-style layout, Bluetooth connectivity for Switch, PC, Mac and Android, and an exceptional D-pad. Build quality is excellent — it feels premium without being heavy.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Outstanding D-pad</li>
                <li>Works with everything</li>
                <li>Excellent build quality</li>
                <li>Analogue sticks included</li>
                <li>Rechargeable battery</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>No rumble</li>
                <li>No gyroscope</li>
                <li>Pairing occasionally glitches</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4cBExaZ" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder-alt" style={{ margin: '32px -24px' }} />

        {/* Pro 2 */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">2. 8BITDO PRO 2 — BEST FOR MODERN GAMES</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/61kqKipF46L._AC_SL1500_.jpg" alt="8BitDo Pro 2 controller" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★★★</span>
                <span className="badge">HIGHEST RATED</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#39ff14' }}>4.6★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£45</span></div>
              </div>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6' }}>
                The highest rated controller in our guide at 4.6★ on Amazon UK. The Pro 2 adds back paddles, multiple profile switching and a more ergonomic grip over the SN30 Pro. At just £5 more it&apos;s excellent value for a more capable controller.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Highest Amazon rating (4.6★)</li>
                <li>Back paddles</li>
                <li>Multiple device profiles</li>
                <li>Ergonomic grip</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Less classic looking</li>
                <li>Overkill for pure retro</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4vE0xur" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder" style={{ margin: '32px -24px' }} />

        {/* M30 */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">3. 8BITDO M30 — BEST FOR SEGA FANS</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/61O-CJVsRLL._AC_SL1500_.jpg" alt="8BitDo M30 controller" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★★☆</span>
                <span className="badge">SPECIALIST PICK</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#39ff14' }}>4.4★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£30</span></div>
              </div>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6' }}>
                A faithful Mega Drive 6-button pad recreation. If your retro gaming is primarily Sega — Mega Drive, Streets of Rage, Mortal Kombat — the M30 is the most authentic experience available. The six-button face layout is perfect for fighting games.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Authentic Mega Drive feel</li>
                <li>6-button face layout</li>
                <li>Great for fighting games</li>
                <li>Most affordable option</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>No analogue sticks</li>
                <li>Specialist use case</li>
                <li>Not ideal for 3D games</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4dQGjHy" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="verdict">
          <div className="verdict-label">🏆 OUR RECOMMENDATION</div>
          <p>All three 8BitDo controllers score 4.4★ or higher on Amazon UK — the brand is consistently well rated. For most people: <strong style={{ color: '#ffd700' }}>8BitDo SN30 Pro</strong>. For the best overall spec: <strong style={{ color: '#ffd700' }}>8BitDo Pro 2</strong>. For Sega gaming: <strong style={{ color: '#ffd700' }}>8BitDo M30</strong>.</p>
        </div>

        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '2px solid #333060' }}>
          <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '16px' }}>ALSO WORTH READING</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/guides/best-retro-handheld" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld 2026</Link>
            <Link href="/guides/best-mini-arcade-machines" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Mini Arcade Machines 2026</Link>
          </div>
        </div>
      </div>
    </>
  );
}
