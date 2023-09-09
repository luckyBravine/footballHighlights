/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.scorebat.com',
      },
    ],
  },
};

module.exports = nextConfig;
