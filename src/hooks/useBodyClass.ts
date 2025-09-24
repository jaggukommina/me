'use client';

import { useEffect, useRef } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

export function useBodyClass() {
  const { isDetailsOpen } = useNavigation();
  const lastStateRef = useRef<boolean | null>(null);

  useEffect(() => {
    const body = document.body;
    
    // Skip if state hasn't actually changed (but allow initial setup)
    if (lastStateRef.current === isDetailsOpen && lastStateRef.current !== null) {
      return;
    }
    
    lastStateRef.current = isDetailsOpen;
    
    // Determine target class based on details state
    const targetClass = isDetailsOpen ? 'opened' : 'closed';
    const otherClass = targetClass === 'closed' ? 'opened' : 'closed';
    
    // Always apply the class to ensure proper initialization
    const frameId = requestAnimationFrame(() => {
      body.classList.remove(otherClass);
      body.classList.add(targetClass);
    });
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isDetailsOpen]);
}
