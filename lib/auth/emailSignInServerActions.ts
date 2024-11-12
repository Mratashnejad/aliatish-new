'use server';

import { signIn } from '@/lib/auth/authConfig';

export const handleEmailSignIn = async (email: string) => {
    try {
        await signIn('nodemailer', { email, callbackUrl: '/dashboard' });
    } catch (error) {
        console.error('Email sign-in failed:', error);
        return {
            success: false,
            message: 'Email sign-in failed. Please try again.',
        };
    }
};
