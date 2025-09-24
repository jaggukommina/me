import ExperienceSection from '@/components/sections/ExperienceSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Jagadeesh Kommina',
  description: 'Professional work experience of Jagadeesh Kommina including roles at World Wide Technologies, Factset, GGK Technologies, and TCS.',
};

export default function ExperiencePage() {
  return <ExperienceSection />;
}
