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
    screenshot: "/projects/ai-finance.png",
    tags: ["AI", "Finance", "Full Stack"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/naufalfadhil/ai-finance",
    demo: "https://finance.naufalfadhil.my.id",
    featured: true,
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
    screenshot: "/projects/cli-db.png",
    tags: ["CLI", "DevTools", "Go"],
    tech: ["Go", "PostgreSQL", "MySQL", "SQLite", "Cobra CLI"],
    github: "https://github.com/naufalfadhil/dbgen",
    featured: true,
    status: "in-progress",
    year: 2024,
  },
  {
    id: "personal-ai-agent",
    title: "Personal AI Agent",
    description:
      "A self-hosted AI agent that manages tasks, answers questions from your personal knowledge base, and automates repetitive workflows.",
    screenshot: "/projects/ai-agent.png",
    tags: ["AI", "Automation", "Full Stack"],
    tech: ["Python", "FastAPI", "LangChain", "Redis", "Next.js"],
    github: "https://github.com/naufalfadhil/ai-agent",
    featured: true,
    status: "in-progress",
    year: 2024,
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    description:
      "Previous personal portfolio website built with Next.js, showcasing projects, skills, and experience.",
    tags: ["Personal", "Portfolio"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/naufalfadhil/portfolio",
    demo: "https://naufalfadhil.my.id",
    featured: false,
    status: "archived",
    year: 2023,
  },
  {
    id: "go-restapi-boilerplate",
    title: "Go REST API Boilerplate",
    description:
      "Production-ready REST API boilerplate in Go with authentication, CRUD, pagination, and Docker setup.",
    tags: ["Backend", "Go", "Boilerplate"],
    tech: ["Go", "Gin", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/naufalfadhil/go-api",
    featured: false,
    status: "completed",
    year: 2023,
  },
  {
    id: "laravel-cms",
    title: "Headless CMS",
    description:
      "A lightweight headless CMS built with Laravel featuring a REST API and role-based access control.",
    tags: ["Backend", "CMS", "Laravel"],
    tech: ["Laravel", "PHP", "MySQL", "Vue.js"],
    github: "https://github.com/naufalfadhil/headless-cms",
    featured: false,
    status: "completed",
    year: 2022,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
