import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Retro Handheld for Kids 2026: Safe, Fun & Affordable | Playhouse.io',
  description: 'The best retro handhelds for kids in 2026 — durable, easy to use, and loaded with age-appropriate games. Gift guide for parents and grandparents.',
};

export default function BestForKids() {
  return (
    <>
      <style>{`
        .guide-wrap { max-width: 680px; margin: 0 auto; padding: 0 24px; }
        .pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .age-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
        @media (max-width: 768px) {
          .pc-grid { grid-template-columns: 1fr; }
          .age-grid { grid-template-columns: 1fr; }
          .guide-h1 { font-size: 11px !important; }
          .table-scroll { overflow-x: auto; }
          .section { padding: 24px 16px !important; }
        }
      `}</style>

      <div style={{ background: '#0d0620', padding: '40px 24px', borderBottom: '3px solid #d4001a' }}>
        <div className="guide-wrap">
          <span className="badge">GIFT GUIDE — UPDATED APRIL 2026</span>
          <h1 className="guide-h1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', lineHeight: 2, margin: '16px 0', textShadow: '3px 3px 0 #d4001a' }}>
            BEST RETRO HANDHELD FOR KIDS 2026
          </h1>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '20px', color: '#aaa8d0', lineHeight: '1.6', marginBottom: '12px' }}>
            Retro handhelds make brilliant gifts for kids — simple controls, timeless games, and none of the online risks of modern gaming. Here&apos;s what to buy based on age.
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
          <p>For kids aged <strong style={{ color: '#ffd700' }}>6-10</strong>: the <strong style={{ color: '#ffd700' }}>R36S or RG35XX</strong> — simple, durable, loaded with recognisable games. For kids aged <strong style={{ color: '#ffd700' }}>10+</strong> who are into gaming: the <strong style={{ color: '#ffd700' }}>Miyoo Mini Plus</strong> — better quality, bigger community, more to explore.</p>
        </div>

        {/* Age guide */}
        <div className="section-header">
          <span className="section-title">BY AGE GROUP</span>
          <div className="section-line" />
        </div>
        <div className="age-grid">
          {[
            { age: 'AGES 6-9', rec: 'R36S or RG35XX', why: 'Simple games, durable, inexpensive — great first gaming device', colour: '#39ff14' },
            { age: 'AGES 10-13', rec: 'Miyoo Mini Plus', why: 'Better quality, more games, Onion OS grows with them', colour: '#ffd700' },
            { age: 'AGES 14+', rec: 'Miyoo Mini Plus or RG35XX H+', why: 'Full emulation range, WiFi, community to engage with', colour: '#d4001a' },
          ].map((item) => (
            <div key={item.age} style={{ background: '#0d0620', border: `3px solid ${item.colour}`, padding: '20px' }}>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: item.colour, marginBottom: '10px' }}>{item.age}</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#fff', marginBottom: '10px', lineHeight: 1.8 }}>{item.rec}</div>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0' }}>{item.why}</p>
            </div>
          ))}
        </div>

        <div className="section-header">
          <span className="section-title">FULL COMPARISON</span>
          <div className="section-line" />
        </div>

        <div className="table-scroll" style={{ marginBottom: '40px' }}>
          <table className="compare-table" style={{ minWidth: '500px' }}>
            <thead>
              <tr>
                <th>DEVICE</th>
                <th>PRICE</th>
                <th>AGE</th>
                <th>DURABILITY</th>
                <th>EASE OF USE</th>
                <th>RATING</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['R36S', '~£35', '6+', '★★★☆☆', '★★★★☆', '★★★★☆'],
                ['RG35XX', '~£45', '6+', '★★★★☆', '★★★★☆', '★★★★☆'],
                ['Miyoo Mini Plus', '~£60', '10+', '★★★★☆', '★★★☆☆', '★★★★★'],
                ['Mini Arcade Machine', '~£30', '5+', '★★★★★', '★★★★★', '★★★☆☆'],
              ].map(([device, price, age, durability, ease, rating]) => (
                <tr key={device}>
                  <td style={{ color: '#fff' }}>{device}</td>
                  <td>{price}</td>
                  <td className="winner">{age}</td>
                  <td className="stars" style={{ fontSize: '14px' }}>{durability}</td>
                  <td className="stars" style={{ fontSize: '14px' }}>{ease}</td>
                  <td className="stars">{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* R36S for kids */}
        <div className="section-header">
          <span className="section-title">R36S — BEST FOR YOUNGER KIDS</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span className="stars">★★★★☆</span>
            <span className="badge">AGES 6+</span>
          </div>
          <p className="body-copy" style={{ marginBottom: '16px' }}>
            At £35 the R36S is the least painful option if the device gets lost, dropped or broken — which with younger kids is a real consideration. It comes pre-loaded with games including Mario, Sonic, Street Fighter and hundreds more that kids will instantly recognise. Setup is simple and the controls are intuitive even for young gamers.
          </p>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Affordable if lost/broken</li>
                <li>Pre-loaded with games</li>
                <li>Familiar game titles</li>
                <li>Simple to use</li>
                <li>Analogue sticks for 3D games</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Build quality is basic</li>
                <li>No parental controls</li>
                <li>No WiFi</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4tBuZEp" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder-alt" style={{ margin: '32px -24px' }} />

        {/* Miyoo for older kids */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">MIYOO MINI PLUS — BEST FOR OLDER KIDS</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span className="stars">★★★★★</span>
            <span className="badge">AGES 10+</span>
          </div>
          <p className="body-copy" style={{ marginBottom: '16px' }}>
            For older kids who are genuinely into gaming, the Miyoo Mini Plus is worth the extra spend. The better screen and build quality means they&apos;ll actually use it long term rather than losing interest after a week. The huge Onion OS community means there&apos;s always something new to discover — themes, apps, new emulators.
          </p>
          <p className="body-copy" style={{ marginBottom: '20px' }}>
            It&apos;s also a great way to introduce kids to gaming history — playing the original Super Mario Bros, Zelda or Sonic on authentic hardware (or near-authentic) is a different experience to mobile games.
          </p>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Best quality screen</li>
                <li>Durable build</li>
                <li>Grows with the child</li>
                <li>WiFi connectivity</li>
                <li>Huge game library</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>More expensive</li>
                <li>Needs Onion OS setup</li>
                <li>No parental controls</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4mE11wG" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="girder" style={{ margin: '32px -24px' }} />

        {/* Mini arcade for youngest */}
        <div className="section-header" style={{ marginTop: '32px' }}>
          <span className="section-title">MINI ARCADE MACHINE — BEST FOR YOUNG CHILDREN</span>
          <div className="section-line" />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span className="stars">★★★☆☆</span>
            <span className="badge">AGES 5+</span>
          </div>
          <p className="body-copy" style={{ marginBottom: '20px' }}>
            For very young children a mini arcade machine is often better than a handheld — it sits on a table, the controls are simple (joystick and buttons), and there&apos;s no risk of it going in a pocket and getting lost. The 240 built-in games are simple enough for young children to grasp immediately.
          </p>
          <div className="pc-grid" style={{ marginBottom: '20px' }}>
            <div className="pros">
              <h4>PROS</h4>
              <ul>
                <li>Table-top — harder to lose</li>
                <li>Simple joystick controls</li>
                <li>Instantly playable</li>
                <li>Looks great as a gift</li>
              </ul>
            </div>
            <div className="cons">
              <h4>CONS</h4>
              <ul>
                <li>Not portable</li>
                <li>Limited game quality</li>
                <li>Small screen</li>
              </ul>
            </div>
          </div>
          <a href="https://amzn.to/4sZwjQl" className="btn btn-yellow" target="_blank" rel="noopener noreferrer nofollow">CHECK PRICE ON AMAZON</a>
        </div>

        <div className="verdict">
          <div className="verdict-label">🏆 GIFT GUIDE SUMMARY</div>
          <p>
            <strong style={{ color: '#ffd700' }}>Under 6:</strong> Mini arcade machine — simple, can&apos;t be lost in a pocket.<br />
            <strong style={{ color: '#ffd700' }}>Ages 6-10:</strong> R36S — affordable, pre-loaded, familiar games.<br />
            <strong style={{ color: '#ffd700' }}>Ages 10+:</strong> Miyoo Mini Plus — best quality, grows with them.
          </p>
        </div>

        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '2px solid #333060' }}>
          <h3 style={{ fontSize: '9px', color: '#ffd700', marginBottom: '16px' }}>ALSO WORTH READING</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/guides/best-retro-handheld" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld 2026: Full Comparison</Link>
            <Link href="/guides/best-retro-handheld-under-50" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Best Retro Handheld Under £50</Link>
            <Link href="/guides/miyoo-mini-plus-review" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>▶ Miyoo Mini Plus Full Review</Link>
          </div>
        </div>
      </div>
    </>
  );
}
