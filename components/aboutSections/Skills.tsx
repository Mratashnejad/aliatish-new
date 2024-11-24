import Link from 'next/link';
import { FaCode , FaCloud , FaDatabase , FaGitAlt, FaUserShield , } from 'react-icons/fa';
import { GiTechnoHeart } from 'react-icons/gi';
import { MdBuild } from 'react-icons/md';

export default function Skills(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Development */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaCode
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                Development
            </h3>
            <p>
                <Link
                    href="https://www.javascript.com"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    JavaScript ,
                </Link>
                <Link
                    href="https://www.typescriptlang.org/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    TypeScript ,
                </Link>
                <Link
                    href="https://www.python.org/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    Python
                </Link>
            </p>
            <p>
                <Link
                    href="https://nodejs.org/en/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    Node.js ,
                </Link>

                <Link
                    href="https://nextjs.org/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    Next.js ,
                </Link>

                <Link
                    href="https://redux.js.org/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    Redux ,
                </Link>

                <Link
                    href="https://reactjs.org/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    React.js ,
                </Link>

                <Link
                    href="https://expressjs.com/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    Express.js ,
                </Link>

                <Link
                    href="https://www.djangoproject.com/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer hover:text-blue-500"
                >
                    Django
                </Link>
            </p>
        </div>
        {/* CLoud Itmes */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaCloud
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                Cloud Services
            </h3>
            <Link
                href="https://aws.amazon.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                AWS ,
            </Link>

            <Link
                href="https://cloud.google.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Google Cloud ,
            </Link>

            <Link
                href="https://firebase.google.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Firebase ,
            </Link>
            <Link
                href="https://vercel.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Vercel ,
            </Link>
            <Link
                href="https://www.digitalocean.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Digital Ocean
            </Link>
        </div>
        {/* AI & Machine Learning */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <GiTechnoHeart
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                AI & Machine Learning
            </h3>
            <Link
                href="https://en.wikipedia.org/wiki/Digital_image_processing"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Image Processing ,
            </Link>

            <Link
                href="https://en.wikipedia.org/wiki/Machine_learning"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Machine Learning ,
            </Link>
            <Link
                href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                AI Integration
            </Link>
        </div>
        {/* Database Technologies */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaDatabase
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                Database Technologies
            </h3>
            <Link
                href="https://www.postgresql.org/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Postgres ,
            </Link>

            <Link
                href="https://www.mongodb.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                MongoDB ,
            </Link>

            <Link
                href="https://www.microsoft.com/en-us/sql-server"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                SQL Server ,
            </Link>

            <Link
                href="https://www.prisma.io/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Prisma
            </Link>
        </div>
        {/* Version Control & Collaboration */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaGitAlt
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                Version Control & Collaboration
            </h3>
            <Link
                href="https://git-scm.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Git ,
            </Link>
            <Link
                href="https://github.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                GitHub ,
            </Link>

            <Link
                href="https://www.atlassian.com/software/jira"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Jira
            </Link>
        </div>
        {/* CI/CD */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <MdBuild
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                CI/CD
            </h3>
            <Link
                href="https://www.docker.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Docker ,
            </Link>

            <Link
                href="https://kubernetes.io/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Kubernetes ,
            </Link>

            <Link
                href="https://www.jenkins.io/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Jenkins
            </Link>
        </div>
        {/* UI/UX */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaUserShield
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                UI/UX
            </h3>
            <Link
                href="https://tailwindcss.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                TailwindCSS ,
            </Link>

            <Link
                href="https://ui.shadcn.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Shadcn ,
            </Link>

            <Link
                href="https://nextui.org/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                NextUI ,
            </Link>

            <Link
                href="https://heroicons.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Heroicons ,
            </Link>

            <Link
                href="https://www.radix-ui.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Radix-UI ,
            </Link>

            <Link
                href="https://flagpedia.net/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Flagpedia ,
            </Link>

            <Link
                href="https://ant.design/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Ant Design ,
            </Link>

            <Link
                href="https://sonner.emilkowal.ski/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Sonner ,
            </Link>

            <Link
                href="https://getbootstrap.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Bootstrap ,
            </Link>

            <Link
                href="https://react-icons.github.io/react-icons/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                React Icons ,
            </Link>

            <Link
                href="https://floatui.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                FloatUI ,
            </Link>
        </div>
        {/* API Development */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaCode
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                API Development
            </h3>
            <Link
                href="https://en.wikipedia.org/wiki/API"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                API ,
            </Link>
            <Link
                href="https://www.django-rest-framework.org/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Django Rest Framework (DRF) ,
            </Link>
            <Link
                href="https://restfulapi.net/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                REST API ,
            </Link>
            <Link
                href="https://www.postman.com/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Postman ,
            </Link>

            <Link
                href="https://www.thunderclient.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                Thunder Client
            </Link>
        </div>
        {/* Authentication & Authorization */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white ">
            <FaUserShield
                size={48}
                className="mx-auto text-blue-600 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
                Authentication & Authorization
            </h3>
            <Link
                href="https://next-auth.js.org/configuration/providers/oauth"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                OAuth ,
            </Link>

            <Link
                href="https://en.wikipedia.org/wiki/One-time_password"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                OTP ,
            </Link>
            <Link
                href="https://jwt.io/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:text-blue-500"
            >
                JWT
            </Link>
        </div>
    </div>

    );
}
