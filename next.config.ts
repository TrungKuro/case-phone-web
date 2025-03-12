import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "j7ieebcwkc.ufs.sh",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
