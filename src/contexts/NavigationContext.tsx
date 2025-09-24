'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type NavigationState = {
  activeSection: string | null;
  isDetailsOpen: boolean;
};

type NavigationContextType = {
  activeSection: string | null;
  isDetailsOpen: boolean;
  isInitialized: boolean;
  openSection: (section: string) => void;
  closeDetails: () => void;
  toggleSection: (section: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Initialize state correctly from the start to prevent FOUC
  const getInitialState = (): NavigationState => {
    // Normalize pathname to handle base path
    let normalizedPath = pathname.replace(/^\/me/, '') || '/';
    
    // Remove trailing slash except for root
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1);
    }

    if (normalizedPath === '/') {
      return {
        activeSection: null,
        isDetailsOpen: false,
      };
    } else {
      const sectionName = normalizedPath.replace('/', '');
      const validSections = ['about', 'skills', 'experience', 'education', 'contact'];
      
      if (validSections.includes(sectionName)) {
        return {
          activeSection: sectionName,
          isDetailsOpen: true,
        };
      }
    }

    return {
      activeSection: null,
      isDetailsOpen: false,
    };
  };

  const [state, setState] = useState<NavigationState>(getInitialState);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize state based on current route
  useEffect(() => {
    const updateStateFromPath = () => {
      // Get current path from window.location for more accurate reading
      let normalizedPath = window.location.pathname.replace(/^\/me/, '') || '/';
      
      // Remove trailing slash except for root
      if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
        normalizedPath = normalizedPath.slice(0, -1);
      }

      if (normalizedPath === '/') {
        // Root path - close details
        setState({
          activeSection: null,
          isDetailsOpen: false,
        });
      } else {
        // Non-root path - extract section name and open details
        const sectionName = normalizedPath.replace('/', '');
        const validSections = ['about', 'skills', 'experience', 'education', 'contact'];
        
        if (validSections.includes(sectionName)) {
          setState({
            activeSection: sectionName,
            isDetailsOpen: true,
          });
        }
      }
      
      // Mark as initialized after first update
      setIsInitialized(true);
    };

    // Initial state setup
    updateStateFromPath();

    // Listen for popstate events (back/forward navigation)
    const handlePopState = () => {
      updateStateFromPath();
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname]);

  const openSection = useCallback((section: string) => {
    setState({
      activeSection: section,
      isDetailsOpen: true,
    });
  }, []);

  const closeDetails = useCallback(() => {
    setState({
      activeSection: null,
      isDetailsOpen: false,
    });
  }, []);

  const toggleSection = useCallback((section: string) => {
    setState(prevState => {
      if (prevState.activeSection === section && prevState.isDetailsOpen) {
        // Same section clicked - close details
        return {
          activeSection: null,
          isDetailsOpen: false,
        };
      } else {
        // Different section or details closed - open new section
        return {
          activeSection: section,
          isDetailsOpen: true,
        };
      }
    });
  }, []);

  const value: NavigationContextType = {
    activeSection: state.activeSection,
    isDetailsOpen: state.isDetailsOpen,
    isInitialized,
    openSection,
    closeDetails,
    toggleSection,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
