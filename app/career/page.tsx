import { Metadata } from 'next';
import CareerPage from '@/components/pages/CareerPage';
export const metadata: Metadata = {
    title: "Careers - Join Our Team of Innovators",
    description: "Explore exciting career opportunities with Ali Atish. Join our team of passionate developers, designers, and innovators to build cutting-edge web solutions using Next.js, Node.js, React.js, and PostgreSQL. Grow your career in a dynamic and collaborative environment.",
    keywords: "Front-End Developer, Next.js, React, TypeScript, dynamic user interfaces, DevOps Engineer, cloud infrastructure, CI/CD pipelines, PostgreSQL, Docker, AWS, Kubernetes, Back-End Developer, Node.js, Express, APIs, REST, GraphQL, Machine Learning Engineer, Python, TensorFlow, scikit-learn, data wrangling, SQL, Social Media Manager, SEO, content creation, Project Manager, Agile, Jira, remote jobs"

};

const Career = () => <CareerPage />;
export default Career;
