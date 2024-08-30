import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
export default function ResumeTab() {
  return (
    <section
      id="resume"
      className="w-full h-screen bg-gray-100 dark:bg-gray-800 py-16 px-6 relative z-10"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Resume</h2>
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Image src="/images/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mr-4" 
            width={40}
            height={40}
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2">Alireza Atashnejad</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full Stack Web Developer with 5+ years of experience in building scalable web applications and services. Proficient in modern web technologies and frameworks.
              </p>
            </div>
          </div>
          <h4 className="text-2xl font-semibold mb-2">Skills & Expertise</h4>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              JavaScript, TypeScript, React, Node.js
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              HTML, CSS, Tailwind CSS, SASS
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Python, Django, Flask
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              SQL, NoSQL, MongoDB, PostgreSQL
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              RESTful APIs, GraphQL
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Git, Docker, Kubernetes
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Agile Methodologies, Scrum
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              CI/CD, Jenkins, GitHub Actions
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Cloud Services: AWS, Azure, Google Cloud
            </li>
          </ul>
          <a href="/resume" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
