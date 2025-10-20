// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["my-lib"],
    serverActions: {
      bodySizeLimit: "200mb",
    },
  },

  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, immutable",
          },
        ],
      },
    ];
  },
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: false,
  },

  images: {
    minimumCacheTTL: 60,
    domains: ["jocdn.sfo3.cdn.digitaloceanspaces.com"],
    unoptimized: true,
  },
};

export default nextConfig;
