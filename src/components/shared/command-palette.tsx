"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Home,
  User,
  FolderOpen,
  Award,
  BookOpen,
  Link2,
  Heart,
  Wrench,
  Trophy,
  FileText,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { siteConfig } from "@/data/site";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const pages = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/certificates", label: "Certificates", icon: Award },
  { href: "/skills", label: "Skills", icon: Wrench },
  { href: "/achievements", label: "Achievements", icon: Trophy },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/link", label: "Links", icon: Link2 },
  { href: "/supports", label: "Support", icon: Heart },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const handleSelect = useCallback(
    (value: string) => {
      onOpenChange(false);
      if (value.startsWith("/")) {
        router.push(value);
      } else if (value === "toggle-theme") {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      } else if (value === "resume") {
        window.open(siteConfig.resume, "_blank");
      }
    },
    [router, onOpenChange, setTheme, resolvedTheme]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-lg gap-0 overflow-hidden">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <Command.Input
            placeholder="Type a command or search..."
            className="flex h-11 w-full rounded-md bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-b border-border"
          />
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigate">
              {pages.map(({ href, label, icon: Icon }) => (
                <Command.Item
                  key={href}
                  value={`${label} ${href}`}
                  onSelect={() => handleSelect(href)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span>{label}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="my-1 h-px bg-border" />

            <Command.Group heading="Actions">
              <Command.Item
                value="resume download"
                onSelect={() => handleSelect("resume")}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
              >
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>Download Resume</span>
              </Command.Item>
              <Command.Item
                value="toggle theme dark light"
                onSelect={() => handleSelect("toggle-theme")}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-accent data-[selected=true]:bg-accent"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-muted-foreground" />
                )}
                <span>Toggle Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
