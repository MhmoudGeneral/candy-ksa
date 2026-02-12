/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static Export - generates HTML files
  trailingSlash: false, // Don't use trailing slashes
  images: {
    unoptimized: true, // Required for static export
    domains: ['utopia.sa', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utopia.sa',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

