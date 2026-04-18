import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://playhouse.io', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://playhouse.io/handhelds', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://playhouse.io/arcade', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://playhouse.io/controllers', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://playhouse.io/guides', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://playhouse.io/guides/best-retro-handheld', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://playhouse.io/guides/miyoo-mini-plus-review', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://playhouse.io/guides/best-retro-handheld-under-50', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://playhouse.io/guides/best-retro-controllers', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://playhouse.io/guides/best-mini-arcade-machines', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://playhouse.io/guides/best-retro-handheld-for-kids', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
