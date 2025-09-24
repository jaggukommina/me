# GitHub Pages Deployment Guide

This portfolio is now configured for deployment on GitHub Pages using static export.

## 🚀 Quick Deployment Steps

### 1. Push to GitHub Repository

First, ensure your code is in a GitHub repository:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site on every push to main branch

**Important:** Make sure your repository is public, or you have GitHub Pro/Team for private repository Pages deployment.

### 3. Access Your Site

Your portfolio will be available at:
- `https://jaggukommina.github.io/me/`
- Or your custom domain if configured

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the static site
npm run deploy

# The 'out' directory contains your static site
# Upload the contents of 'out' directory to your web server
```

## 📋 Configuration Changes Made

### Next.js Configuration (`next.config.ts`)
- ✅ Added `output: 'export'` for static site generation
- ✅ Enabled `trailingSlash: true` for GitHub Pages compatibility
- ✅ Set `images.unoptimized: true` for static export
- ✅ Removed custom headers (not supported in static export)

### Package.json Scripts
- ✅ Updated build scripts for static export
- ✅ Added `deploy` script that includes `.nojekyll` file creation
- ✅ Added `serve` script for local testing

### GitHub Actions Workflow
- ✅ Automated build and deployment on push to main branch
- ✅ Includes linting and type checking
- ✅ Proper permissions for GitHub Pages deployment
- ✅ Concurrent deployment protection
- ✅ Manual workflow dispatch option
- ✅ Automatic .nojekyll file creation

### Static Export Compatibility
- ✅ Added `dynamic = 'force-static'` to sitemap
- ✅ No API routes (perfect for static export)
- ✅ All pages are statically generated

## 🧪 Local Testing

Test your static build locally:

```bash
# Build the static site
npm run export

# Serve the static files locally
npm run serve

# Open http://localhost:3000 to test
```

## 🔧 Troubleshooting

### Common Issues:

1. **404 on page refresh**: GitHub Pages serves static files, ensure `trailingSlash: true` is set
2. **Images not loading**: Check that `images.unoptimized: true` is configured
3. **Build fails**: Ensure no dynamic routes or API routes are used

### Environment Variables

For production deployment, set your base URL:
```bash
NEXT_PUBLIC_BASE_URL=https://jaggukommina.github.io/me
```

## 📊 Performance

The static build generates:
- ✅ All pages pre-rendered as static HTML
- ✅ Optimized bundle size (~102kB first load JS)
- ✅ SEO-friendly with sitemap and robots.txt
- ✅ Fast loading with static assets

## 🔗 Useful Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run export       # Static export for GitHub Pages
npm run deploy       # Build + add .nojekyll
npm run serve        # Serve static build locally
npm run lint         # Run linting
npm run type-check   # TypeScript type checking
```

Your portfolio is now ready for GitHub Pages! 🎉
