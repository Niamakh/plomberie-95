import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig
