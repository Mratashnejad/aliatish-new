import { Metadata } from 'next';
import PrivacyPolicy from '@/components/pages/PrivacyPage';
export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Read the Privacy Policy of Ali Atish to learn how we collect, use, and protect your personal data. We are committed to safeguarding your privacy and ensuring the security of your information.',
    keywords:
        'privacy policy, data protection, personal data, cookies policy, GDPR, privacy rights, website privacy, data security, user privacy, Ali Atish privacy',
};
const Privacy = () => <PrivacyPolicy />;
export default Privacy;
