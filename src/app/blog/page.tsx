"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { publishedPosts } from "@/data/blog";

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

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return publishedPosts.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

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
          {filtered.map((post, i) => (
            <article key={post.id}>
              <Link href={`/blog/${post.slug}`} className={`group flex gap-5 rounded-xl border border-border border-l-2 bg-gradient-to-r ${cardGradients[i % cardGradients.length].base} shadow-sm transition-all duration-300 hover:shadow-md ${cardGradients[i % cardGradients.length].hover} p-4 overflow-hidden`}>
                {/* Thumbnail */}
                <div className="relative w-36 sm:w-48 aspect-[4/3] shrink-0 rounded-lg overflow-hidden bg-muted">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="192px"
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
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-muted-foreground text-sm">No posts match your search.</p>
          <button
            onClick={() => { setSearch(""); setActiveTag(null); }}
            className="mt-3 text-xs text-foreground underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </Container>
  );
}
