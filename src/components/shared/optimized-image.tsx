import { getOptimizedImage } from "@/lib/optimized-image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

export function OptimizedImage({ src, alt, sizes = "100vw", className }: OptimizedImageProps) {
  const opt = getOptimizedImage(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={opt?.fallback ?? src}
      srcSet={opt?.srcset}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
