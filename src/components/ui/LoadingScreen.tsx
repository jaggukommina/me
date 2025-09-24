'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    const checkReadyState = () => {
      // Check if document is ready and fonts are loaded
      const isDocumentReady = document.readyState === 'complete';
      const areFontsReady = document.fonts ? document.fonts.status === 'loaded' : true;
      
      if (isDocumentReady && areFontsReady && progress >= 100) {
        setIsCompleting(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 800); // Time for fade-out animation
        return true;
      }
      return false;
    };

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 3, 100);
        
        // Check if we can complete loading
        if (newProgress >= 100) {
          checkReadyState();
        }
        
        return newProgress;
      });
    }, 60); // Smooth progress over ~2 seconds

    // Also listen for document ready state changes
    const handleReadyStateChange = () => {
      if (progress >= 100) {
        checkReadyState();
      }
    };

    document.addEventListener('readystatechange', handleReadyStateChange);

    return () => {
      clearInterval(progressInterval);
      document.removeEventListener('readystatechange', handleReadyStateChange);
    };
  }, [progress, onLoadingComplete]);

  return (
    <div className={`simple-loading ${isCompleting ? 'fade-out' : ''}`}>
      <div className="progress-number">{progress}</div>
      <div className="loading-footer">
        <p>© jaggu kommina - 2023</p>
      </div>
    </div>
  );
}
