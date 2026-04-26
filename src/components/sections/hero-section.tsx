"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub", Icon: Github },
  { href: siteConfig.social.twitter, label: "Twitter", Icon: Twitter },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <motion.div
        className="flex flex-col items-start gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants}>
          <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-muted-foreground bg-muted rounded-full px-3 py-1">
              Available for work
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">
            Software Engineer{" "}
            <span className="text-foreground/40">·</span>{" "}
            Builder{" "}
            <span className="text-foreground/40">·</span>{" "}
            Alien
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed max-w-xl text-base"
        >
          I'm a backend-focused engineer who genuinely enjoys the process of building things
          — taking messy, complex problems and turning them into clean, working software. I work with PHP, Java, JavaScript, Go, and Rust, and I'm always excited to learn what's next.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href={siteConfig.resume} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
