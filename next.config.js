/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auslink-limousines.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
