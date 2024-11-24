'use client'
import Link from 'next/link';

export default function Education() {
    return (
        <section
            id="ai-ml"
            className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Education and Training
                </h2>

                {/* Bachelor's Degree */}
                <div className="p-6 bg-white shadow-lg rounded-lg text-left dark:bg-gray-900">
                    <h3 className="text-2xl font-semibold mb-2">
                        Bachelor`&apos;`s Degree in Computer Software and
                        Technology
                    </h3>
                    <Link
                        href={'https://kerman.iau.ir/computer/fa'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="text-blue-600 dark:text-blue-400 mb-2">
                            Azad University (IAU)
                        </p>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        City: Kerman | Country: Iran
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Duration: 01/06/2012 – 01/06/2014
                    </p>
                </div>
                {/* Associate to Bachelor's Degree */}
                <div className="p-6 bg-white shadow-lg rounded-lg text-left dark:bg-gray-900 mt-6">
                    <h3 className="text-2xl font-semibold mb-2">
                        Associate to Bachelor Degree in Computer Software and
                        Technology
                    </h3>
                    <Link
                        href={'https://kerman.nus.ac.ir/'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="text-blue-600 dark:text-blue-400 mb-2">
                            Shahid Chamran Kerman
                        </p>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        City: Kerman | Country: Iran
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Duration: 01/06/2010 – 01/06/2012
                    </p>
                </div>
            </div>
        </section>
    );
}
