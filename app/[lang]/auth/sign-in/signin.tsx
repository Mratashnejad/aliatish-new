"use client";

import { FcGoogle } from "react-icons/fc";
import { useState, useTransition } from "react";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { handleEmailSignIn } from "@/lib/auth/emailSignInServerActions";

export const SignInPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({ email: "" as string });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      startTransition(async () => {
        await handleEmailSignIn(formData.email);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <div className="space-y-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
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
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign In with email
            </button>
          </form>
          <div className="flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center">
            <button
              className="flex items-center bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
              onClick={() => handleGoogleSignIn()}
            >
              <FcGoogle className="text-2xl mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
