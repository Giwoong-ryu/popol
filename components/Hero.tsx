import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroImage {
  src: string;
  title: string;
  section: 'gallery' | 'philosophy' | 'documents' | 'experience' | 'projects';
}

const heroImages: HeroImage[] = [
  { src: "/app_make/h_1.webp", title: "카페 & 프로덕트", section: 'gallery' },
  { src: "/app_make/h_2.webp", title: "운영 철학", section: 'philosophy' },
  { src: "/app_make/h_3.jpg", title: "문서 & 전문성", section: 'documents' },
  { src: "/app_make/h_4.webp", title: "경력 & 성과", section: 'experience' },
  { src: "/app_make/h_5.png", title: "프로젝트", section: 'projects' },
];

interface HeroProps {
  onSectionClick?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleImageClick = (section: string) => {
    if (onSectionClick) {
      onSectionClick(section);
    }
  };

  const ImageCard = ({ image, index, className }: { image: HeroImage; index: number; className: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={`${className} relative rounded-2xl overflow-hidden cursor-pointer group border-2 border-white/30 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-2xl`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => handleImageClick(image.section)}
    >
      <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/40 transition-all duration-300" />

      {/* Always visible title badge */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/30 group-hover:bg-emerald-600/90 transition-all duration-300">
        <h3 className="text-white text-sm md:text-base font-bold drop-shadow-lg">
          {image.title}
        </h3>
      </div>

      {/* Hover overlay with title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      >
        <div className="text-center px-4">
          <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg mb-2">
            {image.title}
          </h3>
          <p className="text-white text-base font-semibold bg-emerald-600 px-4 py-2 rounded-full">클릭하여 보기 →</p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Mosaic Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4">
        {/* Large image - top left spanning 2x3 */}
        <ImageCard image={heroImages[0]} index={0} className="col-span-3 row-span-4" />

        {/* Top right - spanning 3x2 */}
        <ImageCard image={heroImages[1]} index={1} className="col-span-3 row-span-2" />

        {/* Middle right - spanning 2x2 */}
        <ImageCard image={heroImages[2]} index={2} className="col-span-2 row-span-2" />

        {/* Small right - spanning 1x2 */}
        <ImageCard image={heroImages[3]} index={3} className="col-span-1 row-span-2" />

        {/* Bottom spanning 3x2 */}
        <ImageCard image={heroImages[4]} index={4} className="col-span-3 row-span-2" />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40 backdrop-blur-[2px] pointer-events-none" />

      {/* Hero Text Overlay */}
      <div className="container mx-auto px-6 z-10 text-center relative pointer-events-none">
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
      >
        <ArrowDown className="w-8 h-8 text-white/80 animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;
