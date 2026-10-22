import { Project, Certification, SkillCategory, EducationItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "nebula",
    title: "Blog App",
    description: "1. Developed a CRUD-based Blog Application using HTML, CSS, and JavaScript, enabling users to create, edit, and manage blog posts. | Implemented Local Storage API to persist user data, allowing seamless access to blog content across sessions. | Designed a responsive and user-friendly interface, ensuring optimal viewing experience on various devices.",
    tag: "HTML5 / CSS3 / JavaScript / Local Storage API",
    imageUrl: "/blog.png",
    liveUrl: "https://writerverse.netlify.app/",
    codeUrl: "https://github.com/Adarsh0234/Blog-App"
  },
  {
    id: "ECommerce",
    title: "HunarHub-A Local Artisan and Skill Marketplace",
    description: "HunarHub is a full-stack marketplace connecting local artisans, micro-entrepreneurs, and small businesses with customers.It enables businesses to showcase products, offer services, manage orders, and handle customer requests. Built with React, Node.js, Express.js, and PostgreSQL, it features JWT authentication, email OTP verification, product reviews, and service booking.",
    tag: "",
    imageUrl: "/hunarhub.png",
    liveUrl: "https://hunarhubb.netlify.app/",
    codeUrl: "https://github.com/Adarsh0234/Hunar-Hub"
  },
  {
    id: "funding",
    title: "Society Fund Management System",
    description: "Developed and deployed a full-stack Society Fund Transparency Dashboard to manage residential society finances, including maintenance dues, income, expenses, and fund allocation. Implemented role-based access control for Admin, Treasurer, and Resident users, with interactive dashboards, financial summaries, and charts. Built REST APIs and a relational database for financial record management. **Tech Stack:** React.js, Vite, Node.js, Express.js, PostgreSQL, Git, GitHub, Netlify, and Railway.",
    tag: "",
    imageUrl: "/society.png",
    liveUrl: "https://societyfunds.netlify.app/",
    codeUrl: "https://github.com/Adarsh0234/Society-Fund"
  },
  {
    id: "synthetix",
    title: "Portfolio Website",
    description: "A customized, lightning-fast digital showroom optimized for full device responsiveness, elegant typography, and intuitive user journeys.",
    tag: "HTML5 / CSS3 / JavaScript",
    imageUrl: "/portfolio.png",
    liveUrl: "#demo-synthetix",
    codeUrl: "https://github.com/Adarsh0234/PortProject"
  },
  {
    id: "cinema",
    title: "Netflix Clone",
    description: "A highly responsive theater grid system showcasing advanced media query layout layouts, custom playback controls, and immersive interactions.",
    tag: "HTML5 / CSS3 / JavaScript",
    imageUrl: "/CLONE.jpg",
    liveUrl: "https://firstofficialproject.netlify.app",
    codeUrl: "https://github.com/12c02ctsadarshkumar/netflix-clone"
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
  },
  {
    id: "cert4",
    title: "JavaScript for Beginners",
    issuer: "Simplilearn",
    startDate: "11/07/2026",
    endDate: "05/08/2026",
    imageUrl: "/JS.jpg",
    certificateUrl: "https://drive.google.com/file/d/1_DeDUHphR1-qR2ytCsh-r9HYb-oihPpP/view?usp=drive_link"
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
    degree: "B.Tech in Electronics and Communication Engineering",
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
