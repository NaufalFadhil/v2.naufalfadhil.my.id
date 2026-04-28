"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  return (
    <section className="py-16">
      <div className="flex items-end justify-between mb-8">
        <SectionHeader
          title="Featured Projects"
          description="A selection of things I've built."
          className="mb-0"
        />
        <Button variant="ghost" size="sm" asChild className="shrink-0">
          <Link href="/projects">
            All projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
