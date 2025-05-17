'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Job type
type Job = {
  id: string;
  title: string;
  location: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  slug: string;
};

// Company benefit type
type Benefit = {
  icon: string;
  title: string;
  description: string;
};

// Value type
type CompanyValue = {
  title: string;
  description: string;
  icon: string;
};

// Sample jobs
const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA (Remote Possible)',
    department: 'Engineering',
    type: 'Full-time',
    description: 'We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building high-quality user interfaces for our enterprise clients.',
    requirements: [
      '5+ years of experience with modern JavaScript frameworks (React, Next.js)',
      'Strong understanding of responsive design principles',
      'Experience with TypeScript and state management libraries',
      'Ability to optimize application performance',
      'Experience with testing frameworks',
      'Bachelor\'s degree in Computer Science or equivalent experience'
    ],
    responsibilities: [
      'Develop and maintain high-quality user interfaces',
      'Collaborate with designers and backend developers',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and contribute to technical discussions',
      'Mentor junior developers',
      'Research and implement new technologies as needed'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development stipend',
      'Home office allowance',
      'Unlimited PTO policy'
    ],
    slug: 'senior-frontend-developer'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    location: 'San Francisco, CA (Remote Possible)',
    department: 'Design',
    type: 'Full-time',
    description: 'We\'re seeking a talented UX/UI Designer to create exceptional digital experiences for our clients. You will work closely with clients and the development team to create intuitive and engaging user interfaces.',
    requirements: [
      '3+ years of experience in UI/UX design',
      'Proficiency in design tools such as Figma, Sketch, and Adobe Creative Suite',
      'Strong portfolio demonstrating user-centered design approach',
      'Experience with design systems and component libraries',
      'Understanding of frontend development constraints',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Develop and maintain design systems',
      'Collaborate with developers to ensure design implementations',
      'Present design concepts to clients and stakeholders',
      'Stay up-to-date with design trends and best practices'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development stipend',
      'Home office allowance',
      'Unlimited PTO policy'
    ],
    slug: 'ux-ui-designer'
  },
  {
    id: '3',
    title: 'Backend Engineer',
    location: 'San Francisco, CA (Remote Possible)',
    department: 'Engineering',
    type: 'Full-time',
    description: 'We are looking for a Backend Engineer to develop and maintain the server-side of our web applications. You will be responsible for building efficient, scalable, and secure APIs and services.',
    requirements: [
      '4+ years of experience with backend development',
      'Proficiency in Node.js, Python, or similar backend technologies',
      'Experience with database design and ORM frameworks',
      'Knowledge of API design principles and RESTful services',
      'Understanding of cloud infrastructure (AWS, Azure, or GCP)',
      'Experience with microservices architecture'
    ],
    responsibilities: [
      'Design and implement scalable APIs and services',
      'Optimize database performance and queries',
      'Implement security and data protection measures',
      'Develop and maintain documentation',
      'Collaborate with frontend developers',
      'Participate in architectural planning and technical discussions'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development stipend',
      'Home office allowance',
      'Unlimited PTO policy'
    ],
    slug: 'backend-engineer'
  },
  {
    id: '4',
    title: 'Digital Marketing Specialist',
    location: 'San Francisco, CA (Remote Possible)',
    department: 'Marketing',
    type: 'Full-time',
    description: 'We\'re looking for a Digital Marketing Specialist to develop and implement effective digital marketing strategies for our company and our clients. You will help drive traffic, engagement, and conversions through various digital channels.',
    requirements: [
      '3+ years of experience in digital marketing',
      'Experience with SEO, SEM, social media, and email marketing',
      'Proficiency in marketing analytics tools',
      'Understanding of conversion optimization principles',
      'Experience with content marketing and content strategy',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Develop and implement digital marketing strategies',
      'Manage SEO, SEM, and social media campaigns',
      'Analyze marketing metrics and optimize campaigns',
      'Create and manage content marketing initiatives',
      'Collaborate with the design and development teams',
      'Stay up-to-date with digital marketing trends'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development stipend',
      'Home office allowance',
      'Unlimited PTO policy'
    ],
    slug: 'digital-marketing-specialist'
  },
  {
    id: '5',
    title: 'Project Manager',
    location: 'San Francisco, CA (Remote Possible)',
    department: 'Operations',
    type: 'Full-time',
    description: 'We are seeking an experienced Project Manager to oversee digital projects from concept to completion. You will be responsible for planning, executing, and closing projects while ensuring they are delivered on time, within scope, and within budget.',
    requirements: [
      '4+ years of experience in project management',
      'Experience in digital project management',
      'PMP or Agile certification preferred',
      'Strong leadership and communication skills',
      'Proficiency in project management tools',
      'Ability to manage multiple projects simultaneously'
    ],
    responsibilities: [
      'Define project scope, goals, and deliverables',
      'Develop detailed project plans and schedules',
      'Coordinate team members and resources',
      'Monitor project progress and handle issues',
      'Communicate with stakeholders and clients',
      'Lead project meetings and documentation'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development stipend',
      'Home office allowance',
      'Unlimited PTO policy'
    ],
    slug: 'project-manager'
  }
];

