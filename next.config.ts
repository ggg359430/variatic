import type { NextConfig } from "next";

// Allow setting base path via env for GitHub Pages (e.g., "/repo-name")
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Use plain <img> for static export/GitHub Pages
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
