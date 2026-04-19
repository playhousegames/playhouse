// app/guides/best-retro-handheld/page.tsx
//
// Roundup/comparison guide pattern. Key differences from a single-product review:
// - Uses ItemList schema instead of Product+Review (the items link OUT to individual reviews)
// - Each row in the comparison table is a ranked pick
// - Individual reviews live at /guides/[product]-review and own their Product+Review schema
// This avoids schema duplication and gives Google a clear "this is a ranked list" signal.

import type { Metadata } from 'next';
import Link from 'next/link';
import Schema, { type ListItem, type FaqItem, type BreadcrumbItem } from '../../components/Schema';

export const metadata: Metadata = {
  title: 'Best Retro Handhelds 2026 — Miyoo Mini Plus vs R36S vs RG35XX',
  description: 'We tested the three most popular budget retro handhelds side by side in 2026. Which is actually worth buying?',
  alternates: { canonical: 'https://playhouse.io/guides/best-retro-handheld' },
};

const items: ListItem[] = [
  {
    position: 1,
    name: 'Miyoo Mini Plus',
    url: 'https://playhouse.io/guides/miyoo-mini-plus-review',
    image: 'https://playhouse.io/products/miyoo-mini-plus.jpg',
  },
  {
    position: 2,
    name: 'Anbernic RG35XX',
    url: 'https://playhouse.io/guides/rg35xx-review',
    image: 'https://playhouse.io/products/rg35xx.jpg',
  },
  {
    position: 3,
    name: 'R36S',
    url: 'https://playhouse.io/guides/r36s-review',
    image: 'https://playhouse.io/products/r36s.jpg',
  },
];

const faq: FaqItem[] = [
  {
    question: 'What is the best retro handheld in 2026?',
    answer:
      'The Miyoo Mini Plus is the best all-round retro handheld under £100 in 2026. It offers the strongest balance of build quality, screen, emulation performance and software support.',
  },
  {
    question: 'What is the cheapest good retro handheld?',
    answer:
      'The R36S at around £35 is the cheapest retro handheld we recommend. It runs everything up to PS1, has dual analogue sticks, and comes with a larger screen than the Miyoo Mini Plus.',
  },
  {
    question: 'Can retro handhelds play PlayStation 1 games?',
    answer:
      'Yes. All three handhelds in this guide — the Miyoo Mini Plus, RG35XX and R36S — run PlayStation 1 games at full speed. Dreamcast and PSP are beyond their reliable performance ceiling.',
  },
  {
    question: 'Are retro handhelds legal?',
    answer:
      'The handhelds themselves are legal to buy and own. Downloading ROMs for games you do not own is copyright infringement in the UK. You can legally dump ROMs from cartridges and discs you own for personal use.',
  },
];

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://playhouse.io' },
  { name: 'Guides', url: 'https://playhouse.io/guides' },
  { name: 'Best Retro Handhelds', url: 'https://playhouse.io/guides/best-retro-handheld' },
];

export default function BestRetroHandheldGuide() {
  return (
    <>
      <Schema
        itemList={{
          name: 'Best Retro Handhelds 2026',
          description: 'Ranked list of the best retro handhelds under £100 in 2026.',
          items,
        }}
        faq={faq}
        breadcrumbs={breadcrumbs}
      />

      <article className="section" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <Link href="/guides">Guides</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>Best Retro Handhelds</span>
        </nav>

        <span className="badge">BUYING GUIDE 2026</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#fff', margin: '12px 0 20px', lineHeight: 1.8 }}>
          BEST RETRO HANDHELDS 2026
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#ffd700', marginBottom: '24px' }}>
          #ad — Contains affiliate links. Playhouse.io may earn a commission.
        </p>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', marginBottom: '24px' }}>
          We tested the three most popular budget retro handhelds side by side. Here&apos;s how they compare.
        </p>

        {/* Ranked list — visible version of the ItemList schema */}
        {items.map((item, idx) => (
          <div key={item.name} className="card" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#ffd700' }}>#{idx + 1}</span>
              <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#fff', lineHeight: 1.8 }}>
                {item.name.toUpperCase()}
              </h2>
            </div>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0', marginBottom: '12px' }}>
              [Short verdict paragraph for each pick — 2-3 sentences explaining why it earned this position.]
            </p>
            <Link href={item.url.replace('https://playhouse.io', '')} className="btn btn-yellow">
              READ FULL REVIEW
            </Link>
          </div>
        ))}

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {faq.map((f) => (
          <div key={f.question} style={{ marginBottom: '20px' }}>
            <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', color: '#fff', marginBottom: '8px', lineHeight: 1.8 }}>
              {f.question}
            </h3>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0' }}>
              {f.answer}
            </p>
          </div>
        ))}
      </article>
    </>
  );
}
