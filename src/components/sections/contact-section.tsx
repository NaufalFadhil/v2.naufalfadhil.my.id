"use client";

import { useState } from "react";
import { Github, Twitter, Linkedin, Instagram, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub", Icon: Github },
  { href: siteConfig.social.twitter, label: "Twitter", Icon: Twitter },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader
          title="Get in Touch"
          description="Have a project in mind, want to collaborate, or just say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — info */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border border-l-2 border-l-violet-500/50 bg-gradient-to-r from-violet-500/5 via-card to-card p-5 shadow-sm transition-all duration-300 hover:from-violet-500/20 hover:shadow-md hover:shadow-violet-500/10">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Social</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border border-l-2 border-l-emerald-500/50 bg-gradient-to-r from-emerald-500/5 via-card to-card p-4 text-sm shadow-sm transition-all duration-300 hover:from-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/10">
              <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-foreground/65">
                I typically reply within{" "}
                <span className="font-semibold text-foreground">24–48 hours</span>.
                For urgent matters, email directly.
              </p>
            </div>
          </div>

          {/* Right — form */}
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border border-l-2 border-l-emerald-500/50 bg-gradient-to-r from-emerald-500/5 via-card to-card p-8 text-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Send className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-base">Message sent!</h3>
              <p className="text-sm text-foreground/65">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-foreground/70">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-foreground/70">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-foreground/70">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-foreground/70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me more..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>
              <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                {status === "sending" ? (
                  <>Sending…</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
