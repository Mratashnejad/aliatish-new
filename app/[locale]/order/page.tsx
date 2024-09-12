'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addOrder } from '@/lib/order/setOrder';
import { useLocale } from 'next-intl';

const OrderPage: React.FC = () => {
    const router = useRouter();
    const locale = useLocale();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [features, setFeatures] = useState<string[]>([]);
    const [mode, setMode] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [contactMethod, setContactMethod] = useState<string>('');

    const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const feature = event.target.value;
        setFeatures(prevFeatures =>
            prevFeatures.includes(feature)
                ? prevFeatures.filter(f => f !== feature)
                : [...prevFeatures, feature]
        );
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone_Number', phoneNumber);
            formData.append('features', JSON.stringify(features));
            formData.append('mode', mode);
            formData.append('message', message);
            formData.append('contact_method', contactMethod);

            await addOrder(formData);
            alert('Order submitted successfully!');
            router.push(`/${locale}/order/success`);
        } catch (error) {
            console.error('Failed to submit order', error);
            alert('Failed to submit order');
        }
    };

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex items-center justify-center py-4 px-2">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 md:mb-12">
                    Submit Your Order
                </h2>

                {/* User Information */}
                <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
                        User Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4 md:mt-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Website Options */}
                <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
                        Website Options
                    </h3>
                    <div className="mb-4 md:mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="mode">
                            Mode
                        </label>
                        <select
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                            id="mode"
                            name="mode"
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                        >
                            <option value="Personal">Personal</option>
                            <option value="Blog">Blog</option>
                            <option value="Portfolio">Portfolio</option>
                        </select>
                    </div>

                    <div className="mb-4 md:mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Select Pages You Need
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {['HomePage', 'About', 'Profile', 'Support', 'Contact', 'Blog', 'Admin', 'Dashboard'].map(
                                (feature) => (
                                    <label key={feature} className="flex items-center mb-2">
                                        <input
                                            className="form-checkbox text-blue-500 dark:text-blue-400 mr-2"
                                            type="checkbox"
                                            name="features"
                                            value={feature}
                                            checked={features.includes(feature)}
                                            onChange={handleFeatureChange}
                                        />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </label>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Message Section */}
                <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
                        Description
                    </h3>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform hover:scale-105"
                        onClick={handleSubmit}
                    >
                        Submit Order
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;
