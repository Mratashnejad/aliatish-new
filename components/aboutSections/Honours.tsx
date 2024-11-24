'use client'
import { FaMedal ,FaFlag} from 'react-icons/fa';
import { GrFlag } from 'react-icons/gr';
export default function Honours() {
    return (
        <section
            id="honours"
            className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 dark:text-gray-100">
                    Honours and Awards
                </h2>
                <div className="space-y-8">
                    {/* Award Entries */}
                    <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex-shrink-0">
                            <FaMedal className="text-4xl text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 dark:text-gray-100">
                                Gold Medalist, First World Karate Championship
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                                <FaFlag className="mr-2 text-gray-500 dark:text-gray-400" />
                                Issued by Iranian Karate National Team
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                I won the gold medal in the Bam Earthquake
                                Memorial World Karate Championship, held in
                                Kerman province, Iran, representing the Iranian
                                Karate National Team. This was my second major
                                championship win and a proud moment in my
                                athletic career.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex-shrink-0">
                            <FaMedal className="text-4xl text-gray-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 dark:text-gray-100">
                                Silver Medalist, International Karate
                                Championship in London
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                                <GrFlag className="mr-2 text-gray-500 dark:text-gray-400" />
                                Issued by Abdu Shaher, 7th Dan Supported by EKGB
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                I won the silver medal in the Kata Tournament at
                                the 13th Junior English International Karate
                                Open, held on January 12th and 13th, 2002, at
                                the Seymour Leisure Center in London, England.
                                Competing against participants from 48 countries
                                made this achievement a highly challenging and
                                rewarding experience in my athletic career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
