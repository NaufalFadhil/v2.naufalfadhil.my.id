"use client";

import { TrendingUp, Terminal, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { currentlyBuilding } from "@/data/currently-building";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Terminal,
  Bot,
};

const statusColors: Record<string, string> = {
  building: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  planning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  testing: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  launching: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
};

export function CurrentlyBuilding() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Currently Building"
        description="Things I'm actively working on right now."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {currentlyBuilding.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Terminal;
          return (
            <motion.div
              key={item.id}
              className="rounded-xl border border-border bg-card p-5 flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <span
                  className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${statusColors[item.status]}`}
                >
                  {item.status}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
