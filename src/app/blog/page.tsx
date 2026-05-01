"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { publishedPosts, categoryStyle, blogCardGradients, getPostPriority, type BlogCategory, type BlogPost } from "@/data/blog";
import { cn, getExternalDomain } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { FilterTagButton } from "@/components/shared/filter-tag-button";
import { EmptyState } from "@/components/shared/empty-state";
import { PostCardMeta } from "@/components/shared/post-card-meta";

const PAGE_SIZE = 10;

function CardContent({ post }: { post: BlogPost }) {
  return (
    <>
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
          <PostCardMeta post={post} />
          <h2 className="font-semibold text-base leading-snug mb-2 group-hover:text-foreground/75 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          {post.externalUrl ? (
            <>Read on <span className="underline decoration-gray-500">{getExternalDomain(post.externalUrl)}</span></>
          ) : "Read article"}
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </>
  );
}

const allTags = Array.from(new Set(publishedPosts.flatMap((p) => p.tags))).sort();
const allCategories = Array.from(new Set(publishedPosts.flatMap((p) => p.categories))) as BlogCategory[];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    setVisibleCount(PAGE_SIZE);
    return publishedPosts
      .filter((p) => {
        const matchesSearch =
          !search ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchesTag = !activeTag || p.tags.includes(activeTag);
        const matchesCategory = !activeCategory || p.categories.includes(activeCategory);
        return matchesSearch && matchesTag && matchesCategory;
      })
      .sort((a, b) => getPostPriority(a) - getPostPriority(b));
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
                isActive
                  ? style.className + " ring-1 ring-offset-1"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
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
          <FilterTagButton
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      {/* Posts */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-3">
          {visible.map((post, i) => {
            const gradient = blogCardGradients[i % blogCardGradients.length];
            return (
              <article key={post.id}>
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex flex-col sm:flex-row gap-4 rounded-xl border border-border border-l-2 bg-gradient-to-r shadow-sm transition-all duration-300 hover:shadow-md p-4 overflow-hidden",
                      gradient.base,
                      gradient.hover
                    )}
                  >
                    <CardContent post={post} />
                  </a>
                ) : (
                  <Link
                    href={`/blog/${post.slug!}`}
                    className={cn(
                      "group flex flex-col sm:flex-row gap-4 rounded-xl border border-border border-l-2 bg-gradient-to-r shadow-sm transition-all duration-300 hover:shadow-md p-4 overflow-hidden",
                      gradient.base,
                      gradient.hover
                    )}
                  >
                    <CardContent post={post} />
                  </Link>
                )}
              </article>
            );
          })}
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
        <EmptyState
          message="No posts match your search."
          onClear={() => { setSearch(""); setActiveTag(null); setActiveCategory(null); }}
        />
      )}
    </Container>
  );
}
