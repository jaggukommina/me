'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function useBodyClass() {
  const pathname = usePathname();
  const lastPathRef = useRef<string>('');

  useEffect(() => {
    const body = document.body;
    
    // Normalize pathname - remove base path if present
    const normalizedPath = pathname.replace(/^\/me/, '') || '/';
    
    // Skip if path hasn't actually changed
    if (lastPathRef.current === normalizedPath) {
      return;
    }
    
    lastPathRef.current = normalizedPath;
    
    // Determine target class
    const targetClass = normalizedPath === '/' ? 'closed' : 'opened';
    const otherClass = targetClass === 'closed' ? 'opened' : 'closed';
    
    // Only change if different to avoid unnecessary DOM manipulation
    if (!body.classList.contains(targetClass)) {
      // Use requestAnimationFrame for smoother transitions
      const frameId = requestAnimationFrame(() => {
        body.classList.remove(otherClass);
        body.classList.add(targetClass);
      });
      
      return () => {
        cancelAnimationFrame(frameId);
      };
    }
  }, [pathname]);
}
