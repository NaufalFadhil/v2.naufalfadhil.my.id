import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
export const alt = "Blog — " + siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />
        <div style={{ color: "#a5b4fc", fontSize: "18px", fontWeight: 600, marginBottom: "20px", letterSpacing: "0.1em" }}>
          BLOG
        </div>
        <div style={{ fontSize: "68px", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
          Thoughts &amp; Writing
        </div>
        <div style={{ fontSize: "24px", color: "rgba(255,255,255,0.45)", maxWidth: "700px", lineHeight: 1.5 }}>
          {`Development, tools, architecture, and craft — by ${siteConfig.name}.`}
        </div>
        <div style={{ position: "absolute", bottom: "60px", left: "80px", color: "rgba(255,255,255,0.25)", fontSize: "18px" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
