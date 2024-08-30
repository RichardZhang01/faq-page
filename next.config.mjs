/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/faq-page",
  assetPrefix: "/faq-page",
};

export default nextConfig;
