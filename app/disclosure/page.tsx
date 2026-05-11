import type { Metadata } from 'next';
import Link from 'next/link';
import Schema from '../components/Schema';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — Playhouse.io',
  description: 'Playhouse.io is a participant in the Amazon Associates programme. Read our full affiliate disclosure.',
  alternates: { canonical: 'https://playhouse.io/disclosure' },
};

export default function Disclosure() {
  return (
    <>
      <Schema
        breadcrumbs={[
          { name: 'Home', url: 'https://playhouse.io' },
          { name: 'Affiliate Disclosure', url: 'https://playhouse.io/disclosure' },
        ]}
      />

      <article className="section" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>Affiliate Disclosure</span>
        </nav>

        <span className="badge">LEGAL</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#fff', margin: '12px 0 24px', lineHeight: 1.8 }}>
          AFFILIATE DISCLOSURE
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#ffd700', lineHeight: '1.6', marginBottom: '24px' }}>
          Honest links. Clear money. No surprises.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          AMAZON ASSOCIATES
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          Playhouse.io is a participant in the Amazon Associates Programme, an affiliate
          advertising programme designed to provide a means for sites to earn advertising
          fees by advertising and linking to Amazon.co.uk and Amazon.com.
        </p>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          When you click a product link on this site and make a purchase on Amazon, we
          earn a small commission. The price you pay is exactly the same — affiliate
          links never cost you anything extra.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          Commission is typically between 1% and 4% depending on the product category.
          It&apos;s a small amount per sale, but it helps keep the site running without
          paywalls, subscriptions, or sponsored content.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          LINKS NEVER INFLUENCE RECOMMENDATIONS
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The affiliate programme has no bearing on which products we cover, how we
          cover them, or what verdict we reach. Products are selected and assessed based
          entirely on their merits.
        </p>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          If a product is poor value, has a bad D-pad, or runs firmware that hasn&apos;t
          been updated since 2022, we will say so — regardless of whether there is an
          affiliate link attached to it.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          We only recommend products we would genuinely buy ourselves or recommend to a
          friend. The affiliate link follows the recommendation — it does not drive it.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          NO SPONSORED REVIEWS
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          Playhouse.io does not accept payment for reviews, coverage, or editorial
          placement. If a manufacturer provides a review unit, this will be disclosed
          prominently within the review itself, and the assessment will be no different
          to one conducted on a retail purchase.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          No manufacturer has editorial influence over any content on this site.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          QUESTIONS?
        </h2>

        <p className="body-copy" style={{ marginBottom: '40px' }}>
          If you have any questions about how affiliate links work on this site, email{' '}
          <a href="mailto:hello@playhouse.io" style={{ color: '#ffd700' }}>hello@playhouse.io</a>.
        </p>
      </article>
    </>
  );
}
