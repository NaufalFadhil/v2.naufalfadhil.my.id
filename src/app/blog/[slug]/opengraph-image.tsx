import { ImageResponse } from "next/og";
import { publishedPosts, categoryStyle } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  return [{ id: slug, alt: post?.title ?? slug }];
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);

  const title = post?.title ?? "Blog Post";
  const excerpt = post?.excerpt ?? "";
  const category = post?.category ?? "tech";
  const tags = post?.tags?.slice(0, 3) ?? [];

  const categoryLabel = categoryStyle[category as keyof typeof categoryStyle]?.label ?? category;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top: category + tags */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.4)",
              color: "#a5b4fc",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            {categoryLabel}
          </div>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
                borderRadius: "999px",
                padding: "6px 14px",
                fontSize: "14px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Middle: title + excerpt */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: title.length > 60 ? "44px" : "56px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          {excerpt && (
            <div
              style={{
                fontSize: "22px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.5,
                maxWidth: "780px",
                display: "-webkit-box",
                overflow: "hidden",
              }}
            >
              {excerpt.length > 120 ? excerpt.slice(0, 120) + "…" : excerpt}
            </div>
          )}
        </div>

        {/* Bottom: site name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
