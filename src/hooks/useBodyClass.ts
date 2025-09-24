'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    
    // Remove existing classes
    body.classList.remove('closed', 'opened');
    
    // Add appropriate class based on route
    if (pathname === '/') {
      body.classList.add('closed');
    } else {
      body.classList.add('opened');
    }
    
    return () => {
      // Cleanup on unmount
      body.classList.remove('closed', 'opened');
    };
  }, [pathname]);
}
