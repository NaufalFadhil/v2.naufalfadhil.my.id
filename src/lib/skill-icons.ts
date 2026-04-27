import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGo,
  SiLaravel,
  SiNodedotjs,
  SiGraphql,
  SiPhp,
  SiFlutter,
  SiExpo,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiVercel,
  SiRailway,
  SiGit,
  SiNeovim,
  SiPostman,
  SiFigma,
  SiLinear,
  SiNotion,
  SiZod,
} from "react-icons/si";
import { VscVscode as SiVisualstudiocode } from "react-icons/vsc";
import type { IconType } from "react-icons";

// Map of icon name string → icon component
// Add more here as needed
export const siIconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGo,
  SiLaravel,
  SiNodedotjs,
  SiGraphql,
  SiPhp,
  SiFlutter,
  SiExpo,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiVercel,
  SiRailway,
  SiGit,
  SiVisualstudiocode,
  SiNeovim,
  SiPostman,
  SiFigma,
  SiLinear,
  SiNotion,
  // Zustand doesn't have an official SI icon; reuse Zod as placeholder
  SiZod,
};

export function getSkillIcon(name?: string): IconType | null {
  if (!name) return null;
  return siIconMap[name] ?? null;
}
