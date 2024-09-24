/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Activa el minificador SWC para mejor performance
  images: {
    domains: ["example.com"], // Configuración de dominio para imágenes
  },
};

export default nextConfig;
