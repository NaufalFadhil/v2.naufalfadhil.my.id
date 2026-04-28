"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HireCta() {
  return (
    <section className="border-t border-border">
      <Container className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative rounded-2xl border border-border bg-gradient-to-br from-indigo-500/8 via-card to-card overflow-hidden px-8 py-10 text-center"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          {/* Available badge */}
          <div className="relative inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-xs font-medium text-indigo-400">Available for work</span>
          </div>

          <h2 className="relative text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Let&apos;s build something together
          </h2>
          <p className="relative text-foreground/55 text-sm sm:text-base max-w-md mx-auto mb-7 leading-relaxed">
            Open to full-time roles, freelance projects, or just a good conversation about tech. Drop me a line and let&apos;s talk.
          </p>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="default">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </Button>
            <Button asChild variant="ghost" size="default">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                View LinkedIn
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
