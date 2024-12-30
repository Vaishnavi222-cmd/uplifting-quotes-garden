import { motion } from "framer-motion";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Success",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=300&q=80",
    description: "Just as a shepherd guides their flock, true leadership comes from passion and dedication to your craft."
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&w=300&q=80",
    description: "Like deer in the wilderness, your journey begins with the confidence to take the first step."
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    category: "Courage",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=300&q=80",
    description: "Fear is natural, but courage means facing it head-on, just like every challenge in nature."
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Perseverance",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=300&q=80",
    description: "Like camels crossing vast deserts, persistence is key to reaching your destination."
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=300&q=80",
    description: "Your dreams are like wild horses - free, powerful, and waiting to be realized."
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Persistence",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&w=300&q=80",
    description: "Like penguins marching through harsh conditions, steady progress leads to success."
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=300&q=80",
    description: "Growth comes from facing our challenges, much like these magnificent creatures adapt to survive."
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
    category: "Personal Development",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&w=300&q=80",
    description: "Like mountain goats scaling great heights, the journey shapes who we become."
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "Action",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&q=80",
    description: "Nature teaches us that growth takes time, but the time to start is always now."
  }
];

const Quotes = () => {
  return (
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
  );
};

export default Quotes;