'use client'
import React from 'react'
import { HiDownload } from 'react-icons/hi';
export default function HeroSection(){
  return (
    <div>
      <section
                id="about"
                className="min-h-screen bg-gradient-to-b bg-zinc-50 dark:from-gray-900 dark:to-black flex flex-col items-center justify-center text-gray-900 dark:text-white"
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
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    >
                        <HiDownload className="mr-2" size={20} />
                        Download Resume
                    </a>
                </div>
            </section>
    </div>
  )
}

