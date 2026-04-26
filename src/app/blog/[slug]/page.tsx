import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { publishedPosts } from "@/data/blog";
import { getBlogContent, extractHeadings, slugifyHeading } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdxPre } from "@/components/shared/mdx-pre";
import { TableOfContents } from "@/components/shared/table-of-contents";

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
    openGraph: post.coverImage ? { images: [post.coverImage] } : undefined,
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        { theme: "github-dark-dimmed", keepBackground: true },
      ],
    ] as never[],
  },
};

function getChildrenText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getChildrenText).join("");
  return "";
}

const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugifyHeading(getChildrenText(children));
    return (
      <h2 id={id} className="flex items-center gap-3 mt-12 mb-5 text-2xl font-bold tracking-tight text-foreground scroll-mt-28" {...props}>
        <span
          className="shrink-0 w-4 h-7 bg-indigo-500"
          style={{ clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)" }}
        />
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugifyHeading(getChildrenText(children));
    return (
      <h3 id={id} className="text-lg font-bold tracking-tight text-foreground mt-8 mb-3 scroll-mt-28" {...props}>
        {children}
      </h3>
    );
  },
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-semibold text-foreground/80 mt-6 mb-2" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="block relative w-full aspect-video my-8 rounded-xl overflow-hidden">
      <Image
        src={typeof props.src === "string" ? props.src : ""}
        alt={props.alt ?? ""}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 672px"
      />
    </span>
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-muted/60 px-4 py-2.5 text-left text-xs font-semibold text-foreground/80 first:rounded-tl-xl last:rounded-tr-xl" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-t border-border px-4 py-2.5 text-foreground/70" {...props} />
  ),
  pre: MdxPre,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const mdxData = getBlogContent(slug);
  const headings = mdxData ? extractHeadings(mdxData.content) : [];

  return (
    <Container className="pt-28 pb-20">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 xl:grid-cols-[1fr_240px]">
        {/* Article */}
        <article className="min-w-0 max-w-2xl">
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

          {post.coverImage && (
            <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden border border-border">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          )}

          <div className="prose prose-zinc dark:prose-invert max-w-none font-lora
            prose-p:text-foreground/75 prose-p:leading-relaxed
            prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-foreground/70
            prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-l-foreground/20 prose-blockquote:text-foreground/60
            prose-li:text-foreground/75
            prose-table:text-sm prose-th:text-foreground prose-td:text-foreground/70
            prose-img:rounded-xl prose-img:border prose-img:border-border">
            {mdxData ? (
              <MDXRemote source={mdxData.content} components={mdxComponents} options={mdxOptions} />
            ) : (
              <>
                <p className="lead">{post.excerpt}</p>
                <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground text-sm not-prose">
                  <p>Full article content coming soon.</p>
                </div>
              </>
            )}
          </div>
        </article>

        {/* ToC sidebar */}
        <aside className="hidden lg:block">
          <TableOfContents headings={headings} />
        </aside>
      </div>
    </Container>
  );
}
