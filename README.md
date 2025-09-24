# Me - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience, skills, and projects.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with React 19, TypeScript, and Tailwind CSS
- **Performance Optimized**: Image optimization, lazy loading, and code splitting
- **Responsive Design**: Mobile-first approach with CSS animations
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Error Handling**: Comprehensive error boundaries
- **Production Ready**: Security headers and build optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Deployment**: GitHub Pages ready with static export
- **Performance**: Built-in Next.js optimizations

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── education/         # Education page
│   ├── experience/        # Experience page
│   ├── skills/            # Skills page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.txt         # SEO robots file
├── components/            # React components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # UI components
├── data/                  # Static data
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
└── utils/                 # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=https://yoursite.com
# Add other variables as needed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm run start
```

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size

## 🔧 Configuration

### Environment Variables

See `env.example` for all available environment variables.

### Customization

1. **Personal Data**: Update files in `src/data/` with your information
2. **Styling**: Modify `src/app/globals.css` for theme changes
3. **Components**: Customize components in `src/components/`

## 🚀 Deployment

### GitHub Pages (Recommended)

This portfolio is optimized for GitHub Pages deployment:

1. **Push to GitHub Repository**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Select **GitHub Actions** as source
   - The workflow will automatically deploy your site

3. **Access Your Site**:
   - `https://jaggukommina.github.io/me/`

### Manual Static Deployment

For other static hosting services:

```bash
npm run deploy  # Builds and prepares static files
# Upload contents of 'out/' directory to your hosting service
```

### Local Testing

Test your static build locally:

```bash
npm run export  # Build static site
npm run serve   # Serve locally at http://localhost:3000
```

📖 **Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions.

### Other Platforms

The project exports static files and can be deployed to Vercel, Netlify, or any static hosting service.

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Images**: WebP/AVIF support with lazy loading

## 🔒 Security

- Security headers configured
- XSS protection enabled
- Content Security Policy ready
- No sensitive data exposure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: jagadeesh@example.com
- **LinkedIn**: [Jagadeesh Kommina](https://linkedin.com/in/jagadeeshkommina)
- **GitHub**: [jaggukommina](https://github.com/jaggukommina)
