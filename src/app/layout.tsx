import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { RootClient } from "@/components/layout/root-client";
import { CursorGlow } from "@/components/shared/cursor-glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Naufal Fadhil",
    "developer",
    "portfolio",
    "Next.js",
    "Go",
    "full stack",
    "Indonesia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@naufalfadhil",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/N-Red.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} font-sans antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          scriptProps={{ suppressHydrationWarning: true }}
        >
          <CursorGlow />
          <RootClient>{children}</RootClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
