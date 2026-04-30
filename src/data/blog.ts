// ─── Types ───────────────────────────────────────────────────────────────────

export type BlogCategory =
  | "Tech"
  | "TIL"
  | "Books"
  | "Research"
  | "Career"
  | "Opinion"
  | "Thought"
  | "Product"
  | "Story"
  | "Politics"
  | "Stock";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  readTime: number;
  categories: BlogCategory[];
  tags: string[];
  published: boolean;
  featured?: boolean;
  pinned?: boolean;
};

type CategoryStyle = {
  label: string;
  className: string;
};

// ─── Category Styles ─────────────────────────────────────────────────────────

export const categoryStyle: Record<BlogCategory, CategoryStyle> = {
  Tech:     { label: "Tech",     className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  TIL:      { label: "TIL",      className: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30" },
  Books:    { label: "Books",    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30" },
  Research: { label: "Research", className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
  Career:   { label: "Career",   className: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  Opinion:  { label: "Opinion",  className: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30" },
  Thought:  { label: "Thought",  className: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  Product:  { label: "Product",  className: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30" },
  Story:    { label: "Story",    className: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30" },
  Politics: { label: "Politics", className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30" },
  Stock:    { label: "Stock",    className: "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-500/30" },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

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
    categories: ["Tech"],
    tags: ["Go", "CLI", "DevTools"],
    published: false,
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
    categories: ["Tech"],
    tags: ["Next.js", "React", "Architecture"],
    published: false,
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
    categories: ["TIL"],
    tags: ["PostgreSQL", "Database", "Performance"],
    published: false,
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
    categories: ["Tech"],
    tags: ["Docker", "DevOps"],
    published: false,
  },
  {
    id: "5",
    slug: "2024-06-premium-tier-and-standard-tier-gcloud",
    title: "What Is Better? Premium Tier vs. Standard Tier on Network Service Tiers in Google Cloud",
    excerpt:
      "A detailed comparison of Google Cloud's Premium Tier and Standard Tier network service tiers, covering performance, pricing, and use cases to help you choose the right option for your workloads.",
    coverImage: "/blogs/2024-06-premium-tier-and-standard-tier-gcloud/cover.png",
    date: "2024-06-16",
    readTime: 2,
    categories: ["Tech"],
    tags: ["Google Cloud", "Networking", "Cloud Services", "Infrastructure"],
    published: true,
  },
  {
    id: "6",
    slug: "2026-04-stock-market-analysis-story",
    title: "How I Made a Profit Using AI for Stock Market Analysis",
    excerpt:
      "A personal story of how I leveraged AI tools to analyze stock market trends and make profitable investment decisions in 2026.",
    coverImage: "/blogs/2026-04-stock-market-analysis-story/cover.png",
    date: "2026-04-29",
    readTime: 2,
    categories: ["Stock", "Story"],
    tags: ["AI", "Stock Market", "Investment"],
    published: true,
  },
  {
    id: "7",
    slug: "2024-11-best-laravel-project-structure",
    title: "Laravel Project Structure Best Practices: Organizing Your Folders for Scalability",
    excerpt:
      "A practical guide to organizing Laravel folders for cleaner, scalable, and maintainable projects.",
    coverImage: "/blogs/2024-11-best-laravel-project-structure/cover.png",
    date: "2024-11-30",
    readTime: 2,
    categories: ["Tech"],
    tags: ["Laravel", "PHP", "Architecture"],
    published: true,
  },
  {
    id: "8",
    slug: "2024-12-experience-enterprise-system",
    title: "My Experience Joining an Enterprise System as an Associate Software Engineer",
    excerpt:
      "A personal account of my journey joining an enterprise system as an Associate Software Engineer, the challenges I faced, and the lessons I learned along the way.",
    coverImage: "/blogs/2024-12-experience-enterprise-system/cover.png",
    date: "2024-12-01",
    readTime: 2,
    categories: ["Career", "Story"],
    tags: ["Career", "Experience", "Software Engineering"],
    published: true,
    featured: true,
    pinned: true,
  },
  {
    id: "9",
    slug: "2026-04-first-security-setup-vps",
    title: "First Security Setup on Your VPS: A Step-by-Step Guide",
    excerpt:
      "A comprehensive guide to securing your VPS for the first time, covering firewall configuration, SSH hardening, and best practices to protect your server from common threats.",
    coverImage: "/blogs/2026-04-first-security-setup-vps/cover.png",
    date: "2026-04-20",
    readTime: 10,
    categories: ["Tech"],
    tags: ["Linux", "Security", "DevSecOps", "Cyber Security", "Infrastructure", "Cloud", "Best Practices"],
    published: true,
  },
];

// ─── Blog Card Gradients ─────────────────────────────────────────────────────

export type BlogCardGradient = {
  base: string;
  hover: string;
};

export const blogCardGradients: BlogCardGradient[] = [
  { base: "from-blue-500/8 via-card to-card border-l-blue-500/50",      hover: "hover:from-blue-500/20 hover:shadow-blue-500/10"    },
  { base: "from-violet-500/8 via-card to-card border-l-violet-500/50",  hover: "hover:from-violet-500/20 hover:shadow-violet-500/10" },
  { base: "from-emerald-500/8 via-card to-card border-l-emerald-500/50", hover: "hover:from-emerald-500/20 hover:shadow-emerald-500/10" },
  { base: "from-amber-500/8 via-card to-card border-l-amber-500/50",    hover: "hover:from-amber-500/20 hover:shadow-amber-500/10"   },
  { base: "from-rose-500/8 via-card to-card border-l-rose-500/50",      hover: "hover:from-rose-500/20 hover:shadow-rose-500/10"     },
  { base: "from-cyan-500/8 via-card to-card border-l-cyan-500/50",      hover: "hover:from-cyan-500/20 hover:shadow-cyan-500/10"     },
];

// ─── Derived Exports ──────────────────────────────────────────────────────────

export function getPostPriority(post: BlogPost): number {
  if (post.pinned) return 0;
  if (post.featured) return 1;
  return 2;
}

export const publishedPosts = blogPosts
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const pinnedPosts = publishedPosts.filter((p) => p.pinned);
export const featuredPosts = publishedPosts.filter((p) => p.featured);

export const latestPosts = [...publishedPosts]
  .sort((a, b) => getPostPriority(a) - getPostPriority(b))
  .slice(0, 3);
