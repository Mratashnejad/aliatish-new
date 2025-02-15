'use client';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
const OrderSuccess: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-auto border border-gray-300 dark:border-gray-600 text-center">
                <FaCheckCircle
                    className="text-green-500 dark:text-green-400 mx-auto mb-4"
                    size={40}
                />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Congratulations!
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Your request has been approved successfully. Thank you for
                    your submission!
                </p>
                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    onClick={() => router.push('/')}
                >
                    Redirect to HomePage
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
