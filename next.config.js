/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "vitals.vercel-insights.com"],
  },
};

module.exports = nextConfig;
