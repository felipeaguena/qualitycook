import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qualitycook.com.br',
      },
    ],
  },
};

export default nextConfig;
