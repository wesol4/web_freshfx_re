// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [], // e.g. 'images.example.com'
        formats: ['image/avif', 'image/webp'],
    },
    env: {
        // Add public environment variables here
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
};

module.exports = nextConfig;