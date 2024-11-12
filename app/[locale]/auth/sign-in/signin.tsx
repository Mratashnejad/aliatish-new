'use client';
import { FcGoogle } from 'react-icons/fc';
import { useState, useTransition } from 'react';
import { useLocale } from 'next-intl'; 
import { handleGoogleSignIn } from '@/lib/auth/googleSignInServerAction';
import { handleEmailSignIn } from '@/lib/auth/emailSignInServerActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignInPage: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({ email: '' as string });
    const locale = useLocale(); 
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Handle Google Sign-In with locale
    const handleGoogleSignInWithLocale = async () => {
        try {
            await handleGoogleSignIn(locale);
        } catch (error) {
            console.error(error);
            toast.error('Google sign-in failed. Please try again.');
        }
    };

    // Handle Email Sign-In with validation
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Email validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error('Invalid email format');
            return;
        }

        try {
            startTransition(async () => {
                await handleEmailSignIn(formData.email);
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to sign in with email. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-gray-900">
                <h2 className="text-2xl font-semibold mb-6 text-center text-black dark:text-white">
                    Sign In
                </h2>
                <div className="space-y-6">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            maxLength={320}
                            placeholder="Email Address"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setFormData({ email: event.target.value });
                            }}
                            disabled={isPending}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 dark:bg-blue-800 dark:hover:bg-blue-700"
                        >
                            Sign In with email
                        </button>
                    </form>

                    <div className="flex items-center justify-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-800 dark:text-gray-200">or</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200 bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600"
                            onClick={handleGoogleSignInWithLocale}
                        >
                            <FcGoogle className="text-2xl mr-2" />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast Container for notifications */}
            <ToastContainer />
        </div>
    );
};
