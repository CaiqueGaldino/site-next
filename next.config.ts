import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.fitnessexclusive.com.br',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    qualities: [75, 90, 100],
    unoptimized: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
