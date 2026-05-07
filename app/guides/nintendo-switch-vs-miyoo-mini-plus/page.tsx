import type { Metadata } from 'next';
import Link from 'next/link';
import Schema, { type FaqItem, type BreadcrumbItem, type ArticleMeta } from '../../components/Schema';

export const metadata: Metadata = {
  title: 'Nintendo Switch vs Miyoo Mini Plus (2026) — Which Should You Buy?',
  description: 'Honest comparison of the Nintendo Switch OLED and Miyoo Mini Plus for retro gaming in 2026. Price, games library, portability — and a clear verdict.',
  alternates: { canonical: 'https://playhouse.io/guides/nintendo-switch-vs-miyoo-mini-plus' },
  openGraph: {
    title: 'Nintendo Switch vs Miyoo Mini Plus (2026)',
    description: 'Which wins for retro gaming? Honest side-by-side with full comparison table and a clear verdict.',
    url: 'https://playhouse.io/guides/nintendo-switch-vs-miyoo-mini-plus',
    type: 'article',
    images: ['https://playhouse.io/products/miyoo-mini-plus.jpg'],
  },
  keywords: [
    'nintendo switch vs miyoo mini plus',
    'nintendo switch vs retro handheld',
    'miyoo mini plus alternative',
    'is nintendo switch worth it for retro gaming',
    'miyoo mini plus vs switch',
  ],
};

const article: ArticleMeta = {
  headline: 'Nintendo Switch vs Miyoo Mini Plus (2026): Which Should You Buy?',
  description:
    'Honest comparison of the Nintendo Switch OLED and Miyoo Mini Plus for retro gaming. Price, screen, games library, portability and a clear verdict.',
  author: 'Matthew Myles',
  datePublished: '2026-05-07',
  image: 'https://playhouse.io/products/miyoo-mini-plus.jpg',
  url: 'https://playhouse.io/guides/nintendo-switch-vs-miyoo-mini-plus',
};

const faq: FaqItem[] = [
  {
    question: 'Is the Nintendo Switch better than the Miyoo Mini Plus for retro gaming?',
    answer:
      'Not for pure retro gaming. The Nintendo Switch can only play official retro titles through Nintendo Switch Online, which covers a curated selection of NES, SNES, Game Boy, GBA, N64 and Mega Drive — and only with a paid subscription. The Miyoo Mini Plus runs the full library of those consoles plus PlayStation 1 via emulation, for around £60 with no subscription required.',
  },
  {
    question: 'Can the Nintendo Switch play GBA or PS1 games?',
    answer:
      'The Switch can play a limited selection of GBA games via Nintendo Switch Online Expansion Pack — an additional paid tier on top of the base NSO subscription. It cannot play PS1 games at all. The Miyoo Mini Plus runs the complete GBA and PS1 libraries.',
  },
  {
    question: 'Is the Miyoo Mini Plus worth buying if I already own a Nintendo Switch?',
    answer:
      'Yes, for most retro gaming fans. The Miyoo Mini Plus gives you access to the full PS1, GBA and SNES libraries that your Switch cannot touch officially. It fits in a jacket pocket, costs around £60, and complements rather than replaces a Switch.',
  },
  {
    question: 'What can the Miyoo Mini Plus play that the Nintendo Switch cannot?',
    answer:
      'The Miyoo Mini Plus runs the complete libraries of PlayStation 1, Game Boy Advance, SNES, Mega Drive, Neo Geo and dozens of other platforms via emulation. The Switch is limited to the curated, subscription-gated selection from Nintendo Switch Online — no PS1, no arcade, no Neo Geo.',
  },
  {
    question: 'Which is better as a gift — Nintendo Switch or Miyoo Mini Plus?',
    answer:
      'For a child or someone new to gaming, the Nintendo Switch is the safer choice — it has a huge modern library, first-party support and easy setup. For an adult retro gaming fan who grew up with the SNES or PS1, the Miyoo Mini Plus is the more exciting and more affordable gift.',
  },
];

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://playhouse.io' },
  { name: 'Guides', url: 'https://playhouse.io/guides' },
  { name: 'Nintendo Switch vs Miyoo Mini Plus', url: 'https://playhouse.io/guides/nintendo-switch-vs-miyoo-mini-plus' },
];

const MIYOO_URL = 'https://amzn.to/4mE11wG';
const SWITCH_URL = 'https://amzn.to/4eyHs76';

