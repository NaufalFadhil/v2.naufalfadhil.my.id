import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiGo,
  SiLaravel,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiNodedotjs,
  SiRedis,
  SiLinux,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";

type TechItem = {
  name: string;
  Icon: IconType;
  color: string;
};

const techStack: TechItem[] = [
  { name: "Next.js",      Icon: SiNextdotjs,   color: "#000000" },
  { name: "React",        Icon: SiReact,        color: "#61DAFB" },
  { name: "TypeScript",   Icon: SiTypescript,   color: "#3178C6" },
  { name: "Go",           Icon: SiGo,           color: "#00ADD8" },
  { name: "Laravel",      Icon: SiLaravel,      color: "#FF2D20" },
  { name: "PostgreSQL",   Icon: SiPostgresql,   color: "#4169E1" },
  { name: "Docker",       Icon: SiDocker,       color: "#2496ED" },
  { name: "Tailwind CSS", Icon: SiTailwindcss,  color: "#06B6D4" },
  { name: "Node.js",      Icon: SiNodedotjs,    color: "#339933" },
  { name: "Redis",        Icon: SiRedis,        color: "#DC382D" },
  { name: "Linux",        Icon: SiLinux,        color: "#FCC624" },
  { name: "GitHub",       Icon: SiGithub,       color: "#181717" },
];

function TechCard({ name, Icon, color }: TechItem) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-2.5 shadow-sm mx-2 shrink-0">
      <Icon
        className="h-4 w-4 shrink-0"
        style={{ color }}
      />
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechStackMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-12">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6 text-center">
        Tech Stack
      </p>
      <div
        className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group"
        aria-hidden
      >
        <div className="flex animate-marquee-left group-hover:[animation-play-state:paused]">
          {doubled.map((tech, i) => (
            <TechCard key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
