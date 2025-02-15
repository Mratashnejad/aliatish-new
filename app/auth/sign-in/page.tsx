"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Sign In</h2>

        <button
          onClick={() => signIn("google")}
          className="w-full rounded-lg bg-blue-500 px-4 py-3 text-white hover:bg-blue-600"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
}
