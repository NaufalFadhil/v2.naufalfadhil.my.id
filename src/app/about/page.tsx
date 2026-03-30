import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Coffee, Music, BookOpen, Gamepad2, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Naufal Fadhil — who I am, what I do, and what I care about.",
};

const values = [
  {
    title: "Ship it",
    description: "Done is better than perfect. I believe in iterating in public and learning from real usage.",
  },
  {
    title: "Simplicity",
    description: "The best code is no code. I aim to solve problems with the fewest abstractions necessary.",
  },
  {
    title: "Curiosity",
    description: "I'm perpetually curious about how things work under the hood — from compilers to human behavior.",
  },
  {
    title: "Craft",
    description: "I care deeply about the quality of my work — clean APIs, readable code, polished UIs.",
  },
];

const interests = [
  { icon: Coffee, label: "Coffee" },
  { icon: Music, label: "Music" },
  { icon: BookOpen, label: "Reading" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Globe, label: "Travel" },
];

const funFacts = [
  "I've been coding since I was 14, starting with HTML & CSS for fan sites.",
  "My first paid project was a simple school website for $15.",
  "I type at ~100 WPM and use a custom keyboard layout.",
  "I prefer dark mode at all times, even on paper (hypothetically).",
  "I once debugged a production issue at 3am from my phone.",
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
            Hey, I&apos;m Naufal — a developer, student, and (self-proclaimed) alien from Indonesia.
            I spend most of my time building things for the web: from backend APIs in Go and Laravel,
            to polished frontends in Next.js.
          </p>
          <p>
            I&apos;m currently studying Informatics Engineering and working on side projects that scratch
            my own itches. I believe the best way to learn is to build real things, ship them, and
            learn from the feedback loop.
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
        <SectionHeader title="Journey" />
        <div className="relative pl-6 border-l border-border space-y-6">
          {[
            { year: "2024", title: "Going deeper into AI tooling", desc: "Exploring LLMs, agents, and building AI-powered products." },
            { year: "2023", title: "First serious freelance work", desc: "Started taking freelance projects and building production apps for clients." },
            { year: "2022", title: "Got into competitive programming", desc: "Joined the university team and fell in love with algorithms." },
            { year: "2021", title: "Started university", desc: "Enrolled in Informatics Engineering. Switched from hobbyist to serious developer." },
            { year: "2018", title: "First line of code", desc: "Built my first website at 14 — a fan site with Comic Sans and neon colors." },
          ].map(({ year, title, desc }) => (
            <div key={year} className="relative">
              <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full border-2 border-border bg-background" />
              <span className="text-xs font-medium text-muted-foreground">{year}</span>
              <h3 className="text-sm font-semibold mt-0.5">{title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <SectionHeader title="Values" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-4">
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
          {interests.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
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
            "Ship an AI-powered SaaS product with 100+ paying users.",
            "Contribute meaningfully to open source projects I use daily.",
            "Build a developer community around open tools and knowledge sharing.",
            "Work with a world-class team on products that matter.",
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
