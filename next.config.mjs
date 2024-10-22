/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            '/',
            '*',
            'cdn.prod.website-files.com',
        ]
    },
    webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
