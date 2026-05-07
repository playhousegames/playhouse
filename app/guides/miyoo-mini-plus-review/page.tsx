// app/guides/miyoo-mini-plus-review/page.tsx
//
// Template review page. Clone this pattern for each product review:
// 1. Fill in the `product` object (name, brand, affiliate URL, rating, verdict)
// 2. Fill in the `faq` array with 4-6 questions you genuinely want to rank for
// 3. Update breadcrumbs if the URL structure changes
// 4. Write the review body — the <Schema> JSON-LD pulls from the same `product`
//    object, so there's one source of truth between what users see and what
//    Google/LLMs parse.

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Schema, { type ProductReview, type FaqItem, type BreadcrumbItem } from '../../components/Schema';

export const metadata: Metadata = {
  title: 'Miyoo Mini Plus Review (2026) — Is It Still The Best Sub-£100 Retro Handheld?',
  description: 'Hands-on review of the Miyoo Mini Plus. Battery life, screen, emulation performance and who should buy it in 2026. Honest verdict, no hype.',
  alternates: { canonical: 'https://playhouse.io/guides/miyoo-mini-plus-review' },
  openGraph: {
    title: 'Miyoo Mini Plus Review (2026)',
    description: 'Hands-on review. Honest verdict, no hype.',
    url: 'https://playhouse.io/guides/miyoo-mini-plus-review',
    type: 'article',
    images: ['https://playhouse.io/products/miyoo-mini-plus.jpg'],
  },
};

// ---------- Data (single source of truth for UI + schema) ----------

const product: ProductReview = {
  name: 'Miyoo Mini Plus',
  brand: 'Miyoo',
  image: 'https://playhouse.io/products/miyoo-mini-plus.jpg',
  description:
    'Pocket-sized retro handheld with a 3.5" IPS screen, OnionOS compatibility and comfortable D-pad. Strong emulation up to PS1.',
  price: '59.99',
  priceCurrency: 'GBP',
  availability: 'InStock',
  affiliateUrl: 'https://amzn.to/4mE11wG',
  reviewRating: 4.5,
  reviewAuthor: 'Matthew Myles',
  reviewBody:
    'The Miyoo Mini Plus remains the sweet spot for sub-£100 retro handhelds in 2026. Build quality punches above its price, the screen is genuinely good in daylight, and OnionOS turns it into a proper pocket emulator. PS1 performance is the ceiling — Dreamcast is a stretch. Buy if you want GBA, SNES and Mega Drive in your jacket pocket without faff.',
  datePublished: '2026-04-19',
  aggregateRating: {
    ratingValue: 4.5,
    reviewCount: 1,
  },
};

const faq: FaqItem[] = [
  {
    question: 'Is the Miyoo Mini Plus worth buying in 2026?',
    answer:
      'Yes, for most people wanting a pocket emulator under £100. It handles everything up to PS1 reliably, the screen is bright and sharp, and OnionOS is more polished than stock firmware on most competitors. Skip it only if you need Dreamcast or PSP performance.',
  },
  {
    question: 'What emulators does the Miyoo Mini Plus run well?',
    answer:
      'Game Boy, Game Boy Color, Game Boy Advance, NES, SNES, Mega Drive, Master System, Neo Geo, arcade (via FBNeo/MAME2003) and PlayStation 1 all run at full speed. N64 and Dreamcast are hit-and-miss. PSP is not recommended.',
  },
  {
    question: 'How long does the battery last?',
    answer:
      'Real-world battery life is 6 to 8 hours of mixed use with the screen at 50% brightness. Heavier emulation like PS1 drops it closer to 5 hours. It charges via USB-C in about 2 hours.',
  },
  {
    question: 'Miyoo Mini Plus vs R36S — which should I buy?',
    answer:
      'Buy the Miyoo Mini Plus if you prioritise build quality, screen and pocketability. Buy the R36S if price is the deciding factor and you prefer a larger form factor with dual analogue sticks. Both run similar emulators at similar performance.',
  },
  {
    question: 'Does the Miyoo Mini Plus come with games?',
    answer:
      'No. It ships with the OS and a microSD card in some bundles, but ROMs are not legally included. You need to supply your own ROMs from games you own.',
  },
];

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://playhouse.io' },
  { name: 'Guides', url: 'https://playhouse.io/guides' },
  { name: 'Miyoo Mini Plus Review', url: 'https://playhouse.io/guides/miyoo-mini-plus-review' },
];

// ---------- Page ----------

