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
        <section className="flex items-center justify-center py-4 px-2">
            <div className="w-full max-w-4xl bg-white rounded-lg p-8 shadow-lg dark:bg-black ">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 dark:text-white">
                    Order Form
                </h2>
    
                <div className="space-y-6">
                    {/* User Information */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
                            User Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder:dark:text-gray-300"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder:dark:text-gray-300"
                                type="tel"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                            <input
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder:dark:text-gray-300"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
    
                    {/* Website Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white ">
                                Choose Your Package
                            </h3>
                            {features.length > 0 && (
                                <div className="mb-4">
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
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select a package
                                </option>
                                <option value="Personal">Personal</option>
                                <option value="Online Shop">Online Shop</option>
                                <option value="Web Application">
                                    Web Application
                                </option>
                            </select>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
                                Select Features
                            </h3>
                            <div className="flex flex-wrap gap-4 ">
                                {[
                                    'HomePage',
                                    'About',
                                    'FAQ',
                                    'Terms of Service',
                                    'AdminPanel',
                                ].map((feature) => (
                                    <label
                                        key={feature}
                                        className="flex items-center"
                                    >
                                        <input
                                            className="form-checkbox text-blue-600 mr-2 dark:text-white"
                                            type="checkbox"
                                            value={feature}
                                            checked={features.includes(feature)}
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
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
                            Additional Details
                        </h3>
                        <textarea
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder:dark:text-gray-300"
                            placeholder="Describe your requirements..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 dark:bg-blue-800"
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
}

export default OrderPage;






 