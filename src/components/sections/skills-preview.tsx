"use client";

import Link from "next/link";
import { ArrowRight, Monitor, Server, Smartphone, Database, Cloud, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { getSkillIcon } from "@/lib/skill-icons";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

const categoryIconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
};

const categoryColorMap: Record<string, { icon: string; gradient: string; border: string }> = {
  Monitor:    { icon: "text-blue-600 dark:text-blue-400 bg-blue-500/10",    gradient: "from-blue-500/5 via-card to-card",    border: "border-l-blue-500/50" },
  Server:     { icon: "text-violet-600 dark:text-violet-400 bg-violet-500/10", gradient: "from-violet-500/5 via-card to-card", border: "border-l-violet-500/50" },
  Smartphone: { icon: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10", gradient: "from-emerald-500/5 via-card to-card", border: "border-l-emerald-500/50" },
  Database:   { icon: "text-amber-600 dark:text-amber-400 bg-amber-500/10",  gradient: "from-amber-500/5 via-card to-card",  border: "border-l-amber-500/50" },
  Cloud:      { icon: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",     gradient: "from-cyan-500/5 via-card to-card",   border: "border-l-cyan-500/50" },
  Wrench:     { icon: "text-zinc-600 dark:text-zinc-400 bg-zinc-500/10",     gradient: "from-zinc-500/5 via-card to-card",   border: "border-l-zinc-500/50" },
};

export function SkillsPreview() {
  return (
    <section className="py-16">
      <div className="flex items-end justify-between mb-8">
        <SectionHeader
          title="Skills"
          description="Technologies and tools I work with."
          className="mb-0"
        />
        <Button variant="ghost" size="sm" asChild className="shrink-0">
          <Link href="/skills">
            All skills
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.slice(0, 6).map((group, i) => {
          const CategoryIcon = categoryIconMap[group.icon] ?? Wrench;
          const colors = categoryColorMap[group.icon] ?? categoryColorMap.Wrench;
          return (
            <motion.div
              key={group.category}
              className={`rounded-xl border border-border border-l-2 ${colors.border} bg-gradient-to-r ${colors.gradient} p-4 hover:shadow-sm transition-shadow duration-200`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`flex h-7 w-7 items-center justify-center rounded-md ${colors.icon}`}>
                  <CategoryIcon className="h-3.5 w-3.5" />
                </div>
                <h3 className="text-sm font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => {
                  const SkillIcon = getSkillIcon(skill.icon);
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-foreground/70"
                    >
                      {SkillIcon && <SkillIcon className="h-3 w-3 shrink-0" />}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
