// next.config.js
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
  output: 'export',  // Génère des fichiers HTML/JS statiques (obligatoire pour GitHub Pages)
  trailingSlash: true,  // Important pour GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/AnasPort' : '',  // Important si ton repo n'est pas "tonuser.github.io"
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AnasPort/' : '',  // Pour les assets
}

export default nextConfig