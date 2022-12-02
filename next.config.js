/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://purkz:18May1992!!@cluster0.zjfasu8.mongodb.net/?retryWrites=true&w=majority"
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.shutterstock.com'],
  },
}