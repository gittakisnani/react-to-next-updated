/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cloudpanel-space.fra1.digitaloceanspaces.com', 'api.studiolegalemanzi.eu']
  }
}

module.exports = nextConfig
