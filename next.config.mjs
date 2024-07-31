/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/sub-unit/semampiran",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/sub-unit/semampiran/:path*",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/klaster",
        destination: "/404",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
