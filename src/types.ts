export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  liveUrl: string;
  codeUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  certificateUrl: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: { name: string; percentage?: number }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeline: string;
  gradeType: string;
  gradeValue: string;
  description: string;
}
