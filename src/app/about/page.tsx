import AboutSection from '@/components/sections/AboutSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Jagadeesh Kommina',
  description: 'Learn more about Jagadeesh Kommina, a seasoned .NET Developer with over 9 years of experience in the IT industry.',
};

export default function AboutPage() {
  return <AboutSection />;
}
