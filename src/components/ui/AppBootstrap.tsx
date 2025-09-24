'use client';

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

  // Show loading screen while app is bootstrapping OR navigation context is not ready
  if (isLoading || !isReady || !isInitialized) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Add app-loaded class to body for smooth transitions
  if (typeof document !== 'undefined') {
    // Use a small delay to ensure DOM is ready
    setTimeout(() => {
      document.body.classList.add('app-loaded');
    }, 50);
  }

  // Show main app content once loading is complete AND navigation is initialized
  return <PortfolioLayout>{children}</PortfolioLayout>;
}
