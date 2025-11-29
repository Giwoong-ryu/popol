import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const heroImages = [
  { src: "/app_make/h_1.webp", link: "#about" },
  { src: "/app_make/h_2.webp", link: "#gallery" },
  { src: "/app_make/h_3.jpg", link: "#philosophy" },
  { src: "/app_make/h_4.webp", link: "#projects" },
  { src: "/app_make/h_5.png", link: "#experience" },
  { src: "/app_make/cafe_3.webp", link: "#documents" },
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            현장에서 문제를 해결하고,<br />
            매장을 움직이는 운영·기획 인재.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            카페 운영 8년 + 신규 매장 기획 + AI 자동화 기반 업무 효율 전문가
          </p>
        </motion.div>

        {/* Simple 3x2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {heroImages.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer block"
            >
              <img
                src={item.src}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            류기웅 <span className="text-gray-600 font-normal">Ryu Gi-Woong</span>
          </h2>
          <p className="text-gray-600">
            카페 운영 8년 경력 | 신규 매장 기획 전문 | AI 자동화 업무 효율화
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
