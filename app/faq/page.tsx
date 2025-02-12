import { Metadata } from 'next';
import FAQPage from '@/components/pages/FAQPage';
export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions',
    description:
        'Find answers to common questions about career opportunities, application processes, and working at Ali Atish. Learn about our remote work culture, job openings, and how to join our innovative team',
    keywords:
        'FAQ, career opportunities, join Ali Atish, job openings, work with us, remote work, application process, careers at Ali Atish, hiring at Ali Atish, full-stack development jobs',
};

const FAQ = () => <FAQPage />;
export default FAQ;
