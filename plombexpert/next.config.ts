import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      // Ancienne URL Herblay → nouvelle URL canonique
      {
        source: "/Plombier-Herblay",
        destination: "/Plombier-sur-Herblay",
        permanent: true, // 301
      },
    ]
  },
}

export default nextConfig
