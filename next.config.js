const { config } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 1000 * 60 * 60 * 24 * 30,
  },
};

module.exports = nextConfig;
