export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  screenshot?: string;
  tags: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  pinned?: boolean;
  draft?: boolean;
  status: "completed" | "in-progress" | "archived";
  year: number;
};

export const projects: Project[] = [
  {
    id: "ai-finance-app",
    title: "AI Finance Tracker",
    description:
      "A smart personal finance application powered by AI that categorizes expenses, predicts spending patterns, and provides actionable financial insights.",
    longDescription:
      "Built with Next.js and integrated with OpenAI's API, this app automatically categorizes transactions, generates monthly reports, and sends smart budget alerts. Features include multi-currency support, receipt scanning, and exportable reports.",
    screenshot: "https://picsum.photos/seed/ai-finance/1200/630",
    tags: ["AI", "Finance", "Full Stack"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/naufalfadhil/ai-finance",
    demo: "https://finance.naufalfadhil.my.id",
    featured: false,
    pinned: true,
    draft: true,
    status: "in-progress",
    year: 2024,
  },
  {
    id: "cli-db-generator",
    title: "CLI Database Generator",
    description:
      "A command-line tool that generates database schemas, migrations, and seed data from natural language descriptions.",
    longDescription:
      "Written in Go, this CLI tool interprets plain-English schema descriptions and generates SQL migrations, ORM models (GORM, Eloquent), and realistic seed data. Supports PostgreSQL, MySQL, and SQLite.",
    screenshot: "https://picsum.photos/seed/cli-db/1200/630",
    tags: ["CLI", "DevTools", "Go"],
    tech: ["Go", "PostgreSQL", "MySQL", "SQLite", "Cobra CLI"],
    github: "https://github.com/naufalfadhil/dbgen",
    featured: false,
    pinned: false,
    draft: true,
    status: "in-progress",
    year: 2024,
  },
  {
    id: "personal-ai-agent",
    title: "Personal AI Agent",
    description:
      "A self-hosted AI agent that manages tasks, answers questions from your personal knowledge base, and automates repetitive workflows.",
    screenshot: "https://picsum.photos/seed/ai-agent/1200/630",
    tags: ["AI", "Automation", "Full Stack"],
    tech: ["Python", "FastAPI", "LangChain", "Redis", "Next.js"],
    github: "https://github.com/naufalfadhil/ai-agent",
    featured: false,
    pinned: false,
    draft: true,
    status: "in-progress",
    year: 2024,
  },
  {
    id: "portfolio-site-v1",
    title: "Portfolio Website v1.0",
    description:
      "Previous personal portfolio website built with Next.js, showcasing projects, skills, and experience.",
    tags: ["Personal", "Portfolio"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/naufalfadhil/portfolio",
    demo: "https://v1-naufalfadhil.netlify.app",
    screenshot: "/projects/personal-website-v1.svg",
    featured: true,
    draft: false,
    status: "completed",
    year: 2023,
  },
  {
    id: "jaklingko-mailing-system",
    title: "JakLingko Mailing System",
    description:
      "Internal mailing system used to support operational workflows in Jakarta’s public transportation system.",
    longDescription:
      "Built as part of an internship project, this system supports internal communication and document workflows. Developed both web and mobile interfaces, ensuring smooth coordination across teams.",
    screenshot: "/projects/jaklingko-mailing-system.svg",
    tags: ["Enterprise", "Full Stack", "Internal Tool"],
    tech: ["Node.js", "Express.js", "React.js", "React Native"],
    github: undefined,
    featured: true,
    draft: false,
    pinned: true,
    status: "completed",
    year: 2022,
  },
  {
    id: "hivote",
    title: "HiVote",
    description:
      "A voting platform with modern user validation and identity verification.",
    longDescription:
      "Designed to improve trust in digital voting, HiVote integrates machine learning for identity validation and secure vote handling. Built with a mobile-first approach and backend verification services.",
    tags: ["Mobile", "Machine Learning", "Security"],
    tech: ["Flutter", "Python", "Flask", "MySQL", "OpenCV"],
    github: undefined,
    featured: false,
    draft: false,
    status: "completed",
    year: 2022,
  },
  {
    id: "foodata",
    title: "Foodata",
    description:
      "A mobile application to discover restaurants and food information.",
    longDescription:
      "Foodata helps users explore food options with a clean interface and integrated backend services. Focused on usability and real-time data retrieval.",
    tags: ["Mobile", "Full Stack"],
    tech: ["Flutter", "Laravel", "MySQL"],
    github: undefined,
    featured: false,
    draft: false,
    status: "completed",
    year: 2022,
  },
  {
    id: "gucc-absence",
    title: "Assistant Absence System",
    description:
      "Internal system to manage attendance and payroll for university assistants.",
    longDescription:
      "Built for Gunadarma University Computing Center, this system streamlines attendance tracking and payroll calculation, reducing manual administrative work.",
    tags: ["Internal Tool", "Web"],
    tech: ["Laravel", "PostgreSQL"],
    github: undefined,
    featured: false,
    draft: false,
    status: "completed",
    year: 2023,
  },
  {
    id: "konasara-smart",
    title: "Konasara Smart",
    description:
      "A system to manage scholarship and student data for regional government.",
    longDescription:
      "Developed to support data management for scholarship programs, enabling better tracking and organization of student records.",
    tags: ["Government", "Web"],
    tech: ["Laravel", "PostgreSQL"],
    github: undefined,
    featured: false,
    draft: false,
    status: "completed",
    year: 2023,
  },
  {
    id: "stashidea-sso-service",
    title: "SSO API Services",
    description:
      "A personal Single Sign-On service to unify authentication across multiple projects in stashidea.com ecosystem.",
    longDescription:
      "Built as part of my personal ecosystem, this service centralizes authentication and simplifies user management across different applications.",
    tags: ["Backend", "Auth"],
    tech: ["Go", "PostgreSQL"],
    github: undefined,
    featured: false,
    draft: false,
    status: "in-progress",
    year: 2024,
  },
];

export const publishedProjects = projects.filter((p) => !p.draft);
export const featuredProjects = publishedProjects.filter((p) => p.featured);
