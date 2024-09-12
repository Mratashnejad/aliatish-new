import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { FaCodeBranch } from 'react-icons/fa6';
import { SiPython, SiJavascript } from 'react-icons/si';
import {
    FaCode,
    FaCogs,
    FaCloud,
    FaDatabase,
    FaGitAlt,
    FaUserShield,
    FaMicrochip,
    FaServer,
} from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { FaUniversity, FaLanguage } from 'react-icons/fa';

import { GiTechnoHeart, GiRabbit } from 'react-icons/gi';
import {
    FaBrain,
    FaChartLine,
    FaNetworkWired,
    FaProjectDiagram,
} from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

import { DiPython } from 'react-icons/di';
import { SiKeras, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { MdShowChart } from 'react-icons/md';

import FAQPage from '@/components/faq';

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="about"
                className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white"
            >
                <div className="text-center px-6 py-12">
                    <h1 className="text-6xl font-extrabold mb-4">
                        Alireza Atashnejad
                    </h1>
                    <p className="text-lg mb-8">
                        Full Stack Developer | Software Engineer | AI & Machine
                        Learning Enthusiast
                    </p>
                    <a
                        href="/documents/CV.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
                    >
                        <HiDownload className="mr-2" size={20} />
                        Download Resume
                    </a>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 bg-gray-100 text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Skills & Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Development */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaCode
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Development
                            </h3>
                            <p>JavaScript, TypeScript, Python</p>
                            <p>
                                Node.js, Next.js, Redux, React.js, Express.js,
                                Django
                            </p>
                        </div>
                        {/* Cloud Services */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaCloud
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Cloud Services
                            </h3>
                            <p>
                                Google Cloud, Firebase, Vercel, Digital Ocean,
                                AWS
                            </p>
                        </div>
                        {/* AI & Machine Learning */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <GiTechnoHeart
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                AI & Machine Learning
                            </h3>
                            <p>
                                Image Processing, Machine Learning, AI
                                Integration
                            </p>
                        </div>
                        {/* Database Technologies */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaDatabase
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Database Technologies
                            </h3>
                            <p>MongoDB, SQL, Prisma</p>
                        </div>
                        {/* Version Control & Collaboration */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaGitAlt
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Version Control & Collaboration
                            </h3>
                            <p>Git & GitHub, Jira</p>
                        </div>
                        {/* CI/CD */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <MdBuild
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                CI/CD
                            </h3>
                            <p>Docker, Kubernetes, Jenkins</p>
                        </div>
                        {/* UI/UX */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaUserShield
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                UI/UX
                            </h3>
                            <p>
                                Shadcn, NextUI, Heroicons, Radix-UI, Flagpedia,
                                Sonner, Bootstrap, BootstrapCSS, TailwindCSS
                            </p>
                        </div>
                        {/* API Development */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaCode
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                API Development
                            </h3>
                            <p>API, Django Rest Framework (DRF), REST API</p>
                            <p>Postman, Thunder Client</p>
                        </div>
                        {/* Authentication & Authorization */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaUserShield
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Authentication & Authorization
                            </h3>
                            <p>OAuth, OTP, JWT</p>
                        </div>
                    </div>
                    {/* Learning */}
                    <section
                        id="learning"
                        className="py-16 bg-gray-200 text-gray-800"
                    >
                        <div className="max-w-6xl mx-auto px-6">
                            <h3 className="text-3xl font-bold text-center mb-8">
                                Currently Learning
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Learning Item */}
                                <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                                    <FaCode
                                        size={48}
                                        className="mx-auto text-blue-600 mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-2">
                                        GraphQL
                                    </h4>
                                    <p className="text-gray-600">
                                        A query language for APIs that allows
                                        for more efficient and flexible data
                                        retrieval.
                                    </p>
                                </div>
                                {/* Learning Item */}
                                <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                                    <FaDatabase
                                        size={48}
                                        className="mx-auto text-red-600 mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-2">
                                        Redis
                                    </h4>
                                    <p className="text-gray-600">
                                        An in-memory data structure store used
                                        as a database, cache, and message
                                        broker.
                                    </p>
                                </div>
                                {/* Learning Item */}
                                <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                                    <GiRabbit
                                        size={48}
                                        className="mx-auto text-purple-600 mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-2">
                                        RabbitMQ
                                    </h4>
                                    <p className="text-gray-600">
                                        A robust messaging broker that supports
                                        multiple messaging protocols.
                                    </p>
                                </div>
                                {/* Learning Item */}
                                <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                                    <FaServer
                                        size={48}
                                        className="mx-auto text-green-600 mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-2">
                                        Microservices
                                    </h4>
                                    <p className="text-gray-600">
                                        An architectural style that structures
                                        an application as a collection of
                                        loosely coupled services.
                                    </p>
                                </div>
                                {/* Learning Item */}
                                <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                                    <FaCode
                                        size={48}
                                        className="mx-auto text-yellow-600 mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-2">
                                        Nest.js
                                    </h4>
                                    <p className="text-gray-600">
                                        A progressive Node.js framework for
                                        building efficient and scalable
                                        server-side applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            {/* AI and Machine Learning */}
            <section id="ai-ml" className="py-16 bg-gray-100 text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        AI and Machine Learning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaBrain
                                size={48}
                                className="mx-auto text-blue-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Neural Networks
                            </h3>
                            <p className="text-gray-600">
                                Convolutional Neural Networks (CNNs) for image
                                processing and deep learning.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <DiPython
                                size={48}
                                className="mx-auto text-yellow-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Regression Models
                            </h3>
                            <p className="text-gray-600">
                                Linear Regression, Logistic Regression for
                                predictive analysis.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <FaProjectDiagram
                                size={48}
                                className="mx-auto text-green-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Decision Trees & Forests
                            </h3>
                            <p className="text-gray-600">
                                Decision Trees, Random Forests for
                                classification and regression tasks.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <SiTensorflow
                                size={48}
                                className="mx-auto text-red-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                TensorFlow
                            </h3>
                            <p className="text-gray-600">
                                An open-source platform for machine learning and
                                neural network training.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <SiKeras
                                size={48}
                                className="mx-auto text-purple-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Keras
                            </h3>
                            <p className="text-gray-600">
                                A high-level neural networks API, written in
                                Python and capable of running on top of
                                TensorFlow.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <SiPytorch
                                size={48}
                                className="mx-auto text-orange-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                PyTorch
                            </h3>
                            <p className="text-gray-600">
                                An open-source machine learning library based on
                                the Torch library for deep learning.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <SiScikitlearn
                                size={48}
                                className="mx-auto text-teal-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Scikit-learn
                            </h3>
                            <p className="text-gray-600">
                                A machine learning library in Python that
                                provides simple and efficient tools for data
                                mining and data analysis.
                            </p>
                        </div>
                        {/* AI & ML Item */}
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                            <MdShowChart
                                size={48}
                                className="mx-auto text-indigo-600 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">
                                Matplotlib
                            </h3>
                            <p className="text-gray-600">
                                A plotting library for the Python programming
                                language and its numerical mathematics extension
                                NumPy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Algorithms and Additional Concepts Section */}
            <section
                id="algorithms"
                className="py-16 bg-gray-100 text-gray-800"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Algorithms and Additional Concepts
                    </h2>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <ul className="list-disc pl-6 space-y-4">
                            <li className="text-gray-600 flex items-center">
                                <FaCogs
                                    className="mr-2 text-blue-500"
                                    size={24}
                                />
                                Sorting Algorithms
                            </li>
                            <li className="text-gray-600 flex items-center">
                                <FaCogs
                                    className="mr-2 text-blue-500"
                                    size={24}
                                />
                                Divide and Conquer
                            </li>
                            <li className="text-gray-600 flex items-center">
                                <SiJavascript
                                    className="mr-2 text-yellow-500"
                                    size={24}
                                />
                                Asynchronous Programming
                            </li>
                            <li className="text-gray-600 flex items-center">
                                <FaCogs
                                    className="mr-2 text-blue-500"
                                    size={24}
                                />
                                Graphical Algorithms
                            </li>
                            <li className="text-gray-600 flex items-center">
                                <SiPython
                                    className="mr-2 text-blue-500"
                                    size={24}
                                />
                                Decision Trees
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 bg-white text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Work Experience
                    </h2>
                    <div className="space-y-8">
                        {/* Experience Entries */}
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Internet Assessor - Telus International
                            </h3>
                            <p className="text-gray-600">
                                Las Vegas, United States (01/01/2023 – Present)
                            </p>
                            <p className="mt-4">
                                As a remote Internet Assessor at Telus, I am
                                responsible for analyzing and rating websites,
                                web pages, queries, apps, and videos for
                                artificial intelligence systems working for
                                major tech companies such as Google, YouTube,
                                Facebook, Amazon, and more. Using my knowledge
                                and expertise, I evaluate the relevance,
                                quality, and accuracy of online content to
                                improve the accuracy and effectiveness of AI
                                models. Through my work, I play a vital role in
                                enhancing the user experience of millions of
                                people around the world.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://telusinternational.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Telus International Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                IT Specialist - Soft Construct
                            </h3>
                            <p className="text-gray-600">
                                Yerevan, Armenia (01/06/2020 – Present)
                            </p>
                            <p className="mt-4">
                                As an IT Specialist, I am responsible for
                                diagnosing and fixing computer errors for
                                clients, as well as resolving connectivity
                                issues. This role requires a high level of
                                accuracy and attention to detail, ensuring that
                                problems are identified and resolved
                                efficiently. Additionally, I consistently
                                maintain a professional and helpful demeanor to
                                create a positive and seamless experience for
                                the clients.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://softconstruct.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Soft Construct Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Implementation Specialist - Hikvision
                            </h3>
                            <p className="text-gray-600">
                                Yerevan, Armenia (01/04/2019 – 01/06/2020)
                            </p>
                            <p className="mt-4">
                                As a Security Camera (CCTV) Implementation
                                Specialist, I have extensive experience in
                                designing, installing, and implementing
                                HIKVISION Security Cameras and intercom systems.
                                I am proficient in configuring NVR/DVR recording
                                systems and have a strong understanding of
                                networking areas using cat5/cat6 cables. With my
                                skills and expertise, I ensure the highest level
                                of security and surveillance for my clients'
                                premises.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://hikvision.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hikvision Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                IT Manager - Mersad.co
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/10/2018 – 01/06/2020)
                            </p>
                            <p className="mt-4">
                                As an IT Manager, I lead a team of web
                                developers, CCTV installation experts, and
                                network engineers, ensuring seamless
                                collaboration and delivery of projects. My
                                technical expertise includes implementing VMWare
                                ESXi 6.5 on HP servers, configuring Mikrotik
                                Wireless radio links, installing HP servers and
                                server rooms, setting up Mikrotik switches, and
                                load balancing networks with Mikrotik routers.
                                <br />
                                <br />
                                Furthermore, I have experience in configuring
                                Microsoft Windows Server 2016, including DHCP,
                                GP Policy, backup server, DNS server, and QNAP
                                hard disk drive server installation. I am also
                                adept at configuring Hivision NVR and network
                                cameras, installing file servers, and
                                troubleshooting DVR issues. My additional
                                experience includes eCommerce website
                                development, ensuring reliable and secure online
                                transactions for customers.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://mersad.co"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mersad.co Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                IT Manager - Hanemid Dairy Factory
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/11/2017 – 01/10/2018)
                            </p>
                            <p className="mt-4">
                                As an IT Manager, I have extensive experience in
                                designing and implementing network solutions
                                such as MikroTik Routing & Switching, Firewall,
                                Wireless & Hotspot, as well as managing
                                Microsoft Windows Server 2016 and 2012 R2. I am
                                skilled in installation of HP Server and Server
                                room, configuring Mikrotik Switch, load
                                balancing network with Mikrotik router, setting
                                up DHCP, GP Policy, and backup servers, as well
                                as DNS Server with Microsoft Windows server
                                2016.
                                <br />
                                <br />I also specialize in printer and scanner
                                sharing, remote desktop apps using Microsoft
                                Windows Server 2016, and backup server H.D.D
                                mirroring. Additionally, I have expertise in
                                eCommerce website development using WordPress,
                                providing effective solutions for online
                                businesses.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://hanemid.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hanemid Dairy Factory Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                IT Specialist - Islamic Republic of Iran Army
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/10/2016 – 01/06/2018)
                            </p>
                            <p className="mt-4">
                                During my compulsory military service in Iran, I
                                acquired valuable skills in IT administration. I
                                received training in Windows Server 2008 Active
                                Directory Services and DHCP Server Manager,
                                which allowed me to effectively manage network
                                resources. I also gained experience in
                                installing and troubleshooting Microsoft Windows
                                OS, Microsoft Office Word, and Excel.
                                Additionally, I was responsible for setting up
                                and maintaining file and printer sharing for the
                                local network. Through this experience, I
                                developed problem-solving and troubleshooting
                                skills that have been invaluable throughout my
                                career.
                            </p>
                            {/* Reference Placeholder */}
                            <p className="mt-4 text-gray-600">
                                References available upon request.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Software Engineer - ParsOnline Group
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/08/2015 – 01/07/2016)
                            </p>
                            <p className="mt-4">
                                As a Software Engineer, I have experience
                                developing websites using C# and utilizing
                                Telegram robots to facilitate client task
                                processes. Additionally, I have provided on-site
                                support to clients to ensure the best internet
                                connection speeds. I have expertise in
                                installing and configuring various DSL home
                                modems, including Zyxel, TP-Link, and D-Link. I
                                am skilled in troubleshooting internet ADSL
                                lines and TCP/IP network protocols, as well as
                                diagnosing and resolving issues with internet
                                connections on mobile devices, tablets, PCs, and
                                laptops.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://parsonline.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ParsOnline Group Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                IT Manager - Hightech Apple Store
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/09/2014 – 01/04/2015)
                            </p>
                            <p className="mt-4">
                                As an IT Manager, I was responsible for
                                launching and managing the Android and Windows
                                teams at a technology company. I played a key
                                role in setting up these departments from
                                scratch and led them to success. I also managed
                                the iOS and Mac teams, overseeing the
                                installation of Mac OS series and TCP/IP
                                networking, as well as the installation of
                                Microsoft Windows on Mac OS devices.
                                Additionally, I was skilled in troubleshooting
                                laptops and personal computers. During my tenure
                                as an IT Manager, I implemented effective
                                management strategies that resulted in increased
                                productivity and efficiency for the company.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://hightechapplestore.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hightech Apple Store Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Co-Founder & CEO - Fani Informatic Institute
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/11/2011 – 01/07/2014)
                            </p>
                            <p className="mt-4">
                                As the CEO and Co-Founder of a successful
                                computer training center in Kerman, Iran, I
                                managed day-to-day operations and oversaw a team
                                of skilled teachers in computer basics,
                                electronics, architecture, and programming
                                languages such as C/C++. During my tenure, I ran
                                over 5,000 hours of on-site courses, providing
                                students with the tools they need to succeed in
                                the tech industry.
                                <br />
                                <br />
                                In addition to managing teachers and students, I
                                also implemented effective time management
                                strategies for staff and advertisements. My
                                leadership skills and time management strategies
                                resulted in increased productivity and
                                efficiency across the institute.
                                <br />
                                <br />
                                As CEO, I was also responsible for streamlining
                                schedules and improving communication to
                                optimize productivity for both teachers and
                                students. This approach ensured that all tasks
                                and projects were completed efficiently, further
                                contributing to the institute's success.
                                <br />
                                <br />
                                Overall, my experience as a CEO and IT Manager
                                has provided me with valuable skills and
                                expertise in managing teams, developing
                                effective time management strategies, and
                                implementing successful business practices.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://faniinstitute.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Fani Informatic Institute Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Apple Product Support - Hightech Apple Store
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/10/2010 – 01/08/2011)
                            </p>
                            <p className="mt-4">
                                As an Apple Store technician, I am experienced
                                in installing Mac OS and iOS software, as well
                                as providing hardware replacements for iPhone 5
                                and 6 models. I have a solid understanding of
                                Mac OS networking using TCP/IP and am skilled in
                                performing backup and restore functions for
                                iPhones, iPads, and iPod touch. With my strong
                                technical abilities and dedication to customer
                                satisfaction, I am able to effectively diagnose
                                and resolve a wide range of issues for Apple
                                users.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://hightechapplestore.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hightech Apple Store Website
                                </a>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Computer Installation and Troubleshooting
                                Specialist - Holoo Software
                            </h3>
                            <p className="text-gray-600">
                                Kerman, Iran (01/11/2008 – 01/04/2009)
                            </p>
                            <p className="mt-4">
                                As an Installation and Repair Expert, I have
                                gained valuable experience in installing and
                                troubleshooting Windows XP and Vista operating
                                systems, as well as updating and installing
                                hardware drivers. During my full-time summer
                                employment, I primarily installed software and
                                operating systems on various computers and then
                                set them up in the offices of my clients.
                                Through this experience, I have developed a keen
                                eye for detail and a strong ability to
                                troubleshoot and resolve technical issues
                                quickly and efficiently. I pride myself on my
                                excellent communication skills, which have
                                allowed me to work effectively with clients to
                                meet their specific needs and requirements.
                            </p>
                            {/* Company Website Link */}
                            <p className="mt-4">
                                <a
                                    href="https://holoosoftware.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Holoo Software Website
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="py-16 bg-gray-200">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-6">
                                Skills
                            </h2>
                            <div className="flex flex-wrap justify-center space-x-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #node.js
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #react
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #csharp
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #python
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #java
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #html
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #css
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #sql
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #mongodb
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #linux
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Education and Training Section */}
                    <section
                        id="education"
                        className="py-16 bg-gray-100 text-gray-800"
                    >
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-12">
                                Education and Training
                            </h2>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-2xl font-semibold mb-2">
                                    Bachelor's Degree in Computer Software and
                                    Technology
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Azad University (IAU)
                                </p>
                                <p className="text-gray-600 mb-2">
                                    City: Kerman | Country: Iran
                                </p>
                                <p className="text-gray-600">
                                    Duration: 01/06/2010 – 01/06/2014
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Languages Section */}
                    <section
                        id="languages"
                        className="py-16 bg-gray-100 text-gray-800"
                    >
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center mb-12">
                                Languages
                            </h2>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <ul className="list-disc pl-6">
                                    <li className="text-gray-600 mb-2">
                                        <strong>English:</strong> Advanced
                                    </li>
                                    <li className="text-gray-600 mb-2">
                                        <strong>Armenian:</strong> Fluent
                                    </li>
                                    <li className="text-gray-600">
                                        <strong>Persian/Farsi:</strong> Native
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* Reference Section */}
                    <div className="py-16">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-6">
                                References
                            </h2>
                            <p className="text-center text-gray-600">
                                References are available upon request. Please
                                contact me for more information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bg-gray-100 text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Highlighted Projects
                    </h2>
                    <div className="space-y-8">
                        {/* Project Entries */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://www.gtnelu.am"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Gtnelu.am
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "Gtnelu" is a comprehensive platform designed to
                                seamlessly connect users in Armenia with top
                                experts tailored to their specific needs. Our
                                mission is to streamline the process of finding
                                the best professionals for any job efficiently
                                and locally.
                            </p>
                            <p className="text-gray-600 mb-4">
                                This large-scale initiative serves as a catalyst
                                for economic growth by providing job
                                opportunities and fostering a vibrant
                                marketplace in Armenia. With "Gtnelu,"
                                individuals can easily access employment
                                opportunities and accomplish tasks with
                                confidence.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #react
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #node.js
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #mongodb
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://flexshift.example.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    FlexShift
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "FlexShift" is a cutting-edge web application
                                powered by MongoDB, Next.js, Firebase, Google
                                Cloud, AWS, GitHub, JavaScript, TypeScript, and
                                machine learning algorithms. Our platform is
                                designed to empower careers by recommending
                                vacant days as extra shifts and suggesting
                                items.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Users can effortlessly indicate their
                                availability for extra shifts, and our machine
                                learning algorithms intelligently recommend
                                suitable shifts based on preferences and
                                qualifications.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #nextjs
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #mongodb
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #firebase
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://filmogeram.ir"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Filmogeram.ir eCommerce Website
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "Filmogeram Video Shop" is a dynamic WordPress
                                website designed to revolutionize the way video
                                content is sold online. Our platform provides a
                                seamless and user-friendly experience for
                                customers to browse, purchase, and enjoy a wide
                                range of videos.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #wordpress
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #php
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://www.tabasheer.net"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Tabasheer Engineering Co
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "Tabasheer Engineering Co" is a pioneering
                                project developed using C# technology, aimed at
                                providing users with seamless access to their
                                traffic plans, internet services, and technical
                                support needs. The website serves as a
                                comprehensive platform for managing services.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #csharp
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #aspnet
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://mersad.co"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mersad.co eCommerce Website
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "Mersad.co" is a dynamic eCommerce website built
                                on the WordPress platform, offering a wide range
                                of products including CCTV systems, servers,
                                switches, cables, and more. The website provides
                                a convenient and secure online shopping
                                experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #wordpress
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #woocommerce
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://coffe-sefareshi.example.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Coffee Sefareshi eCommerce Website
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "Coffee Sefareshi" is an innovative eCommerce
                                website built on WordPress, dedicated to
                                delivering freshly brewed coffee directly to
                                customers' doorsteps.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #wordpress
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="https://hanemid.example.com"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hanemid Factory Website
                                </a>
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "Hanemid Factory" proudly presents its online
                                dairy sales website, offering a diverse
                                selection of premium dairy products directly
                                from our factory.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #wordpress
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Image Classification AI Model for Happy and Sad
                                Faces
                            </h3>
                            <p className="text-gray-600 mb-4">
                                This project demonstrates machine learning
                                techniques in image classification, specifically
                                identifying whether a person is happy or sad
                                based on their facial expressions.
                            </p>
                            <p className="text-gray-600 mb-4">
                                This technology could be used in monitoring
                                mental health, analyzing customer satisfaction,
                                or developing educational tools.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #python
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #tensorflow
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Soil Moisture Using ESP8266
                            </h3>
                            <p className="text-gray-600 mb-4">
                                This project involves monitoring soil moisture
                                levels using the NodeMCU (ESP8266)
                                microcontroller and a moisture sensor, designed
                                for efficient irrigation practices and optimal
                                plant health.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #c++
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #esp8266
                                </span>
                            </div>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Get Instagram User Information with Python and
                                AI
                            </h3>
                            <p className="text-gray-600 mb-4">
                                This project retrieves Instagram user data using
                                Python and AI techniques. It leverages web
                                scraping libraries like BeautifulSoup and
                                machine learning algorithms to extract valuable
                                insights from Instagram profiles.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #python
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #beautifulsoup
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                    #ai
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Honours and Awards Section */}
            <section id="honours" className="py-16 bg-gray-100 text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Honours and Awards
                    </h2>
                    <div className="space-y-8">
                        {/* Award Entries */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Gold Medalist, First World Karate Championship
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Issued by Iranian Karate National Team
                            </p>
                            <p className="text-gray-600">
                                I won the gold medal in the Bam Earthquake
                                Memorial World Karate Championship, held in
                                Kerman province, Iran, representing the Iranian
                                Karate National Team. This was my second major
                                championship win and a proud moment in my
                                athletic career.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-2">
                                Silver Medalist, International Karate
                                Championship in London
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Issued by Abdu Shaher, 7th Dan Supported by EKGB
                            </p>
                            <p className="text-gray-600">
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
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <FAQPage />
            </section>
        </>
    );
}