const useCases = [
  {
    label: 'PURE RETRO GAMING ON A BUDGET',
    pick: 'Miyoo Mini Plus',
    reason: 'Full PS1, GBA and SNES libraries for £60. Nothing comes close at the price.',
  },
  {
    label: 'WANT MARIO, ZELDA AND MODERN GAMES',
    pick: 'Nintendo Switch OLED',
    reason: 'No contest. The Switch library is unmatched for modern Nintendo first-party titles.',
  },
  {
    label: 'GIFT FOR A CHILD WHO LIKES GAMING',
    pick: 'Nintendo Switch OLED',
    reason: "Bigger library, better support, easier setup. Safer choice for someone who doesn't know what a ROM is.",
  },
  {
    label: 'ALREADY OWN A SWITCH, WANT MORE RETRO',
    pick: 'Miyoo Mini Plus',
    reason: "Fills the gap your Switch can't — full PS1 and GBA libraries, jacket-pocketable.",
  },
  {
    label: 'GAMING ON THE COMMUTE IN A JACKET POCKET',
    pick: 'Miyoo Mini Plus',
    reason: '121g and genuinely jacket-pocket sized. The Switch needs a bag.',
  },
  {
    label: 'WANT ONLINE MULTIPLAYER OR CO-OP',
    pick: 'Nintendo Switch OLED',
    reason: 'The Miyoo Mini Plus has no online capability at all.',
  },
];

