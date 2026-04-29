"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Pin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { latestPosts, categoryStyle } from "@/data/blog";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const cardGradients = [
  { base: "from-blue-500/8 via-card to-card border-l-blue-500/50",    hover: "hover:from-blue-500/20 hover:shadow-blue-500/10" },
  { base: "from-violet-500/8 via-card to-card border-l-violet-500/50", hover: "hover:from-violet-500/20 hover:shadow-violet-500/10" },
  { base: "from-emerald-500/8 via-card to-card border-l-emerald-500/50", hover: "hover:from-emerald-500/20 hover:shadow-emerald-500/10" },
  { base: "from-amber-500/8 via-card to-card border-l-amber-500/50",  hover: "hover:from-amber-500/20 hover:shadow-amber-500/10" },
];

export function BlogPreview() {
  return (
    <section className="py-16">
      <div className="flex items-end justify-between mb-8">
        <SectionHeader
          title="Blog"
          description="Thoughts on development, tools, and craft."
          className="mb-0"
        />
        <Button variant="ghost" size="sm" asChild className="shrink-0">
          <Link href="/blog">
            All posts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {latestPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className={`group flex flex-col sm:flex-row gap-4 rounded-xl border border-border border-l-2 bg-gradient-to-r ${cardGradients[i % cardGradients.length].base} shadow-sm transition-all duration-300 hover:shadow-md ${cardGradients[i % cardGradients.length].hover} p-4 overflow-hidden`}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/9] sm:w-36 sm:aspect-[4/3] shrink-0 rounded-lg overflow-hidden bg-muted">
                {post.coverImage ? (
                  <OptimizedImage
                    src={post.coverImage}
                    alt={post.title}
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                    <span className="text-2xl font-bold text-muted-foreground/20 select-none">
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
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-xs text-foreground/70">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="text-muted-foreground/40">•</span>
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base leading-snug mb-1.5 group-hover:text-foreground/75 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  Read article
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
