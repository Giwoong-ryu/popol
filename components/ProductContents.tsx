import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { image: "app_make/product_1.jpg", title: "시그니처 음료" },
  { image: "app_make/product_2.jpg", title: "바닐라빈 라떼" },
  { image: "app_make/product_3.jpg", title: "디저트 메뉴" },
  { image: "app_make/product_4.jpg", title: "에그타르트" },
  { image: "app_make/product_5.jpg", title: "레몬에이드" },
  { image: "app_make/product_6.jpg", title: "앙버터 스콘" },
  { image: "app_make/product_7.jpg", title: "휘낭시에" },
  { image: "app_make/product_8.jpg", title: "다쿠아즈" },
  { image: "app_make/product_9.jpg", title: "브랜딩 콘텐츠" },
  { image: "app_make/product_10.jpg", title: "SNS 피드" },
  { image: "app_make/product_11.jpg", title: "매장 전경" },
];

const ProductContents: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Product & Contents</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            제품 기획과 감성 콘텐츠
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            단순한 메뉴가 아닌, 브랜드의 스토리를 담은 제품 기획과<br />
            고객의 마음을 움직이는 비주얼 콘텐츠 제작
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">{product.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1300+</div>
            <div className="text-gray-600 font-medium">SNS 콘텐츠 제작</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">시즌 메뉴 기획</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">직접 촬영·편집</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">3년</div>
            <div className="text-gray-600 font-medium">브랜드 운영 경험</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductContents;
