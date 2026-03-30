import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="pt-28 pb-20 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="mb-6">
        <p className="text-8xl font-bold text-muted-foreground/20 select-none">404</p>
      </div>
      <h1 className="text-2xl font-bold tracking-tight mb-2">Page not found</h1>
      <p className="text-muted-foreground text-sm mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">
            <Search className="h-4 w-4" />
            Browse Projects
          </Link>
        </Button>
      </div>
    </Container>
  );
}
