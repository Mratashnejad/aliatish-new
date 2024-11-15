// components/homePageComponents/testimonialsSection.js
const TestimonialsSection = () => {
    return (
      <section className="py-24 bg-gray-200 dark:bg-gray-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">What Our Clients Say</h2>
          <div className="space-y-8">
            <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">"AliAtish helped us take our business to the next level. Their team was dedicated, professional, and always available." — Client Name</p>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  