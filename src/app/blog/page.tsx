'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Blog post type
type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: number;
  image: string;
  categories: string[];
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-scalable-enterprise-applications',
    title: 'Building Scalable Enterprise Applications with Microservices',
    excerpt: 'Learn how microservices architecture can transform your enterprise applications and improve scalability, maintainability, and resilience.',
    author: {
      name: 'Alex Johnson',
      avatar: '/images/avatars/alex.jpg',
      role: 'Chief Technical Officer'
    },
    date: 'June 15, 2023',
    readTime: 8,
    image: '/images/blog/microservices.jpg',
    categories: ['Architecture', 'Enterprise', 'Microservices']
  },
  {
    id: '2',
    slug: 'ecommerce-trends-2023',
    title: 'E-commerce Trends That Will Define Retail in 2023',
    excerpt: 'Discover the top e-commerce trends that are reshaping the retail landscape and how businesses can adapt to stay competitive.',
    author: {
      name: 'Sarah Chen',
      avatar: '/images/avatars/sarah.jpg',
      role: 'E-commerce Strategist'
    },
    date: 'May 22, 2023',
    readTime: 6,
    image: '/images/blog/ecommerce-trends.jpg',
    categories: ['E-commerce', 'Retail', 'Trends']
  },
  {
    id: '3',
    slug: 'data-visualization-business-intelligence',
    title: 'Advanced Data Visualization Techniques for Business Intelligence',
    excerpt: 'Explore cutting-edge data visualization techniques that transform complex data sets into actionable business insights.',
    author: {
      name: 'Michael Roberts',
      avatar: '/images/avatars/michael.jpg',
      role: 'Data Science Lead'
    },
    date: 'April 10, 2023',
    readTime: 7,
    image: '/images/blog/data-viz.jpg',
    categories: ['Business Intelligence', 'Data Visualization', 'Analytics']
  },
  {
    id: '4',
    slug: 'rest-vs-graphql-apis',
    title: 'REST vs GraphQL: Choosing the Right API Architecture',
    excerpt: 'A comprehensive comparison of REST and GraphQL API architectures to help you make the right choice for your next project.',
    author: {
      name: 'Emily Zhang',
      avatar: '/images/avatars/emily.jpg',
      role: 'API Architect'
    },
    date: 'March 5, 2023',
    readTime: 9,
    image: '/images/blog/api-architecture.jpg',
    categories: ['API', 'Development', 'Architecture']
  },
  {
    id: '5',
    slug: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices for Enterprise Applications',
    excerpt: 'Essential cybersecurity practices to protect your enterprise applications from evolving threats and vulnerabilities.',
    author: {
      name: 'David Wilson',
      avatar: '/images/avatars/david.jpg',
      role: 'Security Engineer'
    },
    date: 'February 18, 2023',
    readTime: 10,
    image: '/images/blog/cybersecurity.jpg',
    categories: ['Security', 'Enterprise', 'Best Practices']
  },
  {
    id: '6',
    slug: 'ux-design-principles',
    title: 'UX Design Principles for Exceptional Digital Experiences',
    excerpt: 'Key UX design principles and methodologies that lead to exceptional digital experiences and increased user satisfaction.',
    author: {
      name: 'Sophia Martinez',
      avatar: '/images/avatars/sophia.jpg',
      role: 'UX Design Director'
    },
    date: 'January 29, 2023',
    readTime: 6,
    image: '/images/blog/ux-design.jpg',
    categories: ['UX', 'Design', 'Digital Experience']
  }
];

// Featured post (latest post)
const featuredPost = blogPosts[0];

// Extract all unique categories
const allCategories = Array.from(
  new Set(blogPosts.flatMap(post => post.categories))
).sort();

// Blog post card component
const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent-purple/20">
        <div className="absolute inset-0 flex items-center justify-center text-neutral/40">
          <span className="text-lg font-medium">Image Placeholder</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 2).map((category, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {category}
            </span>
          ))}
          {post.categories.length > 2 && (
            <span className="px-3 py-1 text-xs font-medium bg-neutral/10 text-neutral/70 rounded-full">
              +{post.categories.length - 2}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-neutral/70 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary font-medium">
              {post.author.name.charAt(0)}
            </div>
            <span className="ml-2 text-sm font-medium">{post.author.name}</span>
          </div>
          
          <div className="text-sm text-neutral/60">
            {post.readTime} min read
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Featured post component
const FeaturedPost = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-2xl overflow-hidden border border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {post.title}
          </h2>
          
          <p className="text-neutral/80 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary font-medium">
                {post.author.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-neutral/60">{post.author.role}</p>
              </div>
            </div>
            
            <div className="text-sm text-neutral/60">
              {post.date} • {post.readTime} min read
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Read full article
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent-purple/20">
          <div className="absolute inset-0 flex items-center justify-center text-neutral/40">
            <span className="text-lg font-medium">Featured Image Placeholder</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter posts based on selected category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
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
              Our <span className="text-primary">Blog</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Insights, news, and thought leadership from our team of experts
              on all things digital.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Featured post section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <FeaturedPost post={featuredPost} />
          </div>
        </div>
      </section>
      
      {/* Blog posts section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 pl-10 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/60" 
                  width="16" height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-neutral/80"
              >
                <option value="">All Categories</option>
                {allCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-neutral/60">
                Try changing your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm('');
                }}
                className="mt-6 px-6 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="py-20 mt-12 bg-gradient-to-br from-primary/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-neutral/80 mb-8">
              Stay updated with the latest insights, trends, and news from our experts.
              We promise not to spam you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="mt-4 text-sm text-neutral/60">
              By subscribing, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 