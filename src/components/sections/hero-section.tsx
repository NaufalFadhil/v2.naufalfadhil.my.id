"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, Download } from "lucide-react";
import { SiGithub, SiX, SiInstagram, SiMedium } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: siteConfig.social.github,   label: "GitHub",    Icon: SiGithub    },
  { href: siteConfig.social.twitter,  label: "Twitter",   Icon: SiX         },
  { href: siteConfig.social.linkedin, label: "LinkedIn",  Icon: FaLinkedinIn },
  { href: siteConfig.social.instagram,label: "Instagram", Icon: SiInstagram },
  { href: siteConfig.social.medium,   label: "Medium",    Icon: SiMedium    },
  { href: `mailto:${siteConfig.email}`,label: "Email",    Icon: Mail        },
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

function RoleRotator({ index, onIndexChange }: { index: number; onIndexChange: (i: number) => void }) {
  const [dotVisible, setDotVisible] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    setDotVisible(false);
    const delay = isFirst.current ? 420 : 800;
    isFirst.current = false;
    const showDot = setTimeout(() => setDotVisible(true), delay);
    const rotate = setTimeout(() => {
      onIndexChange((index + 1) % siteConfig.roles.length);
    }, 2500);
    return () => {
      clearTimeout(showDot);
      clearTimeout(rotate);
    };
  }, [index, onIndexChange]);

  return (
    <span className="inline-flex items-baseline gap-0.5">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.6 }}
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          exit={{ clipPath: "inset(0 0 0 100%)", opacity: 0.6 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          className="inline-block"
        >
          {siteConfig.roles[index].title}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: dotVisible ? [1, 0, 1] : 0 }}
        transition={dotVisible ? { duration: 1.2, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] } : { duration: 0 }}
        className="inline-block"
      >
        .
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

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
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available for work
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-foreground/60 mt-1.5 text-lg">
            <RoleRotator index={roleIndex} onIndexChange={setRoleIndex} />
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="max-w-sm min-h-[3rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-foreground/65 leading-relaxed text-base"
            >
              {siteConfig.roles[roleIndex].description}
            </motion.p>
          </AnimatePresence>
        </motion.div>

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
