import type { Metadata } from 'next';
import Link from 'next/link';
import Schema, { type FaqItem, type BreadcrumbItem, type ArticleMeta } from '../../components/Schema';

export const metadata: Metadata = {
  title: 'What Can the Miyoo Mini Plus Run? Full Emulation Guide (2026)',
  description: 'Exactly what the Miyoo Mini Plus emulates well, what struggles, and what to avoid. PS1, N64, GBA, Dreamcast, PSP — honest performance tiers with no hype.',
  alternates: { canonical: 'https://playhouse.io/guides/miyoo-mini-plus-emulation-guide' },
  openGraph: {
    title: 'Miyoo Mini Plus Emulation Guide (2026)',
    description: 'PS1, N64, GBA, Dreamcast, PSP — exactly what runs and what does not.',
    url: 'https://playhouse.io/guides/miyoo-mini-plus-emulation-guide',
    type: 'article',
    images: ['https://playhouse.io/products/miyoo-mini-plus.jpg'],
  },
  keywords: [
    'what can miyoo mini plus run',
    'miyoo mini plus emulation',
    'miyoo mini plus n64',
    'miyoo mini plus dreamcast',
    'miyoo mini plus psp',
    'miyoo mini plus ps1',
    'miyoo mini plus emulation performance',
  ],
};

const article: ArticleMeta = {
  headline: 'What Can the Miyoo Mini Plus Run? Full Emulation Performance Guide (2026)',
  description:
    'Honest emulation performance tiers for the Miyoo Mini Plus — which consoles run perfectly, which struggle, and which to avoid entirely.',
  author: 'Matthew Myles',
  datePublished: '2026-05-07',
  image: 'https://playhouse.io/products/miyoo-mini-plus.jpg',
  url: 'https://playhouse.io/guides/miyoo-mini-plus-emulation-guide',
};

const faq: FaqItem[] = [
  {
    question: 'Can the Miyoo Mini Plus run Pokémon games?',
    answer:
      'Yes — all of them up to the GBA era without any issues. Pokémon Red, Blue, Yellow, Gold, Silver, Crystal (Game Boy Color) and FireRed, LeafGreen, Emerald, Ruby, Sapphire (GBA) all run at full speed with no configuration needed. The DS Pokémon games (Diamond, Pearl, HeartGold, etc.) are not supported — the Miyoo Mini Plus cannot run Nintendo DS.',
  },
  {
    question: 'Can the Miyoo Mini Plus run Mario 64?',
    answer:
      'Yes, but with caveats. Super Mario 64 runs on the Mupen64Plus-Next core at close to full speed most of the time, but expect occasional frame drops in certain areas — particularly the snow and water levels. It is playable, not perfect. If Mario 64 is a priority game for you, a more powerful device like the RG35XX H or RG40XXV handles it more reliably.',
  },
  {
    question: 'What are the best PS1 settings on the Miyoo Mini Plus?',
    answer:
      'Use the PCSX ReARMed core via OnionOS. Set the renderer to software (not hardware OpenGL), resolution at 1x native, and disable all enhancement filters. These settings give you the most stable performance across the library. For specific problem games, reducing the clock speed of the CPU can help with audio sync issues.',
  },
  {
    question: 'Does the Miyoo Mini Plus get hot during emulation?',
    answer:
      'Warm, not hot. During GBA and SNES emulation the shell stays cool to the touch. PS1 and N64 emulation causes the back of the device to become noticeably warm after 30-40 minutes, but it never reaches uncomfortable temperatures in normal use. There are no reported thermal throttling issues with stock or OnionOS firmware.',
  },
  {
    question: 'What microSD card should I use with the Miyoo Mini Plus?',
    answer:
      'Use a name-brand card — Samsung, SanDisk or Lexar — rated at UHS-I (Class 10 / U1 or faster). Fake or no-name cards are the single most common cause of corrupt saves, failed installs and random crashes on the Miyoo Mini Plus. 64GB is enough for a full GBA, SNES and PS1 library. 128GB gives comfortable headroom.',
  },
];

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://playhouse.io' },
  { name: 'Guides', url: 'https://playhouse.io/guides' },
  { name: 'Miyoo Mini Plus Emulation Guide', url: 'https://playhouse.io/guides/miyoo-mini-plus-emulation-guide' },
];