export default function MiyooMiniPlusReview() {
  return (
    <>
      <Schema product={product} faq={faq} breadcrumbs={breadcrumbs} />

      <article className="section" style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <Link href="/guides">Guides</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>Miyoo Mini Plus Review</span>
        </nav>

        <span className="badge">REVIEW 2026</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#fff', margin: '12px 0 20px', lineHeight: 1.8 }}>
          MIYOO MINI PLUS REVIEW
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#ffd700', marginBottom: '24px' }}>
          #ad — Contains affiliate links. Playhouse.io may earn a commission.
        </p>

        {/* Hero image */}
        <div style={{ position: 'relative', width: '100%', height: '400px', background: '#1a0a2e', border: '3px solid #333060', marginBottom: '24px' }}>
          <Image
            src="/products/miyoo-mini-plus.jpg"
            alt="Miyoo Mini Plus retro handheld console in black, shown from the front"
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Verdict up top — important for LLM extraction and user skimming */}
        <div className="verdict">
          <div className="verdict-label">VERDICT</div>
          <p>{product.reviewBody}</p>
          <div style={{ marginTop: '12px' }}>
            <span className="stars">★★★★</span><span style={{ color: '#8b8b00' }}>★</span>
            <span style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0', marginLeft: '12px' }}>
              {product.reviewRating} / 5
            </span>
          </div>
          <div style={{ marginTop: '16px' }}>
            <a href={product.affiliateUrl} className="btn btn-yellow" target="_blank" rel="noopener noreferrer sponsored">
              ▶ CHECK PRICE ON AMAZON
            </a>
          </div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons" style={{ margin: '32px 0' }}>
          <div className="pros">
            <h4>PROS</h4>
            <ul>
              <li>Excellent 3.5&quot; IPS screen</li>
              <li>Solid build quality for the price</li>
              <li>OnionOS is genuinely polished</li>
              <li>Properly pocketable</li>
              <li>Strong D-pad for retro games</li>
            </ul>
          </div>
          <div className="cons">
            <h4>CONS</h4>
            <ul>
              <li>No analogue sticks</li>
              <li>Struggles with Dreamcast and PSP</li>
              <li>Speaker is weak — use headphones</li>
              <li>No Wi-Fi on the base model</li>
            </ul>
          </div>
        </div>

        {/* Spec grid */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          SPECS
        </h2>
        <div className="spec-grid">
          <div className="spec-item"><span className="spec-label">Screen</span><span className="spec-value">3.5&quot; IPS</span></div>
          <div className="spec-item"><span className="spec-label">CPU</span><span className="spec-value">1.2GHz</span></div>
          <div className="spec-item"><span className="spec-label">RAM</span><span className="spec-value">128MB</span></div>
          <div className="spec-item"><span className="spec-label">Battery</span><span className="spec-value">3000mAh</span></div>
          <div className="spec-item"><span className="spec-label">Weight</span><span className="spec-value">121g</span></div>
          <div className="spec-item"><span className="spec-label">Price</span><span className="spec-value">~£60</span></div>
        </div>

        {/* Long-form body — write this properly for each product */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          HANDS-ON IMPRESSIONS
        </h2>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          [Write 300-600 words of genuine hands-on observations here. Mention what surprised you, what disappointed you,
          and specific games you tested. This is the section that earns backlinks and LLM citations. Avoid generic phrasing
          that reads like a spec sheet — your voice is the differentiator.]
        </p>

        {/* FAQ — mirrors the schema FAQ so users see what LLMs see */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {faq.map((f) => (
          <div key={f.question} style={{ marginBottom: '20px' }}>
            <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', color: '#fff', marginBottom: '8px', lineHeight: 1.8 }}>
              {f.question}
            </h3>
            <p className="body-copy">
              {f.answer}
            </p>
          </div>
        ))}

        {/* Internal link to emulation guide */}
        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '3px solid #333060' }}>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0', marginBottom: '12px' }}>
            Want to know exactly what it runs?
          </p>
          <Link href="/guides/miyoo-mini-plus-emulation-guide" className="btn">
            ▶ SEE THE FULL EMULATION GUIDE
          </Link>
        </div>

        {/* Final CTA */}
        <div style={{ marginTop: '24px', padding: '24px', background: '#0d0620', border: '3px solid #ffd700', textAlign: 'center' }}>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#fff', marginBottom: '16px' }}>
            Ready to pick one up?
          </p>
          <a href={product.affiliateUrl} className="btn btn-yellow" target="_blank" rel="noopener noreferrer sponsored">
            ▶ BUY ON AMAZON UK
          </a>
        </div>
      </article>
    </>
  );
}
