/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    // svg files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      type: "asset/resource",
      generator: {
        filename: "static/audio/[name][ext]",
      },
    });

    return config;
  },
  images: {
    domains: ["example-apis.vercel.app", "carlo-api.vercel.app"],
  },
};

module.exports = nextConfig;
