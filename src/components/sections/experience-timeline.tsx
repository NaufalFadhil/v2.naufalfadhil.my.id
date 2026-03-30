"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" aria-hidden />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative flex gap-6 pl-10"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm">
                <Briefcase className="h-3 w-3 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-sm leading-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-0.5 text-muted-foreground text-sm">
                      <span>{exp.company}</span>
                      <span aria-hidden>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end shrink-0 gap-1">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(exp.start)} — {exp.end ? formatDate(exp.end) : "Present"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {calculateDuration(exp.start, exp.end)}
                    </span>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-1.5 mt-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