export default function NintendoSwitchVsMiyooMiniPlus() {
  return (
    <>
      <Schema article={article} faq={faq} breadcrumbs={breadcrumbs} />

      <article className="section" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <Link href="/guides">Guides</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>Nintendo Switch vs Miyoo Mini Plus</span>
        </nav>

        <span className="badge">COMPARISON 2026</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '13px', color: '#fff', margin: '12px 0 20px', lineHeight: 1.8 }}>
          NINTENDO SWITCH VS MIYOO MINI PLUS
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#ffd700', marginBottom: '24px' }}>
          #ad — Contains affiliate links. Playhouse.io may earn a commission.
        </p>

        {/* Up-front verdict */}
        <div className="verdict">
          <div className="verdict-label">VERDICT</div>
          <p>
            For pure retro gaming, the Miyoo Mini Plus wins convincingly — it plays the complete PS1, GBA and SNES libraries for around £60. The Nintendo Switch costs five times as much and its retro catalogue is a gated subscription service with an incomplete selection. If you want modern Nintendo games alongside some retro classics, the Switch makes sense. If retro gaming is the actual point, the Miyoo Mini Plus is the answer.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <a href={MIYOO_URL} className="btn btn-yellow" target="_blank" rel="noopener noreferrer sponsored">
              ▶ MIYOO MINI PLUS ON AMAZON
            </a>
            <a href={SWITCH_URL} className="btn" target="_blank" rel="noopener noreferrer sponsored">
              SWITCH OLED ON AMAZON
            </a>
          </div>
        </div>

        {/* Comparison table */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '40px 0 16px', lineHeight: 1.8 }}>
          HEAD TO HEAD
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table className="compare-table" style={{ minWidth: '480px' }}>
            <thead>
              <tr>
                <th>SPEC</th>
                <th>MIYOO MINI PLUS</th>
                <th>SWITCH OLED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td className="winner">~£60</td>
                <td>~£300</td>
              </tr>
              <tr>
                <td>Screen</td>
                <td>3.5&quot; IPS</td>
                <td className="winner">7&quot; OLED</td>
              </tr>
              <tr>
                <td>Games Library</td>
                <td className="winner">Full retro (up to PS1)</td>
                <td>8,000+ modern + curated retro</td>
              </tr>
              <tr>
                <td>Portability</td>
                <td className="winner">Jacket pocket (121g)</td>
                <td>Bag or large pocket (420g)</td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>6–8 hours</td>
                <td>4.5–9 hours</td>
              </tr>
              <tr>
                <td>Online Play</td>
                <td><span className="cross">✕ None</span></td>
                <td><span className="check">✓ Yes (NSO required)</span></td>
              </tr>
              <tr>
                <td>Retro Gaming</td>
                <td><span className="check">✓ Excellent</span></td>
                <td>Partial — curated &amp; subscription</td>
              </tr>
              <tr>
                <td>Modern Games</td>
                <td><span className="cross">✕ No</span></td>
                <td><span className="check">✓ Full library</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why Miyoo */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          WHY CHOOSE THE MIYOO MINI PLUS
        </h2>

        <div className="pros-cons" style={{ marginBottom: '24px' }}>
          <div className="pros">
            <h4>PROS</h4>
            <ul>
              <li>£60 — five times cheaper</li>
              <li>Full PS1, GBA, SNES libraries</li>
              <li>Fits in a jacket pocket</li>
              <li>OnionOS is polished</li>
              <li>6–8 hour battery</li>
            </ul>
          </div>
          <div className="cons">
            <h4>CONS</h4>
            <ul>
              <li>Retro emulation only</li>
              <li>No analogue sticks</li>
              <li>No online play</li>
              <li>Needs community firmware</li>
            </ul>
          </div>
        </div>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The Miyoo Mini Plus exists for one purpose: playing retro games as well as possible for as little money as possible. At around £60, it runs every Game Boy Advance, SNES, Mega Drive, Neo Geo and PlayStation 1 game in existence — not a curated subscription selection, the whole library. OnionOS, the community firmware that most buyers install on day one, gives you a front-end that&apos;s genuinely slick.
        </p>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The pocketability is real. This is a device that actually fits in a jeans pocket — the kind of thing you take on a commute or a flight rather than leaving at home because it&apos;s awkward to carry. At 121g it&apos;s lighter than most phones.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          If you grew up with the SNES, Mega Drive or PS1 and want those games with you in a device that fits in your pocket, the Miyoo Mini Plus is the answer. The Nintendo Switch cannot give you this experience at any price — its retro catalogue is a subscription with an incomplete library, and it tops out at N64 and GBA. No PS1, ever.
        </p>

        {/* Why Switch */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          WHY CHOOSE THE NINTENDO SWITCH OLED
        </h2>

        <div className="pros-cons" style={{ marginBottom: '24px' }}>
          <div className="pros">
            <h4>PROS</h4>
            <ul>
              <li>8,000+ game library</li>
              <li>Mario, Zelda, Metroid, Pokémon</li>
              <li>7&quot; OLED — stunning screen</li>
              <li>Online multiplayer</li>
              <li>TV docking included</li>
            </ul>
          </div>
          <div className="cons">
            <h4>CONS</h4>
            <ul>
              <li>~£300 — five times the price</li>
              <li>Retro library needs NSO sub</li>
              <li>No PS1 or arcade support</li>
              <li>Too large for jacket pockets</li>
            </ul>
          </div>
        </div>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The Nintendo Switch OLED is a different device for a different purpose. If you want Mario Odyssey, Zelda: Breath of the Wild, Metroid Dread, or any of the 8,000+ titles in the Switch library — there is no comparison. The Miyoo Mini Plus cannot do any of that.
        </p>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The 7&quot; OLED screen is genuinely beautiful, and the ability to dock and play on your TV is something you&apos;ll use more than you expect. For families, a Switch is easier to justify — age ratings, parental controls, local multiplayer, and a library wide enough that everyone finds something in it.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          The Switch does include retro gaming through Nintendo Switch Online — but be clear-eyed about what that means. It&apos;s a rotating, incomplete selection from NES, SNES, Game Boy, GBA, N64 and Mega Drive. No PS1, no Neo Geo, no arcade. You&apos;re paying an annual subscription for it on top of £300 hardware, and you still can&apos;t play the game you actually want if it hasn&apos;t been licensed.
        </p>

        {/* Who should buy which */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          WHO SHOULD BUY WHICH
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {useCases.map((row) => (
            <div key={row.label} className="card" style={{ padding: '16px 20px' }}>
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '7px', color: '#aaa8d0', marginBottom: '6px', lineHeight: 1.8 }}>
                {row.label}
              </p>
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', color: '#ffd700', marginBottom: '8px', lineHeight: 1.8 }}>
                ▶ {row.pick.toUpperCase()}
              </p>
              <p className="body-copy">{row.reason}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {faq.map((f) => (
          <div key={f.question} style={{ marginBottom: '20px' }}>
            <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px', color: '#fff', marginBottom: '8px', lineHeight: 1.8 }}>
              {f.question}
            </h3>
            <p className="body-copy">{f.answer}</p>
          </div>
        ))}

        {/* Final CTA */}
        <div style={{ marginTop: '40px', padding: '24px', background: '#0d0620', border: '3px solid #ffd700', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', marginBottom: '12px', lineHeight: 1.8 }}>
            READY TO DECIDE?
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', marginBottom: '20px' }}>
            Both are available on Amazon UK with fast delivery.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={MIYOO_URL} className="btn btn-yellow" target="_blank" rel="noopener noreferrer sponsored">
              ▶ MIYOO MINI PLUS
            </a>
            <a href={SWITCH_URL} className="btn" target="_blank" rel="noopener noreferrer sponsored">
              NINTENDO SWITCH OLED
            </a>
          </div>
        </div>

        {/* Related guide */}
        <div style={{ marginTop: '24px', padding: '20px', background: '#0d0620', border: '3px solid #333060' }}>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0', marginBottom: '12px' }}>
            Also worth reading:
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/guides/best-retro-handheld" className="btn">
              BEST RETRO HANDHELDS 2026
            </Link>
            <Link href="/guides/miyoo-mini-plus-review" className="btn">
              MIYOO MINI PLUS REVIEW
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
