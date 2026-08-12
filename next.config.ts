import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.18.55', 'localhost:3000', '127.0.0.1:3000', '192.168.*.*'],
};

export default nextConfig;
