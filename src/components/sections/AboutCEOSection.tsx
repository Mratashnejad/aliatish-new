import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Skill = {
  name: string;
  level: number;
};

type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
};

const skills: Skill[] = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript / JavaScript', level: 90 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'GraphQL / REST APIs', level: 85 },
  { name: 'PostgreSQL / Redis', level: 82 },
  { name: 'Docker / DevOps', level: 75 },
];

const experiences: Experience[] = [
  {
    year: '2023 - Present',
    title: 'Founder & CEO',
    company: 'ALIATISH',
    description: 'Leading a web development agency focused on creating cutting-edge digital experiences for clients around the world.',
  },
  {
    year: '2020 - 2023',
    title: 'Senior Full-stack Developer',
    company: 'TechCorp Inc.',
    description: 'Led development of enterprise-scale web applications using React, Node.js, and cloud technologies.',
  },
  {
    year: '2017 - 2020',
    title: 'Full-stack Developer',
    company: 'WebSolutions LLC',
    description: 'Designed and built responsive websites and applications for various clients across industries.',
  },
  {
    year: '2013 - 2017',
    title: 'Frontend Developer',
    company: 'DigitalAgency Co.',
    description: 'Specialized in creating interactive user interfaces and responsive designs for client websites.',
  },
];

export default function AboutCEOSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i,
      },
    }),
  };
  
  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section id="about-ceo" className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-black z-0">
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"
          style={{ transform: 'translate(50%, -50%)' }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Meet <span className="fire-text">Ali</span>, Our Founder & CEO
            </h2>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              With over 10 years of full-stack development expertise, Ali has created exceptional
              digital experiences for clients around the world.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full fire-gradient"
                          custom={skill.level}
                          variants={skillBarVariants}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-bold mb-8">About Me</h3>
                
                <p className="text-white/80 mb-4">
                  Hi, I'm Ali, a passionate full-stack developer with a decade of experience
                  building web applications and digital solutions.
                </p>
                
                <p className="text-white/80 mb-4">
                  I specialize in creating high-performance, scalable web applications using
                  modern technologies like React, Next.js, Node.js, and more.
                </p>
                
                <p className="text-white/80">
                  At ALIATISH, my goal is to help businesses transform their digital presence
                  with cutting-edge solutions that not only look great but also perform exceptionally.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={timelineVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              Professional Journey
            </motion.h3>
            
            <div className="relative border-l-2 border-red-600/50 pl-8 ml-4 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={timelineItemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  
                  <span className="text-red-400 font-medium text-sm">{exp.year}</span>
                  <h4 className="text-xl font-bold mt-1">{exp.title}</h4>
                  <p className="text-white/80 text-sm">{exp.company}</p>
                  <p className="text-white/70 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 