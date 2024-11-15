'use client';
import React, { useState } from 'react';
import Head from 'next/head';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  const faqData = [
    {
      question: "What is the application process?",
      answer: "To apply for any of the positions, follow these steps: Review the job descriptions, submit your resume, and email it to careers@aliatish.com along with your GitHub and LinkedIn profiles.",
    },
    {
      question: "Do you offer remote positions?",
      answer: "Yes, all of our positions are fully remote, allowing you to work from anywhere in the world.",
    },
    {
      question: "How do I prepare for an interview at Aliatish?",
      answer: "Prepare by researching the company and the role you're applying for. Review common technical interview questions related to your field. Be ready to discuss your previous work experience and how it aligns with the position.",
    },
    {
      question: "What benefits does Aliatish offer?",
      answer: "We offer flexible working hours, comprehensive health benefits, paid time off, remote work, and opportunities for personal and professional growth.",
    },
    {
      question: "How do I get in touch with the HR team?",
      answer: "You can reach out to us by sending an email to careers@aliatish.com. We will get back to you as soon as possible.",
    },
  ];

  return (
    <>
      <Head>
        <title>FAQ | Aliatish</title>
        <meta name="description" content="Frequently asked questions about career opportunities at Aliatish." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aliatish.com/faq" />
      </Head>

      <section className="dark:bg-black text-gray-800 dark:text-gray-200 py-16">
        <div>
          <div className="dark:bg-black py-20 px-20">
            <div>
              <h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                Frequently Asked Questions
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
                Here are answers to some of the most common questions we receive about working with us. If you have any other questions, feel free to reach out.
              </p>

              <div className="space-y-6">
                {faqData.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <div
                      className="flex justify-between items-center p-6 cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-yellow-400">
                        {item.question}
                      </h4>
                      <svg
                        className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                    {activeIndex === index && (
                      <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> {/* Correctly closed section tag */}
    </>
  );
};

export default FAQPage;
