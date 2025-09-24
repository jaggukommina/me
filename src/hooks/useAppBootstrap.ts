'use client';

import { useState, useEffect } from 'react';

export function useAppBootstrap() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      // Wait for DOM to be fully ready
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          const handler = () => {
            if (document.readyState === 'complete') {
              document.removeEventListener('readystatechange', handler);
              resolve(void 0);
            }
          };
          document.addEventListener('readystatechange', handler);
        });
      }

      // Wait for fonts to load if available
      if ('fonts' in document) {
        try {
          await document.fonts.ready;
        } catch {
          // Continue if font loading fails
        }
      }

      // Additional delay to ensure React hydration is complete
      await new Promise(resolve => setTimeout(resolve, 200));

      setIsReady(true);
    };

    initializeApp();
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
