"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getExternalDomain } from "@/lib/utils";

type Props = {
  url: string;
  title: string;
  coverImage?: string;
  children: (open: () => void) => React.ReactNode;
};

export function ExternalLinkDialog({ url, title, coverImage, children }: Props) {
  const [open, setOpen] = useState(false);
  const domain = getExternalDomain(url);

  return (
    <>
      {children(() => setOpen(true))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg p-0 overflow-hidden gap-0">
          {/* Thumbnail 16:9 */}
          <div className="relative w-full aspect-video bg-muted">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
                sizes="512px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                <span className="text-5xl font-bold text-muted-foreground/20 select-none">
                  {title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="p-6">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              <span>You&apos;re leaving this site</span>
            </div>
            <DialogTitle className="font-semibold text-base leading-snug line-clamp-2 mb-2">
              {title}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mb-6">
              Opens{" "}
              <span className="font-medium text-foreground underline decoration-white-500">
                {domain}
              </span>{" "}
              in a new tab.
            </p>

            <DialogFooter className="flex-row gap-2 sm:gap-2">
              <DialogClose asChild>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </DialogClose>
              <Button className="flex-1" asChild onClick={() => setOpen(false)}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Read
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
