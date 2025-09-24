export interface Experience {
  company: string;
  role: string;
  location: string;
  website: string;
  from: string;
  to: string | null;
  work: string[];
}

export interface Education {
  title: string;
  branch: string;
  start: string | null;
  end: string;
  college: string;
  website: string;
  place: string;
  cgpa: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string[];
  profileImage: string;
  copyright: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    hackerrank: string;
  };
}
