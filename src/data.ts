import { Project, Certification, SkillCategory, EducationItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "nebula",
    title: "Blog App",
    description: "A feature-rich personal publishing ecosystem featuring modern Markdown integration, state caching, and responsive presentation interfaces.",
    tag: "HTML5 / CSS3 / JavaScript / Local Storage API",
    imageUrl: "/blog.png",
    liveUrl: "https://writerverse.netlify.app/",
    codeUrl: "https://github.com/Adarsh0234/Blog-App"
  },
  {
    id: "cinema",
    title: "Netflix Clone",
    description: "A highly responsive theater grid system showcasing advanced media query layout layouts, custom playback controls, and immersive interactions.",
    tag: "HTML5 / CSS3 / JavaScript",
    imageUrl: "/CLONE.jpg",
    liveUrl: "https://firstofficialproject.netlify.app",
    codeUrl: "https://github.com/12c02ctsadarshkumar/netflix-clone"
  },
  {
    id: "synthetix",
    title: "Portfolio Website",
    description: "A customized, lightning-fast digital showroom optimized for full device responsiveness, elegant typography, and intuitive user journeys.",
    tag: "HTML5 / CSS3 / JavaScript",
    imageUrl: "/portfolio.png",
    liveUrl: "#demo-synthetix",
    codeUrl: "https://github.com/Adarsh0234/PortProject"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert1",
    title: "Java Programming for Beginners",
    issuer: "Simplilearn",
    startDate: "1/10/2025",
    endDate: "22/10/2025",
    imageUrl: "/Java.jpg",
    certificateUrl: "https://drive.google.com/file/d/1l4Xe8ACyJRM7MGqwmKuOoOjxebZVyCa9/view?usp=drive_link"
  },
  {
    id: "cert2",
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    startDate: "5/10/2025",
    endDate: "30/10/2025",
    imageUrl: "/SQL.jpg",
    certificateUrl: "https://drive.google.com/file/d/13EUICHgBpS48bVy8WZ8KB_zS8BoSeBgd/view?usp=drive_link"
  },
  {
    id: "cert3",
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10X",
    startDate: "31/05/2026",
    endDate: "31/05/2026",
    imageUrl: "/AI.jpg",
    certificateUrl: "https://drive.google.com/file/d/1dEn7VZpp711wqjYFspvvVtXoaVwNTSLA/view?usp=drive_link"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "terminal",
    skills: [
      { name: "Java", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "C", percentage: 70 }
    ]
  },
  {
    id: "web-tech",
    name: "Web Tech",
    icon: "code",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "React.js" }
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: "database",
    skills: [
      { name: "SQL — relational schema design, CRUD queries, data manipulation and retrieval" }
    ]
  },
  {
    id: "infrastructure",
    name: "Tools and Platforms",
    icon: "cloud",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Unix/Linux" },
      { name: "WSL(Windows Subsystems for Linux)" },
      { name: "AI Tools" }
    ]
  },
  {
    id: "cs-core",
    name: "Concepts",
    icon: "cpu",
    skills: [
      { name: "SDLC" },
      { name: "OOP" },
      { name: "Debugging" },
      { name: "Code Review" },
      { name: "Responsive Design" },
      { name: "Version Control" },
      { name: "Agile" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science",
    institution: "Techno Main Salt Lake, Kolkata",
    timeline: "2021 — 2025",
    gradeType: "Current CGPA",
    gradeValue: "7.25",
    description: "Specializing in Advanced Algorithmic Design and Distributed Systems. Lead organizer of the University Hackathon '23 and Core Member of the Engineering Society."
  },
  {
    id: "class12",
    degree: "Senior Secondary (Class XII)",
    institution: "Church School, Jamshedpur",
    timeline: "2020 — 2021",
    gradeType: "Final Grade",
    gradeValue: "7.3",
    description: "Science Stream (PCM with Computer Applications). Won Physics Olympiad Silver Medal."
  },
  {
    id: "class10",
    degree: "Secondary (Class X)",
    institution: "Church School, Jamshedpur",
    timeline: "2018 — 2019",
    gradeType: "Final Grade",
    gradeValue: "7.1",
    description: "Consistently topped computer applications classes. Strong foundational mathematics background."
  }
];
