import type { Metadata } from "next";
import { Monitor, Server, Smartphone, Database, Cloud, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { getSkillIcon } from "@/lib/skill-icons";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies, languages, and tools in my toolkit.",
};

const categoryIconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
};

export default function SkillsPage() {
  return (
    <Container className="pt-28 pb-20">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Skills</h1>
      <p className="text-muted-foreground text-sm mb-12">
        Technologies, languages, and tools I use to build things.
      </p>

      <div className="flex flex-col gap-10">
        {skillGroups.map((group) => {
          const CategoryIcon = categoryIconMap[group.icon] ?? Wrench;
          return (
            <section key={group.category}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                  <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h2 className="text-lg font-semibold">{group.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const SkillIcon = getSkillIcon(skill.icon);
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      {SkillIcon && (
                        <SkillIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
