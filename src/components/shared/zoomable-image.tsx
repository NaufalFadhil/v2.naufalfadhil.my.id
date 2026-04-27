"use client";

import { useState } from "react";
import { ImageLightbox } from "./image-lightbox";
import { getOptimizedImage } from "@/lib/optimized-image";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const opt = getOptimizedImage(src);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={opt?.fallback ?? src}
        srcSet={opt?.srcset}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(true); }}
        style={{ cursor: "zoom-in" }}
      />
      {open && (
        <ImageLightbox
          src={opt?.fallback ?? src}
          srcSet={opt?.srcset}
          alt={alt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
