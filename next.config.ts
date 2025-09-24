import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization for static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/**',
      },
      {
        protocol: 'https',
        hostname: 'icons.getbootstrap.com',
        port: '',
        pathname: '/assets/icons/**',
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  // Bundle analyzer (only in development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: { plugins: unknown[] }) => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true,
          })
        );
      }
      return config;
    },
  }),
};

export default nextConfig;
