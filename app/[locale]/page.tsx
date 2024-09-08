import { GrLinkNext } from "react-icons/gr";

import React from 'react';

export default function Home() {
    return (
        <main className="font-monocraft min-h-screen flex flex-col items-start px-20 justify-center bg-gray-100 dark:bg-zinc-950 text-gray-800 dark:text-gray-200">
            <div className="text-center px-6">
                <div className="text-6xl font-bold mb-4">
                    <a className="hover:underline">Hi, I am Ali Atish,</a>
                </div>
                <div className="text-2xl mb-6">
                    <a className="hover:underline ">and I'm a Full Stack Developer</a>
                </div>
                <div className="text-2xl">
                    <button className="flex items-center bg-orange-600 text-white py-2 px-6 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        Work with Me <GrLinkNext/>
                    </button>
                </div>
            </div>
        </main>
    );
}
