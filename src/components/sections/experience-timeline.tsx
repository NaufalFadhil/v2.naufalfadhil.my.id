"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { formatDate, calculateDuration } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Experience"
        description="Places I've worked and what I've built there."
      />

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-colors"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold text-sm leading-tight">{exp.role}</h3>
                <div className="flex items-center gap-2 mt-0.5 text-muted-foreground text-xs">
                  <span>{exp.company}</span>
                  <span aria-hidden>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatDate(exp.start)} — {exp.end ? formatDate(exp.end) : "Present"}
                </span>
                <div className="flex items-center gap-1.5">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {exp.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                    {calculateDuration(exp.start, exp.end)}
                  </Badge>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.summary}</p>

            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <Badge key={t} variant="outline" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          href="/experience"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View full experience
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
