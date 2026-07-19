// ================================
// Project
// ================================

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

// ================================
// Service
// ================================

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ================================
// Skill
// ================================

export interface SkillCategory {
  title: string;
  skills: string[];
}

// ================================
// Experience
// ================================

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

// ================================
// Education
// ================================

export interface Education {
  degree: string;
  college: string;
  year: string;
}

// ================================
// Certification
// ================================

export interface Certification {
  title: string;
  organization: string;
  year: string;
}

// ================================
// Social
// ================================

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}