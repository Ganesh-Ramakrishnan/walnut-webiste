import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "walnutai.ai" }],
        destination: "https://www.walnutai.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
