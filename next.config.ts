import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "235982e7-97df-4217-b0ad-6207409b2ebc.srvstatic.uz",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts'); 
export default withNextIntl(nextConfig);