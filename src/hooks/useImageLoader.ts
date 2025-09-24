'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseImageLoaderOptions {
  fallbackSrc?: string;
  timeout?: number;
}

interface UseImageLoaderReturn {
  imageSrc: string;
  isLoading: boolean;
  hasError: boolean;
  retry: () => void;
}

export const useImageLoader = (
  src: string,
  options: UseImageLoaderOptions = {}
): UseImageLoaderReturn => {
  const { fallbackSrc = '/person-icon.svg', timeout = 10000 } = options;
  
  const [imageSrc, setImageSrc] = useState<string>(fallbackSrc);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const loadImage = useCallback(async (imageUrl: string) => {
    try {
      setIsLoading(true);
      setHasError(false);
      
      const img = new Image();
      const timeoutId = setTimeout(() => {
        throw new Error('Image load timeout');
      }, timeout);
      
      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          clearTimeout(timeoutId);
          resolve();
        };
        img.onerror = () => {
          clearTimeout(timeoutId);
          reject(new Error('Failed to load image'));
        };
        img.src = imageUrl;
      });
      
      setImageSrc(imageUrl);
    } catch (error) {
      console.warn('Failed to load image:', error);
      setImageSrc(fallbackSrc);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [fallbackSrc, timeout]);

  const retry = useCallback(() => {
    if (src) {
      loadImage(src);
    }
  }, [src, loadImage]);

  useEffect(() => {
    if (src) {
      loadImage(src);
    } else {
      setIsLoading(false);
    }
  }, [src, loadImage]);

  return { imageSrc, isLoading, hasError, retry };
};
