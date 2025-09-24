'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LOADING_MESSAGES = [
  'Initializing portfolio...',
  'Loading components...',
  'Compiling assets...',
  'Setting up navigation...',
  'Optimizing experience...',
  'Almost ready...',
  'Welcome to my portfolio!'
];

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    const checkReadyState = (progressInt: NodeJS.Timeout, messageInt: NodeJS.Timeout) => {
      const isDocumentReady = document.readyState === 'complete';
      const areFontsReady = document.fonts ? document.fonts.status === 'loaded' : true;
      
      if (isDocumentReady && areFontsReady && progress >= 100) {
        setIsCompleting(true);
        clearInterval(progressInt);
        clearInterval(messageInt);
        
        setTimeout(() => {
          onLoadingComplete();
        }, 400);
        return true;
      }
      return false;
    };

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 2, 100);
        
        if (newProgress >= 100) {
          checkReadyState(progressInterval, messageInterval);
        }
        
        return newProgress;
      });
    }, 40);

    // Message cycling
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % LOADING_MESSAGES.length);
    }, 300);

    const handleReadyStateChange = () => {
      if (progress >= 100) {
        checkReadyState(progressInterval, messageInterval);
      }
    };

    document.addEventListener('readystatechange', handleReadyStateChange);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      document.removeEventListener('readystatechange', handleReadyStateChange);
    };
  }, [progress, onLoadingComplete]);

  return (
    <div className={`terminal-loading ${isCompleting ? 'fade-out' : ''}`}>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>
          <div className="terminal-title">jaggu@portfolio:~$</div>
        </div>
        
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">jaggu@portfolio:~$</span>
            <span className="command">npm run dev</span>
          </div>
          
          <div className="loading-content">
            <div className="loading-message">
              <span className="cursor">&gt;</span> {LOADING_MESSAGES[messageIndex]}
            </div>
            
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="progress-text">[{progress}%]</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="loading-footer">
        <p>© jaggu kommina - 2023</p>
      </div>
    </div>
  );
}
