import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miyoo Mini Plus Review 2026: Is It Still the Best? | Playhouse.io',
  description: 'Full Miyoo Mini Plus review — screen quality, build, battery life, Onion OS, and who should buy it in 2026. Honest verdict after extensive testing.',
};

export default function MiyooReview() {
  return (
    <>
      <style>{`
        .guide-wrap { max-width: 860px; margin: 0 auto; padding: 0 24px; }
        .spec-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 24px; }
        .pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 768px) {
          .spec-grid { grid-template-columns: 1fr; }
          .pc-grid { grid-template-columns: 1fr; }
          .guide-h1 { font-size: 11px !important; }
          .section { padding: 24px 16px !important; }
          .score-row { flex-direction: column !important; }
        }
      `}</style>

      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div className="guide-wrap">
          <span className="badge">FULL REVIEW — APRIL 2026</span>
          <h1 className="guide-h1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, margin: '16px 0', textShadow: '3px 3px 0 #d4001a' }}>
            MIYOO MINI PLUS REVIEW 2026: IS IT STILL THE BEST?
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '12px' }}>
            The Miyoo Mini Plus has been the community favourite budget handheld for two years. We put it through its paces to find out if it still deserves that crown in 2026.
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: '#555' }}>
            * This article contains affiliate links. Playhouse.io may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="girder" />

      <div className="section guide-wrap">

        {/* Score card */}
        <div style={{ background: '#0d0620', border: '3px solid #d4001a', padding: '24px', marginBottom: '40px', boxShadow: '4px 4px 0 #8b0000' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }} className="score-row">
            <div>
              <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#fff', marginBottom: '8px' }}>MIYOO MINI PLUS</h2>
              <span className="stars" style={{ fontSize: '28px' }}>★★★★★</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>PRICE</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '18px', color: '#ffd700' }}>~£60</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {[['SCREEN', '9/10'], ['BUILD', '9/10'], ['BATTERY', '7/10'], ['VALUE', '9/10']].map(([cat, score]) => (
              <div key={cat} style={{ textAlign: 'center', background: '#1a0a2e', padding: '10px', border: '1px solid #333060' }}>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: '13px', color: '#aaa8d0' }}>{cat}</div>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#ffd700' }}>{score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="section-header">
          <span className="section-title">FULL SPECS</span>
          <div className="section-line" />
        </div>
        <div className="spec-grid">
          {[
            ['Screen', '3.5" IPS 640x480'],
            ['Processor', 'Allwinner A133P'],
            ['RAM', '256MB'],
            ['Storage', '64GB (expandable)'],
            ['Battery', '3000mAh'],
            ['Battery Life', '~5-6 hours'],
            ['OS', 'Onion OS (custom)'],
            ['WiFi', 'Yes (2.4GHz)'],
            ['Weight', '105g'],
            ['Dimensions', '99 x 64 x 14mm'],
            ['Charging', 'USB-C'],
            ['Headphone Jack', 'Yes (3.5mm)'],
          ].map(([label, value]) => (
            <div key={label} className="spec-item">
              <span className="spec-label">{label}</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>

        {/* Screen */}
        <div className="section-header" style={{ marginTop: '40px' }}>
          <span className="section-title">SCREEN</span>
          <div className="section-line" />
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '24px' }}>
          The 3.5-inch IPS screen is the Miyoo Mini Plus&apos;s strongest feature. At 640x480 it&apos;s the perfect resolution for retro gaming — pixel-perfect for Game Boy, SNES and Mega Drive games. Colours are vivid, brightness is good, and there&apos;s no ghosting even in fast-paced games. It&apos;s genuinely one of the best screens at any price in this category.
        </p>

        {/* Build */}
        <div className="section-header">
          <span className="section-title">BUILD QUALITY</span>
          <div className="section-line" />
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '24px' }}>
          The plastic shell feels solid and premium for the price. Buttons have a satisfying tactile click — the D-pad in particular is excellent for 2D platformers and fighting games. The shoulder buttons are well positioned and responsive. At 105g it&apos;s light enough to hold comfortably for long sessions without hand fatigue.
        </p>

        {/* Onion OS */}
        <div className="section-header">
          <span className="section-title">ONION OS</span>
          <div className="section-line" />
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '24px' }}>
          Stock firmware is poor — install Onion OS immediately. It&apos;s a free community-built operating system that transforms the device. You get a clean UI, hundreds of emulators, RetroAchievements support, save state syncing over WiFi, and a package manager for adding new apps. The community behind it is enormous and updates arrive regularly. Onion OS alone is a significant reason to choose the Miyoo over competitors.
        </p>

        {/* Battery */}
        <div className="section-header">
          <span className="section-title">BATTERY LIFE</span>
          <div className="section-line" />
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '24px' }}>
          The 3000mAh battery delivers around 5-6 hours of gameplay depending on screen brightness and emulator load. It&apos;s not class-leading — the R36S lasts noticeably longer — but it&apos;s enough for a commute or a long flight. Charges via USB-C in about 2 hours.
        </p>

        {/* Pros/cons */}
        <div className="section-header">
          <span className="section-title">PROS & CONS</span>
          <div className="section-line" />
        </div>
        <div className="pc-grid" style={{ marginBottom: '32px' }}>
          <div className="pros">
            <h4>PROS</h4>
            <ul>
              <li>Outstanding IPS screen</li>
              <li>Excellent build quality</li>
              <li>Onion OS is best in class</li>
              <li>WiFi for save syncing</li>
              <li>Huge active community</li>
              <li>Compact and pocketable</li>
              <li>USB-C charging</li>
            </ul>
          </div>
          <div className="cons">
            <h4>CONS</h4>
            <ul>
              <li>Stock firmware needs replacing</li>
              <li>No analogue sticks</li>
              <li>256MB RAM limits N64/PS1</li>
              <li>Can sell out quickly</li>
              <li>Pricier than R36S</li>
            </ul>
          </div>
        </div>

        {/* Who should buy */}
        <div className="section-header">
          <span className="section-title">WHO SHOULD BUY IT</span>
          <div className="section-line" />
        </div>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '24px' }}>
          The Miyoo Mini Plus is the right choice if you want the best overall experience — screen quality, build, software and community support all in one package. It&apos;s ideal for NES, SNES, Game Boy, GBA and Mega Drive gaming. If you mainly want PS1 and N64 emulation, consider the R36S instead for its extra RAM.
        </p>

        <div className="verdict">
          <div className="verdict-label">🏆 VERDICT</div>
          <p>The Miyoo Mini Plus remains the best budget retro handheld in 2026. Two years on the market and it still hasn&apos;t been beaten for the combination of screen quality, build, and software. <strong style={{ color: '#ffd700' }}>Buy it.</strong></p>
        </div>

        <div style={{ marginTop: '24px' }}>
          <a href="https://amzn.to/4mE11wG" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow" style={{ marginRight: '16px' }}>CHECK PRICE ON AMAZON</a>
        </div>

        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '2px solid #333060' }}>
          <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '16px' }}>ALSO WORTH READING</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/guides/best-retro-handheld" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Miyoo Mini Plus vs R36S vs RG35XX</Link>
            <Link href="/guides/best-retro-handheld-under-50" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld Under £50</Link>
            <Link href="/guides/best-retro-handheld-for-kids" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld for Kids</Link>
          </div>
        </div>
      </div>
    </>
  );
}
