import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/ci_cd_practice",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
