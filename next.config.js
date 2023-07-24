/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import "./src/scss/all.scss";
    `,
  },
};

module.exports = nextConfig;
