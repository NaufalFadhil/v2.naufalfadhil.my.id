"use client";

import { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  srcSet?: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, srcSet, alt, onClose }: ImageLightboxProps) {
  const closingRef = useRef(false);

  const close = useCallback(() => {
    closingRef.current = true;
    onClose();
    requestAnimationFrame(() => { closingRef.current = false; });
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [close]);

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[998] bg-black/80 backdrop-blur-sm cursor-zoom-out"
        onClick={close}
      />
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto max-w-[90vw] max-h-[90vh] cursor-zoom-out"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            srcSet={srcSet}
            sizes="90vw"
            alt={alt}
            decoding="async"
            className="rounded-lg object-contain max-w-[90vw] max-h-[90vh] w-auto h-auto"
            style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh" }}
          />
        </div>
      </div>
      <button
        className="fixed top-4 right-4 z-[1000] text-white/70 hover:text-white transition-colors"
        onClick={close}
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
    </>,
    document.body
  );
}
