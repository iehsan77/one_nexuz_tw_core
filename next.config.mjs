/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["my-lib"],
  },
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: false,
  swcMinify: true,
  compress: true,
  // output: "export",
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
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  images: {
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
    domains: ["emarion.directfromdevelopers.ae"],
    unoptimized: true,
  },
};

export default nextConfig;
