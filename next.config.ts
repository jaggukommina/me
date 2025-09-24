import type { NextConfig } from "next";

// Determine if we're building for GitHub Pages or local development
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages ? '/me' : '';

const nextConfig: NextConfig = {
  // GitHub Pages configuration
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_IS_GITHUB_PAGES: isGitHubPages.toString(),
  },
  
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
