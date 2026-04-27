import { Container } from "@/components/layout/container";

export default function BlogPostLoading() {
  return (
    <Container className="pt-28 pb-20">
      {/* Back button skeleton */}
      <div className="h-8 w-28 rounded-md bg-muted animate-pulse mb-8" />

      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-14 xl:grid-cols-[1fr_240px]">
        <article className="min-w-0 max-w-2xl">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <div className="h-5 w-16 rounded-full bg-muted animate-pulse" />
            <div className="h-5 w-12 rounded-full bg-muted animate-pulse" />
          </div>

          {/* Title */}
          <div className="space-y-2 mb-4">
            <div className="h-8 w-full rounded-lg bg-muted animate-pulse" />
            <div className="h-8 w-3/4 rounded-lg bg-muted animate-pulse" />
          </div>

          {/* Meta */}
          <div className="flex gap-4 mb-10">
            <div className="h-4 w-28 rounded bg-muted animate-pulse" />
            <div className="h-4 w-20 rounded bg-muted animate-pulse" />
          </div>

          {/* Cover image */}
          <div className="w-full aspect-video rounded-xl bg-muted animate-pulse mb-10" />

          {/* Content lines */}
          <div className="space-y-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-4 rounded bg-muted animate-pulse"
                style={{ width: `${i % 3 === 2 ? 60 : 100}%`, animationDelay: `${i * 40}ms` }}
              />
            ))}
          </div>
        </article>

        {/* ToC skeleton */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 flex flex-col gap-3">
            <div className="h-3 w-20 rounded bg-muted animate-pulse" />
            <div className="space-y-2 border-l border-border pl-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-3 rounded bg-muted animate-pulse" style={{ width: `${70 + (i % 3) * 10}%` }} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
