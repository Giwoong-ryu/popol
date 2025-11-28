import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const heroImages = [
  "https://picsum.photos/400/500?random=1", // Espresso Manual
  "https://picsum.photos/400/400?random=2", // Naver Place
  "https://picsum.photos/400/600?random=3", // Analysis Graph
  "https://picsum.photos/400/500?random=4", // Branding/Logo
  "https://picsum.photos/400/400?random=5", // AI Education
  "https://picsum.photos/400/600?random=6", // Barista Operation
];

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6 z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
            현장에서 문제를 해결하고,<br className="hidden md:block" />
            매장을 움직이는 운영·기획 인재.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
            카페 운영 8년 + 신규 매장 기획 + AI 자동화 기반 업무 효율 전문가
          </p>
        </motion.div>
      </div>

      {/* Hero Image Grid - Masonry style feel */}
      <div className="w-full max-w-[1400px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {heroImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg ${
                index === 1 || index === 4 ? 'md:mt-12' : ''
              } ${index === 2 || index === 5 ? 'md:-mt-12' : ''}`}
            >
              <img
                src={src}
                alt={`Portfolio Highlight ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;