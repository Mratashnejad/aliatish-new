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
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About - Full Stack Developer | AI/ML Engineer',
    description:
        'Discover Ali Atish, a Full Stack Developer and AI/ML Engineer specializing in Next.js, Node.js, React.js, PostgreSQL, and machine learning. Learn about his expertise in developing modern, scalable web applications and AI-driven solutions.',
    keywords:
        'Full Stack Developer, AI/ML Engineer, Ali Atish, Next.js, Node.js, React.js, PostgreSQL, machine learning, AI development, scalable web applications, software engineering, web development services',
};

export default function AboutPage() {
    return (
        <>
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
                            References are available upon request. Please
                            contact me for more information.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
