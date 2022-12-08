/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"],
  images: {
    domains: ["commons.wikimedia.org"],
  },
};

module.exports = nextConfig;
