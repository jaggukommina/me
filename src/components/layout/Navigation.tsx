'use client';

import { useNavigation } from '@/contexts/NavigationContext';

const navItems = [
  { name: 'about', label: 'About me' },
  { name: 'skills', label: 'Skills' },
  { name: 'experience', label: 'Experience' },
  { name: 'education', label: 'Education' },
  { name: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const { activeSection } = useNavigation();

  // Debug logging removed

  const handleNavClick = (sectionName: string) => {
    // Prevent default browser navigation and use only context
    if (activeSection === sectionName) {
      // Same section clicked - go to home (close details)
      window.history.replaceState(null, '', '/');
    } else {
      // Different section - update URL without navigation
      window.history.replaceState(null, '', `/${sectionName}`);
    }
    
    // Force context update after URL change
    window.dispatchEvent(new PopStateEvent('popstate'));
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
