import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { WhoWeAre } from "@/components/WhoWeAre";
import { TaglineBand } from "@/components/TaglineBand";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { CtaBand } from "@/components/CtaBand";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EventsSection } from "@/components/EventsSection";
import { Testimonials } from "@/components/Testimonials";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WhoWeAre />
        <TaglineBand />
        <ServicesSection />
        <ExpertiseSection />
        <CtaBand />
        <WhyChooseUs />
        <EventsSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