const MIYOO_URL = 'https://amzn.to/4mE11wG';

type TierRow = { console: string; examples: string };

const tierPerfect: TierRow[] = [
  { console: 'Game Boy / GBC', examples: 'Pokémon, Zelda, Tetris, Kirby' },
  { console: 'Game Boy Advance', examples: 'Pokémon, Castlevania, Final Fight, Metroid' },
  { console: 'NES / Famicom', examples: 'Super Mario Bros, Contra, Mega Man, Gradius' },
  { console: 'SNES / Super Famicom', examples: 'Super Mario World, Chrono Trigger, Street Fighter II' },
  { console: 'Mega Drive / Genesis', examples: 'Sonic, Streets of Rage, Gunstar Heroes' },
  { console: 'Master System', examples: 'Alex Kidd, Sonic, Wonder Boy' },
  { console: 'Neo Geo', examples: 'Metal Slug, King of Fighters, Samurai Shodown' },
  { console: 'Arcade (FBNeo / MAME2003)', examples: 'Pac-Man, TMNT, 1943, Double Dragon' },
];

const tierGood: TierRow[] = [
  { console: 'PlayStation 1', examples: 'Most games — see PS1 section below for exceptions' },
  { console: 'N64 (light games)', examples: 'Super Mario 64, Mario Kart 64, GoldenEye (with tweaks)' },
];

const tierHitMiss: TierRow[] = [
  { console: 'N64 (demanding games)', examples: 'Majora\'s Mask, Banjo-Kazooie, Donkey Kong 64' },
  { console: 'Dreamcast (light games)', examples: 'Sonic Adventure, Crazy Taxi, Power Stone' },
];

const tierAvoid: TierRow[] = [
  { console: 'PSP', examples: 'Framerate too low to be enjoyable on most titles' },
  { console: 'Dreamcast (most games)', examples: 'Hardware too weak for reliable full-speed emulation' },
  { console: 'Nintendo DS', examples: 'Not supported — no working core for this hardware' },
  { console: 'Saturn', examples: 'No viable emulator at this hardware level' },
];