// Company benefits
const benefits: Benefit[] = [
  {
    icon: '💰',
    title: 'Competitive Compensation',
    description: 'We offer industry-leading salaries, equity options, and performance bonuses to reward your hard work and contributions.'
  },
  {
    icon: '🏥',
    title: 'Comprehensive Healthcare',
    description: 'We provide top-tier health, dental, and vision insurance for you and your dependents, ensuring your wellbeing is taken care of.'
  },
  {
    icon: '🏠',
    title: 'Remote-First Culture',
    description: 'Work from anywhere with our flexible remote policy, plus a home office stipend to set up your ideal workspace.'
  },
  {
    icon: '🌱',
    title: 'Professional Growth',
    description: 'Access to learning stipends, conferences, courses, and mentorship programs to help advance your career.'
  },
  {
    icon: '🧘',
    title: 'Work-Life Balance',
    description: 'Enjoy unlimited PTO, flexible working hours, and wellness programs that promote a healthy balance between work and personal life.'
  },
  {
    icon: '🚀',
    title: 'Innovation Time',
    description: 'Dedicated time each week to work on passion projects, explore new technologies, and contribute to open-source initiatives.'
  }
];

// Company values
const companyValues: CompanyValue[] = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, pushing boundaries and setting new standards in our industry.',
    icon: '🏆'
  },
  {
    title: 'Innovation',
    description: 'We embrace change and continuously explore new ideas and technologies to solve complex problems.',
    icon: '💡'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication to achieve greater results together.',
    icon: '🤝'
  },
  {
    title: 'Integrity',
    description: 'We act with honesty, transparency, and ethical principles in all our interactions and decisions.',
    icon: '⚖️'
  },
  {
    title: 'Diversity',
    description: 'We value diverse perspectives and create an inclusive environment where everyone feels welcome and respected.',
    icon: '🌈'
  },
  {
    title: 'Impact',
    description: 'We focus on creating meaningful impact for our clients, users, communities, and the world at large.',
    icon: '🌍'
  }
];

