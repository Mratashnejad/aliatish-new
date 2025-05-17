"use client";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutCEOSection from "@/components/sections/AboutCEOSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <AboutCEOSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
