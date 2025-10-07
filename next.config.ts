import type { NextConfig } from "next";

// Hardcode basePath for GitHub Pages to ensure asset URLs are prefixed correctly
const basePath = "/variatic";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Use plain <img> for static export/GitHub Pages
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  eslint: {
    // Avoid failing builds due to lint; CI can run lint separately
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
