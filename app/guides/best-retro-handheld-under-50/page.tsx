import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Retro Handheld Under £50 in 2026 | Playhouse.io',
  description: 'The best budget retro handhelds under £50 reviewed and compared. R36S, RG35XX and more — honest verdicts based on specs and community testing.',
};

export default function BestUnder50() {
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
            BEST RETRO HANDHELD UNDER £50 IN 2026
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '12px' }}>
            You don&apos;t need to spend a fortune to get into retro gaming. These are the best budget handhelds under £50 — ranked by specs, community feedback and Amazon buyer ratings.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555' }}>
            * This article contains affiliate links. Playhouse.io may earn a small commission at no extra cost to you. Reviews are based on specs and community testing data.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section guide-wrap">

        <div className="verdict" style={{ marginBottom: '40px' }}>
          <div className="verdict-label">⚡ QUICK VERDICT</div>
          <p>The <strong style={{ color: '#ffd700' }}>R36S</strong> is the best retro handheld under £50 for most people — more RAM than competitors, analogue sticks, and long battery life at just £35. The <strong style={{ color: '#ffd700' }}>RG35XX</strong> offers better brand reliability from Anbernic at around £45, though its 3.7 Amazon rating reflects some build consistency issues.</p>
        </div>

        <div className="section-header">
          <span className="section-title">FULL COMPARISON</span>
          <div className="section-line" />
        </div>

        <div className="table-scroll" style={{ marginBottom: '40px' }}>
          <table className="compare-table" style={{ minWidth: '540px' }}>
            <thead>
              <tr>
                <th>DEVICE</th>
                <th>PRICE</th>
                <th>RAM</th>
                <th>BATTERY</th>
                <th>WIFI</th>
                <th>AMAZON</th>
                <th>RATING</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['R36S', '~£35', '1GB', '3500mAh', '✗', '4.1★', '★★★★☆'],
                ['RG35XX', '~£45', '256MB', '2600mAh', '✓*', '3.7★', '★★★☆☆'],
              ].map(([device, price, ram, battery, wifi, amazon, rating]) => (
                <tr key={device}>
                  <td className={device === 'R36S' ? 'winner' : ''} style={{ color: '#fff' }}>{device}</td>
                  <td>{price}</td>
                  <td className={ram === '1GB' ? 'winner' : ''}>{ram}</td>
                  <td>{battery}</td>
                  <td className={wifi === '✓*' ? '' : 'cross'}>{wifi}</td>
                  <td style={{ color: Number(amazon) >= 4.3 ? '#39ff14' : Number(amazon) >= 3.5 ? '#ffd700' : '#d4001a' }}>{amazon}</td>
                  <td className="stars">{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* R36S */}
        <div className="section-header">
          <span className="section-title">1. R36S — BEST OVERALL UNDER £50</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/71mSHuXCU9L._AC_SL1500_.jpg" alt="R36S retro handheld" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★★☆</span>
                <span className="badge">BEST VALUE</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#ffd700' }}>4.1★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£35</span></div>
              </div>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6' }}>
                At around £35 the R36S is the cheapest serious retro handheld on the market. The 1GB RAM is the standout spec — it handles N64 and PS1 emulation better than most devices twice the price. Add a 3500mAh battery and analogue sticks and it&apos;s a package that&apos;s hard to beat at this price.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Cheapest serious handheld</li>
                <li>1GB RAM handles more games</li>
                <li>Analogue sticks included</li>
                <li>Long battery life</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>No WiFi</li>
                <li>Variable build quality</li>
                <li>Smaller community</li>
                <li>Stock firmware is poor</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4tBuZEp" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder-alt" style={{ margin: '32px -24px' }} />

        {/* RG35XX */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">2. ANBERNIC RG35XX — MOST RELIABLE BRAND</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div className="product-hero">
            <img src="https://m.media-amazon.com/images/I/61LtAGgiTiL._AC_SL1500_.jpg" alt="Anbernic RG35XX" className="product-img" />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="stars">★★★☆☆</span>
                <span className="badge">ESTABLISHED BRAND</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Amazon UK: <span style={{ color: '#ffd700' }}>3.7★</span></div>
                <div style={{ background: '#0d0620', border: '1px solid #333060', padding: '6px 12px', fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>Price: <span style={{ color: '#ffd700' }}>~£45</span></div>
              </div>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', lineHeight: '1.6' }}>
                Anbernic is the most established brand in retro handhelds. The RG35XX has a loyal community following and GarlicOS custom firmware is excellent. However the 3.7 Amazon UK rating is worth noting — some buyers report build consistency issues with this model specifically. Worth researching the H+ variant which addresses some of the original&apos;s shortcomings.
              </p>
            </div>
          </div>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Anbernic reputation</li>
                <li>GarlicOS is excellent</li>
                <li>WiFi on H+ variant</li>
                <li>Good community support</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>3.7★ Amazon UK rating</li>
                <li>Less RAM than R36S</li>
                <li>Shorter battery</li>
                <li>No analogue sticks</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/41L7NXQ" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="verdict">
          <div className="verdict-label">🏆 OUR RECOMMENDATION</div>
          <p>For pure value: <strong style={{ color: '#ffd700' }}>buy the R36S</strong>. It&apos;s £10 cheaper, has more RAM, longer battery and analogue sticks. The RG35XX is worth considering if the Anbernic brand name matters to you, but check the H+ variant rather than the base model given the Amazon rating.</p>
        </div>

        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '2px solid #333060' }}>
          <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '16px' }}>ALSO WORTH READING</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/guides/best-retro-handheld" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld 2026: Full Comparison</Link>
            <Link href="/guides/miyoo-mini-plus-review" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Miyoo Mini Plus Full Review</Link>
            <Link href="/guides/best-retro-handheld-for-kids" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld for Kids</Link>
          </div>
        </div>
      </div>
    </>
  );
}
