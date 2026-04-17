export default function Footer() {
  return (
    <>
      <div className="girder-alt" />
      <footer style={{
        background: '#d4001a',
        borderTop: '6px solid #ffd700',
        padding: '20px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#fff', margin: 0 }}>
          © 2026 Playhouse.io — Retro Gaming Guides & Reviews
        </p>
        <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#ffd700', margin: 0 }}>
          HI-SCORE: 999999
        </p>
      </footer>
    </>
  );
}
