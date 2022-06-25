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
    minimumCacheTTL: 315360000,
  },
};

module.exports = nextConfig;
