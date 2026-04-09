import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Desabilitado para permitir API dinâmica de investidores
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
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
