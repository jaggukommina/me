'use client';

import { usePathname } from 'next/navigation';
import { memo } from 'react';
import ProfileCard from '@/components/sections/ProfileCard';
import Navigation from '@/components/layout/Navigation';
import { useBodyClass } from '@/hooks/useBodyClass';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

// Memoize the ProfileCard to prevent unnecessary re-renders
const MemoizedProfileCard = memo(ProfileCard);

// Memoize the Navigation to prevent unnecessary re-renders
const MemoizedNavigation = memo(Navigation);

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const pathname = usePathname();
  // Normalize pathname - remove base path if present
  const normalizedPath = pathname.replace(/^\/me/, '') || '/';
  const isHomePage = normalizedPath === '/';
  
  // Apply body classes based on current route
  useBodyClass();

  return (
    <>
      <div className="card">
        <MemoizedProfileCard />
      </div>
      <div className="explore">
        <MemoizedNavigation />
      </div>
      {!isHomePage && (
        <div className="details">
          {children}
        </div>
      )}
    </>
  );
}
