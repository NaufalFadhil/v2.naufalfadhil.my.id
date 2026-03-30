export type BuildingItem = {
  id: string;
  title: string;
  description: string;
  status: "planning" | "building" | "testing" | "launching";
  tech: string[];
  icon: string;
};

export const currentlyBuilding: BuildingItem[] = [
  {
    id: "ai-finance",
    title: "AI Finance App",
    description:
      "Smart personal finance tracker with AI-powered categorization, spending prediction, and budget insights.",
    status: "building",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    icon: "TrendingUp",
  },
  {
    id: "cli-db-gen",
    title: "CLI Database Generator",
    description:
      "Generate database schemas, migrations, and seed data from plain-English descriptions via the terminal.",
    status: "building",
    tech: ["Go", "Cobra", "PostgreSQL"],
    icon: "Terminal",
  },
  {
    id: "personal-ai",
    title: "Personal AI Agent",
    description:
      "Self-hosted AI agent connected to my personal knowledge base that automates tasks and answers questions.",
    status: "planning",
    tech: ["Python", "LangChain", "FastAPI"],
    icon: "Bot",
  },
];
