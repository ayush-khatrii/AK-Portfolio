import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-af34f3541dfc46e5a8aa21faf70e7de6.r2.dev",
      },
    ],
  },
};

export default nextConfig;
