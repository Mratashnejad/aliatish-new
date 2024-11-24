import { Metadata } from 'next';
import BlogPage from '@/components/pages/BlogPage';
export const metadata: Metadata = {
    title: 'Blog - Next.js Web Development & Modern Technologies',
    description:
        'Explore insights and tips on web development with Next.js, Node.js, React.js, PostgreSQL, and AI/ML. Learn from Ali Atish, a Full Stack Developer specializing in modern, scalable web solutions.',
    keywords:
        'Next.js, web development, React.js, Node.js, PostgreSQL, AI, machine learning, Full Stack Developer, scalable web solutions, modern technologies, JavaScript, Next.js tutorials, web development tips, React tutorials, AI development, PostgreSQL tutorials, web application development, software engineering, full stack development blog',
};

const Blog = () => <BlogPage />;
export default Blog;
