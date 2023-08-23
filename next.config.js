// @ts-check
const { env } = require('./src/server/env');

/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [{
            source: "/",
            destination: "/access-reviews",
            statusCode: 301
        }]
    },
    publicRuntimeConfig: {
        NODE_ENV: env.NODE_ENV
    }
}

module.exports = nextConfig
