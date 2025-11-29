import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

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

        {/* Product Grid Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Products</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">시그니처 제품</h3>
          </div>

          {/* Compact Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {productImages.slice(0, 6).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
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
