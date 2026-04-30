"use client";

import { useState, useMemo } from "react";
import { Search, ExternalLink, Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FilterTagButton } from "@/components/shared/filter-tag-button";
import { EmptyState } from "@/components/shared/empty-state";

const allTags = Array.from(new Set(certificates.flatMap((c) => c.tags))).sort();

export default function CertificatesPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return certificates.filter((c) => {
      const matchesSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.issuer.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || c.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <Container className="pt-28 pb-20">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Certificates</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Courses, programs, and certifications I&apos;ve completed.
      </p>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search certificates or issuers…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
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
        {filtered.length} certificate{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-border bg-card p-5 flex flex-col gap-3 hover:shadow-sm transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted shrink-0">
                  <Award className="h-5 w-5 text-muted-foreground" />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View credential"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{formatDate(cert.date)}</p>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground/60 mt-0.5 font-mono">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          message="No certificates match your filters."
          onClear={() => { setSearch(""); setActiveTag(null); }}
        />
      )}
    </Container>
  );
}
