'use client';
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/aboutSections/heroSection';
import Skills from '@/components/aboutSections/Skills';
import Learning from '@/components/aboutSections/Learning';
import AiMl from '@/components/aboutSections/AiMl';
import Algoritem from '@/components/aboutSections/Algoritem';
import Education from '@/components/aboutSections/Education';
import Experience from '@/components/aboutSections/Experience';
import Languages from '@/components/aboutSections/Languages';
import Projects from '@/components/aboutSections/Projects';
import Honours from '@/components/aboutSections/Honours';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About | Ali Atish - Full Stack Developer</title>
                <meta name="description" content="Learn about Ali Atish, a full stack developer specializing in Next.js, PostgreSQL, and modern web applications." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aliatish.com/about" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Alireza Atashnejad - Ali Atish",
                        "jobTitle": "Full Stack Developer",
                        "alumniOf": "AUI",
                        "knowsAbout": ["Next.js","Node.js", "React.js", "PostgreSQL", "AI/ML", "Algorithms", "Full Stack Developer"],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "aliatish"
                        }
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <HeroSection />

            {/* Skills Section */}
            <section
                id="skills"
                className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Skills & Expertise
                    </h2>
                    <Skills />
                    <Learning />
                </div>
            </section>

            {/* AI and Machine Learning Section */}
            <AiMl />

            {/* Algorithms and Additional Concepts Section */}
            <Algoritem />

            {/* Experience Section */}
            <Experience />

            {/* Education and Training Section */}
            <Education />

            {/* Languages Section */}
            <Languages />

            {/* Projects Section */}
            <Projects />

            {/* Honours and Awards Section */}
            <Honours />

            {/* Reference Section */}
            <section>
                <div className="py-2">
                    <div className="grid max-w-6xl mx-auto px-2">
                        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
                            References
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-300">
                            References are available upon request. Please contact me for more information.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
