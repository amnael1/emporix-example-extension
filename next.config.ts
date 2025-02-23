import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    transpilePackages: ["md-ext"],
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    }
};

export default nextConfig;
