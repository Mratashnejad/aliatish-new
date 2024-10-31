import React from 'react';
import Link from 'next/link';
import { FaBrain, FaProjectDiagram } from 'react-icons/fa';
import { DiPython } from 'react-icons/di';
import {
    SiKeras,
    SiPytorch,
    SiScikitlearn,
    SiTensorflow,
    SiPandas,
} from 'react-icons/si';
import { MdShowChart } from 'react-icons/md';

export default function AiMl() {
    return (
        <section
            id="ai-ml"
            className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    AI and Machine Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AI & ML Cards */}
                    <Link
                        href="https://en.wikipedia.org/wiki/Neural_network_(machine_learning)"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Neural Networks"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaBrain
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Neural Networks
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                Convolutional Neural Networks (CNNs) for image
                                processing and deep learning.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://en.wikipedia.org/wiki/Regression_analysis/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Regression Models"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <DiPython
                                size={48}
                                className="mx-auto text-yellow-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Regression Models
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                Linear Regression, Logistic Regression for
                                predictive analysis.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://developers.google.com/machine-learning/decision-forests/intro-to-decision-forests-real"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Decision Trees and Forests"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaProjectDiagram
                                size={48}
                                className="mx-auto text-green-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Decision Trees & Forests
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                Decision Trees, Random Forests for classification and regression tasks.
                            </p>
                        </div>
                    </Link>
                    {/* Additional Cards (TensorFlow, Keras, PyTorch, Scikit-learn, Pandas, Matplotlib) */}
                    <Link
                        href="https://www.tensorflow.org/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about TensorFlow"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <SiTensorflow
                                size={48}
                                className="mx-auto text-red-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                TensorFlow
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                An open-source platform for machine learning and neural network training.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://keras.io/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Keras"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <SiKeras
                                size={48}
                                className="mx-auto text-purple-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Keras
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                A high-level neural networks API, written in Python and capable of running on top of TensorFlow.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://pytorch.org/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about PyTorch"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <SiPytorch
                                size={48}
                                className="mx-auto text-orange-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                PyTorch
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                An open-source machine learning library based on the Torch library for deep learning.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://scikit-learn.org/stable/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Scikit-learn"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <SiScikitlearn
                                size={48}
                                className="mx-auto text-teal-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Scikit-learn
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                A machine learning library in Python that provides tools for data mining and data analysis.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://pandas.pydata.org/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Pandas"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <SiPandas
                                size={48}
                                className="mx-auto text-teal-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Pandas
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                A powerful Python library for data manipulation and analysis.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="https://matplotlib.org/"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn more about Matplotlib"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <MdShowChart
                                size={48}
                                className="mx-auto text-indigo-600 mb-4"
                                aria-hidden="true"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Matplotlib
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                A plotting library for Python and its numerical mathematics extension NumPy.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
