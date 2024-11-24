import { Metadata } from 'next';
import SEOService from '@/components/pages/SEOPage';
export const metadata: Metadata = {
    title: 'SEO Services | Boost Your Search Engine Rankings ',
    description:
        'Maximize your online presence with expert SEO services from Ali Atish. Improve your search engine rankings, drive more organic traffic, and grow your business with tailored SEO strategies including keyword research, on-page optimization, and link building.',
    keywords:
        'SEO services, search engine optimization, SEO agency, keyword research, on-page SEO, link building, SEO strategy, organic traffic, improve search rankings, SEO optimization, SEO expert, Ali Atish',
};

const SEO = () => <SEOService />;
export default SEO;
