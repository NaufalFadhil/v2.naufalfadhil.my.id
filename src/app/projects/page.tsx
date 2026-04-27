"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { publishedProjects as projects } from "@/data/projects";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/shared/project-card";
import { cn } from "@/lib/utils";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
const statusFilters = ["all", "in-progress", "completed", "archived"] as const;

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<string>("all");

  const filtered = useMemo(() => {
    return projects
      .filter((p) => {
        const matchesSearch =
          !search ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

        const matchesTag = !activeTag || p.tags.includes(activeTag);
        const matchesStatus = activeStatus === "all" || p.status === activeStatus;

        return matchesSearch && matchesTag && matchesStatus;
      })
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.year - a.year;
      });
  }, [search, activeTag, activeStatus]);

  return (
    <Container className="pt-28 pb-20">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Things I&apos;ve built — shipped, open source, and in progress.
      </p>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects, tech, tags…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {statusFilters.map((s) => (
          <button
            key={s}
            onClick={() => setActiveStatus(s)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors capitalize",
              activeStatus === s
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {s === "all" ? "All" : s === "in-progress" ? "In Progress" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              activeTag === tag
                ? "border-foreground bg-foreground text-background font-medium"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground mb-5">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-muted-foreground text-sm">No projects match your filters.</p>
          <button
            onClick={() => { setSearch(""); setActiveTag(null); setActiveStatus("all"); }}
            className="mt-3 text-xs text-foreground underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </Container>
  );
}
