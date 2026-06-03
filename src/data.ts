import { Project, SkillCategory, EducationItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "nebula",
    title: "Blog App",
    description: "A feature-rich personal publishing ecosystem featuring modern Markdown integration, state caching, and responsive presentation interfaces.",
    tag: "HTML5 / CSS3 / JavaScript / Local Storage API",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuQ5CmmgWI1V5kjG7jaT7NmZ1G_wiGdZVSI5lilotCnIc_ywlxBE9exsVHf3yOHhFEvemCxw7RCIfYMKTlvp1kctztpdU-UluSGvmAejcsbyqr2QPXzGo4BAxFiOBq6IogqQpgX66cXY2g6bUB_alddBcBBt7Xpn9IHtA8upeciq7aOsHQaYJIEFk2PO2e0ya_kbt6jQ5h0QozTsz2-qpMX6PF8txYBKitOHlehFRGzPJ8GKSnWA_drzhedx99gdViFjZ0u_U0ug",
    liveUrl: "#demo-nebula",
    codeUrl: "https://github.com/12c02ctsadarshkumar/blog-app"
  },
  {
    id: "cinema",
    title: "Netflix Clone",
    description: "A highly responsive theater grid system showcasing advanced media query layout layouts, custom playback controls, and immersive interactions.",
    tag: "HTML5 / CSS3 / JavaScript",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK9PhbgzB9ADyeHtdCkvqd_c1vl0XFTsQynaOFDY-gScI331SyHpUmRT8wENh3YK1IGcyxJE2dJ608Qzx7xGzbyN5FV6uMZ1TxWTbmBwHEPWnWqGGvQDVF0psN2JZEt3saJ3Mhqe3ODLH8tmmfqlyh1koOOUnYpd6B957Y8BTxuJIXvQ57Qi7xvnS3xtanQ7oXYnxAaaiLPirWNwUOJaMEQrXBcbX0v30yqqlGFmxGuToyXA_sayJBhUM_pNVUoOD4KvzZ1efdrw",
    liveUrl: "#demo-cinema",
    codeUrl: "https://github.com/12c02ctsadarshkumar/netflix-clone"
  },
  {
    id: "synthetix",
    title: "Portfolio Website",
    description: "A customized, lightning-fast digital showroom optimized for full device responsiveness, elegant typography, and intuitive user journeys.",
    tag: "HTML5 / CSS3 / JavaScript",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuADwHdiIxCEKslliXo39FBKVcTxV3TkQR2kERHiNWJxjB8C4n5g59iCHVatyIIMfQnIY5t3XEkzvzJNHYT28p9RzRSvNm9gZsigiH_0qBEVTPSsqu7GYqObN4gqA2Gxpqr_YJ5_CP2_E0icZ21XZA7XF35jEVAUVsSZAkmCVYEP1WzCuxLK-oAtLTsr6ngt5sXwfldx365VqfRxztZX7a-dYDDEdLlzJ9OuPfsfV84igSqXDJlewtPo2h7iYY-a_VbEVWc4WLN5Rw",
    liveUrl: "#demo-synthetix",
    codeUrl: "https://github.com/12c02ctsadarshkumar/portfolio-website"
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
