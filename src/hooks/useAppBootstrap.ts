'use client';

import { useState, useEffect } from 'react';

interface BootstrapState {
  isLoading: boolean;
  isReady: boolean;
  handleLoadingComplete: () => void;
}

export function useAppBootstrap(): BootstrapState {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const waitForDocumentReady = (): Promise<void> => {
      if (document.readyState === 'complete') {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        const handler = () => {
          if (document.readyState === 'complete') {
            document.removeEventListener('readystatechange', handler);
            resolve();
          }
        };
        document.addEventListener('readystatechange', handler);
      });
    };

    const waitForFonts = async (): Promise<void> => {
      if (!('fonts' in document)) return;
      
      try {
        await document.fonts.ready;
      } catch {
        // Gracefully handle font loading failures
      }
    };

    const initializeApp = async () => {
      await Promise.all([
        waitForDocumentReady(),
        waitForFonts(),
        new Promise(resolve => setTimeout(resolve, 50)) // Hydration buffer
      ]);

      if (isMounted) {
        setIsReady(true);
      }
    };

    initializeApp();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    isReady,
    handleLoadingComplete
  };
}
