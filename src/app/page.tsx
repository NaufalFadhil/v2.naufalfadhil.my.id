import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TechStackMarquee } from "@/components/sections/tech-stack-marquee";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { EducationTimeline } from "@/components/sections/education-timeline";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactSection } from "@/components/sections/contact-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <Separator />
      <FeaturedProjects />
      <TechStackMarquee />
      <Separator />
      <ExperienceTimeline />
      <Separator />
      <EducationTimeline />
      <Separator />
      <SkillsPreview />
      <Separator />
      <CurrentlyBuilding />
      <Separator />
      <BlogPreview />
      <Separator />
      <ContactSection />
    </Container>
  );
}
