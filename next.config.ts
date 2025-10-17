import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BREVO_API_KEY: process.env.BREVO_API_KEY,
  },
};

export default nextConfig;
