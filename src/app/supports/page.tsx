import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Coffee, CreditCard } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Support",
  description: "Support Naufal Fadhil's open source work and content creation.",
};

const supportOptions = [
  {
    id: "saweria",
    name: "Saweria",
    description: "The easiest way to support Indonesian creators. Like Ko-fi but local.",
    icon: Coffee,
    href: "https://saweria.co/naufalfadhil",
    cta: "Support on Saweria",
    badge: "IDR accepted",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Send a one-time or recurring contribution via PayPal.",
    icon: CreditCard,
    href: "https://paypal.me/naufalfadhil",
    cta: "Support on PayPal",
    badge: "International",
  },
];

export default function SupportsPage() {
  return (
    <Container className="pt-28 pb-20 max-w-2xl">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 mb-4">
          <Heart className="h-7 w-7 text-rose-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Support My Work</h1>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Everything I build is open source and free. If my work has helped you, buying me
          a coffee keeps the lights on and the code flowing.
        </p>
      </div>

      {/* Support cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {supportOptions.map(({ id, name, description, icon: Icon, href, cta, badge }) => (
          <div
            key={id}
            className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                {badge}
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-base">{name}</h2>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {description}
              </p>
            </div>
            <Button asChild className="w-full mt-auto">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {cta}
              </a>
            </Button>
          </div>
        ))}
      </div>

      {/* Personal note */}
      <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden border border-border">
            <Image src={siteConfig.avatar} alt={siteConfig.name} fill className="object-cover" />
          </div>
          <span className="text-sm font-medium">{siteConfig.name}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your support means the world to me. Whether it&apos;s a one-time coffee or just
          sharing my work with someone who might find it useful — thank you. It keeps me
          motivated to keep building and sharing.
        </p>
      </div>
    </Container>
  );
}
