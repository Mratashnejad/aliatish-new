import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Project types and categories
const projectCategories = ["Web Apps", "Mobile", "AI Integration", "Blockchain"];

// Define the Project type
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  color: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Stellar Dashboard",
    category: "Web Apps",
    description: "Real-time data visualization platform with cosmic-inspired UI",
    image: "/images/portfolio/stellar-dashboard.jpg",
    technologies: ["React", "TypeScript", "D3.js"],
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Nebula Commerce",
    category: "Web Apps",
    description: "E-commerce platform with celestial navigation patterns",
    image: "/images/portfolio/nebula-commerce.jpg",
    technologies: ["Next.js", "GraphQL", "Prisma"],
    color: "from-indigo-500 to-blue-600"
  },
  // More projects...
];

// Add this at the top or near generateParticles
interface Particle {
  top: number;
  left: number;
  width: number;
  height: number;
  opacity: number;
  duration: number;
}

// Utility to generate random particle data
function generateParticles(count: number) {
  return Array.from({ length: count }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: Math.random() * 3 + 1,
    height: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5,
    duration: Math.random() * 5 + 5,
  }));
}

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Filter projects by category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };
  
  // Orbital animation for projects
  useEffect(() => {
    if (!projectRefs.current.length) return;
    
    let frameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.002;
      
      projectRefs.current.forEach((ref, i) => {
        if (!ref) return;
        
        // Calculate orbital wobble
        const wobbleX = Math.sin(time * (2 + i * 0.5)) * 5;
        const wobbleY = Math.cos(time * (2 + i * 0.5)) * 5;
        
        (ref as HTMLDivElement).style.transform = `translate(${wobbleX}px, ${wobbleY}px)`;
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [filteredProjects]);
  
  useEffect(() => {
    setParticles(generateParticles(150));
  }, []);
  
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0d0a25] to-[#1a0e35]">
      {/* Cosmic dust and particles background */}
      <div className="absolute inset-0 z-0">  
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/20"
            initial={{ 
              top: `${particle.top}%`, 
              left: `${particle.left}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              opacity: particle.opacity
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Glow orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
          animate={{ 
            x: [100, 300, 100], 
            y: [50, 200, 50]
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ 
            x: [500, 200, 500], 
            y: [300, 100, 300]
          }}
          transition={{ duration: 40, repeat: Infinity }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-4 text-sm font-medium text-white"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            Cosmic Portfolio
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Exploring Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Galactic Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-300 text-lg"
          >
            Journey through our constellation of projects spanning multiple technologies and dimensions.
          </motion.p>
        </div>
        
        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CategoryButton 
            active={selectedCategory === "All"}
            onClick={() => setSelectedCategory("All")}
          >
            All Projects
          </CategoryButton>
          
          {projectCategories.map(category => (
            <CategoryButton 
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el: HTMLDivElement | null) => { projectRefs.current[index] = el; }}
              className="relative group"
              variants={projectVariants}
              whileHover="hover"
              onClick={() => setActiveProject(project)}
            >
              <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${project.color} p-1`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl transform group-hover:backdrop-blur-none transition-all duration-300"></div>
                
                <div className="relative bg-[#0f0b2a]/90 group-hover:bg-[#0f0b2a]/70 rounded-lg overflow-hidden h-[300px] transform transition-all duration-300">
                  {/* Project image */}
                  <div className="h-[60%] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Cosmic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b2a] to-transparent opacity-70"></div>
                  </div>
                  
                  {/* Project info */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center mb-2">
                      <span className={`w-2 h-2 rounded-full bg-${project.color.split('-')[3]} mr-2`}></span>
                      <span className="text-sm text-gray-300">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Orbit lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                  </div>
                </div>
              </div>  
              
              {/* Orbital glow */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all projects button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
          >
            Explore All Projects
          </motion.button>
        </motion.div>
      </div>
      
      {/* Project detail modal */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </section>
  );
};

// Helper components
interface CategoryButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}
const CategoryButton = ({ children, active, onClick }: CategoryButtonProps) => (
  <motion.button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white" 
        : "bg-white/10 text-gray-300 hover:bg-white/20"
    }`}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.97 }}
  >
    {children}
  </motion.button>
);

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#0f0b2a] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Project details content */}
        <div className="relative h-[300px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b2a] to-transparent"></div>
          
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-8">{project.description}</p>
          
          {/* Project details */}
          {/* Additional content like full description, challenges, solutions, etc. */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioSection;