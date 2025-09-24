'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Import all section components directly
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

const contentMap = {
  '/about': AboutSection,
  '/skills': SkillsSection,
  '/experience': ExperienceSection,
  '/education': EducationSection,
  '/contact': ContactSection,
};

export default function ContentSwitcher() {
  const pathname = usePathname();
  const [currentContent, setCurrentContent] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Normalize pathname
    const normalizedPath = pathname.replace(/^\/me/, '') || '/';
    
    if (normalizedPath === '/') {
      // Home page - no content
      setIsVisible(false);
      setCurrentContent('');
    } else {
      // Show content for other pages
      setCurrentContent(normalizedPath);
      setIsVisible(true);
    }
  }, [pathname]);

  if (!isVisible || !currentContent) {
    return null;
  }

  const ContentComponent = contentMap[currentContent as keyof typeof contentMap];
  
  if (!ContentComponent) {
    return <div>Page not found</div>;
  }

  return (
    <div className="details">
      <ContentComponent />
    </div>
  );
}
