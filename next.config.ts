import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Use plain <img> for static export/GitHub Pages
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for custom domain deployment
  trailingSlash: true,
  eslint: {
    // Avoid failing builds due to lint; CI can run lint separately
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://pancakeswap.finance https://*.pancakeswap.finance; frame-src 'self' https://pancakeswap.finance https://*.pancakeswap.finance;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
