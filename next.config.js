const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['blog.kakaocdn.net'],
  },
})

module.exports = nextConfig
