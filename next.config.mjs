/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/Portafolio' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
