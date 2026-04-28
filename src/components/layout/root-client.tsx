"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HireCta } from "@/components/layout/hire-cta";
import { CommandPalette } from "@/components/shared/command-palette";
import { BackToTop } from "@/components/shared/back-to-top";

export function RootClient({ children }: { children: React.ReactNode }) {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <>
      <Navbar onOpenCommandPalette={() => setCmdOpen(true)} />
      <main>{children}</main>
      <HireCta />
      <Footer />
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
      <BackToTop />
    </>
  );
}
