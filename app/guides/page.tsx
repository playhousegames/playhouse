import Link from 'next/link';
export default function GuidesIndex() {
  return (
    <div className="section" style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div className="section-header">
        <span className="section-title">ALL GUIDES</span>
        <div className="section-line" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Link href="/guides/best-retro-handheld" style={{ textDecoration: 'none' }}>
          <div className="card">
            <span className="badge">BUYING GUIDE</span>
            <h2 style={{ fontSize: '10px', color: '#fff', margin: '8px 0 10px' }}>Best Retro Handheld 2026: Miyoo Mini Plus vs R36S vs RG35XX</h2>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0' }}>Full side-by-side comparison with specs, pros, cons and a clear verdict.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
