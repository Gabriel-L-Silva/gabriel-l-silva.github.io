/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Ensure this matches your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/gabriel-l-silva.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gabriel-l-silva.github.io/' : '',
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
  },
}

module.exports = nextConfig 