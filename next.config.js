/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/AnasPort' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AnasPort/' : '',
}

module.exports = nextConfig; // CommonJS au lieu de export default