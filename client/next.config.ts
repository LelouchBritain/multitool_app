import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    WEATHER_API_URL: process.env.WEATHER_API_URL
  }
};

export default nextConfig;
