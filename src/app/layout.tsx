import type { Metadata } from 'next';
import PortfolioLayout from '@/components/layout/PortfolioLayout';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { NavigationProvider } from '@/contexts/NavigationContext';
import './globals.css';

export const metadata: Metadata = {
  title: "Portfolio - Jagadeesh Kommina",
  description: "A software engineer by profession, humble by nature. Explore my portfolio to know more about my experience, skills, and projects.",
  keywords: ["Jagadeesh Kommina", "Software Engineer", ".NET Developer", "C#", "Full Stack Developer"],
  authors: [{ name: "Jagadeesh Kommina" }],
  creator: "Jagadeesh Kommina",
  openGraph: {
    title: "Portfolio - Jagadeesh Kommina",
    description: "A software engineer by profession, humble by nature.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="https://icons.getbootstrap.com/assets/icons/person-fill.svg" />
      </head>
      <body>
        <ErrorBoundary>
          <NavigationProvider>
            <PortfolioLayout>{children}</PortfolioLayout>
          </NavigationProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
