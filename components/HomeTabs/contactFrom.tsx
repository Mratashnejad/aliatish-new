// 'use client';
// import { useState } from 'react';

// export default function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         phoneNumber: '',
//         email: '',
//         features: [],
//         mode: '',
//         message: '',
//         companyName: '',
//         jobTitle: '',
//         preferredContactMethod: 'Email',
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (type === 'checkbox') {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 features: checked
//                     ? [...prevData.features, value]
//                     : prevData.features.filter((feature) => feature !== value),
//             }));
//         } else {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }
//     };

//     const handleModeChange = (mode) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             mode: mode,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Process the form data (e.g., send to an API)
//         console.log('Form data submitted:', formData);
//         // Add your form submission logic here
//     };

//     return (
//         <section
//             id="Request"
//             className="w-full h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 relative z-10 bg-cover bg-center"
//         >
//             <div className="container mx-auto">
//                 <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
//                     Submit your Website options now
//                 </h2>

//                 {/* User Information Section */}
//                 <form
//                     className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-4xl mx-auto border border-gray-300 dark:border-gray-600"
//                     onSubmit={handleSubmit}
//                 >
//                     <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
//                         User Information
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                         <div>
//                             <label
//                                 className="block text-gray-700 dark:text-gray-300 mb-2"
//                                 htmlFor="name"
//                             >
//                                 Name
//                             </label>
//                             <input
//                                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 className="block text-gray-700 dark:text-gray-300 mb-2"
//                                 htmlFor="phoneNumber"
//                             >
//                                 Phone Number
//                             </label>
//                             <input
//                                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
//                                 type="text"
//                                 id="phoneNumber"
//                                 name="phoneNumber"
//                                 value={formData.phoneNumber}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <label
//                             className="block text-gray-700 dark:text-gray-300 mb-2"
//                             htmlFor="email"
//                         >
//                             Email
//                         </label>
//                         <input
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
              
                  
//                     <div className="mb-6">
//                         <label
//                             className="block text-gray-700 dark:text-gray-300 mb-2"
//                             htmlFor="preferredContactMethod"
//                         >
//                             Preferred Contact Method
//                         </label>
//                         <select
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
//                             id="preferredContactMethod"
//                             name="preferredContactMethod"
//                             value={formData.preferredContactMethod}
//                             onChange={handleChange}
//                         >
//                             <option value="Email">Email</option>
//                             <option value="Phone">WhatsApp</option>
//                             <option value="Mail">Viber</option>
//                             <option value="Mail">Viber</option>

//                         </select>
//                     </div>

//                     <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
//                         Website Features
//                     </h3>
//                     <div className="mb-6">
//                         <label
//                             className="block text-gray-700 dark:text-gray-300 mb-2"
//                             htmlFor="mode"
//                         >
//                             Mode:
//                         </label>
//                         <div className="flex space-x-2">
//                         <select
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
//                             id="mode"
//                             name="mode"
//                             value={formData.mode}
//                             onChange={handleChange}
//                         >
//                             <option value="Email">Personal</option>
//                             <option value="Phone">Blog</option>
//                             <option value="Mail">Portfolio</option>
//                         </select>
//                         </div>
//                         <input
//                             type="hidden"
//                             id="mode"
//                             name="mode"
//                             value={formData.mode}
//                             required
//                         />
//                     </div>

//                     <div className="mb-6">
//                         <label
//                             className="block text-gray-700 dark:text-gray-300 mb-2"
//                         >
//                             Select Pages that you will need:
//                         </label>
//                         <div className="flex flex-wrap">
//                             {['HomePage', 'About', 'Profile', 'Support', 'Contact', 'Blog' , 'Admin' , 'Dashboard'].map(
//                                 (feature) => (
//                                     <label
//                                         key={feature}
//                                         className="flex items-center mr-4 mb-2"
//                                     >
//                                         <input
//                                             className="form-checkbox text-blue-500 dark:text-blue-400 mr-2"
//                                             type="checkbox"
//                                             name="features"
//                                             value={feature}
//                                             checked={formData.features.includes(feature)}
//                                             onChange={handleChange}
//                                         />
//                                         <span className="text-gray-700 dark:text-gray-300">
//                                             {feature}
//                                         </span>
//                                     </label>
//                                 )
//                             )}
//                         </div>
//                     </div>

//                     <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 border-b border-gray-300 dark:border-gray-600 pb-4">
//                         Description
//                     </h3>
//                     <div className="mb-6">
//                         <label
//                             className="block text-gray-700 dark:text-gray-300 mb-2"
//                             htmlFor="message"
//                         >
//                             Message
//                         </label>
//                         <textarea
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         ></textarea>
//                     </div>

//                     <div className="flex justify-end">
//                         <button
//                             className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
//                             type="submit"
//                         >
//                             Submit Order
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// }
