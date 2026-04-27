import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { formatDate, calculateDuration } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

const typeStyle: Record<string, { dot: string; icon: string; profile: string }> = {
  "Full-time":  { dot: "bg-background border-indigo-500",  icon: "text-indigo-500",  profile: "border-l-indigo-500  bg-indigo-500/5  text-indigo-300/80" },
  "Part-time":  { dot: "bg-background border-violet-500",  icon: "text-violet-500",  profile: "border-l-violet-500  bg-violet-500/5  text-violet-300/80" },
  "Internship": { dot: "bg-background border-amber-500",   icon: "text-amber-500",   profile: "border-l-amber-500   bg-amber-500/5   text-amber-300/80"  },
  "Freelance":  { dot: "bg-background border-emerald-500", icon: "text-emerald-500", profile: "border-l-emerald-500 bg-emerald-500/5 text-emerald-300/80" },
  "Contract":   { dot: "bg-background border-orange-500",  icon: "text-orange-500",  profile: "border-l-orange-500  bg-orange-500/5  text-orange-300/80" },
};

export const metadata: Metadata = {
  title: "Experience",
  description: "My work history — companies I've worked with, roles I've held, and things I've shipped.",
};

export default function ExperiencePage() {
  return (
    <Container className="pt-28 pb-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        <p className="text-muted-foreground mt-2 text-sm max-w-xl">
          Companies I&apos;ve worked with, roles I&apos;ve held, and things I&apos;ve shipped.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" aria-hidden />

        <div className="flex flex-col gap-10">
          {experiences.map((exp) => {
            const style = typeStyle[exp.type] ?? typeStyle["Full-time"];
            return (
            <div key={exp.id} className="relative flex gap-6 pl-10">
              {/* Dot */}
              <div className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 shadow-sm ${style.dot}`}>
                <Briefcase className={`h-3 w-3 ${style.icon}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h2 className="font-semibold text-sm leading-tight">{exp.role}</h2>
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

                {exp.companyProfile && (
                  <p className={`text-sm leading-relaxed mt-3 mb-2 border-l-2 pl-3 py-2 rounded-r-lg italic ${style.profile}`}>
                    {exp.companyProfile}
                  </p>
                )}

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
            </div>
          )})}
        </div>
      </div>
    </Container>
  );
}
