import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/bemutatkozom", destination: "/rolam", permanent: true },
      { source: "/ingyenes-konzultacio", destination: "/szolgaltatasok", permanent: true },
      { source: "/gyakori-kerdesek", destination: "/gyik", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zhythnucniajjvtyhiyu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
