import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};

export default nextConfig;
