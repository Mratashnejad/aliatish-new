import { RxCheckCircled } from "react-icons/rx";
import Link from 'next/link';

const AuthSuccessPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <div className="flex flex-col items-center mb-6">
          <RxCheckCircled className="text-green-500 text-6xl mb-4" />
          <h1 className="text-3xl font-semibold mb-2">Success!</h1>
          <p className="text-gray-700">Please check your email inbox for the sign-in link.</p>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            Didn&apos;t receive an email? To go back to the sign-in page and try again, <Link href="/api/auth/signin" className="text-blue-500 hover:underline">Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessPage;