// Job card component
const JobCard = ({ job }: { job: Job }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {job.department}
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-neutral/10 text-neutral/70 rounded-full">
              {job.type}
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-neutral/10 text-neutral/70 rounded-full">
              {job.location}
            </span>
          </div>
        </div>
        
        <Link
          href={`/careers/${job.slug}`}
          className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors mt-4 md:mt-0"
        >
          View Details
        </Link>
      </div>
      
      <p className="text-neutral/70 mb-4">{job.description}</p>
      
      <div className="mt-4">
        <h4 className="font-medium mb-2">Key Requirements:</h4>
        <ul className="space-y-1">
          {job.requirements.slice(0, 3).map((req, index) => (
            <li key={index} className="flex items-start text-sm text-neutral/70">
              <span className="text-primary mr-2">•</span>
              <span>{req}</span>
            </li>
          ))}
          {job.requirements.length > 3 && (
            <li className="text-sm text-primary/80 mt-1">
              +{job.requirements.length - 3} more requirements
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

// Benefit card component
const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
      <p className="text-neutral/70">{benefit.description}</p>
    </motion.div>
  );
};

// Value card component
const ValueCard = ({ value, index }: { value: CompanyValue; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start p-4"
    >
      <div className="mr-4 text-3xl">{value.icon}</div>
      <div>
        <h3 className="text-lg font-bold mb-2">{value.title}</h3>
        <p className="text-neutral/70">{value.description}</p>
      </div>
    </motion.div>
  );
};

export default function CareersPage() {
  const [departmentFilter, setDepartmentFilter] = useState<string | null>(null);
  
  // Extract unique departments
  const departments = Array.from(
    new Set(jobs.map(job => job.department))
  ).sort();
  
  // Filter jobs based on department
  const filteredJobs = departmentFilter
    ? jobs.filter(job => job.department === departmentFilter)
    : jobs;
  
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 mix-blend-multiply blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our <span className="text-primary">Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We&apos;re building a team of passionate individuals who are excited about creating
              exceptional digital experiences. Explore our open positions and find your next
              career opportunity.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="#open-positions"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                View Open Positions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Company culture section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Life at ALIATISH
            </h2>
            <p className="text-lg text-neutral/80">
              We&apos;re building a culture where innovation thrives, people feel valued, and
              meaningful work gets done. Here&apos;s what makes our team special.
            </p>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-primary/20 to-accent-purple/20">
            <div className="absolute inset-0 flex items-center justify-center text-neutral/40">
              <span className="text-lg font-medium">Team Image Placeholder</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-6">
                {companyValues.slice(0, 3).map((value, index) => (
                  <ValueCard key={index} value={value} index={index} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">What Drives Us</h3>
              <div className="space-y-6">
                {companyValues.slice(3).map((value, index) => (
                  <ValueCard key={index + 3} value={value} index={index + 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Benefits & Perks
            </h2>
            <p className="text-lg text-neutral/80">
              We believe in taking care of our team members with comprehensive benefits
              that support your wellbeing, growth, and work-life balance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Open positions section */}
      <section id="open-positions" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-neutral/80 mb-8">
              Explore our current job openings and find your perfect role in our growing team.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setDepartmentFilter(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  departmentFilter === null
                    ? 'bg-primary text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                All Departments
              </button>
              
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartmentFilter(dept)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    departmentFilter === dept
                      ? 'bg-primary text-white'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                <h3 className="text-xl font-bold mb-2">No positions available</h3>
                <p className="text-neutral/60">
                  There are currently no open positions in this department. 
                  Please check back later or explore other departments.
                </p>
                <button
                  onClick={() => setDepartmentFilter(null)}
                  className="mt-6 px-6 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
                >
                  View all departments
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            )}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral/70 mb-4">
              Don&apos;t see a position that matches your skills?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
            >
              Send us your resume
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">
              What Our Team Says
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <blockquote className="pl-6 italic text-indigo-200 border-l-2 border-indigo-500/50">
              "Joining ALIATISH was one of the best career decisions I&apos;ve made. The collaborative culture, challenging projects, and focus on personal growth have made this a truly rewarding experience. I&apos;ve been able to work with cutting-edge technologies while having the flexibility to maintain a healthy work-life balance."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary font-medium mr-4">
                MJ
              </div>
              <div className="text-left">
                <p className="font-bold">Michael Johnson</p>
                <p className="text-neutral/60">Senior Developer, 3 years at ALIATISH</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-neutral/80 mb-10">
              Explore our open positions and take the next step in your career journey.
              We&apos;re excited to hear from you!
            </p>
            <Link 
              href="#open-positions"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 