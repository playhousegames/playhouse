import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://playhouse.io';
  const now = new Date();

  const routes = [
    { url: '/', priority: 1.0, freq: 'weekly' },
    { url: '/guides', priority: 0.9, freq: 'weekly' },
    { url: '/guides/best-retro-handheld', priority: 0.9, freq: 'monthly' },
    { url: '/guides/miyoo-mini-plus-review', priority: 0.9, freq: 'monthly' },
    { url: '/guides/best-retro-handheld-under-50', priority: 0.9, freq: 'monthly' },
    { url: '/guides/best-retro-controllers', priority: 0.9, freq: 'monthly' },
    { url: '/guides/best-mini-arcade-machines', priority: 0.9, freq: 'monthly' },
    { url: '/guides/best-retro-handheld-for-kids', priority: 0.9, freq: 'monthly' },
    { url: '/guides/nintendo-switch-vs-miyoo-mini-plus', priority: 0.9, freq: 'monthly' },
    { url: '/handhelds', priority: 0.8, freq: 'weekly' },
    { url: '/arcade', priority: 0.8, freq: 'weekly' },
    { url: '/controllers', priority: 0.8, freq: 'weekly' },
    { url: '/about', priority: 0.5, freq: 'yearly' },
  ] as const;

  return routes.map(({ url, priority, freq }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
