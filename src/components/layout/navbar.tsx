"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FileText, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certs" },
  { href: "/skills", label: "Skills" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blog", label: "Blog" },
];

type NavbarProps = {
  onOpenCommandPalette: () => void;
};

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-sm tracking-tight hover:opacity-70 transition-opacity shrink-0"
          >
            naufal<span className="text-muted-foreground">.dev</span>
          </Link>

          {/* Center nav — desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm transition-colors",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-foreground font-medium bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Command palette trigger */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-1.5 text-muted-foreground text-xs border border-border/60 h-7 px-2"
              aria-label="Open command palette"
            >
              <Command className="h-3 w-3" />
              <span>K</span>
            </Button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Resume */}
            <Button size="sm" asChild className="hidden sm:flex h-8">
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5" />
                Resume
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all duration-200",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all duration-200",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all duration-200",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <Container>
            <ul className="flex flex-col py-3 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm transition-colors",
                      pathname === link.href
                        ? "text-foreground font-medium bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-border mt-1">
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCommandPalette}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground w-full"
                >
                  <Command className="h-4 w-4" />
                  Command Palette
                </button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
