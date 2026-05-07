import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      // Individual review pages don't exist yet — redirect to the roundup that covers them.
      {
        source: '/guides/rg35xx-review',
        destination: '/guides/best-retro-handheld-under-50',
        permanent: false,
      },
      {
        source: '/guides/r36s-review',
        destination: '/guides/best-retro-handheld-under-50',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
