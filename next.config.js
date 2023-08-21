/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: "/",
            destination: "/access-reviews",
            statusCode: 301
        }]
    }
}

module.exports = nextConfig
