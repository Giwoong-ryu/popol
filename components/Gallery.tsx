import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Gallery</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">현장의 순간들</h3>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              8년간의 카페 운영 경험 속에서 만들어낸 공간과 순간들
            </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {cafeImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid rounded-2xl overflow-hidden group relative shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Cafe Gallery ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;