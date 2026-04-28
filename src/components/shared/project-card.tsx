"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectDetailModal } from "./project-detail-modal";

type ProjectCardProps = {
  project: Project;
};

const statusColors: Record<Project["status"], string> = {
  completed:    "bg-indigo-500 text-white border-indigo-600",
  "in-progress": "bg-amber-500 text-white border-amber-600",
  archived:     "bg-zinc-500 text-white border-zinc-600",
};

const cardGradient: Record<Project["status"], string> = {
  completed:    "from-indigo-500/5 hover:from-indigo-500/30 hover:shadow-indigo-500/20",
  "in-progress": "from-amber-500/5 hover:from-amber-500/30 hover:shadow-amber-500/20",
  archived:     "from-zinc-500/5 hover:from-zinc-500/30 hover:shadow-zinc-500/20",
};

const contentBorder: Record<Project["status"], string> = {
  completed:    "border-l-indigo-500",
  "in-progress": "border-l-amber-500",
  archived:     "border-l-zinc-500",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card
        className={`group flex flex-col overflow-hidden bg-gradient-to-b to-transparent shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer h-full ${cardGradient[project.status]}`}
        onClick={() => setModalOpen(true)}
      >
        {/* Screenshot */}
        <div className="relative h-44 bg-muted overflow-hidden">
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 ${
              project.status === "completed" ? "bg-gradient-to-br from-indigo-500/10 to-indigo-500/5" :
              project.status === "in-progress" ? "bg-gradient-to-br from-amber-500/10 to-amber-500/5" :
              "bg-gradient-to-br from-zinc-500/10 to-zinc-500/5"
            }`}>
              {/* Decorative blobs */}
              <div className={`absolute -top-6 -right-6 h-24 w-24 rounded-full opacity-40 blur-2xl ${
                project.status === "completed" ? "bg-indigo-500" :
                project.status === "in-progress" ? "bg-amber-500" : "bg-zinc-500"
              }`} />
              <div className={`absolute -bottom-6 -left-6 h-20 w-20 rounded-full opacity-30 blur-2xl ${
                project.status === "completed" ? "bg-indigo-400" :
                project.status === "in-progress" ? "bg-amber-400" : "bg-zinc-400"
              }`} />
              {/* Title initial */}
              <span className={`text-4xl font-black select-none opacity-40 ${
                project.status === "completed" ? "text-indigo-600 dark:text-indigo-400" :
                project.status === "in-progress" ? "text-amber-600 dark:text-amber-400" : "text-zinc-600 dark:text-zinc-400"
              }`}>
                {project.title.charAt(0)}
              </span>
              {/* Tech pills */}
              <div className="flex flex-wrap justify-center gap-1.5 px-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className={`rounded-full border px-2 py-0.5 text-[10px] backdrop-blur-sm ${
                    project.status === "completed" ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400" :
                    project.status === "in-progress" ? "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400" :
                    "border-zinc-500/30 bg-zinc-500/10 text-zinc-700 dark:text-zinc-400"
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[project.status]}`}>
              {project.status === "in-progress" ? "In Progress" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 border-l-2 rounded-bl-xl ${contentBorder[project.status]}`}>
          <CardContent className="flex-1 pt-5">
            <h3 className="font-semibold text-base leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tech.slice(0, 5).map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
              {project.tech.length > 5 && (
                <Badge variant="outline" className="text-xs font-normal">
                  +{project.tech.length - 5}
                </Badge>
              )}
            </div>
          </CardContent>

          {(project.github || project.demo) && (
            <CardFooter className="gap-2 border-t border-border pt-4">
              {project.github && (
                <Button variant="outline" size="sm" asChild className="h-7 text-xs" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" asChild className="h-7 text-xs" onClick={(e) => e.stopPropagation()}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          )}
        </div>
      </Card>

      <ProjectDetailModal
        project={project}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
