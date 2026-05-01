"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { latestPosts, blogCardGradients, type BlogPost } from "@/data/blog";
import { cn, getExternalDomain } from "@/lib/utils";
import { OptimizedImage } from "@/components/shared/optimized-image";
import { SectionHeader } from "@/components/shared/section-header";
import { PostCardMeta } from "@/components/shared/post-card-meta";
import { ExternalLinkDialog } from "@/components/shared/external-link-dialog";
import { Button } from "@/components/ui/button";

function PreviewCardContent({ post }: { post: BlogPost }) {
  return (
    <>
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
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <PostCardMeta post={post} maxTags={2} />
          <h3 className="font-semibold text-base leading-snug mb-1.5 group-hover:text-foreground/75 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-foreground/55 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
        <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          {post.externalUrl ? (
            <>Read on <span className="underline decoration-gray-500">{getExternalDomain(post.externalUrl)}</span></>
          ) : "Read article"}
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </>
  );
}

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
        {latestPosts.map((post, i) => {
          const gradient = blogCardGradients[i % blogCardGradients.length];
          return (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
            >
              {post.externalUrl ? (
                <ExternalLinkDialog url={post.externalUrl} title={post.title} coverImage={post.coverImage}>
                  {(openDialog) => (
                    <button
                      onClick={openDialog}
                      className={cn(
                        "group w-full text-left flex flex-col sm:flex-row gap-4 rounded-xl border border-border border-l-2 bg-gradient-to-r shadow-sm transition-all duration-300 hover:shadow-md p-4 overflow-hidden",
                        gradient.base,
                        gradient.hover
                      )}
                    >
                      <PreviewCardContent post={post} />
                    </button>
                  )}
                </ExternalLinkDialog>
              ) : (
                <Link
                  href={`/blog/${post.slug!}`}
                  className={cn(
                    "group flex flex-col sm:flex-row gap-4 rounded-xl border border-border border-l-2 bg-gradient-to-r shadow-sm transition-all duration-300 hover:shadow-md p-4 overflow-hidden",
                    gradient.base,
                    gradient.hover
                  )}
                >
                  <PreviewCardContent post={post} />
                </Link>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
