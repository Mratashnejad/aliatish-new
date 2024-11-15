// components/homePageComponents/whyNodeSections.js
const WhyNodeSection = () => {
    return (
      <section className="py-24 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Why Node.js?</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Node.js is a powerful JavaScript runtime that allows us to build fast, scalable, and efficient web applications. It`&apos;`s ideal for building real-time, data-intensive applications.
          </p>
          <ul className="space-y-4 text-left sm:text-lg sm:w-2/3 mx-auto">
            <li>Fast and efficient runtime for I/O bound tasks</li>
            <li>Non-blocking, event-driven architecture</li>
            <li>Extensive npm library for modular development</li>
            <li>Built for scalable real-time applications like chat, gaming, and streaming</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default WhyNodeSection;
  