import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, TrendingUp, BookOpen, BarChart3, Target, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

interface Document {
  image: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description?: string;
  gallery?: string[];
}

const educationImages = [
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_1.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_2.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_3.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_4.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_5.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_6.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_7.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_8.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_9.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_10.jpg'),
  getAssetPath('app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_11.jpg'),
];

const documents: Document[] = [
  {
    image: getAssetPath('app_make/edu_cover.jpg'),
    title: '커피 이론 교육자료',
    category: 'Education',
    icon: <BookOpen className="w-5 h-5" />,
    description: '신입 바리스타를 위한 체계적인 커피 이론 교육 자료 (11페이지). 원두의 종류, 배전도, 추출 원리 등 커피의 기본부터 심화까지 다룹니다. 2년간 자활센터에서 실사용하여 검증된 교육 자료입니다.',
    gallery: educationImages,
  },
  {
    image: getAssetPath('app_make/h_4.jpeg'),
    title: 'SNS 콘텐츠',
    category: 'Content Marketing',
    icon: <FileText className="w-5 h-5" />,
    description: '인스타그램 콘텐츠 기획·촬영·편집·업로드 전 과정을 직접 수행했습니다. 3.5년간 1,300건 이상의 게시물을 제작하며 팔로워 2,000명을 확보했습니다.',
    gallery: [
      getAssetPath('app_make/h_4.jpeg'),
      getAssetPath('app_make/product_10.jpg'),
      getAssetPath('app_make/product_12_1.png'),
      getAssetPath('app_make/product_1.jpg'),
      getAssetPath('app_make/product_2.jpg'),
      getAssetPath('app_make/product_3.jpg'),
      getAssetPath('app_make/product_4.jpg'),
      getAssetPath('app_make/product_5.jpg'),
      getAssetPath('app_make/product_6.jpg'),
      getAssetPath('app_make/product_7.jpg'),
      getAssetPath('app_make/product_8.jpg'),
      getAssetPath('app_make/product_9.jpg'),
      getAssetPath('app_make/product_11.jpg'),
      getAssetPath('app_make/product_13.jpg'),
      getAssetPath('app_make/product_14.jpg'),
      getAssetPath('app_make/product_15.jpg'),
    ],
  },
  {
    image: getAssetPath('app_make/k1.png'),
    title: '플레이스 세팅',
    category: 'Marketing',
    icon: <TrendingUp className="w-5 h-5" />,
    description: '네이버 플레이스 최적화를 통한 검색 노출 극대화 전략. SEO 최적화로 검색 노출을 개선했습니다.',
  },
  {
    image: getAssetPath('app_make/m_2.png'),
    title: '상권 분석 보고서',
    category: 'Market Research',
    icon: <BarChart3 className="w-5 h-5" />,
    description: '데이터 기반 상권 분석 및 타겟 고객층 파악. 유동인구, 소비 패턴, 경쟁 업체 등을 종합 분석하여 매장 운영 전략을 수립했습니다.',
  },
  {
    image: getAssetPath('app_make/k2.png'),
    title: '경쟁사 분석',
    category: 'Competitive Analysis',
    icon: <Target className="w-5 h-5" />,
    description: '20곳 이상의 경쟁 카페 벤치마킹을 통한 차별화 전략 도출. 가격, 메뉴 구성, 인테리어, SNS 마케팅 등 다각도로 분석했습니다.',
    gallery: [
      getAssetPath('app_make/k2.png'),
      getAssetPath('app_make/k3.png'),
    ],
  },
  {
    image: getAssetPath('app_make/인테리어.png'),
    title: '인테리어 제안서',
    category: 'Interior Design',
    icon: <TrendingUp className="w-5 h-5" />,
    description: '"도심 속 휴식" 콘셉트의 자연 친화적 인테리어 디자인. 고객의 체류 시간과 만족도를 높이는 공간 설계를 제안했습니다.',
  },
];

const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (selectedDoc?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedDoc.gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedDoc?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedDoc.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleDocClick = (doc: Document) => {
    setSelectedDoc(doc);
    setCurrentImageIndex(0);
  };

  return (
    <section id="documents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Education Materials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">제작 및 결과물</h3>
          <p className="text-gray-600 max-w-2xl">
            8년 현장 경험을 바탕으로 직접 제작한 교육 자료와 분석 문서입니다.<br />
            가맹점 교육에 즉시 활용 가능한 검증된 콘텐츠입니다.
          </p>
        </motion.div>

        {/* All Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => handleDocClick(doc)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  {doc.icon}
                  {doc.category}
                </div>
                {doc.gallery && (
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-600">
                    📚 {doc.gallery.length}장
                  </div>
                )}
              </div>
              <div className="p-5">
                <h5 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {doc.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t-2 border-gray-200"
        >
          <p className="text-center text-gray-700 text-lg">
            <strong className="text-emerald-600">커피 이론 교육자료 11페이지</strong> (2년간 자활센터 실사용) |
            <strong className="text-emerald-600"> 상권 분석 문서 4개</strong>
          </p>
        </motion.div>
      </div>

      {/* Modal with Gallery Support */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDoc(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto shadow-xl"
            >
              {/* Close Button */}
              <div className="sticky top-0 right-0 flex justify-end p-4 bg-white z-10 border-b">
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {selectedDoc.icon}
                    {selectedDoc.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedDoc.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedDoc.description}
                  </p>
                </div>

                {/* Gallery or Single Image */}
                {selectedDoc.gallery ? (
                  <div className="relative">
                    <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
                      <img
                        src={selectedDoc.gallery[currentImageIndex]}
                        alt={`${selectedDoc.title} - ${currentImageIndex + 1}`}
                        className="w-full h-auto object-contain max-h-[60vh]"
                      />
                    </div>

                    {/* Gallery Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <button
                        onClick={handlePrevImage}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors shadow-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <div className="text-center">
                        <p className="text-gray-600 font-semibold">
                          {currentImageIndex + 1} / {selectedDoc.gallery.length}
                        </p>
                      </div>

                      <button
                        onClick={handleNextImage}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors shadow-md"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="grid grid-cols-6 md:grid-cols-11 gap-2 mt-4">
                      {selectedDoc.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentImageIndex
                              ? 'border-emerald-600 scale-105'
                              : 'border-gray-300 hover:border-emerald-400'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedDoc.image}
                      alt={selectedDoc.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Documents;
