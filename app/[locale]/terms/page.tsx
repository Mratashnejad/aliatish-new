import { Metadata } from 'next';
import TermsOfService from '@/components/pages/TermsPage';
export const metadata: Metadata = {
    title: 'Terms of Service',
    description:
        'Read the Terms of Service for using the services provided by Ali Atish. This document outlines the terms, conditions, and responsibilities for using our web development, UI/UX design, SEO services, and multi-language website solutions.',
    keywords:
        'Terms of Service, Ali Atish, terms and conditions, website services, web development, UI/UX design, SEO services, multi-language website solutions, user agreements, service policies',
};

const Terms = () => <TermsOfService />;
export default Terms;
