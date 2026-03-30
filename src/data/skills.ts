export type Skill = {
  name: string;
  icon?: string; // react-icons name from "si" set
};

export type SkillGroup = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React",         icon: "SiReact" },
      { name: "Next.js",       icon: "SiNextdotjs" },
      { name: "TypeScript",    icon: "SiTypescript" },
      { name: "Tailwind CSS",  icon: "SiTailwindcss" },
      { name: "Framer Motion", icon: "SiFramer" },
      { name: "shadcn/ui" },
      { name: "Zustand",       icon: "SiZod" },
      { name: "React Query" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Go",       icon: "SiGo" },
      { name: "Laravel",  icon: "SiLaravel" },
      { name: "Node.js",  icon: "SiNodedotjs" },
      { name: "GraphQL",  icon: "SiGraphql" },
      { name: "PHP",      icon: "SiPhp" },
      { name: "REST API" },
      { name: "Gin" },
      { name: "Echo" },
    ],
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    skills: [
      { name: "React Native", icon: "SiReact" },
      { name: "Flutter",      icon: "SiFlutter" },
      { name: "Expo",         icon: "SiExpo" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL",      icon: "SiMysql" },
      { name: "SQLite",     icon: "SiSqlite" },
      { name: "Redis",      icon: "SiRedis" },
      { name: "MongoDB",    icon: "SiMongodb" },
    ],
  },
  {
    category: "DevOps",
    icon: "Cloud",
    skills: [
      { name: "Docker",          icon: "SiDocker" },
      { name: "GitHub Actions",  icon: "SiGithubactions" },
      { name: "Nginx",           icon: "SiNginx" },
      { name: "Linux",           icon: "SiLinux" },
      { name: "Vercel",          icon: "SiVercel" },
      { name: "Railway",         icon: "SiRailway" },
      { name: "VPS" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git",          icon: "SiGit" },
      { name: "VS Code",      icon: "SiVisualstudiocode" },
      { name: "Neovim",       icon: "SiNeovim" },
      { name: "Postman",      icon: "SiPostman" },
      { name: "Figma",        icon: "SiFigma" },
      { name: "Linear",       icon: "SiLinear" },
      { name: "Notion",       icon: "SiNotion" },
    ],
  },
];
