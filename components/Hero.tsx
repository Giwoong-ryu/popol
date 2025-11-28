import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const heroImages = [
  "app_make/h_1.webp",
  "app_make/h_2.webp",
  "app_make/h_3.jpg",
  "app_make/h_4.webp",
  "app_make/h_5.png",
];

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Mosaic Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4">
        {/* Large image - top left spanning 2x3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-3 row-span-4 relative rounded-2xl overflow-hidden"
        >
          <img src={heroImages[0]} alt="Hero 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
        </motion.div>

        {/* Top right - spanning 3x2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden"
        >
          <img src={heroImages[1]} alt="Hero 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20" />
        </motion.div>

        {/* Middle right - spanning 2x2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden"
        >
          <img src={heroImages[2]} alt="Hero 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/15" />
        </motion.div>

        {/* Small right - spanning 1x2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden"
        >
          <img src={heroImages[3]} alt="Hero 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
        </motion.div>

        {/* Bottom spanning 3x2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden"
        >
          <img src={heroImages[4]} alt="Hero 5" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/15 to-transparent" />
        </motion.div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40 backdrop-blur-[2px]" />

      {/* Hero Text Overlay */}
      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-100 text-sm font-semibold mb-6 border border-emerald-400/30">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
            현장에서 문제를 해결하고,<br className="hidden md:block" />
            매장을 움직이는 운영·기획 인재.
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-lg">
            카페 운영 8년 + 신규 매장 기획 + AI 자동화 기반 업무 효율 전문가
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-8 h-8 text-white/80 animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;