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
          return (
            <motion.div
              key={group.category}
              className="rounded-xl border border-border bg-card p-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
                  <CategoryIcon className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => {
                  const SkillIcon = getSkillIcon(skill.icon);
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground"
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
