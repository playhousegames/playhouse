// app/robots.ts
//
// Next.js App Router automatically serves this at /robots.txt.
// Allow everything crawlable, block internal/Next.js paths,
// and point to the sitemap.

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
        ],
      },
      // Explicitly welcome AI crawlers — this is the GEO move.
      // If you later want to gate any of these, you can do it here.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: 'https://playhouse.io/sitemap.xml',
    host: 'https://playhouse.io',
  };
}
