import Link from 'next/link';
import { FaCogs } from 'react-icons/fa';

export default function Algoritem() {
    return (
        <section
            id="ai-ml"
            className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Algorithms and Additional Concepts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {' '}
                    <Link
                        href="https://www.geeksforgeeks.org/sorting-algorithms/"
                        passHref
                        target="_blank"
                        rel="noopner noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaCogs
                                size={48}
                                className="mx-auto text-indigo-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Sorting Algorithms
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                A set of algorithms designed to arrange elements
                                in a list or array in a specific order, such as
                                ascending or descending. Common sorting
                                algorithms include Bubble Sort, Merge Sort, and
                                Quick Sort.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm/"
                        passHref
                        target="_blank"
                        rel="noopner noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaCogs
                                size={48}
                                className="mx-auto text-indigo-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Divide and Conquer
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                A problem-solving strategy that involves
                                breaking a complex problem into smaller, more
                                manageable sub-problems, solving each
                                sub-problem individually, and then combining
                                their solutions to solve the original problem.
                                This approach is commonly used in algorithms
                                like Merge Sort and Quick Sort.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://matplotlib.org/"
                        passHref
                        target="_blank"
                        rel="noopner noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaCogs
                                size={48}
                                className="mx-auto text-indigo-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Graphical Algorithms
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                Algorithms used to generate, manipulate, and
                                analyze graphical content. These include
                                techniques for rendering shapes, lines, and
                                images, as well as algorithms for tasks like
                                collision detection, pathfinding, and image
                                processing.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
