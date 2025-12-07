import { NextConfig } from "next";

/**
 * Next.js configuration
 * - Pages Router enabled (no App Router)
 * - SWC React compiler (default)
 */
const nextConfig: NextConfig = {
  // You can put other Next.js settings here
  reactStrictMode: true, // recommended for catching potential issues
};

export default nextConfig;
