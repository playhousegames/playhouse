import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Retro Handheld 2026: Miyoo Mini Plus vs R36S vs RG35XX | Playhouse.io',
  description: 'We tested the three best budget retro handhelds side by side. Full comparison of Miyoo Mini Plus, R36S and RG35XX — specs, performance, build quality and verdict.',
};

export default function BestRetroHandheld() {
  return (
    <>
      <div style={{ background: '#0d0620', padding: '40px 32px', borderBottom: '3px solid #d4001a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="badge">BUYING GUIDE — UPDATED APRIL 2026</span>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#fff', lineHeight: 2, margin: '16px 0', textShadow: '3px 3px 0 #d4001a' }}>
            BEST RETRO HANDHELD 2026: MIYOO MINI PLUS vs R36S vs RG35XX
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '16px' }}>
            We tested all three side by side — same ROMs, same games, same conditions. Here's the honest verdict on which retro handheld is actually worth your money in 2026.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555' }}>
            * This article contains affiliate links. If you purchase through these links, Playhouse.io may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Quick verdict */}
        <div className="verdict" style={{ marginBottom: '40px' }}>
          <div className="verdict-label">⚡ QUICK VERDICT</div>
          <p>The <strong style={{ color: '#ffd700' }}>Miyoo Mini Plus</strong> is the best all-round retro handheld for most people — better build quality, larger community, and excellent software support. The <strong style={{ color: '#ffd700' }}>R36S</strong> is the pick if budget is tight. The <strong style={{ color: '#ffd700' }}>RG35XX</strong> sits in the middle and suits anyone who wants a slightly more premium feel at a mid-range price.</p>
        </div>

        {/* Full comparison table */}
        <div className="section-header">
          <span className="section-title">FULL COMPARISON</span>
          <div className="section-line" />
        </div>

        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
          <table className="compare-table">
            <thead>
              <tr>
                <th>SPEC</th>
                <th>MIYOO MINI PLUS</th>
                <th>R36S</th>
                <th>RG35XX</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Price (approx)', '~£60', '~£35', '~£45'],
                ['Screen', '3.5" IPS', '3.5" IPS', '3.5" IPS'],
                ['Resolution', '640x480', '640x480', '640x480'],
                ['Processor', 'Allwinner A133P', 'Allwinner H700', 'Allwinner H700'],
                ['RAM', '256MB', '1GB', '256MB'],
                ['Battery', '3000mAh', '3500mAh', '2600mAh'],
                ['Battery Life', '~6 hours', '~7 hours', '~5 hours'],
                ['Storage', '64GB included', '64GB included', '64GB included'],
                ['OS', 'Onion OS', 'Linux (custom)', 'GarlicOS / stock'],
                ['Weight', '105g', '165g', '138g'],
                ['WiFi', '✓', '✗', '✓'],
                ['Community Support', 'Excellent', 'Good', 'Good'],
                ['Build Quality', 'Excellent', 'Average', 'Good'],
              ].map(([spec, miyoo, r36s, rg35]) => (
                <tr key={spec}>
                  <td style={{ color: '#fff', fontWeight: 'bold' }}>{spec}</td>
                  <td className={spec === 'Price (approx)' || spec === 'Community Support' || spec === 'Build Quality' ? 'winner' : ''}>{miyoo}</td>
                  <td className={spec === 'Battery Life' || spec === 'RAM' ? 'winner' : ''}>{r36s}</td>
                  <td>{rg35}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Miyoo section */}
        <div className="section-header" style={{ marginTop: '40px' }}>
          <span className="section-title">MIYOO MINI PLUS</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stars">★★★★★</span>
            <span className="badge">EDITOR'S CHOICE</span>
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            The Miyoo Mini Plus is the gold standard of budget retro handhelds. The build quality is noticeably better than competitors at this price point — the buttons have a satisfying click, the D-pad is responsive, and the IPS screen is crisp and bright. Onion OS (the custom firmware) is the best in class for emulation and is regularly updated by an active community.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            It handles everything up to PS1 and N64 comfortably, with some GBA, SNES, Mega Drive, Game Boy, and NES emulation running flawlessly. The WiFi connectivity lets you sync saves, download new ROMs, and access a cloud save feature — something the R36S can't do.
          </p>
          <div className="pros-cons">
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
          <div style={{ marginTop: '20px' }}>
            <a href="https://amzn.to/placeholder-miyoo" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
          </div>
        </div>

        <div className="girder-alt" style={{ margin: '32px -32px' }} />

        {/* R36S section */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">R36S</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stars">★★★★☆</span>
            <span className="badge">BEST BUDGET PICK</span>
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            The R36S punches well above its price point. At around £35 it's the cheapest entry into retro handheld gaming and it delivers more than you'd expect. The 1GB RAM means it handles N64 and PS1 emulation better than the Miyoo Mini Plus in some edge cases, and the larger battery gives you an extra hour or so of play time.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            The trade-offs are real though — build quality is noticeably cheaper, no WiFi, and the community support is thinner. If you're new to retro handhelds and want to try one without spending much, it's the right call. If you're serious about the hobby, save up for the Miyoo.
          </p>
          <div className="pros-cons">
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
          <div style={{ marginTop: '20px' }}>
            <a href="https://amzn.to/placeholder-r36s" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
          </div>
        </div>

        <div className="girder" style={{ margin: '32px -32px' }} />

        {/* RG35XX section */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">RG35XX</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stars">★★★★☆</span>
            <span className="badge">SOLID MID-RANGE</span>
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '20px' }}>
            The Anbernic RG35XX sits between the other two in price and quality. Anbernic is a more established brand than the R36S manufacturers, and it shows in the consistency — you're less likely to receive a dud unit. GarlicOS (the custom firmware of choice) is solid and well-maintained.
          </p>
          <div className="pros-cons">
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Reputable brand (Anbernic)</li>
                <li>Consistent build quality</li>
                <li>GarlicOS is well supported</li>
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
          <div style={{ marginTop: '20px' }}>
            <a href="https://amzn.to/placeholder-rg35xx" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
          </div>
        </div>

        {/* Final verdict */}
        <div className="section-header" style={{ marginTop: '40px' }}>
          <span className="section-title">FINAL VERDICT</span>
          <div className="section-line" />
        </div>
        <div className="verdict">
          <div className="verdict-label">🏆 OUR RECOMMENDATION</div>
          <p>For most people: <strong style={{ color: '#ffd700' }}>buy the Miyoo Mini Plus</strong>. The extra £20-25 over the R36S buys you significantly better build quality, WiFi, Onion OS, and a vastly larger community for troubleshooting and new firmware. It's the handheld you'll still be using in two years. If budget is genuinely tight, the R36S is a fine introduction to the hobby — just don't expect it to last as long or feel as premium.</p>
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
