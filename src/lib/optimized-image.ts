import { imageManifest } from "@/generated/image-manifest";

export function getOptimizedImage(src: string) {
  const entry = imageManifest[src];
  if (!entry) return null;

  const pregenWidths = entry.widths.filter((w) => w <= 1440);
  const srcset = pregenWidths.map((w) => `${entry.base}-${w}.webp ${w}w`).join(", ");
  const fallback = pregenWidths.at(-1)
    ? `${entry.base}-${pregenWidths.at(-1)}.webp`
    : src;

  return { srcset, fallback };
}
