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
    // Normalize pathname - remove base path if present
    const normalizedPath = pathname.replace(/^\/me/, '') || '/';
    setCurrentPath(normalizedPath);
  }, [pathname]);

  const handleNavClick = (path: string) => {
    if (currentPath === path) {
      // If clicking on active tab, go back to home
      router.push('/');
    } else {
      router.push(path);
    }
  };

  const isActive = (path: string) => {
    return currentPath === path;
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
        >
          <span>{item.label}</span>
        </button>
      ))}
    </>
  );
}
