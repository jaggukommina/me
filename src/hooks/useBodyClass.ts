'use client';

import { useEffect, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

export function useBodyClass() {
  const { isDetailsOpen } = useNavigation();
  const lastStateRef = useRef<boolean | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const body = document.body;
    
    // Skip if state hasn't actually changed (but allow initial setup)
    if (lastStateRef.current === isDetailsOpen && lastStateRef.current !== null) {
      return;
    }
    
    lastStateRef.current = isDetailsOpen;
    
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Determine target class based on details state
    const targetClass = isDetailsOpen ? 'opened' : 'closed';
    const otherClass = targetClass === 'closed' ? 'opened' : 'closed';
    
    // Debounce class changes to prevent rapid switching
    timeoutRef.current = setTimeout(() => {
      const frameId = requestAnimationFrame(() => {
        // Batch DOM operations
        body.classList.remove(otherClass);
        body.classList.add(targetClass);
        
        // Force layout to prevent jitter
        void body.offsetHeight;
      });
      
      return () => {
        cancelAnimationFrame(frameId);
      };
    }, 16); // One frame delay
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isDetailsOpen]);
}
