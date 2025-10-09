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
};

export default nextConfig;
