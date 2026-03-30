export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract";
  start: string;
  end?: string;
  description: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "freelance-2024",
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    location: "Remote",
    type: "Freelance",
    start: "2023-06-01",
    description: [
      "Built and deployed full-stack web applications for various clients across Indonesia.",
      "Delivered REST APIs with Go and Laravel, and modern frontends with Next.js.",
      "Managed infrastructure using Docker and deployed to VPS environments.",
    ],
    tech: ["Next.js", "Go", "Laravel", "PostgreSQL", "Docker"],
  },
  {
    id: "internship-backend-2023",
    role: "Backend Developer Intern",
    company: "Tech Startup",
    location: "Indonesia (Hybrid)",
    type: "Internship",
    start: "2023-01-01",
    end: "2023-05-31",
    description: [
      "Developed and maintained REST APIs using Laravel and Go for internal tools.",
      "Collaborated with the mobile team to integrate backend services with Flutter apps.",
      "Wrote unit tests and improved API response time by 30% through query optimization.",
    ],
    tech: ["Laravel", "PHP", "Go", "MySQL", "Redis"],
  },
  {
    id: "lab-assistant-2022",
    role: "Lab Assistant",
    company: "University",
    location: "Indonesia",
    type: "Part-time",
    start: "2022-08-01",
    end: "2023-01-01",
    description: [
      "Assisted students in Programming and Data Structures lab sessions.",
      "Created supplementary learning materials and exercises for 80+ students.",
    ],
    tech: ["Python", "C++", "Java"],
  },
];
