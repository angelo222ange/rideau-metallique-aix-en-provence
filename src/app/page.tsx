import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ClientLogosMarquee from "@/components/home/ClientLogosMarquee";
import AboutSection from "@/components/home/AboutSection";
import WhatWePowerSection from "@/components/home/WhatWePowerSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
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
        <ProjectsSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
