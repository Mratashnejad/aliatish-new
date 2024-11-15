'use client';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const CareerPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleApplyClick = (title, content) => {
    const subject = `Application for ${title}`;
    const body = `I am applying for the position of ${title}. \n\n${content}\n\nPlease find my CV attached, along with my GitHub and LinkedIn profiles.\n\nBest regards, [Your Name]`;

    window.location.href = `mailto:careers@aliatish.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Head>
        <title>Careers | Aliatish</title>
        <meta name="description" content="Explore career opportunities at Aliatish.com. Join our team and grow with us!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aliatish.com/careers" />
      </Head>

      {/* Career Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="dark:bg-black text-gray-800 dark:text-gray-200 py-16"
      >
        <div>
          <motion.div
            className="dark:bg-black py-20 px-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                Careers at Aliatish
              </motion.h3>
              <motion.p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4" variants={itemVariants}>
                We`&apos;`re always looking for talented, passionate individuals to join our team. All of our positions are remote. Apply today!
              </motion.p>

              <div className="space-y-8">
                {/* Job Openings */}
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    1. Job Openings
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    All of our positions are remote. Here are some of the roles we`&apos;`re hiring for:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Job Cards */}
                    {[{
                      title: 'Front-End Developer',
                      description: 'Build dynamic and engaging user interfaces using **Next.js**, **React**, **TypeScript**, and modern front-end technologies.'
                    }, {
                      title: 'DevOps Engineer',
                      description: 'Manage cloud infrastructure and CI/CD pipelines. Experience with **PostgreSQL**, **Docker**, **AWS**, and **Kubernetes** is a plus.'
                    }, {
                      title: 'Back-End Developer',
                      description: 'Develop scalable APIs using **Node.js**, **Express**, **PostgreSQL**, and **TypeScript**. Experience with **REST** and **GraphQL** is a plus.'
                    }, {
                      title: 'Machine Learning Engineer',
                      description: 'Build machine learning models and algorithms using **Python**, **TensorFlow**, and **scikit-learn**. Knowledge of data wrangling and **SQL** is a plus.'
                    }, {
                      title: 'Social Media Manager',
                      description: 'Develop and manage social media strategies to increase brand presence across multiple platforms. Experience with **SEO** and content creation is a plus.'
                    }, {
                      title: 'Project Manager',
                      description: 'Oversee project timelines, resources, and communication. Knowledge of **Agile** methodology and project management tools like **Jira** is preferred.'
                    }].map((job, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-yellow-400 mb-4">{job.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Location: Remote</p>
                        <button
                          onClick={() => handleApplyClick(job.title, job.description)}
                          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
                        >
                          Apply Now
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
                    <strong>Note:</strong> When applying, please attach your CV, along with your GitHub and LinkedIn profiles in the email.
                  </p>
                </motion.section>

                {/* Application Process */}
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    2. Application Process
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    To apply for any of the positions above, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Step 1:</strong> Review the job descriptions and ensure you meet the qualifications.</li>
                    <li><strong>Step 2:</strong> Submit your updated resume and cover letter via email to <strong>careers@aliatish.com</strong>.</li>
                    <li><strong>Step 3:</strong> Attach your CV along with links to your GitHub and LinkedIn profiles in the email.</li>
                    <li><strong>Step 4:</strong> We will review your application and contact you if your profile is a match.</li>
                    <li><strong>Step 5:</strong> Participate in an interview process, either in-person or virtually.</li>
                    <li><strong>Step 6:</strong> Receive feedback and, if selected, a formal offer.</li>
                  </ol>
                </motion.section>

                {/* Benefits */}
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    3. Employee Benefits
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    As part of our team, you will enjoy:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Flexible working hours</li>
                    <li>Comprehensive health benefits</li>
                    <li>Paid time off and holidays</li>
                    <li>Remote work environment</li>
                    <li>Opportunities for growth and development</li>
                  </ul>
                </motion.section>

                {/* Contact Us */}
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    4. Contact Us
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you have any questions about the career opportunities at Aliatish, feel free to reach out to us:
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Email: <a href="mailto:careers@aliatish.com">careers@aliatish.com</a>
                  </p>
                </motion.section>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default CareerPage;
