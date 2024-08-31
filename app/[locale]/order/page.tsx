'use client';
import { useState  } from 'react';
import { useRouter } from 'next/navigation';
import { addOrder  } from '@/lib/order/setOrder';

const OrderPage : React.FC = ()=> {
        const router = useRouter();
/////////////////////////////////////////////////////////////////////////
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [name ,setName] = useState<string>('');
        const [email ,setEmail] = useState<string>('');
        const [phone_Number ,setPhone_Number] = useState<string>('');
        const [features ,setFeatures] = useState<string[]>([]);
        const [mode ,setMode] = useState<string>('');
        const [message ,setMessage] = useState<string>('');
        const [contact_method ,setContact_method] = useState<string>('');

        const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const feature = event.target.value;
            setFeatures(prevFeatures =>
                prevFeatures.includes(feature)
                    ? prevFeatures.filter(f => f !== feature)
                    : [...prevFeatures, feature]
            );
        };

        const handleModeChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
            setMode(event.target.value);

        }

        const handleSubmit = async () => {
                try{
                    const formData = new FormData();
                    formData.append('name', name);
                    formData.append('email', email); 
                    formData.append('phone_Number', phone_Number);
                    formData.append('features', JSON.stringify(features));
                    formData.append('mode', mode);
                    formData.append('message', message);
                    formData.append('contact_method', contact_method);
                    await addOrder(formData);
                    alert('data added succesfuly');
                    router.push('/order/success');
                    
                }catch(error){
                    console.error('faild to add data ' , error);
                    alert('faild to add data ');

                }
            }

    return (
        <section
            id="Request"
            className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-28 px-6 relative z-10 bg-cover bg-center"
        >
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
                    Submit Your Website Options Now
                </h2>

                {/* User Information Section */}
                <div
                    className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-4xl mx-auto border border-gray-300 dark:border-gray-600 mb-16"
                >
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
                        User Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label
                                className="block text-gray-700 dark:text-gray-300 mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 dark:text-gray-300 mb-2"
                                htmlFor="phone_Number"
                            >
                                Phone Number
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                                type="text"
                                id="phone_Number"
                                name="phone_Number"
                                value={phone_Number}
                                onChange={(event) => setPhone_Number(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
              
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="preferredContactMethod"
                        >
                            Preferred Contact Method
                        </label>
                        <select
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                            id="preferredContactMethod"
                            name="preferredContactMethod"
                            value={contact_method}
                            onChange={(event) => setContact_method(event.target.value)}
                        >
                            <option value="Email">Email</option>
                            <option value="Phone">WhatsApp</option>
                            <option value="Mail">Viber</option>
                        </select>
                    </div>

                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
                        Website Features
                    </h3>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="mode"
                        >
                            Mode:
                        </label>
                        <select
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                              id="mode"
                              name="mode"
                              value={mode}
                              onChange={handleModeChange}

                        >
                            <option value="Personal">Personal</option>
                            <option value="Blog">Blog</option>
                            <option value="Portfolio">Portfolio</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Select Pages That You Will Need:
                        </label>
                        <div className="flex flex-wrap">
                            {['HomePage', 'About', 'Profile', 'Support', 'Contact', 'Blog', 'Admin', 'Dashboard'].map(
                                (feature) => (
                                    <label
                                        key={feature}
                                        className="flex items-center mr-4 mb-2"
                                    >
                                        <input
                                            className="form-checkbox text-blue-500 dark:text-blue-400 mr-2"
                                            type="checkbox"
                                            name="features"
                                            value={feature}
                                            checked={features.includes(feature)}
                                            onChange={handleFeatureChange}

                                        />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            {feature}
                                        </span>
                                    </label>
                                )
                            )}
                        </div>
                    </div>

                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
                        Description
                    </h3>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Submit Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default OrderPage;