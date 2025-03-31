/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub Pages for username.github.io doesn't need basePath
  basePath: '',
  // No need for assetPrefix for username.github.io sites
  assetPrefix: '',
  // Disable trailing slashes in routes
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    unoptimized: true,
  }
}

module.exports = nextConfig 