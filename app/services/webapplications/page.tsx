import { Metadata } from 'next';
import WebApplicationsPage from '@/components/pages/WebApplicationPage';
export const metadata: Metadata = {
    title: 'Web Application Development | Scalable & Fast Solutions | Custom Web',
    description:
        'Create powerful, scalable web applications with Ali Atish. We specialize in custom web application development, API integration, real-time features, and secure architecture. Perfect for businesses looking to build dynamic, high-performance applications.',
    keywords:
        'web application development, custom web applications, scalable web apps, API integration, real-time web features, secure web architecture, dynamic web apps, web development services, full-stack web development, web application solutions, Ali Atish',
};

const Webapp = () => <WebApplicationsPage />;
export default Webapp;
