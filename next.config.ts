import type { NextConfig } from "next";

// Only use basePath for production builds (GitHub Pages)
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/variatic" : "";

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
