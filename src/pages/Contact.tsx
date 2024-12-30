import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
          >
            Get in Touch
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80"
                alt="Contact Us"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
                alt="Connect"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6"
          >
            <p className="text-lg text-gray-700">
              We'd love to hear from you! Whether you have questions, suggestions, or just want to connect, we're here to help.
            </p>
            <p className="text-lg text-gray-700">
              Please visit our services page to get in touch with our team:
            </p>
            <a 
              href="https://odysseyvista.com/our-services/"
              className="inline-block text-primary hover:text-secondary transition-colors text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us here →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;