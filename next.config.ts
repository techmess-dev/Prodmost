import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
      {
        protocol: "https",
        hostname: "www.digitalocean.com"
      },
      {
        protocol: "http",
        hostname: "127.0.0.1:8000"
      }
    ],
  },
  devIndicators: false,
};

export default nextConfig;
