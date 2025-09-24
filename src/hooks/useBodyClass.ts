'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    
    // Normalize pathname - remove base path if present
    const normalizedPath = pathname.replace(/^\/me/, '') || '/';
    
    // Determine target class
    const targetClass = normalizedPath === '/' ? 'closed' : 'opened';
    const otherClass = targetClass === 'closed' ? 'opened' : 'closed';
    
    // Only change if different to avoid unnecessary DOM manipulation
    if (!body.classList.contains(targetClass)) {
      // Add a small delay to prevent flash during navigation
      const timeoutId = setTimeout(() => {
        body.classList.remove(otherClass);
        body.classList.add(targetClass);
      }, 10); // Small delay to let the route change settle
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
    
    return () => {
      // Cleanup on unmount - only if component is actually unmounting
      // Don't remove classes during normal navigation
    };
  }, [pathname]);
}
