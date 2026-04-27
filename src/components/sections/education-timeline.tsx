"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";
import { formatDate, calculateDuration } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/section-header";

const colorScheme = {
  indigo: {
    card:     "border-l-indigo-500/60 from-indigo-500/5 hover:from-indigo-500/20 hover:shadow-indigo-500/10",
    icon:     "bg-indigo-500/10",
    iconText: "text-indigo-600 dark:text-indigo-400",
    ping:     "bg-indigo-400",
    dot2:     "bg-indigo-500",
    badge:    "border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    bullet:   "bg-indigo-500/50",
  },
  teal: {
    card:     "border-l-teal-500/60 from-teal-500/5 hover:from-teal-500/20 hover:shadow-teal-500/10",
    icon:     "bg-teal-500/10",
    iconText: "text-teal-600 dark:text-teal-400",
    ping:     "bg-teal-400",
    dot2:     "bg-teal-500",
    badge:    "border-teal-500/20 bg-teal-500/10 text-teal-600 dark:text-teal-400",
    bullet:   "bg-teal-500/50",
  },
  amber: {
    card:     "border-l-amber-500/60 from-amber-500/5 hover:from-amber-500/20 hover:shadow-amber-500/10",
    icon:     "bg-amber-500/10",
    iconText: "text-amber-600 dark:text-amber-400",
    ping:     "bg-amber-400",
    dot2:     "bg-amber-500",
    badge:    "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    bullet:   "bg-amber-500/50",
  },
};

export function EducationTimeline() {
  return (
    <section className="py-16">
      <SectionHeader title="Education" />

      <div className="flex flex-col gap-4">
        {education.map((edu, i) => {
          const isPresent = !edu.end;
          const c = colorScheme[edu.color ?? "teal"];
          return (
            <motion.div
              key={edu.id}
              className={`rounded-xl border border-border border-l-2 bg-gradient-to-r via-card to-card p-5 shadow-sm transition-all duration-300 hover:shadow-md ${c.card}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-md ${c.icon}`}>
                      <GraduationCap className={`h-3 w-3 ${c.iconText}`} />
                    </div>
                    <h3 className="font-semibold text-base leading-tight">
                      {edu.degree} — {edu.major}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm pl-7">
                    <span className="font-medium text-foreground/70">{edu.institution}</span>
                    <span aria-hidden>·</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5">
                    {isPresent && (
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${c.ping} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${c.dot2}`} />
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(edu.start)} — {isPresent ? "Present" : formatDate(edu.end!)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${c.badge}`}>
                      {calculateDuration(edu.start, edu.end)}
                    </span>
                    {edu.gpa && (
                      <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {edu.description && (
                <ul className="space-y-1.5 mt-2 mb-3 pl-7">
                  {edu.description.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground/65">
                      <span className={`mt-1.5 h-1 w-1 rounded-full ${c.bullet} shrink-0`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {edu.activities && (
                <div className="flex flex-wrap gap-1.5 pl-7">
                  {edu.activities.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs text-foreground/70"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
