/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

// Use CommonJS syntax to export
module.exports = config;

