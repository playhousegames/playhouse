import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://playhouse.io'),
  title: 'Playhouse.io — Retro Gaming Guides & Reviews',
  description: 'Honest buying guides and reviews for retro handhelds, mini arcade machines and classic controllers. Find the best retro gaming gear in 2026.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://playhouse.io',
    siteName: 'Playhouse.io',
    title: 'Playhouse.io — Retro Gaming Guides & Reviews',
    description: 'Honest buying guides and reviews for retro handhelds, mini arcade machines and classic controllers. Find the best retro gaming gear in 2026.',
    images: [
      {
        url: '/products/miyoo-mini-plus.jpg',
        width: 1500,
        height: 1500,
        alt: 'Miyoo Mini Plus retro handheld — Playhouse.io',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playhouse.io — Retro Gaming Guides & Reviews',
    description: 'Honest buying guides and reviews for retro handhelds, mini arcade machines and classic controllers.',
    images: ['/products/miyoo-mini-plus.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `
var onelink_mask = "https://www.amazon.com/";
var onelink_base = "https://www.amazon.co.uk/";
var onelink_us_tag = "jerseyreviews-20";
        ` }} />
        <script src="https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=GB&adInstanceId=seoulfultea-21" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N4L985K6VE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4L985K6VE');
          `}
        </Script>
        <Script
          src="https://geniuslinkcdn.com/snippet.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            // @ts-ignore
            window.Genius?.amazon?.convertLinks(426973, true, "https://buy.geni.us");
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
