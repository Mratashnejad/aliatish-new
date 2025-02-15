// 'use client';
// import { useLocale } from 'next-intl';
// import { useRouter } from 'next/navigation';
// import { useTransition, useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { FaGlobe } from 'react-icons/fa';

// export default function LocaleSwitcher() {
//     const [isPending, startTransition] = useTransition();
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const router = useRouter();
//     const localeActive = useLocale();
//     const pathname = usePathname();

//     // Effect to handle locale on page load
//     useEffect(() => {
//         const storedLocale = localStorage.getItem('selectedLocale');
//         if (storedLocale && storedLocale !== localeActive) {
//             const newPathname = pathname ? pathname.replace(`/${localeActive}`, '') : '';
//             const newUrl = `/${storedLocale}${newPathname}`;
//             router.replace(newUrl);
//         }
//     }, [localeActive, pathname, router]);

//     const onSelectChange = (nextLocale: string) => {
//         localStorage.setItem('selectedLocale', nextLocale);
//         startTransition(() => {
//             const newPathname = pathname ? pathname.replace(`/${localeActive}`, '') : '';
//             const newUrl = `/${nextLocale}${newPathname}`;
//             router.replace(newUrl);
//         });
//         setDropdownOpen(false);
//     };

//     return (
//         <div className="relative">
//             <button 
//                 onClick={() => setDropdownOpen(!dropdownOpen)} 
//                 className="flex items-center space-x-2 p-2 bg-transparent cursor-pointer"
//             >
//                 <FaGlobe size={20} />
//             </button>

//             {dropdownOpen && (
//                 <div className="absolute top-10 left-0 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg p-2 z-10">
//                     <ul className="flex flex-col space-y-2">
//                         <li 
//                             onClick={() => onSelectChange('en')}
//                             className={`cursor-pointer hover:text-black ${isPending ? 'opacity-50' : ''}`}
//                         >
//                             En
//                         </li>
//                         <li 
//                             onClick={() => onSelectChange('ir')}
//                             className={`cursor-pointer hover:text-black ${isPending ? 'opacity-50' : ''}`}
//                         >
//                             Ir
//                         </li>
//                         <li 
//                             onClick={() => onSelectChange('hy')}
//                             className={`cursor-pointer hover:text-black ${isPending ? 'opacity-50' : ''}`}
//                         >
//                             Hy
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }
