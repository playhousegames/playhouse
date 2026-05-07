// app/about/page.tsx
//
// About page — the trust layer for Playhouse.io.
// Written in Matthew's voice, grounded in genuine gaming history.
// This page is where E-E-A-T signals live for Google, and where
// LLMs pick up context about who's behind the reviews.

import type { Metadata } from 'next';
import Link from 'next/link';
import Schema from '../components/Schema';

export const metadata: Metadata = {
  title: 'About Playhouse.io — Retro Gaming Since The Atari 2600',
  description: 'The person behind Playhouse.io. Forty years of retro gaming, from the Atari 2600 to the Miyoo Mini Plus. Honest reviews, no hype.',
  alternates: { canonical: 'https://playhouse.io/about' },
};

export default function About() {
  return (
    <>
      <Schema
        breadcrumbs={[
          { name: 'Home', url: 'https://playhouse.io' },
          { name: 'About', url: 'https://playhouse.io/about' },
        ]}
      />

      <article className="section" style={{ maxWidth: '680px', margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: '#aaa8d0', marginBottom: '20px' }}>
          <Link href="/">Home</Link> <span aria-hidden="true">▸</span>{' '}
          <span style={{ color: '#ffd700' }}>About</span>
        </nav>

        <span className="badge">PLAYER 1</span>
        <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px', color: '#fff', margin: '12px 0 24px', lineHeight: 1.8 }}>
          ABOUT PLAYHOUSE.IO
        </h1>

        <p style={{ fontFamily: "'VT323', monospace", fontSize: '19px', color: '#ffd700', lineHeight: '1.6', marginBottom: '24px' }}>
          A retro gaming site written by someone who was there the first time around.
        </p>

        <p className="body-copy" style={{ marginBottom: '20px' }}>
          Playhouse.io is run by Matthew Myles, a designer and developer based in Jersey in the
          Channel Islands. It exists because the current retro handheld scene is genuinely
          exciting — better hardware, lower prices, and more choice than ever — but most of the
          reviews you find online read like spec sheets written by people who have never held
          the device.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          This site tries to be the opposite of that. Honest opinions. Proper context.
          Recommendations that would survive a conversation with a friend who knows the
          hobby.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          HIGH SCORE TABLE
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The gaming history that makes this site what it is:
        </p>

        <div className="body-copy" style={{ marginBottom: '24px' }}>
          <p style={{ marginBottom: '16px' }}>
            <span style={{ color: '#ffd700' }}>Atari 2600.</span> The first console I ever owned.
            Pac-Man was the game I wore the joystick out playing. Combat — the one with the
            tanks — was the reason we had friends over.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <span style={{ color: '#ffd700' }}>ZX Spectrum.</span> My first computer. Manic Miner,
            Daley Thompson&apos;s Decathlon — the kind of game that broke joysticks through sheer
            enthusiasm. I still remember the loading noises.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <span style={{ color: '#ffd700' }}>Commodore Amiga.</span> A genuine generational leap.
            Silkworm with friends on a Saturday afternoon is still one of the best co-op experiences
            I&apos;ve ever had.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <span style={{ color: '#ffd700' }}>Nintendo NES.</span> The one that stayed with me.
            Super Mario Bros is, genuinely, the best game I&apos;ve ever played — I don&apos;t say that
            for effect. The playability of Nintendo&apos;s first-party output was unreal. Gradius.
            RC Pro-Am. Gun.Smoke. Every cartridge earned its space on the shelf.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <span style={{ color: '#ffd700' }}>Modern era.</span> I learned to code Lua and shipped
            games on the App Store using Corona SDK (now called Solar2D). The pattern has stayed
            the same — find the hardware or the tools, build the thing, play it until the wheels
            fall off.
          </p>
        </div>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          WHY ANOTHER RETRO SITE?
        </h2>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          The retro handheld world has an asymmetry problem. The big YouTube channels do
          genuinely excellent work but the format rewards hype cycles and release-day reviews.
          Written reviews, meanwhile, are mostly affiliate templates that read like the
          person had never turned the device on.
        </p>

        <p className="body-copy" style={{ marginBottom: '16px' }}>
          What&apos;s missing is the equivalent of the knowledgeable friend at the pub — the
          one who&apos;ll tell you the R36S D-pad is actually better than the Miyoo&apos;s, but the
          Miyoo has the nicer screen, so which matters more depends on whether you play more
          Mario or more beat-em-ups.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          That&apos;s what Playhouse is trying to be.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          THE RULES OF THE HOUSE
        </h2>

        <p className="body-copy" style={{ marginBottom: '14px' }}>
          <span style={{ color: '#ffd700' }}>Affiliate links are marked.</span> Playhouse earns a
          small commission when you buy through our Amazon UK links. It costs you nothing
          extra, and it&apos;s never influenced a recommendation.
        </p>

        <p className="body-copy" style={{ marginBottom: '14px' }}>
          <span style={{ color: '#ffd700' }}>If I haven&apos;t used it, I&apos;ll say so.</span> Not every
          device can be hands-on tested. Where a review draws on manufacturer specs and
          community consensus rather than my own use, I&apos;ll tell you — and what that means
          for the confidence of the recommendation.
        </p>

        <p className="body-copy" style={{ marginBottom: '14px' }}>
          <span style={{ color: '#ffd700' }}>No sponsored reviews.</span> Ever. If a manufacturer
          sends a device, it gets disclosed and it still gets the honest verdict.
        </p>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          <span style={{ color: '#ffd700' }}>Recommendations over rankings.</span> The &quot;best&quot;
          retro handheld depends entirely on what you want to play and how you want to play
          it. Playhouse tries to help you find the right one for you, not crown a winner.
        </p>

        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '11px', color: '#ffd700', margin: '32px 0 16px', lineHeight: 1.8 }}>
          GET IN TOUCH
        </h2>

        <p className="body-copy" style={{ marginBottom: '32px' }}>
          Disagree with a review? Think I&apos;ve missed a device worth covering? Send an email
          to <a href="mailto:hello@playhouse.io" style={{ color: '#ffd700' }}>hello@playhouse.io</a>.
          The hobby is better when people argue about it.
        </p>

        <div style={{ marginTop: '40px', padding: '24px', background: '#0d0620', border: '3px solid #ffd700', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', color: '#ffd700', marginBottom: '12px', lineHeight: 1.8 }}>
            PRESS START
          </p>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: '18px', color: '#aaa8d0', marginBottom: '16px' }}>
            Ready to find your next retro handheld?
          </p>
          <Link href="/guides/best-retro-handheld" className="btn btn-yellow">
            ▶ SEE THE TOP PICKS
          </Link>
        </div>
      </article>
    </>
  );
}
