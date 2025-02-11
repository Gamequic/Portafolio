/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages no soporta optimización de imágenes de Next.js
  },
  basePath: "/Portafolio", // Reemplaza con el nombre de tu repositorio
};
};

export default nextConfig;
