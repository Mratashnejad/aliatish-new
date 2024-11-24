import Link from 'next/link';
import { FaCode ,FaDatabase, FaServer} from 'react-icons/fa';
import {GiRabbit} from 'react-icons/gi';

export default function Learning() {
    return (
        <section
            id="learning"
            className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-bold text-center mb-8">
                    Currently Learning
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        href={'https://graphql.org/'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaCode
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                GraphQL
                            </h4>
                            <p className="text-gray-600 dark:text-white">
                                A query language for APIs that allows for more
                                efficient and flexible data retrieval.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={'https://redis.io/'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaDatabase
                                size={48}
                                className="mx-auto text-red-600 mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Redis
                            </h4>
                            <p className="text-gray-600 dark:text-white">
                                An in-memory data structure store used as a
                                database, cache, and message broker.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={'https://www.rabbitmq.com/'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <GiRabbit
                                size={48}
                                className="mx-auto text-purple-600 mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                RabbitMQ
                            </h4>
                            <p className="text-gray-600 dark:text-white">
                                A robust messaging broker that supports multiple
                                messaging protocols.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={'https://docs.nestjs.com/microservices/basics'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaServer
                                size={48}
                                className="mx-auto text-green-600 mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Microservices
                            </h4>
                            <p className="text-gray-600 dark:text-white">
                                An architectural style that structures an
                                application as a collection of loosely coupled
                                services.
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={'https://nestjs.com/'}
                        target="_blank"
                        rel="noopner noreferrer"
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
                            <FaCode
                                size={48}
                                className="mx-auto text-yellow-600 mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Nest.js
                            </h4>
                            <p className="text-gray-600 dark:text-white">
                                A progressive Node.js framework for building
                                efficient and scalable server-side applications.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
