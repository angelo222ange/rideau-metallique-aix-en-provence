import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import HeroSection from "@/components/home/HeroSection";
import ClientLogosMarquee from "@/components/home/ClientLogosMarquee";
import AboutSection from "@/components/home/AboutSection";
import WhatWePowerSection from "@/components/home/WhatWePowerSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import HomepageSEOBlocks from "@/components/home/HomepageSEOBlocks";
import ZonesGrid from "@/components/home/ZonesGrid";
import ProjectsSection from "@/components/home/ProjectsSection";
import BlogSection from "@/components/home/BlogSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientLogosMarquee />
        <AboutSection />
        <WhatWePowerSection />
        <ServicesSection />
        <WhyUsSection />
        <HomepageSEOBlocks />
        <ZonesGrid />
        <ProjectsSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
