'use client'
const BlogPage = ()=>{
  return(
    <section className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex flex-col items-center text-gray-800 dark:text-gray-200">
        <div className="max-w-4xl w-full px-6 py-16">
            <h3 className="text-4xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                Latest Blog Posts in Web Development
            </h3>
            <div className="flex flex-col space-y-12">
                {/* Blog Post 1 */}
                <div className="flex items-start bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="w-full">
                        <h3 className="text-3xl font-mono font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Understanding Web Design Trends
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Stay updated with the latest trends in web
                            design. Explore how responsive design, user
                            experience, and accessibility impact your
                            projects.
                        </p>
                        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6">
                            <pre className="text-sm text-gray-800 dark:text-gray-300">
                                <code>
                                    {`<div class="container">
<h1>Responsive Design</h1>
<p>Focus on mobile-first design principles.</p>
</div>`}
                                </code>
                            </pre>
                        </div>
                        <a
                            href="#"
                            className="text-teal-600 dark:text-teal-400 text-lg font-semibold mt-3 inline-block hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Blog Post 2 */}
                <div className="flex items-start bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="w-full">
                        <h3 className="text-3xl font-mono font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Effective SEO Strategies for 2024
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Learn advanced SEO strategies for improving
                            website visibility. Focus on technical SEO,
                            content optimization, and algorithm updates.
                        </p>
                        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6">
                            <pre className="text-sm text-gray-800 dark:text-gray-300">
                                <code>
                                    {`<meta name="description" content="SEO-friendly website">
<link rel="canonical" href="https://www.aliatish.com/" />`}
                                </code>
                            </pre>
                        </div>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 text-lg font-semibold mt-3 inline-block hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Blog Post 3 */}
                <div className="flex items-start bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="w-full">
                        <h3 className="text-3xl font-mono font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Maximizing User Engagement
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Discover how to use web analytics and
                            interactive features to keep users engaged
                            and improve retention on your site.
                        </p>
                        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6">
                            <pre className="text-sm text-gray-800 dark:text-gray-300">
                                <code>
                                    {`const userEngagement = {
activeUsers: 1000,
bounceRate: 25,
avgSessionTime: 5 // minutes
};`}
                                </code>
                            </pre>
                        </div>
                        <a
                            href="#"
                            className="text-purple-600 dark:text-purple-400 text-lg font-semibold hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Blog Post 4 */}
                <div className="flex items-start bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="w-full">
                        <h3 className="text-3xl font-mono font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Getting Started with Next.js
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Learn how to build your first web
                            application using Next.js, including setup,
                            configuration, and routing.
                        </p>
                        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6">
                            <pre className="text-sm text-gray-800 dark:text-gray-300">
                                <code>
                                    {`// Install Next.js
npx create-next-app@latest 
// Create a new page in pages/index.js
export default function Home() {
return <h1>Welcome to Next.js!</h1>;
}`}
                                </code>
                            </pre>
                        </div>
                        <a
                            href="#"
                            className="text-teal-600 dark:text-teal-400 text-lg font-semibold hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogPage;