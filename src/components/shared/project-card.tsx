import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: Project;
};

const statusColors: Record<Project["status"], string> = {
  completed:    "bg-emerald-500 text-white border-emerald-600",
  "in-progress": "bg-blue-500 text-white border-blue-600",
  archived:     "bg-zinc-500 text-white border-zinc-600",
};

const cardGradient: Record<Project["status"], string> = {
  completed:    "border-l-emerald-500 from-emerald-500/5 hover:from-emerald-500/30 hover:shadow-emerald-500/20",
  "in-progress": "border-l-blue-500 from-blue-500/5 hover:from-blue-500/30 hover:shadow-blue-500/20",
  archived:     "border-l-zinc-500 from-zinc-500/5 hover:from-zinc-500/30 hover:shadow-zinc-500/20",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={`group flex flex-col overflow-hidden border-l-2 bg-gradient-to-b to-transparent shadow-sm transition-all duration-300 hover:shadow-md ${cardGradient[project.status]}`}>
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
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
            <span className="text-3xl font-bold text-muted-foreground/20 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[project.status]}`}
          >
            {project.status === "in-progress" ? "In Progress" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
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

      <CardFooter className="gap-2 border-t border-border pt-4">
        {project.github && (
          <Button variant="outline" size="sm" asChild className="h-7 text-xs">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button size="sm" asChild className="h-7 text-xs">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
