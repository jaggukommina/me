import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Jagadeesh Kommina',
  description: 'Get in touch with Jagadeesh Kommina. Contact information including phone, email, LinkedIn, and GitHub profiles.',
};

export default function ContactPage() {
  return <ContactSection />;
}
