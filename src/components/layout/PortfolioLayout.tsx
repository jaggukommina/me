'use client';

import ContentSwitcher from '@/components/layout/ContentSwitcher';
import Navigation from '@/components/layout/Navigation';
import ProfileCard from '@/components/sections/ProfileCard';
import { memo } from 'react';
import { useBodyClass } from '@/hooks/useBodyClass';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

// Memoize components to prevent unnecessary re-renders
const MemoizedProfileCard = memo(ProfileCard);
const MemoizedNavigation = memo(Navigation);
const MemoizedContentSwitcher = memo(ContentSwitcher);

export default function PortfolioLayout({ }: PortfolioLayoutProps) {
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
      <MemoizedContentSwitcher />
    </>
  );
}
