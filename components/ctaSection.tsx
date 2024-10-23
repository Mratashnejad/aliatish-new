'use client'
import Image from "next/image";

const CTASection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:gap-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-indigo-500 text-lg font-semibold">
                            Web Development Services
                        </h3>
                        <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
                            Empower your SaaS with expert development
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            We specialize in crafting tailored SaaS applications that scale effortlessly. Let our team turn your ideas into reality, backed by top-tier expertise and a commitment to quality.
                        </p>
                        <a href="javascript:void(0)" className="mt-8 inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 transition duration-150 ease-in-out">
                            Discover More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:w-1/2">
                        <Image
                          
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            alt="SaaS Development" 
                            className="w-full rounded-lg shadow-lg"
                            height={200}
                            width={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
