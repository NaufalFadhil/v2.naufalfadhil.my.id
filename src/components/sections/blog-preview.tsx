"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { latestPosts } from "@/data/blog";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

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

      <div className="flex flex-col gap-2">
        {latestPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border bg-card hover:bg-gradient-to-r hover:from-muted/40 hover:to-card p-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base leading-snug group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/60 mt-1 line-clamp-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime} min
                </span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
