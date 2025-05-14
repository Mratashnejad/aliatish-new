'use client'
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutCEOSection from "@/components/sections/AboutCEOSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";

// Ensure this component is only loaded on the client side
const Flame3D = dynamic(() => import("@/components/3d/Flame3D"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/20 rounded-full"></div>
});

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
