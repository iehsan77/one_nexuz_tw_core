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

  skipProxyUrlNormalize: true,
  skipTrailingSlashRedirect: true,

  reactStrictMode: false,
  compress: true,
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  images: {
    minimumCacheTTL: 60,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jocdn.sfo3.cdn.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
