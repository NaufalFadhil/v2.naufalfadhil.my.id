export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  readTime: number;
  tags: string[];
  published: boolean;
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
    tags: ["Docker", "DevOps"],
    published: true,
  },
];

export const publishedPosts = blogPosts.filter((p) => p.published);
export const latestPosts = publishedPosts.slice(0, 3);
