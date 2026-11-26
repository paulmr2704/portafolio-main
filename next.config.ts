import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/cv.pdf",
        destination: "/docs/cv.pdf",
        permanent: true,
      },
      {
        source: "/BOOTCAMP-EMPLEABILIDAD.pdf",
        destination: "/certs/BOOTCAMP-EMPLEABILIDAD.pdf",
        permanent: true,
      },
      {
        source: "/cert-:rest",
        destination: "/certs/cert-:rest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
