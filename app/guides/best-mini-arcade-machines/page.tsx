import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Mini Arcade Machines 2026: Desktop Cabinets Reviewed | Playhouse.io',
  description: 'The best mini arcade machines reviewed with real Amazon UK ratings. From budget plug-and-play to licensed cabinets — find the right one for your desk or as a gift.',
};

export default function BestArcade() {
  return (
    <>
      <style>{`
        .guide-wrap { max-width: 680px; margin: 0 auto; padding: 0 24px; }
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
            BEST MINI ARCADE MACHINES 2026
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '12px' }}>
            Desktop arcade cabinets that actually deliver. Reviewed with real Amazon UK ratings so you know exactly what you&apos;re buying.
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
          <p>The <strong style={{ color: '#ffd700' }}>My Arcade Super Street Fighter II</strong> (4.5★ Amazon UK) is the standout pick — a properly licensed cabinet with authentic artwork and a beloved game. The <strong style={{ color: '#ffd700' }}>240-game mini arcade</strong> is the best budget option for desk use and gifting.</p>
        </div>

        <div className="section-header">
          <span className="section-title">COMPARISON</span>
          <div className="section-line" />
        </div>

        <div className="table-scroll" style={{ marginBottom: '40px' }}>
          <table className="compare-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>MACHINE</th>
                <th>PRICE</th>
                <th>GAMES</th>
                <th>SCREEN</th>
                <th>AMAZON UK</th>
                <th>RATING</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['My Arcade SF2 Cabinet', '~£35', 'SF2 + more', '6.75"', '4.5★', '★★★★★'],
                ['240-Game Mini Arcade', '~£30', '240', '2.5"', '4.3★', '★★★★☆'],
              ].map(([name, price, games, screen, amazon, rating]) => (
                <tr key={name}>
                  <td className={name === 'My Arcade SF2 Cabinet' ? 'winner' : ''} style={{ color: '#fff' }}>{name}</td>
                  <td>{price}</td>
                  <td>{games}</td>
                  <td>{screen}</td>
                  <td style={{ color: '#39ff14' }}>{amazon}</td>
                  <td className="stars">{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Arcade SF2 */}
        <div className="section-header">
          <span className="section-title">1. MY ARCADE SUPER STREET FIGHTER II — BEST OVERALL</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/811p8EpX08L._AC_SL1500_.jpg" alt="My Arcade Super Street Fighter II Mini Cabinet" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★★★</span>
                <span className="badge">EDITOR&apos;S CHOICE</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#39ff14' }}>4.5★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£35</span></div>
              </div>
              <p className="body-copy">
                This is the real deal — an officially licensed Super Street Fighter II mini cabinet with authentic Capcom artwork, a proper 6-button layout, and a 6.75-inch colour screen. It&apos;s far more playable than smaller novelty machines and the Street Fighter II licence makes it genuinely collectible. At 4.5★ on Amazon UK it&apos;s one of the most consistently well-reviewed mini arcade machines available.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Official Capcom licence</li>
                <li>Authentic cabinet artwork</li>
                <li>6.75&quot; screen — actually playable</li>
                <li>Proper 6-button layout</li>
                <li>4.5★ Amazon UK rating</li>
                <li>Excellent gift item</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Limited to SF2 titles</li>
                <li>Not portable</li>
                <li>Speaker quality is basic</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/42gLutc" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder-alt" style={{ margin: '32px -24px' }} />

        {/* 240 game */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">2. 240-GAME MINI ARCADE — BEST BUDGET PICK</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/71hsBC7O1kL._AC_SL1500_.jpg" alt="240 game mini arcade machine" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★★☆</span>
                <span className="badge">BEST VALUE</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#39ff14' }}>4.3★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£30</span></div>
              </div>
              <p className="body-copy">
                The budget option with 240 built-in 8-bit games, an 8-way joystick and a 2.5-inch colour screen. It&apos;s more novelty than serious gaming machine, but at £30 with a 4.3★ Amazon rating it&apos;s a well-received desk ornament that&apos;s actually fun to pick up and play.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Plug and play instantly</li>
                <li>240 built-in games</li>
                <li>Great desk ornament</li>
                <li>Excellent gift under £30</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Small 2.5&quot; screen</li>
                <li>Generic game library</li>
                <li>No licensed titles</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4sZwjQl" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="verdict">
          <div className="verdict-label">🏆 OUR RECOMMENDATION</div>
          <p>For a proper gift with lasting appeal: <strong style={{ color: '#ffd700' }}>My Arcade Super Street Fighter II</strong> — licensed, collectible, actually playable. For a budget desk ornament: <strong style={{ color: '#ffd700' }}>the 240-game mini arcade</strong> — fun, affordable, well reviewed.</p>
        </div>

        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '2px solid #333060' }}>
          <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '16px' }}>ALSO WORTH READING</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/guides/best-retro-handheld" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld 2026</Link>
            <Link href="/guides/best-retro-controllers" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Controllers 2026</Link>
            <Link href="/guides/best-retro-handheld-for-kids" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld for Kids</Link>
          </div>
        </div>
      </div>
    </>
  );
}
