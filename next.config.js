/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://shambala-front-mike31860.vercel.app/:path*",
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com", "img.freepik.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
