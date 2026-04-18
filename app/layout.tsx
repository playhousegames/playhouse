import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Playhouse.io — Retro Gaming Guides & Reviews',
  description: 'Honest buying guides and reviews for retro handhelds, mini arcade machines and classic controllers. Find the best retro gaming gear in 2026.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
