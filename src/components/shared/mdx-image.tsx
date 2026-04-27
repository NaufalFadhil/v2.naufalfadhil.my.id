"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

interface MdxImageProps {
  src: string;
  alt: string;
}

export function MdxImage({ src, alt }: MdxImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closingRef = useRef(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    closingRef.current = true;
    setOpen(false);
    requestAnimationFrame(() => { closingRef.current = false; });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <span
        className="block my-8 rounded-xl overflow-hidden cursor-zoom-in"
        onClick={() => { if (!closingRef.current) setOpen(true); }}
      >
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 672px"
          className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
          style={{ width: "100%", height: "auto" }}
        />
      </span>

      {mounted && open && createPortal(
        <>
          {/* Backdrop — clicking here closes */}
          <div
            className="fixed inset-0 z-[998] bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={close}
          />

          {/* Image — centered, above backdrop, only image area is no-close */}
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-none">
            <div className="pointer-events-auto max-w-[90vw] max-h-[90vh] cursor-zoom-out" onClick={close}>
              <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="90vw"
                className="rounded-lg object-contain max-w-[90vw] max-h-[90vh] w-auto h-auto"
                style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh" }}
              />
            </div>
          </div>

          {/* Close button — always on top, independent */}
          <button
            className="fixed top-4 right-4 z-[1000] text-white/70 hover:text-white transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </>,
        document.body
      )}
    </>
  );
}
