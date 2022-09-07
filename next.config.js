/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true, // ISSO AQUI
  },
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
