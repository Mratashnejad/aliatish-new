'use client'
import { RxExclamationTriangle } from "react-icons/rx";
import Link from 'next/link';

const AuthErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <div className="flex flex-col items-center mb-6">
          <RxExclamationTriangle className="text-red-500 text-6xl mb-4" />
          <h1 className="text-3xl font-semibold mb-2">Oops, something went wrong.</h1>
          <h5 className="text-lg text-gray-600 mb-4">Please try again later or contact support.</h5>
          <p className="text-gray-500">It seems there&apos;s been an issue with your authentication.</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            To return to the sign-in page, <Link href="/api/auth/signin" className="text-blue-500 hover:underline">Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
