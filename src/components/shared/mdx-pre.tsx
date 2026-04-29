"use client";

import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TreeBlock } from "./tree-block";

export function MdxPre({ children, className, style, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const attrs = props as Record<string, unknown>;
  const language = attrs["data-language"] as string | undefined;
  const rawCode = attrs["data-raw-code"] as string | undefined;

  if (language === "tree" && rawCode != null) {
    return (
      <div className="relative group/pre my-6 not-prose">
        <div data-code-header="" />
        <div className="overflow-x-auto rounded-b-xl border border-[#444c56] bg-[#22272e] px-5 py-4">
          <TreeBlock code={rawCode} />
        </div>
      </div>
    );
  }

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group/pre my-6 not-prose">
      <div data-code-header="" />
      <div className="relative">
        <pre
          ref={preRef}
          style={style}
          className={cn(
            // default styling — shiki inline `style` bg will override the Tailwind bg class
            "overflow-x-auto rounded-b-xl border border-[#444c56] bg-[#22272e] p-5 text-sm leading-normal text-[#adbac7]",
            className,
          )}
          {...props}
        >
          {children}
        </pre>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/50 opacity-0 backdrop-blur-sm transition-all group-hover/pre:opacity-100 hover:border-white/20 hover:bg-white/10 hover:text-white/80"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
