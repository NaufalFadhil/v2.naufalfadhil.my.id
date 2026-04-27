export type BlogCategory = "Tech" | "TIL" | "Books" | "Research" | "Career" | "Opinion";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  readTime: number;
  category: BlogCategory;
  tags: string[];
  published: boolean;
};

export const categoryStyle: Record<BlogCategory, { label: string; className: string }> = {
  Tech:     { label: "Tech",     className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  TIL:      { label: "TIL",     className: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30" },
  Books:    { label: "Books",   className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30" },
  Research: { label: "Research",className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
  Career:   { label: "Career",  className: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  Opinion:  { label: "Opinion", className: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30" },
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-cli-with-go",
    title: "Building a CLI Tool with Go and Cobra",
    excerpt:
      "A practical guide to building production-ready CLI tools in Go using the Cobra library, with flags, subcommands, and config management.",
    coverImage: "https://picsum.photos/seed/go-cli/1200/630",
    date: "2024-11-15",
    readTime: 8,
    category: "Tech",
    tags: ["Go", "CLI", "DevTools"],
    published: true,
  },
  {
    id: "2",
    slug: "next-js-app-router-patterns",
    title: "Patterns I Use in Every Next.js App Router Project",
    excerpt:
      "A collection of architecture patterns, folder structures, and conventions I've settled on after building multiple production Next.js apps.",
    coverImage: "https://picsum.photos/seed/nextjs-app/1200/630",
    date: "2024-10-02",
    readTime: 12,
    category: "Tech",
    tags: ["Next.js", "React", "Architecture"],
    published: true,
  },
  {
    id: "3",
    slug: "postgres-query-optimization",
    title: "PostgreSQL Query Optimization: Practical Tips",
    excerpt:
      "Real-world techniques for diagnosing and optimizing slow PostgreSQL queries — indexes, EXPLAIN ANALYZE, and common mistakes.",
    coverImage: "https://picsum.photos/seed/postgres-db/1200/630",
    date: "2024-08-20",
    readTime: 10,
    category: "TIL",
    tags: ["PostgreSQL", "Database", "Performance"],
    published: true,
  },
  {
    id: "4",
    slug: "docker-for-developers",
    title: "Docker for Developers: A Practical Introduction",
    excerpt:
      "Everything a developer needs to know to use Docker effectively in day-to-day development — Dockerfile, Compose, volumes, and networking.",
    coverImage: "https://picsum.photos/seed/docker-dev/1200/630",
    date: "2024-07-05",
    readTime: 15,
    category: "Tech",
    tags: ["Docker", "DevOps"],
    published: true,
  },
];

export const publishedPosts = blogPosts.filter((p) => p.published);
export const latestPosts = publishedPosts.slice(0, 3);
