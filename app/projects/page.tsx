import Image from "next/image";
export default function ProjectsTab() {
    return (
        <section
            id="projects"
            className="w-full h-screen bg-cover bg-center py-28 px-6 relative z-10"
          
        >
            <div className="container mx-auto text-center">
                <h2 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Project Card */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg transform transition duration-500 hover:scale-105">
                        <Image
                            src="/images/project1.jpg"
                            alt="Project Image 1"
                            width={40}
                            height={40}
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Gtnelu</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Connect with daily job opportunities and earn money effortlessly through simple tasks. Our platform offers a user-friendly experience, secure payments, and a wide range of job categories, making it easy for anyone to start earning.                        </p>
                        <a
                            href="/projects"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
                        >
                            Learn More
                        </a>
                    </div>
                    {/* Repeat Project Card */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg transform transition duration-500 hover:scale-105">
                        <Image
                            src="/images/project2.jpg"
                            alt="Project Image 2"
                            width={40}
                            height={40}
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Project Name 2</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Detailed description of the project including technologies used, challenges faced, and solutions implemented.
                        </p>
                        <a
                            href="/projects"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
                        >
                            Learn More
                        </a>
                    </div>
                    {/* Repeat Project Card */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg transform transition duration-500 hover:scale-105">
                        <Image
                            src="/images/project3.jpg"
                            alt="Project Image 3"
                            width={40}
                            height={40}
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Project Name 3</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Detailed description of the project including technologies used, challenges faced, and solutions implemented.
                        </p>
                        <a
                            href="/projects"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
               
            </div>
        </section>
    );
}
