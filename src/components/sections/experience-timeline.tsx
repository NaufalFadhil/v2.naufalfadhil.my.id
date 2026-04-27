"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { experiences, type Experience } from "@/data/experience";
import { formatDate, calculateDuration } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";

const typeStyle: Record<Experience["type"], { border: string; gradient: string; badge: string; hover: string }> = {
  "Full-time":  {
    border: "border-l-blue-500/60",
    gradient: "from-blue-500/5 via-card to-card",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    hover: "hover:from-blue-500/20 hover:shadow-blue-500/10",
  },
  "Part-time": {
    border: "border-l-violet-500/60",
    gradient: "from-violet-500/5 via-card to-card",
    badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    hover: "hover:from-violet-500/20 hover:shadow-violet-500/10",
  },
  Internship: {
    border: "border-l-amber-500/60",
    gradient: "from-amber-500/5 via-card to-card",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    hover: "hover:from-amber-500/20 hover:shadow-amber-500/10",
  },
  Freelance: {
    border: "border-l-emerald-500/60",
    gradient: "from-emerald-500/5 via-card to-card",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    hover: "hover:from-emerald-500/20 hover:shadow-emerald-500/10",
  },
  Contract: {
    border: "border-l-orange-500/60",
    gradient: "from-orange-500/5 via-card to-card",
    badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    hover: "hover:from-orange-500/20 hover:shadow-orange-500/10",
  },
};

export function ExperienceTimeline() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Experience"
        description="Places I've worked and what I've built there."
      />

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => {
          const style = typeStyle[exp.type];
          const isPresent = !exp.end;

          return (
            <motion.div
              key={exp.id}
              className={`rounded-xl border border-border border-l-2 ${style.border} bg-gradient-to-r ${style.gradient} p-5 shadow-sm transition-all duration-300 hover:shadow-md ${style.hover}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-base leading-tight">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                    <span className="font-medium text-foreground/70">{exp.company}</span>
                    <span aria-hidden>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5">
                    {isPresent && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(exp.start)} — {isPresent ? "Present" : formatDate(exp.end!)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${style.badge}`}>
                      {exp.type}
                    </span>
                    <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                      {calculateDuration(exp.start, exp.end)}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed mb-3">{exp.summary}</p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
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
