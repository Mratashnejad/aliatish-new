import { Metadata } from 'next';
import PackagePage from '@/components/pages/PackagePage';
export const metadata: Metadata = {
    title: 'Services & Packages - Web Application',
    description:
        'Explore our range of flexible services and packages tailored for all types of businesses. From website design to SEO, web development, UI/UX, multi-language support, and more, we offer solutions to help your business grow online.',
    keywords:
        'web design packages, SEO optimization, web development services, UI/UX design, multi-language support, custom website, responsive website design, website packages, digital solutions, web applications, SEO services, business website design',
};

const Package = () => <PackagePage />;
export default Package;
