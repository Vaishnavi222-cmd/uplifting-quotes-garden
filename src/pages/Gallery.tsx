import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Technology",
      description: "Modern software development visualization"
    },
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      title: "Innovation",
      description: "Representing the future of technology"
    },
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Nature",
      description: "Peaceful wilderness scene"
    },
    {
      url: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
      title: "Architecture",
      description: "Modern architectural design"
    },
    {
      url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      title: "Urban",
      description: "Contemporary urban architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      title: "Landscape",
      description: "Serene natural landscape"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Image Gallery - Positive Vibes</title>
        <meta name="description" content="Explore our curated collection of inspiring images. Visual inspiration to motivate and uplift your spirit." />
        <meta property="og:title" content="Image Gallery - Positive Vibes" />
        <meta property="og:description" content="Explore our curated collection of inspiring images. Visual inspiration to motivate and uplift your spirit." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Image Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of carefully curated images that inspire and motivate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img
                      src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-gray-600">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
