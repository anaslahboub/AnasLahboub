

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remplacez 'AnasLahboub' par le nom exact de votre repository
  basePath: process.env.NODE_ENV === 'production' ? '/AnasLahboub' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AnasLahboub/' : '',
}

module.exports = nextConfig;