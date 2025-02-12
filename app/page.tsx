import FireAnimationWrapper from "@/components/FireAnimationWrapper";
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Website Development & Design Services & AI/ML | Modern Web Solutions',
    description:
        'Explore professional website development and design services with Ali Atish. Specializing in Full Stack development, Next.js, React.js, Node.js, PostgreSQL, AI/ML solutions, and custom web applications.',
    keywords:
        'Website Development, Web Design Services, Full Stack Developer, AI/ML Engineer, Next.js, React.js, Node.js, PostgreSQL, machine learning, custom web applications, software engineering, UI/UX design, scalable web solutions, web development services, tech solutions, modern web solutions, AI development, digital transformation',
};

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-black text-gray-800 dark:text-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-1 text-center lg:text-start px-6 sm:px-8 md:px-12 w-full">
                {/* Text Content */}
                <div className="lg:w-2/3 lg:pl-36 lg:flex lg:flex-col lg:mt-2 text-center lg:text-start">
                    <h1 className="text-4xl lg:text-6xl sm:text-4xl md:text-4xl font-extrabold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-yellow-500 dark:to-red-600">
                    Build Your Web Application
                    </h1>

                    <h2 className="text-2xl sm:text-2xl md:text-2xl font-semibold mb-6">
                    Fast, Scalable, and secure using Modern Web Technology
                    </h2>
                </div>
                {/* Fire Animation */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center">
                        <FireAnimationWrapper />
                    </div>
                </div>
            </div>
        </div>
    );
}
