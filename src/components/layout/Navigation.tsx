'use client';

import { useNavigation } from '@/contexts/NavigationContext';
import { useRouter } from 'next/navigation';

const navItems = [
  { name: 'about', label: 'About me' },
  { name: 'skills', label: 'Skills' },
  { name: 'experience', label: 'Experience' },
  { name: 'education', label: 'Education' },
  { name: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const { activeSection } = useNavigation();
  const router = useRouter();

  // Debug logging removed

  const handleNavClick = (sectionName: string) => {
    if (activeSection === sectionName) {
      // Same section clicked - go to home (close details)
      router.push('/');
    } else {
      // Different section - navigate to that section
      router.push(`/${sectionName}`);
    }
  };

  const isActive = (sectionName: string) => {
    return activeSection === sectionName;
  };

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleNavClick(item.name)}
          className={isActive(item.name) ? 'active' : ''}
          name={item.name}
          aria-pressed={isActive(item.name)}
          aria-label={`Navigate to ${item.label}${isActive(item.name) ? ' (currently active, click to close)' : ''}`}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </>
  );
}
