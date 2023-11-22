/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_API: 'jsonplaceholder.typicode.com/users',
  },
}

module.exports = nextConfig
