"use client";

import { useState, useRef } from "react";
import { ImageLightbox } from "./image-lightbox";
import { getOptimizedImage } from "@/lib/optimized-image";

interface MdxImageProps {
  src: string;
  alt: string;
}

export function MdxImage({ src, alt }: MdxImageProps) {
  const [open, setOpen] = useState(false);
  const closingRef = useRef(false);
  const opt = getOptimizedImage(src);

  return (
    <>
      <span
        className="block my-0 rounded-xl overflow-hidden cursor-zoom-in"
        onClick={() => { if (!closingRef.current) setOpen(true); }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={opt?.fallback ?? src}
          srcSet={opt?.srcset}
          sizes="(max-width: 768px) 100vw, 672px"
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
      </span>

      {open && (
        <ImageLightbox
          src={opt?.fallback ?? src}
          srcSet={opt?.srcset}
          alt={alt}
          onClose={() => {
            closingRef.current = true;
            setOpen(false);
            requestAnimationFrame(() => { closingRef.current = false; });
          }}
        />
      )}
    </>
  );
}
