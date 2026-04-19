import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ... your existing config ...

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
