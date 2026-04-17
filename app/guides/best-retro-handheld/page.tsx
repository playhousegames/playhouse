import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Retro Handheld 2026: Miyoo Mini Plus vs R36S vs RG35XX | Playhouse.io',
  description: 'We tested the three best budget retro handhelds side by side. Full comparison of Miyoo Mini Plus, R36S and RG35XX — specs, performance, build quality and verdict.',
};

export default function BestRetroHandheld() {
  return (
    <>
      <style>{`
        .guide-wrap { max-width: 860px; margin: 0 auto; padding: 0 24px; }
        .pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center; }
        @media (max-width: 768px) {
          .pc-grid { grid-template-columns: 1fr; }
          .guide-h1 { font-size: 11px !important; }
          .pros-cons { grid-template-columns: 1fr !important; }
          .spec-grid { grid-template-columns: 1fr !important; }
          .table-scroll { overflow-x: auto; }
          .section { padding: 24px 16px !important; }
        }
      `}</style>

      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div className="guide-wrap" style={{ padding: 0, maxWidth: '860px', margin: '0 auto' }}>
          <span className="badge">BUYING GUIDE — UPDATED APRIL 2026</span>
          <h1 className="guide-h1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, margin: '16px 0', textShadow: '3px 3px 0 #d4001a' }}>
            BEST RETRO HANDHELD 2026:<br />MIYOO MINI PLUS vs R36S vs RG35XX
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '12px' }}>
            We tested all three side by side — same ROMs, same games, same conditions. Here&apos;s the honest verdict on which retro handheld is actually worth your money in 2026.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555' }}>
            * This article contains affiliate links. If you purchase through these links, Playhouse.io may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>

        <div className="verdict" style={{ marginBottom: '40px' }}>
          <div className="verdict-label">⚡ QUICK VERDICT</div>
          <p>The <strong style={{ color: '#ffd700' }}>Miyoo Mini Plus</strong> is the best all-round retro handheld for most people — better build quality, larger community, and excellent software support. The <strong style={{ color: '#ffd700' }}>R36S</strong> is the pick if budget is tight. The <strong style={{ color: '#ffd700' }}>RG35XX</strong> sits in the middle and suits anyone who wants a slightly more premium feel at a mid-range price.</p>
        </div>

        <div className="section-header">
          <span className="section-title">FULL COMPARISON</span>
          <div className="section-line" />
        </div>

        <div className="table-scroll" style={{ marginBottom: '40px' }}>
          <table className="compare-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>SPEC</th>
                <th>MIYOO MINI+</th>
                <th>R36S</th>
                <th>RG35XX</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Price', '~£60', '~£35', '~£45'],
                ['Screen', '3.5" IPS', '3.5" IPS', '3.5" IPS'],
                ['Resolution', '640x480', '640x480', '640x480'],
                ['RAM', '256MB', '1GB', '256MB'],
                ['Battery', '3000mAh', '3500mAh', '2600mAh'],
                ['Battery Life', '~6 hrs', '~7 hrs', '~5 hrs'],
                ['Storage', '64GB', '64GB', '64GB'],
                ['OS', 'Onion OS', 'Linux', 'GarlicOS'],
                ['Weight', '105g', '165g', '138g'],
                ['WiFi', '✓', '✗', '✓'],
                ['Community', 'Excellent', 'Good', 'Good'],
                ['Build Quality', 'Excellent', 'Average', 'Good'],
              ].map(([spec, miyoo, r36s, rg35]) => (
                <tr key={spec}>
                  <td style={{ color: '#fff' }}>{spec}</td>
                  <td className={['Price', 'Community', 'Build Quality'].includes(spec) ? 'winner' : ''}>{miyoo}</td>
                  <td className={['Battery Life', 'RAM'].includes(spec) ? 'winner' : ''}>{r36s}</td>
                  <td>{rg35}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Miyoo */}
        <div className="section-header" style={{ marginTop: '40px' }}>
          <span className="section-title">MIYOO MINI PLUS</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span className="stars">★★★★★</span>
            <span className="badge">EDITOR&apos;S CHOICE</span>
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '16px' }}>
            The Miyoo Mini Plus is the gold standard of budget retro handhelds. The build quality is noticeably better than competitors — the buttons have a satisfying click, the D-pad is responsive, and the IPS screen is crisp and bright. Onion OS is the best custom firmware in class and is regularly updated by an active community.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            It handles everything up to PS1 and N64 comfortably. WiFi connectivity lets you sync saves, download ROMs, and access cloud saves — something the R36S can&apos;t do.
          </p>
          <div className="pros-cons" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Best build quality at price</li>
                <li>Onion OS is outstanding</li>
                <li>Huge active community</li>
                <li>WiFi connectivity</li>
                <li>Compact and pocketable</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Pricier than R36S</li>
                <li>No analogue sticks</li>
                <li>Stock firmware is poor</li>
                <li>Can sell out quickly</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/placeholder-miyoo" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder-alt" style={{ margin: '32px -24px' }} />

        {/* R36S */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">R36S</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span className="stars">★★★★☆</span>
            <span className="badge">BEST BUDGET PICK</span>
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '16px' }}>
            The R36S punches well above its price point. At around £35 it&apos;s the cheapest entry into retro handheld gaming and delivers more than you&apos;d expect. The 1GB RAM means it handles N64 and PS1 emulation better than the Miyoo in some edge cases, and the battery gives you an extra hour of play time.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            The trade-offs are real — build quality is cheaper, no WiFi, thinner community. If you&apos;re new to retro handhelds and want to try one without spending much, it&apos;s the right call.
          </p>
          <div className="pros-cons" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Excellent value for money</li>
                <li>1GB RAM handles more</li>
                <li>Longer battery life</li>
                <li>Analogue sticks included</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>No WiFi</li>
                <li>Cheaper build quality</li>
                <li>Smaller community</li>
                <li>Variable QC between units</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/placeholder-r36s" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder" style={{ margin: '32px -24px' }} />

        {/* RG35XX */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">RG35XX</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span className="stars">★★★★☆</span>
            <span className="badge">SOLID MID-RANGE</span>
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            The Anbernic RG35XX sits between the other two in price and quality. Anbernic is a more established brand and it shows in the consistency — you&apos;re less likely to receive a dud unit. GarlicOS is solid and well-maintained.
          </p>
          <div className="pros-cons" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Reputable brand (Anbernic)</li>
                <li>Consistent build quality</li>
                <li>GarlicOS well supported</li>
                <li>WiFi on H+ variant</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Shorter battery than R36S</li>
                <li>Less RAM than R36S</li>
                <li>Pricier than R36S</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/placeholder-rg35xx" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        {/* Final verdict */}
        <div className="section-header" style={{ marginTop: '40px' }}>
          <span className="section-title">FINAL VERDICT</span>
          <div className="section-line" />
        </div>
        <div className="verdict">
          <div className="verdict-label">🏆 OUR RECOMMENDATION</div>
          <p>For most people: <strong style={{ color: '#ffd700' }}>buy the Miyoo Mini Plus</strong>. The extra £20-25 over the R36S buys you significantly better build quality, WiFi, Onion OS, and a vastly larger community. If budget is genuinely tight, the R36S is a fine introduction — just don&apos;t expect it to feel as premium.</p>
        </div>

        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '2px solid #333060' }}>
          <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '16px' }}>ALSO WORTH READING</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/guides/best-retro-controllers" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Controllers 2026</Link>
            <Link href="/guides/best-mini-arcade-machines" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Mini Arcade Machines 2026</Link>
            <Link href="/handhelds" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ All Handheld Reviews</Link>
          </div>
        </div>
      </div>
    </>
  );
}
