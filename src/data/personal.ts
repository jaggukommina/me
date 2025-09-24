import { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Jagadeesh Kommina",
  title: "&lt;<b>j</b>agadeesh <b>k</b>ommina/&gt;",
  description: [
    "A software engineer by profession, humble by nature.",
    "An enthusiastic, determined and resilient when creating solutions or solving problems.",
    "Explore to know more about me.",
    "Thank you."
  ],
  profileImage: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/person-icon.svg`,
  copyright: "© jaggu kommina - 2023"
};
