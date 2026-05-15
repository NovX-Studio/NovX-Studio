import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui.aceternity.com" },
      { protocol: "https", hostname: "prod.spline.design" },
    ],
  },
};

export default nextConfig;
