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

const iconStyle: Record<string, { dot: string; icon: string }> = {
  Trophy:        { dot: "bg-background border-amber-500",   icon: "text-amber-500"  },
  Code2:         { dot: "bg-background border-indigo-500",  icon: "text-indigo-500" },
  Star:          { dot: "bg-background border-violet-500",  icon: "text-violet-500" },
  GitPullRequest:{ dot: "bg-background border-emerald-500", icon: "text-emerald-500" },
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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" aria-hidden />

        <div className="flex flex-col gap-8">
          {years.map((year) => (
            <section key={year} className="flex flex-col gap-6">
              {/* Year marker */}
              <div className="relative flex items-center pl-10">
                <div className="absolute left-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                </div>
                <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                  {year}
                </h2>
              </div>

              {byYear[year].map((achievement) => {
                const iconKey = achievement.icon ?? "Trophy";
                const Icon = iconMap[iconKey] ?? Trophy;
                const style = iconStyle[iconKey] ?? iconStyle["Trophy"];
                return (
                  <div key={achievement.id} className="relative flex gap-6 pl-10">
                    <div className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 shadow-sm ${style.dot}`}>
                      <Icon className={`h-3 w-3 ${style.icon}`} />
                    </div>
                    <div className="flex-1 min-w-0 rounded-xl border border-border bg-card p-4">
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
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
