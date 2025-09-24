'use client';

import { usePathname } from 'next/navigation';
import ProfileCard from '@/components/sections/ProfileCard';
import Navigation from '@/components/layout/Navigation';
import { useBodyClass } from '@/hooks/useBodyClass';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Apply body classes based on current route
  useBodyClass();

  return (
    <>
      <div className="card">
        <ProfileCard />
      </div>
      <div className="explore">
        <Navigation />
      </div>
      {!isHomePage && (
        <div className="details">
          {children}
        </div>
      )}
    </>
  );
}
