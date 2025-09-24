'use client';

import { usePathname, useRouter } from 'next/navigation';

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

  const handleNavClick = (path: string) => {
    if (pathname === path) {
      // If clicking on active tab, go back to home
      router.push('/');
    } else {
      router.push(path);
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleNavClick(item.path)}
          className={pathname === item.path ? 'active' : ''}
          name={item.name}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </>
  );
}
