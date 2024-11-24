'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addOrder } from '@/lib/order/setOrder';
import { useLocale } from 'next-intl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderPage: React.FC = () => {
    const router = useRouter();
    const locale = useLocale();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [features, setFeatures] = useState<string[]>([]);
    const [mode, setMode] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const handleFeatureChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const feature = event.target.value;
        setFeatures((prevFeatures) =>
            prevFeatures.includes(feature)
                ? prevFeatures.filter((f) => f !== feature)
                : [...prevFeatures, feature]
        );
    };

    const handleSubmit = async () => {
        if (!name || !email || !phoneNumber || !message) {
            toast.error('Please fill in all required fields.');
            return;
        }

        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone_Number', phoneNumber);
            formData.append('features', JSON.stringify(features));
            formData.append('mode', mode);
            formData.append('message', message);

            await addOrder(formData);
            toast.success('Order submitted successfully!');
            router.push(`/${locale}/order/success`);
        } catch (error) {
            console.error('Failed to submit order', error);
            toast.error('Failed to submit order');
        }
    };

    return (
            <section className="flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-3xl bg-white dark:bg-black rounded-lg p-8 shadow-lg">
                    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
                        Order Form
                    </h2>

                    <div className="space-y-8">
                        {/* User Information */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                User Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-black dark:text-white"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-black dark:text-white"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-black dark:text-white"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Website Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                    Choose Your Package
                                </h3>
                                {features.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                                            Selected Features:
                                        </h4>
                                        <ul className="list-disc list-inside text-gray-700 dark:text-white">
                                            {features.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <select
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-black dark:text-white"
                                    value={mode}
                                    onChange={(e) => setMode(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a package
                                    </option>
                                    <option value="Personal">Personal</option>
                                    <option value="Online Shop">
                                        Online Shop
                                    </option>
                                    <option value="Web Application">
                                        Web Application
                                    </option>
                                </select>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                    Select Features
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        'HomePage',
                                        'About',
                                        'FAQ',
                                        'Terms of Service',
                                        'AdminPanel',
                                    ].map((feature) => (
                                        <label
                                            key={feature}
                                            className="flex items-center space-x-3"
                                        >
                                            <input
                                                className="form-checkbox text-blue-600 dark:text-white"
                                                type="checkbox"
                                                value={feature}
                                                checked={features.includes(
                                                    feature
                                                )}
                                                onChange={handleFeatureChange}
                                            />
                                            <span className="text-gray-700 dark:text-white">
                                                {feature}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Message Section */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                Additional Details
                            </h3>
                            <textarea
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-black dark:text-white"
                                placeholder="Describe your requirements or provide additional instructions"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={6}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-800"
                                onClick={handleSubmit}
                            >
                                Submit Order
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </section>
    );
};

export default OrderPage;
