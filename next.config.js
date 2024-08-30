// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // Modify the config to include SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
