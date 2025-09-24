'use client';

import { useEffect } from 'react';
import { useAppBootstrap } from '@/hooks/useAppBootstrap';
import { useNavigation } from '@/contexts/NavigationContext';
import LoadingScreen from './LoadingScreen';
import PortfolioLayout from '@/components/layout/PortfolioLayout';

interface AppBootstrapProps {
  children: React.ReactNode;
}

export default function AppBootstrap({ children }: AppBootstrapProps) {
  const { isLoading, isReady, handleLoadingComplete } = useAppBootstrap();
  const { isInitialized } = useNavigation();

  const isAppReady = !isLoading && isReady && isInitialized;

  // Apply app-loaded class when ready
  useEffect(() => {
    if (isAppReady) {
      const timer = setTimeout(() => {
        document.body.classList.add('app-loaded');
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <PortfolioLayout>{children}</PortfolioLayout>;
}
