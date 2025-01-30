import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const guidanceItems = [
  {
    title: "Mindfulness & Meditation",
    content: "Learn to live in the present moment and reduce stress through daily meditation practices.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Goal Setting",
    content: "Set SMART goals and create actionable plans to achieve your dreams.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Self-Care Practices",
    content: "Develop healthy habits and routines that nurture your physical and mental well-being.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
  }
];

const Guidance = () => {
  return (
    <>
      <Helmet>
        <title>Personal Growth Guidance - Positive Vibes</title>
        <meta name="description" content="Access valuable guidance for personal development. Discover practical tips and insights for navigating life's challenges." />
        <meta property="og:title" content="Personal Growth Guidance - Positive Vibes" />
        <meta property="og:description" content="Access valuable guidance for personal development. Discover practical tips and insights for navigating life's challenges." />
      </Helmet>
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
    </>
  );
};

export default Guidance;