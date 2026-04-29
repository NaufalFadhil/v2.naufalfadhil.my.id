"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, ArrowRight, Pin, Star } from "lucide-react";
import { publishedPosts, categoryStyle, type BlogCategory } from "@/data/blog";
import { OptimizedImage } from "@/components/shared/optimized-image";

const cardGradients = [
  { base: "from-blue-500/8 via-card to-card border-l-blue-500/50",    hover: "hover:from-blue-500/20 hover:shadow-blue-500/10" },
  { base: "from-violet-500/8 via-card to-card border-l-violet-500/50", hover: "hover:from-violet-500/20 hover:shadow-violet-500/10" },
  { base: "from-emerald-500/8 via-card to-card border-l-emerald-500/50", hover: "hover:from-emerald-500/20 hover:shadow-emerald-500/10" },
  { base: "from-amber-500/8 via-card to-card border-l-amber-500/50",  hover: "hover:from-amber-500/20 hover:shadow-amber-500/10" },
  { base: "from-rose-500/8 via-card to-card border-l-rose-500/50",    hover: "hover:from-rose-500/20 hover:shadow-rose-500/10" },
  { base: "from-cyan-500/8 via-card to-card border-l-cyan-500/50",    hover: "hover:from-cyan-500/20 hover:shadow-cyan-500/10" },
];
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const allTags = Array.from(new Set(publishedPosts.flatMap((p) => p.tags))).sort();
const allCategories = Array.from(new Set(publishedPosts.flatMap((p) => p.categories))) as BlogCategory[];

export default function BlogPage() {
  const PAGE_SIZE = 10;
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    setVisibleCount(PAGE_SIZE);
    const result = publishedPosts.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesCategory = !activeCategory || p.categories.includes(activeCategory);
      return matchesSearch && matchesTag && matchesCategory;
    });
    return result.sort((a, b) => {
      const aScore = a.pinned ? 2 : a.featured ? 1 : 0;
      const bScore = b.pinned ? 2 : b.featured ? 1 : 0;
      return bScore - aScore;
    });
  }, [search, activeTag, activeCategory]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <Container className="pt-28 pb-20">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
      <p className="text-foreground/60 text-sm mb-8">
        Thoughts on development, tools, architecture, and craft.
      </p>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search posts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-3">
        {allCategories.map((cat) => {
          const style = categoryStyle[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(isActive ? null : cat)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition-all",
                isActive ? style.className + " ring-1 ring-offset-1" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {style.label}
            </button>
          );
        })}
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              activeTag === tag
                ? "border-foreground bg-foreground text-background font-medium"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-3">
          {visible.map((post, i) => (
            <article key={post.id}>
              <Link href={`/blog/${post.slug}`} className={`group flex flex-col sm:flex-row gap-4 rounded-xl border border-border border-l-2 bg-gradient-to-r ${cardGradients[i % cardGradients.length].base} shadow-sm transition-all duration-300 hover:shadow-md ${cardGradients[i % cardGradients.length].hover} p-4 overflow-hidden`}>
                {/* Thumbnail */}
                <div className="relative w-full aspect-[16/9] sm:w-48 sm:aspect-[4/3] shrink-0 rounded-lg overflow-hidden bg-muted">
                  {post.coverImage ? (
                    <OptimizedImage
                      src={post.coverImage}
                      alt={post.title}
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                      <span className="text-3xl font-bold text-muted-foreground/20 select-none">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {post.pinned && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                          <Pin className="h-2.5 w-2.5" />
                          Pinned
                        </span>
                      )}
                      {post.featured && !post.pinned && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                          <Star className="h-2.5 w-2.5" />
                          Featured
                        </span>
                      )}
                      {post.categories.map((cat) => (
                        <span key={cat} className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${categoryStyle[cat].className}`}>
                          {categoryStyle[cat].label}
                        </span>
                      ))}
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs text-foreground/70">
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="text-muted-foreground/40">•</span>
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="font-semibold text-base leading-snug mb-2 group-hover:text-foreground/75 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    Read article
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
          {visibleCount < filtered.length && (
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="mt-4 w-full rounded-xl border border-border py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            >
              Load more ({filtered.length - visibleCount} remaining)
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-muted-foreground text-sm">No posts match your search.</p>
          <button
            onClick={() => { setSearch(""); setActiveTag(null); setActiveCategory(null); }}
            className="mt-3 text-xs text-foreground underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </Container>
  );
}
