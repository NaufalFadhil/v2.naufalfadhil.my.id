import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Coffee, Music, BookOpen, Gamepad2, Globe, Monitor } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Naufal Fadhil — who I am, what I do, and what I care about.",
};

const values = [
  {
    title: "Ship > Perfect",
    description: "Done is better than perfect. I believe in iterating in public and learning from real usage.",
    color: "border-l-indigo-500 from-indigo-500/5",
    hover: "hover:from-indigo-500/20 hover:shadow-indigo-500/10",
  },
  {
    title: "Keep it simple",
    description: "Good systems are understandable systems. I avoid unnecessary complexity whenever possible.",
    color: "border-l-violet-500 from-violet-500/5",
    hover: "hover:from-violet-500/20 hover:shadow-violet-500/10",
  },
  {
    title: "Stay curious",
    description: "I like digging into how things actually work — from distributed systems to human behavior.",
    color: "border-l-amber-500 from-amber-500/5",
    hover: "hover:from-amber-500/20 hover:shadow-amber-500/10",
  },
  {
    title: "Care about the craft",
    description: "I care deeply about the quality of my work — Clean APIs, readable code, and thoughtful UX matter. Details compound.",
    color: "border-l-emerald-500 from-emerald-500/5",
    hover: "hover:from-emerald-500/20 hover:shadow-emerald-500/10",
  },
];

const interests = [
  { icon: Coffee,   label: "Coffee",  color: "border-amber-500/40  text-amber-600  dark:text-amber-400  bg-amber-500/5"  },
  { icon: Music,    label: "Music",   color: "border-violet-500/40 text-violet-600 dark:text-violet-400 bg-violet-500/5" },
  { icon: BookOpen, label: "Reading", color: "border-indigo-500/40 text-indigo-600 dark:text-indigo-400 bg-indigo-500/5" },
  { icon: Gamepad2, label: "Gaming",  color: "border-blue-500/40   text-blue-600   dark:text-blue-400   bg-blue-500/5"   },
  { icon: Monitor,   label: "Tech",    color: "border-teal-500/40    text-teal-600    dark:text-teal-400    bg-teal-500/5"    },
  { icon: Globe,    label: "Travel",  color: "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5" },
];

const funFacts = [
  "I've been coding since I was 16, starting with simple C/C++ robotics projects and evolving into web development",
  "My first paid project is winning a robotics competition and get a cash prize IDR 1 Million (around $70) — not bad for a first gig!",
  "I have a habit of over-engineering solutions for fun — building a custom home server with Kubernetes and Ansible just to host my personal website and projects.",
  "I prefer dark mode at all times, even on paper (hypothetically). Please never trust a light mode user.",
  "Occasionally handle production issues when called, even outside working hours — I find it oddly satisfying to debug and fix things under pressure.",
];

export default function AboutPage() {
  return (
    <Container className="pt-28 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
        <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-border shadow-sm shrink-0">
          <Image src={siteConfig.avatar} alt={siteConfig.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {siteConfig.location}
          </p>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-12">
        <SectionHeader title="Bio" />
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            Hey, I&apos;m Naufal — a builder, engineer, and occasional alien based in Indonesia. I spend most of my time turning messy ideas into working systems — from backend services in Go and Laravel to full-stack products that people actually use.
          </p>
          <p>
            I&apos;m currently studying Informatics Engineering while building and shipping projects on the side. I don't really separate "learning" and "working" — for me, the fastest way to understand something is to build it, ship it, and see what breaks.
          </p>
          <p>
            Lately, I&apos;ve been going deeper into AI, developer tooling, and system design — not just experimenting, but trying to build things that are genuinely useful.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m probably reading, listening to music, or exploring a new
            technology rabbit hole. I&apos;m passionate about developer tooling, AI applications, and
            clean system design.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="mb-12">
      <SectionHeader
        title="Journey"
        description={`${new Date().getFullYear() - 2013} years of building, learning, and shipping — from tech nerds to engineering systems.`}
      />
        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="flex flex-col gap-6">
            {(() => {
              const items = [
                { year: "2026", title: "Future goals and aspirations", desc: "Continuing to grow as a developer, building impactful products, and exploring new frontiers in technology.", dot: "bg-background border-amber-500", inner: "bg-amber-500" },
                { year: "2023", title: "Graduated and looking for new opportunities", desc: "Finished my bachelor's degree and excited to take on new challenges in software engineering.", dot: "bg-background border-indigo-500", inner: "bg-indigo-500" },
                { year: "2020", title: "First internship and part-time job", desc: "Gained real-world experience working on production systems for a transportation startup and my university's computing center.", dot: "bg-background border-violet-500", inner: "bg-violet-500" },
                { year: "2019", title: "Started university and web development journey", desc: "Began studying informatics engineering and building web projects using JavaScript and PHP.", dot: "bg-background border-emerald-500", inner: "bg-emerald-500" },
                { year: "2018", title: "Winning a robotics competition", desc: "Won a regional robotics competition from solving a real-world problem and got a cash prize for my first paid gig.", dot: "bg-background border-emerald-500", inner: "bg-emerald-500" },
                { year: "2017", title: "First coding experience", desc: "Joined a robotics club and started learning C/C++ to program microcontrollers for fun projects.", dot: "bg-background border-emerald-500", inner: "bg-emerald-500" },
                { year: "2016", title: "Vocational school", desc: "Studied computer and network engineering, got hands-on experience with hardware and networking.", dot: "bg-background border-emerald-500", inner: "bg-emerald-500" },
                { year: "2013", title: "Playing with computers and gadgets", desc: "Tinkering with anything I can get my hands on — from old PCs to smartphones.", dot: "bg-background border-amber-500", inner: "bg-amber-500" },

              ];
              return items.map(({ year, title, desc, dot, inner }, i) => {
                const isFirstOfYear = items[i - 1]?.year !== year;
                return (
                  <div key={i} className="relative flex gap-6 pl-10">
                    {isFirstOfYear && (
                      <div className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 shadow-sm ${dot}`}>
                        <span className={`w-2 h-2 rounded-full ${inner}`} />
                      </div>
                    )}
                    <div>
                      {isFirstOfYear && (
                        <span className="text-xs font-medium text-muted-foreground">{year}</span>
                      )}
                      <h3 className="text-sm font-semibold mt-0.5">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <SectionHeader title="Values" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className={`rounded-xl border border-border border-l-2 bg-gradient-to-br to-transparent p-4 shadow-sm transition-all duration-300 hover:shadow-md ${v.color} ${v.hover}`}>
              <h3 className="text-sm font-semibold mb-1">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mb-12">
        <SectionHeader title="Interests" />
        <div className="flex flex-wrap gap-3">
          {interests.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${color}`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="mb-12">
        <SectionHeader title="Goals" />
        <ul className="space-y-2">
          {[
            "Ship an product that people actually pay for and rely on.",
            "Go deeper into systems, infrastructure, and scalable architectures.",
            "Contribute meaningfully to open source projects I use daily.",
            "Work with a world-class team on products that matter.",
            "Building a company with many products helping real users and customers.",
            "Travelling to new places and experiencing different cultures.",
          ].map((goal) => (
            <li key={goal} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
              {goal}
            </li>
          ))}
        </ul>
      </section>

      {/* Fun facts */}
      <section>
        <SectionHeader title="Fun Facts" />
        <ul className="space-y-2">
          {funFacts.map((fact) => (
            <li key={fact} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-foreground shrink-0">→</span>
              {fact}
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
