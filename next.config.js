/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/public/home',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  }
}

module.exports = nextConfig
