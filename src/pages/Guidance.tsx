import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Guidance = () => {
  const guidanceItems = [
    {
      title: "Daily Reflection",
      content: "Take a few minutes each day to reflect on your thoughts and feelings. This practice helps build self-awareness and emotional intelligence.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Goal Setting",
      content: "Set clear, achievable goals and break them down into smaller steps. This makes progress more manageable and success more attainable.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Mindful Living",
      content: "Practice mindfulness in your daily activities. Being present in the moment reduces stress and increases overall life satisfaction.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Growth Guidance</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover practical tips and insights to help you navigate life's challenges and achieve personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidanceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need More Support?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Remember that personal growth is a journey, not a destination. Take it one step at a time,
            and don't hesitate to seek support when needed.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidance;