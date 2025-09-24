import EducationSection from '@/components/sections/EducationSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education - Jagadeesh Kommina',
  description: 'Educational background of Jagadeesh Kommina including Bachelor of Technologies in Computer Science and Engineering.',
};

export default function EducationPage() {
  return <EducationSection />;
}
