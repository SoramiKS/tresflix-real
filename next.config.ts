import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.10.134",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
