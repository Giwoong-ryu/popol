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
  const [currentIndex, setCurrentIndex] = useState(2);
  const [cafeIndex, setCafeIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0));
  };

  const handleCafePrev = () => {
    setCafeIndex((prev) => (prev > 0 ? prev - 1 : cafeImages.length - 1));
  };

  const handleCafeNext = () => {
    setCafeIndex((prev) => (prev < cafeImages.length - 1 ? prev + 1 : 0));
  };

  const getImageIndex = (offset: number, total: number, current: number) => {
    const index = current + offset;
    if (index < 0) return total + index;
    if (index >= total) return index - total;
    return index;
  };

  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Photography Credit Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-full shadow-md">
            <Coffee className="w-5 h-5 text-emerald-600" />
            <span className="text-base font-bold text-emerald-900">
              기획부터 촬영, 편집까지
              <span className="ml-2 px-3 py-1 bg-emerald-600 text-white rounded-full text-sm">직접 제작</span>
            </span>
          </div>
        </div>

        {/* Product Carousel Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">SNS Contents</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">SNS 게시물</h3>
          </div>

          {/* Carousel Layout - 5 visible items */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden py-8">
              <div className="flex items-center justify-center gap-3 md:gap-4">
                {/* Far Left Item */}
                <motion.div
                  key={`far-left-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 0.5, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:block flex-shrink-0 w-40 xl:w-48"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-sm aspect-square">
                    <img
                      src={productImages[getImageIndex(-2, productImages.length, currentIndex)]}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Left Item */}
                <motion.div
                  key={`left-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 0.7, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block flex-shrink-0 w-44 lg:w-52 xl:w-56"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                    <img
                      src={productImages[getImageIndex(-1, productImages.length, currentIndex)]}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Center Item (Active) */}
                <motion.div
                  key={`center-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1.0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-56 md:w-60 lg:w-64 xl:w-72 z-10"
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
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 0.7, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block flex-shrink-0 w-44 lg:w-52 xl:w-56"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                    <img
                      src={productImages[getImageIndex(1, productImages.length, currentIndex)]}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Far Right Item */}
                <motion.div
                  key={`far-right-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 0.5, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:block flex-shrink-0 w-40 xl:w-48"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-sm aspect-square">
                    <img
                      src={productImages[getImageIndex(2, productImages.length, currentIndex)]}
                      alt="Product"
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

          {/* Cafe Carousel Layout - 3 visible items */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden py-8">
              <div className="flex items-center justify-center gap-4 md:gap-6">
                {/* Left Item */}
                <motion.div
                  key={`cafe-left-${cafeIndex}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 0.75, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block flex-shrink-0 w-64 lg:w-80 xl:w-96"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <img
                      src={cafeImages[getImageIndex(-1, cafeImages.length, cafeIndex)]}
                      alt="Cafe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Center Item (Active) */}
                <motion.div
                  key={`cafe-center-${cafeIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1.0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-72 md:w-80 lg:w-96 xl:w-[28rem] z-10"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-emerald-100">
                    <img
                      src={cafeImages[cafeIndex]}
                      alt={`Cafe ${cafeIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Right Item */}
                <motion.div
                  key={`cafe-right-${cafeIndex}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 0.75, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block flex-shrink-0 w-64 lg:w-80 xl:w-96"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <img
                      src={cafeImages[getImageIndex(1, cafeImages.length, cafeIndex)]}
                      alt="Cafe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handleCafePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-20"
              aria-label="Previous cafe photo"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleCafeNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-20"
              aria-label="Next cafe photo"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {cafeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCafeIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === cafeIndex
                      ? 'bg-emerald-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to cafe photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
