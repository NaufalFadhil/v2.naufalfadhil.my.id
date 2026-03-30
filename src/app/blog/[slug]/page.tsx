import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { publishedPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publishedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <Container className="pt-28 pb-20 max-w-2xl">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article>
        <header className="mb-8">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
          </div>
        </header>

        {/* Content placeholder — replace with MDX or CMS content */}
        <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none">
          <p className="lead">{post.excerpt}</p>
          <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground text-sm">
            <p>Full article content coming soon.</p>
            <p className="mt-1 text-xs">Connect an MDX or CMS source to this page.</p>
          </div>
        </div>
      </article>
    </Container>
  );
}
