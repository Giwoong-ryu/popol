import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const heroImages = [
  { src: getAssetPath("app_make/m_1.png"), link: "#franchise-value", label: "비용 절감" },
  { src: getAssetPath("app_make/m_2.png"), link: "#about", label: "데이터 분석" },
  { src: getAssetPath("app_make/edu_cover.jpg"), link: "#projects", label: "교육 체계화" },
  { src: getAssetPath("app_make/w_1.png"), link: "#first-90-days", label: "90일 플랜" },
  { src: getAssetPath("app_make/cafe_5.webp"), link: "#philosophy", label: "브랜드 구축" },
  { src: getAssetPath("app_make/cafe_3.webp"), link: "#experience", label: "운영 노하우" },
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
            프랜차이즈 본부의<br />
            운영 비용을 줄이는 실무 전문가
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            데이터 기반 매출 개선 · 매뉴얼 체계화로 교육 효율화 · 반복 업무 자동화
          </p>
        </motion.div>

        {/* Simple 3x2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {heroImages.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 * index, duration: 0.7 }}
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer block relative group"
            >
              <img
                src={item.src}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.label}
                </span>
              </div>
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
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
            🎯 프랜차이즈 본부 SV / 운영지원 포지션 구직 중
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            유기웅 <span className="text-gray-600 font-normal">Ryu Gi-Woong</span>
          </h2>
          <p className="text-gray-600">
            F&B 7년 + 공간설계 3년 | 매장 운영 비용 절감 전문 | 데이터 기반 의사결정
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
