// components/homePageComponents/whyNextSection.js
const WhyNextSection = () => {
    return (
      <section className="py-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Why Next.js?</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Next.js is the React framework that enables you to build fast, SEO-friendly, and highly scalable web applications. It offers many features like server-side rendering, static site generation, and seamless routing.
          </p>
          <ul className="space-y-4 text-left sm:text-lg sm:w-2/3 mx-auto">
            <li>Server-side rendering (SSR) for faster page loads and better SEO</li>
            <li>Static site generation (SSG) for ultra-fast static pages</li>
            <li>Built-in routing and code splitting</li>
            <li>Automatic optimization for images, scripts, and CSS</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default WhyNextSection;
  