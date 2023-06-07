/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  base-uri 'none';
  connect-src 'self';
`;

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: true,
  compiler: {
    // Remove console.log statements in production build
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy.replace(/\n/g, ''),
        },
      ],
    },
  ],
});

module.exports = nextConfig;
