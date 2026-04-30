"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { publishedProjects as projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/shared/project-card";
import { FilterTagButton } from "@/components/shared/filter-tag-button";
import { EmptyState } from "@/components/shared/empty-state";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
const statusFilters = ["all", "in-progress", "completed", "archived"] as const;

type Status = (typeof statusFilters)[number];

function formatStatus(status: Status): string {
  if (status === "all") return "All";
  if (status === "in-progress") return "In Progress";
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<Status>("all");

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
            {formatStatus(s)}
          </button>
        ))}
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <FilterTagButton
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-5">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} colorIndex={i} />
          ))}
        </div>
      ) : (
        <EmptyState
          message="No projects match your filters."
          onClear={() => { setSearch(""); setActiveTag(null); setActiveStatus("all"); }}
        />
      )}
    </Container>
  );
}