export default function MiyooMiniPlusEmulationGuide() {
  return (
    <>
      <Schema article={article} faq={faq} breadcrumbs={breadcrumbs} />

      <article className="section" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <Link href="/guides">Guides</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>Miyoo Mini Plus Emulation Guide</span>
        </nav>

        <span className="badge">EMULATION GUIDE 2026</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px', color: '#fff', margin: '12px 0 20px', lineHeight: 1.8 }}>
          WHAT CAN THE MIYOO MINI PLUS RUN?
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#ffd700', marginBottom: '24px' }}>
          #ad — Contains affiliate links. Playhouse.io may earn a commission.
        </p>

        {/* Up-front verdict */}
        <div className="verdict">
          <div className="verdict-label">THE SHORT ANSWER</div>
          <p>
            Everything up to PS1 runs excellently. PS1 runs well for most of the library. N64 runs light games at acceptable speed. Dreamcast is hit and miss. PSP is not worth attempting. Here&apos;s exactly what to expect — console by console, no hype.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href={MIYOO_URL} className="btn btn-yellow" target="_blank" rel="noopener noreferrer sponsored">
              ▶ BUY THE MIYOO MINI PLUS
            </a>
          </div>
        </div>

        {/* Performance tiers table */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '40px 0 16px', lineHeight: 1.8 }}>
          EMULATION PERFORMANCE TIERS
        </h2>

        {/* Runs perfectly */}
        <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#39ff14', margin: '0 0 8px', lineHeight: 1.8 }}>
          RUNS PERFECTLY
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="compare-table" style={{ minWidth: '420px' }}>
            <thead>
              <tr><th>CONSOLE</th><th>EXAMPLE GAMES</th></tr>
            </thead>
            <tbody>
              {tierPerfect.map((row) => (
                <tr key={row.console}>
                  <td><span className="check">{row.console}</span></td>
                  <td>{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Runs well */}
        <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#ffd700', margin: '0 0 8px', lineHeight: 1.8 }}>
          RUNS WELL
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="compare-table" style={{ minWidth: '420px' }}>
            <thead>
              <tr><th>CONSOLE</th><th>NOTES</th></tr>
            </thead>
            <tbody>
              {tierGood.map((row) => (
                <tr key={row.console}>
                  <td className="winner">{row.console}</td>
                  <td>{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hit and miss */}
        <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#ff6b00', margin: '0 0 8px', lineHeight: 1.8 }}>
          HIT AND MISS
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="compare-table" style={{ minWidth: '420px' }}>
            <thead>
              <tr><th>CONSOLE</th><th>NOTES</th></tr>
            </thead>
            <tbody>
              {tierHitMiss.map((row) => (
                <tr key={row.console}>
                  <td style={{ color: '#ff6b00' }}>{row.console}</td>
                  <td>{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Not recommended */}
        <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#d4001a', margin: '0 0 8px', lineHeight: 1.8 }}>
          NOT RECOMMENDED
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
          <table className="compare-table" style={{ minWidth: '420px' }}>
            <thead>
              <tr><th>CONSOLE</th><th>REASON</th></tr>
            </thead>
            <tbody>
              {tierAvoid.map((row) => (
                <tr key={row.console}>
                  <td><span className="cross">{row.console}</span></td>
                  <td>{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PS1 */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          PS1 PERFORMANCE
        </h2>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          PlayStation 1 is the performance ceiling of the Miyoo Mini Plus, and for the majority of the library it handles it well. Use the PCSX ReARMed core via OnionOS with the software renderer set to 1x native resolution and all enhancement filters off. This is not the place for upscaling — the goal is accuracy and stability.
        </p>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          Games that run reliably at full speed include: Final Fantasy VII, VIII and IX, Crash Bandicoot 1–3, Spyro 1–3, Metal Gear Solid, Castlevania: Symphony of the Night, Tekken 3, Gran Turismo 1 and 2, Resident Evil 1 and 2, Tony Hawk&apos;s Pro Skater 1 and 2, Wipeout, Ridge Racer and most 2D fighters.
        </p>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          Games that are problematic: Tomb Raider III and IV have audio sync issues on some versions. Driver has frame drops during open-world sections. Castlevania: Chronicles can stutter during busy scenes. These are edge cases rather than the norm — the PS1 library is large and the vast majority of it runs without needing any per-game tuning.
        </p>
        <p className="body-copy" style={{ marginBottom: '32px' }}>
          Audio is the most common failure mode on borderline games — audio desync before video framerate drops. If a game sounds off, try reducing the emulation clock speed by 10–15% in the core options. This often resolves audio issues without meaningfully affecting playability.
        </p>

        {/* N64 */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          N64 — WHAT TO HONESTLY EXPECT
        </h2>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          N64 emulation on the Miyoo Mini Plus is available but limited. The Mupen64Plus-Next core is your best option via OnionOS. Light games run at or near full speed — Super Mario 64, Mario Kart 64, GoldenEye (with frame skip enabled), Star Fox 64 and F-Zero X are all playable with some tweaking.
        </p>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          Demanding N64 games are a different story. Majora&apos;s Mask, Banjo-Kazooie, Donkey Kong 64 and Conker&apos;s Bad Fur Day all run below full speed — typically 70–85% — with noticeable slowdowns in complex areas. If these are your target games, the Miyoo Mini Plus is the wrong device. The RG35XX H, RG40XXV or Anbernic RG Cube handle demanding N64 titles significantly better.
        </p>
        <p className="body-copy" style={{ marginBottom: '32px' }}>
          Recommended N64 settings: use the GLideN64 video plugin, set the resolution to 240p, enable frame skip (1), and disable high-resolution textures. Accept that you&apos;re playing at native N64 resolution — this is not the device for N64 enhancement mods.
        </p>

        {/* Battery life */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          BATTERY LIFE BY EMULATOR
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table className="compare-table" style={{ minWidth: '360px' }}>
            <thead>
              <tr><th>EMULATOR</th><th>BATTERY LIFE</th><th>NOTES</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>GBA / SNES / NES</td>
                <td className="winner">7–8 hours</td>
                <td>Screen at 50% brightness</td>
              </tr>
              <tr>
                <td>Mega Drive / Neo Geo</td>
                <td className="winner">7–8 hours</td>
                <td>Similar load to GBA</td>
              </tr>
              <tr>
                <td>PlayStation 1</td>
                <td>5–6 hours</td>
                <td>CPU load noticeably higher</td>
              </tr>
              <tr>
                <td>N64</td>
                <td>4–5 hours</td>
                <td>Device runs warm; frame skip increases drain</td>
              </tr>
              <tr>
                <td>Dreamcast</td>
                <td>3–4 hours</td>
                <td>Maximum CPU load; not recommended anyway</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="body-copy" style={{ marginBottom: '32px' }}>
          All figures assume screen brightness at 50% and Wi-Fi off (the base Miyoo Mini Plus has no Wi-Fi anyway). The 3000mAh battery charges from flat in about 2 hours via USB-C.
        </p>

        {/* OnionOS emulators */}
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          BEST EMULATORS TO INSTALL ON ONIONOS
        </h2>
        <p className="body-copy" style={{ marginBottom: '16px' }}>
          OnionOS ships with most cores pre-configured, but knowing which core to use for each system saves a lot of trial and error.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          {[
            { system: 'GBA', core: 'mGBA', why: 'More accurate than gpSP and handles edge-case games like Mother 3 correctly. Slight battery hit vs gpSP but worth it.' },
            { system: 'SNES', core: 'Snes9x 2005 Plus', why: 'Best balance of compatibility and performance. Snes9x 2010 is also fine. Avoid bsnes-mercury — too heavy.' },
            { system: 'PS1', core: 'PCSX ReARMed', why: 'The only practical option. Use software renderer, 1x native, filters off. Hardware renderer causes graphical glitches on many titles.' },
            { system: 'N64', core: 'Mupen64Plus-Next', why: 'Only viable N64 core. Set GLideN64 video plugin, 240p resolution, frame skip on. Manage expectations.' },
            { system: 'NES', core: 'FCEUmm or Nestopia', why: 'Both are excellent. FCEUmm has slightly better compatibility; Nestopia has slightly better audio accuracy. Either is fine.' },
            { system: 'Mega Drive', core: 'Genesis Plus GX', why: 'The definitive Mega Drive emulator. Perfect compatibility, accurate sound. No configuration needed.' },
            { system: 'Arcade', core: 'FBNeo', why: 'Preferred over MAME2003 for most arcade titles — better accuracy, wider compatibility, actively maintained.' },
            { system: 'Neo Geo', core: 'FBNeo', why: 'Handles both AES and MVS ROMs. Pair with a proper Neo Geo BIOS for best results.' },
          ].map((row) => (
            <div key={row.system} className="card" style={{ padding: '14px 18px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline', marginBottom: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px', color: '#ffd700', whiteSpace: 'nowrap' }}>{row.system}</span>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '7px', color: '#39ff14' }}>▶ {row.core}</span>
              </div>
              <p className="body-copy">{row.why}</p>
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

        {/* Related links */}
        <div style={{ marginTop: '32px', padding: '20px', background: '#0d0620', border: '3px solid #333060' }}>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '17px', color: '#aaa8d0', marginBottom: '12px' }}>
            Also worth reading:
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/guides/miyoo-mini-plus-review" className="btn">
              MIYOO MINI PLUS REVIEW
            </Link>
            <Link href="/guides/best-retro-handheld" className="btn">
              BEST RETRO HANDHELDS 2026
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ marginTop: '24px', padding: '24px', background: '#0d0620', border: '3px solid #ffd700', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', marginBottom: '12px', lineHeight: 1.8 }}>
            READY TO BUY?
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', marginBottom: '20px' }}>
            The Miyoo Mini Plus is available on Amazon UK with fast delivery.
          </p>
          <a href={MIYOO_URL} className="btn btn-yellow" target="_blank" rel="noopener noreferrer sponsored">
            ▶ BUY THE MIYOO MINI PLUS ON AMAZON
          </a>
        </div>
      </article>
    </>
  );
}
