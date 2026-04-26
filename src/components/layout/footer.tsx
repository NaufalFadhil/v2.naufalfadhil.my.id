import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/link", label: "Links" },
  { href: "/supports", label: "Support" },
];

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub", Icon: Github },
  { href: siteConfig.social.twitter, label: "Twitter", Icon: Twitter },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <Container className="py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-semibold text-sm tracking-tight hover:opacity-70 transition-opacity"
            >
              naufal<span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-1">
              Software Engineer · Builder · Alien
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center">
          © {year} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
