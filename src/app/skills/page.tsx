import SkillsSection from '@/components/sections/SkillsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills - Jagadeesh Kommina',
  description: 'Explore the technical skills and expertise of Jagadeesh Kommina including programming languages, frameworks, and tools.',
};

export default function SkillsPage() {
  return <SkillsSection />;
}
