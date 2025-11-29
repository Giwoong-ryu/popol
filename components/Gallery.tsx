import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

const productImages = [
  "/app_make/product_1.jpg",
  "/app_make/product_2.jpg",
  "/app_make/product_3.jpg",
  "/app_make/product_4.jpg",
  "/app_make/product_5.jpg",
  "/app_make/product_6.jpg",
  "/app_make/product_7.jpg",
  "/app_make/product_8.jpg",
  "/app_make/product_9.jpg",
  "/app_make/product_10.jpg",
  "/app_make/product_11.jpg",
];

const cafeImages = [
  "/app_make/cafe_3.webp",
  "/app_make/cafe_5.webp",
  "/app_make/cafe_6.webp",
  "/app_make/cafe_7.webp",
  "/app_make/cafe_8.webp",
  "/app_make/cafe_9.webp",
  "/app_make/cafe_10.webp",
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Photography Credit Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full">
            <Coffee className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-800">
              기획·촬영·편집 All In-house Production
            </span>
          </div>
        </div>

        {/* Product Carousel Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Products</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">제품소개</h3>
          </div>

          {/* Carousel Layout */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden py-8">
              <div className="flex items-center justify-center gap-4 md:gap-6">
                {/* Left Item */}
                <motion.div
                  key={`left-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.6, scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block flex-shrink-0 w-48 lg:w-64"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                    <img
                      src={productImages[currentIndex > 0 ? currentIndex - 1 : productImages.length - 1]}
                      alt="Previous product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Center Item (Active) */}
                <motion.div
                  key={`center-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-64 md:w-72 lg:w-96 z-10"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square border-4 border-emerald-100">
                    <img
                      src={productImages[currentIndex]}
                      alt={`Product ${currentIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Right Item */}
                <motion.div
                  key={`right-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.6, scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block flex-shrink-0 w-48 lg:w-64"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                    <img
                      src={productImages[currentIndex < productImages.length - 1 ? currentIndex + 1 : 0]}
                      alt="Next product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-20"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-20"
              aria-label="Next product"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-emerald-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cafe Gallery Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Gallery</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">현장의 순간들</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cafeImages.slice(0, 4).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-xl overflow-hidden group relative shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
              >
                <img
                  src={src}
                  alt={`Cafe Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
