import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Success",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&q=80",
    description: "Like the intricate patterns of code that power our digital world, success comes from dedication and passion."
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80",
    description: "Just as a team collaborates to achieve greatness, your belief in yourself is the foundation of achievement."
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    category: "Courage",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&q=80",
    description: "Like scaling mountain peaks, overcoming fear leads to breathtaking new perspectives and achievements."
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Perseverance",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80",
    description: "Technology evolves through iterations of trial and error, just as personal growth comes from persistence."
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80",
    description: "Like a visionary entrepreneur, your dreams have the power to shape tomorrow's reality."
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Persistence",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=300&q=80",
    description: "Nature's gradual but constant progress reminds us that steady advancement leads to remarkable achievements."
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80",
    description: "Like the sun breaking through clouds, your potential shines brightest when you overcome self-doubt."
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
    category: "Personal Development",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&q=80",
    description: "Each milestone in your journey shapes your character, like a sculptor crafting a masterpiece."
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "Action",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=300&q=80",
    description: "Every moment presents an opportunity for growth and positive change, just like nature's constant renewal."
  }
];

const Quotes = () => {
  return (
    <>
      <Helmet>
        <title>Inspirational Quotes - Positive Vibes</title>
        <meta name="description" content="Explore our collection of carefully curated inspirational quotes. Find motivation and wisdom to guide you through your day." />
        <meta property="og:title" content="Inspirational Quotes - Positive Vibes" />
        <meta property="og:description" content="Explore our collection of carefully curated inspirational quotes. Find motivation and wisdom to guide you through your day." />
      </Helmet>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Inspirational Quotes
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12"
          >
            Discover wisdom and inspiration through our carefully curated collection of quotes. 
            Let these words and images guide you towards personal growth and success.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={quote.image} 
                    alt={quote.category}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                      {quote.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-800 mb-4 font-medium italic">"{quote.text}"</p>
                  <p className="text-primary font-medium mb-4">- {quote.author}</p>
                  <p className="text-gray-600 text-sm">{quote.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
