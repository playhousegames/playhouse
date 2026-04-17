import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav style={{
        background: '#d4001a',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '6px solid #ffd700',
      }}>
        <Link href="/" style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '14px',
          color: '#ffd700',
          textDecoration: 'none',
          padding: '14px 0',
          letterSpacing: '2px',
        }}>
          PLAY<span style={{ color: '#fff' }}>HOUSE</span>.IO
        </Link>
        <div style={{ display: 'flex', gap: '28px', fontFamily: "'VT323', monospace", fontSize: '20px', color: '#fff' }}>
          <Link href="/handhelds" style={{ color: '#fff' }}>Handhelds</Link>
          <Link href="/arcade" style={{ color: '#fff' }}>Arcade</Link>
          <Link href="/controllers" style={{ color: '#fff' }}>Controllers</Link>
          <Link href="/guides" style={{ color: '#fff' }}>Guides</Link>
        </div>
      </nav>
    </>
  );
}
