"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";
import { formatDate, calculateDuration } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/section-header";

export function EducationTimeline() {
  return (
    <section className="py-16">
      <SectionHeader title="Education" />

      <div className="relative">
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" aria-hidden />

        <div className="flex flex-col gap-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="relative flex gap-6 pl-10"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm">
                <GraduationCap className="h-3 w-3 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-sm leading-tight">
                      {edu.degree} — {edu.major}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-muted-foreground text-sm">
                      <span>{edu.institution}</span>
                      <span aria-hidden>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end shrink-0 gap-0.5">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(edu.start)} — {edu.end ? formatDate(edu.end) : "Present"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {calculateDuration(edu.start, edu.end)}
                    </span>
                    {edu.gpa && (
                      <span className="text-xs text-muted-foreground">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {edu.description && (
                  <ul className="space-y-1.5 mt-3">
                    {edu.description.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {edu.activities && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {edu.activities.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
