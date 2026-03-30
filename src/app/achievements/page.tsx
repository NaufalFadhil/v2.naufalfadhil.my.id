import type { Metadata } from "next";
import { Trophy, Code2, Star, GitPullRequest } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, competitions, and milestones I'm proud of.",
};

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Code2,
  Star,
  GitPullRequest,
};

export default function AchievementsPage() {
  const byYear = achievements.reduce<Record<number, typeof achievements>>(
    (acc, a) => {
      if (!acc[a.year]) acc[a.year] = [];
      acc[a.year].push(a);
      return acc;
    },
    {}
  );

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Container className="pt-28 pb-20">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Achievements</h1>
      <p className="text-muted-foreground text-sm mb-12">
        Awards, competitions, and milestones I&apos;m proud of.
      </p>

      <div className="flex flex-col gap-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-lg font-semibold mb-5">{year}</h2>

            <div className="relative pl-6 border-l border-border space-y-6">
              {byYear[year].map((achievement) => {
                const Icon = iconMap[achievement.icon ?? "Trophy"] ?? Trophy;
                return (
                  <div key={achievement.id} className="relative">
                    <div className="absolute -left-[25px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-background">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-sm leading-snug">
                          {achievement.title}
                        </h3>
                        {achievement.position && (
                          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400 shrink-0">
                            {achievement.position}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.event}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-0.5">
                        {achievement.organizer}
                      </p>
                      {achievement.description && (
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
