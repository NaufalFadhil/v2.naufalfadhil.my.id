import { Pin, Star, Calendar } from "lucide-react";
import { categoryStyle, type BlogPost } from "@/data/blog";
import { cn, formatDate } from "@/lib/utils";

type PostCardMetaProps = {
  post: BlogPost;
  maxTags?: number;
  className?: string;
};

export function PostCardMeta({ post, maxTags, className }: PostCardMetaProps) {
  const tags = maxTags !== undefined ? post.tags.slice(0, maxTags) : post.tags;

  return (
    <div className={cn("flex flex-wrap items-center gap-2 mb-2", className)}>
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
        <span key={cat} className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold", categoryStyle[cat].className)}>
          {categoryStyle[cat].label}
        </span>
      ))}
      {tags.map((tag) => (
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
  );
}
