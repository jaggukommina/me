'use client';

import { useNavigation } from '@/contexts/NavigationContext';

// Import all section components directly
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

const contentMap = {
  'about': AboutSection,
  'skills': SkillsSection,
  'experience': ExperienceSection,
  'education': EducationSection,
  'contact': ContactSection,
};

export default function ContentSwitcher() {
  const { activeSection, isDetailsOpen } = useNavigation();

  if (!isDetailsOpen || !activeSection) {
    return null;
  }

  const ContentComponent = contentMap[activeSection as keyof typeof contentMap];
  
  if (!ContentComponent) {
    return <div>Section not found</div>;
  }

  return (
    <div className="details">
      <ContentComponent />
    </div>
  );
}
