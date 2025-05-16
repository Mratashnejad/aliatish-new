"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

type ProjectCategory = "all" | "frontend" | "fullstack" | "backend";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory[];
  link: string;
  color: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment processing.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
    category: ["frontend", "fullstack"],
    link: "/portfolio/ecommerce",
    color: "from-rose-500 to-orange-400",
  },
  {
    id: "project-2",
    title: "Real Estate Application",
    description: "Property listing and search platform with advanced filtering and map integration.",
    image: "/projects/realestate.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    category: ["frontend", "fullstack"],
    link: "/portfolio/realestate",
    color: "from-indigo-500 to-sky-400",
  },
  {
    id: "project-3",
    title: "Enterprise Dashboard",
    description: "Data visualization dashboard for tracking KPIs and business metrics in real time.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "TypeScript", "D3.js", "GraphQL"],
    category: ["frontend", "backend"],
    link: "/portfolio/dashboard",
    color: "from-emerald-500 to-lime-400",
  },
  {
    id: "project-4",
    title: "Social Media App",
    description: "Social networking platform with real-time messaging and content sharing.",
    image: "/projects/social.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Socket.io", "Redis"],
    category: ["frontend", "fullstack", "backend"],
    link: "/portfolio/social",
    color: "from-violet-600 to-purple-400",
  },
  {
    id: "project-5",
    title: "Delivery Tracking API",
    description: "Backend system for tracking deliveries and managing logistics in real time.",
    image: "/projects/delivery.jpg",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    category: ["backend"],
    link: "/portfolio/delivery",
    color: "from-amber-500 to-yellow-300",
  },
  {
    id: "project-6",
    title: "Mobile Shopping App",
    description: "Cross-platform mobile shopping application with personalized recommendations.",
    image: "/projects/mobile.jpg",
    technologies: ["React Native", "Redux", "Firebase", "Stripe"],
    category: ["frontend"],
    link: "/portfolio/mobile",
    color: "from-blue-500 to-cyan-400",
  },
];

// Project Card with stunning hover effects
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="relative group w-full h-[400px] rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content container with great visibility */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 transition-all duration-300">
        {/* Project title with visibility */}
        <motion.div animate={{ y: isHovered ? -10 : 0 }} transition={{ type: "spring", stiffness: 200 }}>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

          {/* Technologies badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                {tech}
              </span>
            ))}
          </div>

          {/* Description with high contrast for visibility */}
          <p className="text-white text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </motion.div>

        {/* CTA button with great visibility */}
        <Link
          href={project.link}
          className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transform transition-all duration-300 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          View Project
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

// Category filter tabs with high visibility
const CategoryFilter = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
}) => {
  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Full-stack", value: "fullstack" },
    { label: "Backend", value: "backend" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setActiveCategory(category.value as ProjectCategory)}
          className={`px-6 py-3 rounded-lg font-medium text-sm transition-all relative ${
            activeCategory === category.value
              ? "text-white bg-primary shadow-lg shadow-primary/20"
              : "text-white bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

// Point of Sale promotional section with attention-grabbing design
const PointOfSalePromo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="mt-20 mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#FF0066"
            d="M47.5,-61.5C60.2,-53.9,68.5,-37.5,73.1,-20.1C77.7,-2.7,78.5,15.7,71.8,30.8C65.1,45.9,50.8,57.7,35.2,63.9C19.6,70.1,2.7,70.6,-15.4,68.1C-33.5,65.6,-52.8,60.2,-63.2,47.8C-73.6,35.4,-75.1,15.9,-73.3,-2.8C-71.5,-21.5,-66.5,-39.5,-54.9,-47.8C-43.3,-56.1,-25.1,-54.7,-7.8,-54.9C9.6,-55,29.1,-56.8,47.5,-61.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10 px-8 py-16 md:p-16 text-center md:text-left md:flex items-center">
        <div className="md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Point of Sale Solution</h2>
          <p className="text-xl text-white/80 mb-8">
            Transform your retail business with our powerful POS system designed for modern commerce.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Seamless Integration</h3>
                <p className="text-white/70">Connects with your existing systems and payment processors</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Real-time Analytics</h3>
                <p className="text-white/70">Track sales, inventory, and customer insights instantly</p>
              </div>
            </div>
          </div>

          <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105">
            Get Started Today
          </button>
        </div>

        <div className="hidden md:block md:w-2/5">
          <div className="relative h-[300px] w-full">
            <motion.div
              className="absolute top-0 right-0 h-full w-full"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <div className="bg-gradient-to-br from-primary/80 to-purple-600/80 rounded-2xl p-2 h-full w-full backdrop-blur-lg shadow-xl">
                <div className="bg-gray-900 rounded-xl h-full w-full p-4 overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-white font-bold">ALIA POS</div>
                    <div className="text-white/70 text-sm">12:30 PM</div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center p-2 rounded bg-white/5">
                        <div className="text-white text-sm">Product #{i}</div>
                        <div className="text-white text-sm">${(19.99 * i).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/10 flex justify-between">
                    <div className="text-white">Total:</div>
                    <div className="text-white font-bold">$79.96</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Filter projects when category changes
  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category.includes(category)));
    }
  };

  return (
    <section className="py-24 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section intro with high visibility */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work</h2>
          <p className="text-xl text-white/80 mb-6">Exceptional Projects That Inspire</p>
          <p className="text-lg text-white/70">
            Explore our portfolio of award-winning digital solutions that showcase our commitment to innovation,
            performance, and exceptional user experience.
          </p>
        </motion.div>

        {/* Category filter */}
        <CategoryFilter activeCategory={activeFilter} setActiveCategory={handleFilterChange} />

        {/* Projects grid with high visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Point of sale promo section */}
        <PointOfSalePromo />

        {/* CTA button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-full backdrop-blur-sm transition-all"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
