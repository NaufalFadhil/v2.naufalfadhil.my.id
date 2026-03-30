"use client";

import { FileText, Download, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

type ResumeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Resume — {siteConfig.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <Button size="sm" asChild>
            <a href={siteConfig.resume} download>
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              Open in new tab
            </a>
          </Button>
        </div>

        <div className="flex-1 rounded-lg overflow-hidden border border-border">
          <iframe
            src={`${siteConfig.resume}#view=FitH`}
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
