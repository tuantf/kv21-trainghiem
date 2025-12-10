import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://instant-storage.s3.amazonaws.com")],
  },
};

export default nextConfig;
