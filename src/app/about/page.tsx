"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ali Atish",
    role: "Founder & CEO & CTO",
    image: "/images/team/ali.jpg",
    bio: "Visionary leader with 10+ years in enterprise web solutions.",
  },
  {
    name: "Sogand Akhavan",
    role: "Co-Founder",
    image: "/images/team/sara.jpg",
    bio: "Expert in UI/UX and digital branding.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We are passionate about building digital solutions that empower businesses to grow and innovate.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-neutral/80">
              To deliver advanced digital experiences and enterprise solutions that drive measurable results for our
              clients.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-neutral/80">
              To be a global leader in digital transformation, known for innovation, quality, and client success.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-lg text-neutral/80">
              Founded in 2016, ALIATISH has grown from a small team of passionate developers into a full-service digital
              agency serving clients worldwide. Our journey is defined by a relentless pursuit of excellence and a
              commitment to our clients&apos; success.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 mb-4 flex items-center justify-center overflow-hidden">
                    <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-neutral/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
