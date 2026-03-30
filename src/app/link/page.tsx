import type { Metadata } from "next";
import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  Mail,
  FileText,
  Heart,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Links",
  description: "All of Naufal Fadhil's links in one place.",
};

const links = [
  {
    href: siteConfig.url,
    label: "Portfolio",
    description: "naufalfadhil.my.id",
    Icon: Globe,
  },
  {
    href: siteConfig.social.github,
    label: "GitHub",
    description: "@naufalfadhil",
    Icon: Github,
  },
  {
    href: siteConfig.social.twitter,
    label: "Twitter / X",
    description: "@naufalfadhil",
    Icon: Twitter,
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    description: "Naufal Fadhil",
    Icon: Linkedin,
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    description: "@naufalfadhil",
    Icon: Instagram,
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Articles on dev, tools & craft",
    Icon: BookOpen,
  },
  {
    href: siteConfig.resume,
    label: "Resume",
    description: "Download PDF",
    Icon: FileText,
  },
  {
    href: "/supports",
    label: "Support",
    description: "Buy me a coffee",
    Icon: Heart,
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    description: siteConfig.email,
    Icon: Mail,
  },
];

export default function LinkPage() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 pb-16 px-4">
      {/* Avatar */}
      <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-border shadow-sm mb-4">
        <Image src={siteConfig.avatar} alt={siteConfig.name} fill className="object-cover" />
      </div>

      {/* Name */}
      <h1 className="text-xl font-bold tracking-tight">{siteConfig.name}</h1>
      <p className="text-muted-foreground text-sm mt-1">Developer · Student · Alien</p>
      <p className="text-xs text-muted-foreground mt-1">{siteConfig.location}</p>

      {/* Links */}
      <div className="mt-10 w-full max-w-sm flex flex-col gap-3">
        {links.map(({ href, label, description, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-3.5 hover:bg-accent hover:shadow-sm transition-all"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-background transition-colors shrink-0">
              <Icon className="h-4.5 w-4.5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground truncate">{description}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-12 text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}</p>
    </div>
  );
}
