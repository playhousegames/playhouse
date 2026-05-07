import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="girder-alt" />
      <footer style={{ background: '#0d0620', borderTop: '6px solid #ffd700', paddingTop: '40px' }}>
        {/* Top section — link columns */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
        }}>
          {/* Brand column */}
          <div>
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px', color: '#ffd700', marginBottom: '12px', letterSpacing: '2px', lineHeight: 1.8 }}>
              PLAY<span style={{ color: '#fff' }}>HOUSE</span>.IO
            </p>
            <p className="body-copy" style={{ margin: 0 }}>
              Honest retro gaming reviews from someone who was there the first time around.
            </p>
          </div>

          {/* Categories */}
          <div>
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#d4001a', marginBottom: '14px', letterSpacing: '1px' }}>
              CATEGORIES
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: "'VT323', monospace", fontSize: '17px', lineHeight: '1.9' }}>
              <li><Link href="/handhelds" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Handhelds</Link></li>
              <li><Link href="/arcade" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Mini Arcades</Link></li>
              <li><Link href="/controllers" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Controllers</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#d4001a', marginBottom: '14px', letterSpacing: '1px' }}>
              GUIDES
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: "'VT323', monospace", fontSize: '17px', lineHeight: '1.9' }}>
              <li><Link href="/guides/best-retro-handheld" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Best Retro Handheld</Link></li>
              <li><Link href="/guides/miyoo-mini-plus-review" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Miyoo Mini Plus Review</Link></li>
              <li><Link href="/guides" style={{ color: '#aaa8d0', textDecoration: 'none' }}>All Guides</Link></li>
            </ul>
          </div>

          {/* The Fine Print */}
          <div>
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#d4001a', marginBottom: '14px', letterSpacing: '1px' }}>
              THE FINE PRINT
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: "'VT323', monospace", fontSize: '17px', lineHeight: '1.9' }}>
              <li><Link href="/about" style={{ color: '#aaa8d0', textDecoration: 'none' }}>About</Link></li>
              <li><Link href="/disclosure" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Affiliate Disclosure</Link></li>
              <li><Link href="/privacy" style={{ color: '#aaa8d0', textDecoration: 'none' }}>Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliate disclosure strip */}
        <div style={{ background: '#1a0a2e', borderTop: '2px solid #333060', padding: '20px 32px' }}>
          <p className="body-copy" style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <span style={{ color: '#ffd700' }}>#ad</span> — As an Amazon Associate, Playhouse.io earns from qualifying purchases.
            Our picks are chosen independently — the affiliate link never changes what we recommend.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{
          background: '#d4001a',
          borderTop: '4px solid #ffd700',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#fff', margin: 0 }}>
            © 2026 Playhouse.io — Written in Jersey, Channel Islands
          </p>
          <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#ffd700', margin: 0 }}>
            HI-SCORE: 999999
          </p>
        </div>
      </footer>
    </>
  );
}
