"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const statusColors: Record<Project["status"], string> = {
  completed:    "bg-indigo-500 text-white border-indigo-600",
  "in-progress": "bg-amber-500 text-white border-amber-600",
  archived:     "bg-zinc-500 text-white border-zinc-600",
};

interface ProjectDetailModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, open, onClose }: ProjectDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0">
        {/* Screenshot */}
        {project.screenshot && (
          <div className="relative w-full aspect-video bg-muted">
            <Image
              src={project.screenshot}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="672px"
            />
          </div>
        )}

        <div className="p-6 flex flex-col gap-4">
          <DialogHeader className="gap-2">
            {/* Status + year */}
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[project.status]}`}>
                {project.status === "in-progress" ? "In Progress" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>

            <DialogTitle className="text-xl font-bold leading-snug text-left">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Description */}
          <p className="text-sm text-foreground/70 leading-relaxed">
            {project.longDescription ?? project.description}
          </p>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex gap-2 pt-1">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
