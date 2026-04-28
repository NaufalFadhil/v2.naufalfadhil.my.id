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
  colorIndex?: number;
};

type ColorScheme = {
  badge:       string;
  gradient:    string;
  border:      string;
  placeholder: string;
  blob1:       string;
  blob2:       string;
  initial:     string;
  pill:        string;
};

const completedColors: ColorScheme[] = [
  {
    badge:       "bg-indigo-500 text-white border-indigo-600",
    gradient:    "from-indigo-500/5 hover:from-indigo-500/30 hover:shadow-indigo-500/20",
    border:      "border-l-indigo-500",
    placeholder: "from-indigo-500/10 to-indigo-500/5",
    blob1:       "bg-indigo-500",
    blob2:       "bg-indigo-400",
    initial:     "text-indigo-600 dark:text-indigo-400",
    pill:        "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
  },
  {
    badge:       "bg-emerald-500 text-white border-emerald-600",
    gradient:    "from-emerald-500/5 hover:from-emerald-500/30 hover:shadow-emerald-500/20",
    border:      "border-l-emerald-500",
    placeholder: "from-emerald-500/10 to-emerald-500/5",
    blob1:       "bg-emerald-500",
    blob2:       "bg-emerald-400",
    initial:     "text-emerald-600 dark:text-emerald-400",
    pill:        "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  {
    badge:       "bg-blue-500 text-white border-blue-600",
    gradient:    "from-blue-500/5 hover:from-blue-500/30 hover:shadow-blue-500/20",
    border:      "border-l-blue-500",
    placeholder: "from-blue-500/10 to-blue-500/5",
    blob1:       "bg-blue-500",
    blob2:       "bg-blue-400",
    initial:     "text-blue-600 dark:text-blue-400",
    pill:        "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  {
    badge:       "bg-rose-500 text-white border-rose-600",
    gradient:    "from-rose-500/5 hover:from-rose-500/30 hover:shadow-rose-500/20",
    border:      "border-l-rose-500",
    placeholder: "from-rose-500/10 to-rose-500/5",
    blob1:       "bg-rose-500",
    blob2:       "bg-rose-400",
    initial:     "text-rose-600 dark:text-rose-400",
    pill:        "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-400",
  },
];

const otherColors: Record<string, ColorScheme> = {
  "in-progress": {
    badge:       "bg-amber-500 text-white border-amber-600",
    gradient:    "from-amber-500/5 hover:from-amber-500/30 hover:shadow-amber-500/20",
    border:      "border-l-amber-500",
    placeholder: "from-amber-500/10 to-amber-500/5",
    blob1:       "bg-amber-500",
    blob2:       "bg-amber-400",
    initial:     "text-amber-600 dark:text-amber-400",
    pill:        "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  archived: {
    badge:       "bg-zinc-500 text-white border-zinc-600",
    gradient:    "from-zinc-500/5 hover:from-zinc-500/30 hover:shadow-zinc-500/20",
    border:      "border-l-zinc-500",
    placeholder: "from-zinc-500/10 to-zinc-500/5",
    blob1:       "bg-zinc-500",
    blob2:       "bg-zinc-400",
    initial:     "text-zinc-600 dark:text-zinc-400",
    pill:        "border-zinc-500/30 bg-zinc-500/10 text-zinc-700 dark:text-zinc-400",
  },
};

export function ProjectCard({ project, colorIndex = 0 }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const c: ColorScheme =
    project.status === "completed"
      ? completedColors[colorIndex % completedColors.length]
      : otherColors[project.status];

  return (
    <>
      <Card
        className={`group flex flex-col overflow-hidden bg-gradient-to-b to-transparent shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer h-full ${c.gradient}`}
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
            <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 bg-gradient-to-br ${c.placeholder}`}>
              <div className={`absolute -top-6 -right-6 h-24 w-24 rounded-full opacity-40 blur-2xl ${c.blob1}`} />
              <div className={`absolute -bottom-6 -left-6 h-20 w-20 rounded-full opacity-30 blur-2xl ${c.blob2}`} />
              <span className={`select-none ${
                project.icon
                  ? `font-bold ${c.initial} ${project.icon.length === 1 ? "text-5xl opacity-80" : project.icon.length <= 4 ? "text-3xl opacity-90" : "text-xl opacity-90"}`
                  : `text-4xl font-black opacity-40 ${c.initial}`
              }`}>
                {project.icon ?? project.title.charAt(0)}
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 px-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className={`rounded-full border px-2 py-0.5 text-[10px] backdrop-blur-sm ${c.pill}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${c.badge}`}>
              {project.status === "in-progress" ? "In Progress" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 border-l-2 rounded-bl-xl ${c.border}`}>
          <CardContent className="flex-1 pt-5">
            <h3 className="font-semibold text-base leading-tight mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tech.slice(0, 5).map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">{t}</Badge>
              ))}
              {project.tech.length > 5 && (
                <Badge variant="outline" className="text-xs font-normal">+{project.tech.length - 5}</Badge>
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
