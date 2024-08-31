'use server';

import { signIn } from '@/lib/auth/authConfig';

export const handleGoogleSignIn = async (locale: string) => {
    try {
        await signIn('google', { redirectTo: `/${locale}/dashboard` }); // Use the locale here
    } catch (error) {
        console.log(error);
        throw error;
    }
};
