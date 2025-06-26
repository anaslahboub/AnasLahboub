

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true
//   },
//   // Remplacez 'AnasLahboub' par le nom exact de votre repository
//   basePath: process.env.NODE_ENV === 'production' ? '/AnasLahboub' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/AnasLahboub/' : '',
// }

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'AnasLahboub' // Remplacez par le nom exact de votre repo

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Ajoutez cette configuration pour les images
    loader: 'custom',
    loaderFile: './imageLoader.js'
  }
}

module.exports = nextConfig