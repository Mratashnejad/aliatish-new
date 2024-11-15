// components/homePageComponents/porfolioSection.js
const PortfolioSection = () => {
    return (
      <section className="py-24 bg-gradient-to-r from-teal-400 to-teal-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Our Portfolio</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">We take pride in our work. Here are some of the projects we`&apos;`ve successfully delivered:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Portfolio items */}
          </div>
        </div>
      </section>
    );
  };
  
  export default PortfolioSection;
  