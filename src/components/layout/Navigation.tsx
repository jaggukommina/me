'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'about', label: 'About me', path: '/about' },
  { name: 'skills', label: 'Skills', path: '/skills' },
  { name: 'experience', label: 'Experience', path: '/experience' },
  { name: 'education', label: 'Education', path: '/education' },
  { name: 'contact', label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // More robust pathname normalization for both dev and production
    let normalizedPath = pathname;
    
    // Remove base path if present (for production GitHub Pages)
    if (normalizedPath.startsWith('/me')) {
      normalizedPath = normalizedPath.replace(/^\/me/, '');
    }
    
    // Ensure we have a path, default to '/' if empty
    if (!normalizedPath || normalizedPath === '') {
      normalizedPath = '/';
    }
    
    // Remove trailing slash except for root
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1);
    }
    
    setCurrentPath(normalizedPath);
    
    // Debug logging for production troubleshooting
    if (typeof window !== 'undefined') {
      console.log('Navigation Debug:', {
        originalPathname: pathname,
        normalizedPath,
        location: window.location.pathname,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH
      });
    }
  }, [pathname]);

  const handleNavClick = (path: string) => {
    if (isActive(path)) {
      // If clicking on active tab, go back to home
      router.push('/');
    } else {
      router.push(path);
    }
  };

  const isActive = (path: string) => {
    // Normalize both paths for comparison (handle trailing slashes)
    const normalizePath = (p: string) => {
      let normalized = p.replace(/^\/me/, ''); // Remove base path
      if (normalized === '') normalized = '/'; // Default to root
      if (normalized !== '/' && normalized.endsWith('/')) {
        normalized = normalized.slice(0, -1); // Remove trailing slash except for root
      }
      return normalized;
    };
    
    const normalizedCurrentPath = normalizePath(currentPath);
    const normalizedTargetPath = normalizePath(path);
    
    // Check if paths match
    const isCurrentPath = normalizedCurrentPath === normalizedTargetPath;
    
    // Additional check using window.location for production
    let isWindowPath = false;
    if (typeof window !== 'undefined') {
      const windowPath = normalizePath(window.location.pathname);
      isWindowPath = windowPath === normalizedTargetPath;
    }
    
    return isCurrentPath || isWindowPath;
  };

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleNavClick(item.path)}
          className={isActive(item.path) ? 'active' : ''}
          name={item.name}
          aria-pressed={isActive(item.path)}
          aria-label={`Navigate to ${item.label}${isActive(item.path) ? ' (currently active, click to return home)' : ''}`}
          title={`Path: ${item.path}, Current: ${currentPath}, Active: ${isActive(item.path)}`}
        >
          <span>{item.label}{isActive(item.path) ? ' ●' : ''}</span>
        </button>
      ))}
    </>
  );
}
