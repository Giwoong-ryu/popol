import React from 'react';
import { motion } from 'framer-motion';

// Generate dummy images for the gallery
const images = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/400/${300 + (i % 3) * 100}?random=${i + 20}`);

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Gallery</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">현장의 순간들</h3>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid rounded-2xl overflow-hidden group relative"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;