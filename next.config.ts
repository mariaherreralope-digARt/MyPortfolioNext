import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BREVO_API_KEY: process.env.BREVO_API_KEY,
  },
};

export default nextConfig;
