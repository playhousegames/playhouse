import type { Metadata } from 'next';
import Link from 'next/link';
import Schema from '../components/Schema';

export const metadata: Metadata = {
  title: 'Privacy Policy — Playhouse.io',
  description: 'How Playhouse.io collects, uses and protects your data. We use Google Analytics and Amazon affiliate tracking. We never sell your data.',
  alternates: { canonical: 'https://playhouse.io/privacy' },
};

export default function Privacy() {
  return (
    <>
      <Schema
        breadcrumbs={[
          { name: 'Home', url: 'https://playhouse.io' },
          { name: 'Privacy Policy', url: 'https://playhouse.io/privacy' },
        ]}
      />

      <article className="section" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>Privacy Policy</span>
        </nav>

        <span className="badge">LEGAL</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#fff', margin: '12px 0 24px', lineHeight: 1.8 }}>
          PRIVACY POLICY
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#ffd700', lineHeight: '1.6', marginBottom: '24px' }}>
          Short version: we collect as little as possible, share nothing, and never sell your data.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          This policy covers playhouse.io and was last updated on 11 May 2026. The site
          is operated by Matthew Myles, Jersey, Channel Islands.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          DATA WE COLLECT
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          <span style={{ color: '#ffd700' }}>Analytics data.</span> We use Google
          Analytics (GA4) to understand how visitors use the site — which pages are
          read, how long people spend on them, and how they arrive. Google Analytics
          collects anonymised data including your approximate location, device type,
          browser, and which pages you visit. This data is processed by Google and
          subject to{' '}
          <a
            href="https://policies.google.com/privacy"
            style={{ color: '#ffd700' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s privacy policy
          </a>
          .
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          <span style={{ color: '#ffd700' }}>No account or form data.</span> Playhouse.io
          has no user accounts, no comment system, and no contact forms. We do not collect
          your name, email address, or any personally identifiable information directly.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          COOKIES
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          This site uses cookies in two ways:
        </p>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          <span style={{ color: '#ffd700' }}>Analytics cookies.</span> Google Analytics
          sets cookies (typically named <code style={{ color: '#aaa8d0' }}>_ga</code>,{' '}
          <code style={{ color: '#aaa8d0' }}>_ga_*</code>) to distinguish unique visitors
          and sessions. These cookies persist for up to 2 years. You can opt out of
          Google Analytics across all sites by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            style={{ color: '#ffd700' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          <span style={{ color: '#ffd700' }}>Amazon affiliate cookies.</span> When you
          click an Amazon link on this site, Amazon may set cookies to attribute any
          resulting purchases to our affiliate account. This is standard practice for
          Amazon Associates. Amazon&apos;s use of cookies is governed by{' '}
          <a
            href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201890250"
            style={{ color: '#ffd700' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon&apos;s cookie policy
          </a>
          .
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          AMAZON AFFILIATE TRACKING
        </h2>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          Playhouse.io participates in the Amazon Associates Programme. When you click
          a product link, your visit to Amazon is tracked so that any commission we
          earn can be attributed correctly. Amazon handles all payment and personal
          data for purchases — we only receive aggregate commission reports and have
          no access to your Amazon account details, purchase history, or payment
          information. See our{' '}
          <Link href="/disclosure" style={{ color: '#ffd700' }}>Affiliate Disclosure</Link>{' '}
          for more detail on how affiliate links work on this site.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          HOW WE USE DATA
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The analytics data we collect is used solely to understand which content is
          useful, identify pages with technical problems, and guide decisions about
          what to write next. It is never used for advertising targeting or sold to
          any third party.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          We do not sell, rent, or share your data with third parties beyond the
          processors listed above (Google Analytics, Amazon Associates).
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          YOUR RIGHTS
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          If you are based in the UK or EU, you have rights under UK GDPR / GDPR,
          including the right to access, correct, or delete personal data held about
          you. Because we collect very little personal data directly, most requests
          will need to be directed to Google or Amazon using their respective data
          subject request processes.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          For any query about data we hold directly, contact{' '}
          <a href="mailto:hello@playhouse.io" style={{ color: '#ffd700' }}>hello@playhouse.io</a>.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          CHANGES TO THIS POLICY
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          If this policy changes materially, the updated version will be posted here
          with a revised date at the top. Continued use of the site after a change
          constitutes acceptance of the updated policy.
        </p>

        <p className="body-copy" style={{ marginBottom: '40px' }}>
          Questions? Email{' '}
          <a href="mailto:hello@playhouse.io" style={{ color: '#ffd700' }}>hello@playhouse.io</a>.
        </p>
      </article>
    </>
  );
}
