/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nodeflair.com",
        port: "",
        pathname: "/companies/**",
      },
    ],
  },
};

module.exports = nextConfig;
