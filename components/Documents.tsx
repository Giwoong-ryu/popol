import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, TrendingUp, BookOpen, BarChart3, Target, X } from 'lucide-react';

interface Document {
  image: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description?: string;
}

const marketDocuments: Document[] = [
  {
    image: '/app_make/m_1.png',
    title: '플레이스 세팅',
    category: 'Market Analysis',
    icon: <TrendingUp className="w-5 h-5" />,
    description: '네이버 플레이스 최적화를 통한 검색 노출 극대화 전략. SEO 최적화로 검색 유입 200% 증가를 달성했습니다.',
  },
  {
    image: '/app_make/m_2.png',
    title: '상권 분석 보고서',
    category: 'Market Research',
    icon: <BarChart3 className="w-5 h-5" />,
    description: '데이터 기반 상권 분석 및 타겟 고객층 파악. 유동인구, 소비 패턴, 경쟁 업체 등을 종합 분석하여 매장 운영 전략을 수립했습니다.',
  },
  {
    image: '/app_make/m_4.png',
    title: '경쟁사 분석',
    category: 'Competitive Analysis',
    icon: <Target className="w-5 h-5" />,
    description: '20곳 이상의 경쟁 카페 벤치마킹을 통한 차별화 전략 도출. 가격, 메뉴 구성, 인테리어, SNS 마케팅 등 다각도로 분석했습니다.',
  },
  {
    image: '/app_make/h_3.jpeg',
    title: '인테리어 제안서',
    category: 'Interior Design',
    icon: <TrendingUp className="w-5 h-5" />,
    description: '"도심 속 휴식" 콘셉트의 자연 친화적 인테리어 디자인. 고객의 체류 시간과 만족도를 높이는 공간 설계를 제안했습니다.',
  },
];

const educationDocuments: Document[] = [
  {
    image: '/app_make/edu_cover.jpg',
    title: '커피 이론 교육자료',
    category: 'Education',
    icon: <BookOpen className="w-5 h-5" />,
    description: '신입 바리스타를 위한 체계적인 커피 이론 교육 자료. 원두의 종류, 배전도, 추출 원리 등 커피의 기본부터 심화까지 다룹니다.',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/■ 테이스팅 노트 및 체크리스트_제출용_2.jpg',
    title: '체크리스트',
    category: 'QA Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '매장 운영 품질 관리를 위한 체크리스트. 개점 전 준비사항, 위생 관리, 제품 품질 확인 등을 표준화했습니다.',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_8.jpg',
    title: '에스프레소 추출 가이드',
    category: 'Training Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '매장 전용 에스프레소 추출 매뉴얼. 도징량, 추출 시간, 수율 등의 기준을 확립하여 지점 간 맛의 편차를 최소화했습니다.',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_6.jpg',
    title: '그라인더 관리법',
    category: 'Equipment Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '그라인더 청소 및 유지보수 가이드. 장비의 수명을 연장하고 항상 최적의 상태를 유지하기 위한 관리 방법을 정리했습니다.',
  },
  {
    image: '/app_make/h_5.jpeg',
    title: '현장 실습 교육',
    category: 'Practical Training',
    icon: <FileText className="w-5 h-5" />,
    description: '실제 매장 현장에서의 실습 교육 자료. 이론을 실전에 적용하며 직원들의 업무 숙련도를 높이는 교육 프로그램입니다.',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_4.jpg',
    title: '원두 배전도 및 추출 특성',
    category: 'Coffee Theory',
    icon: <BookOpen className="w-5 h-5" />,
    description: '배전도에 따른 원두의 특성과 최적의 추출 방법. 각 배전도별 맛의 특징과 추천 추출 레시피를 제공합니다.',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_11.jpg',
    title: '스티밍 교육',
    category: 'Training Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '우유 스티밍 기술 교육 자료. 온도, 텍스처, 거품의 양 등을 정확히 조절하여 완벽한 라떼를 만드는 방법을 안내합니다.',
  },
];

const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  return (
    <section id="documents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Documents & Analysis</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">문서 & 전문성</h3>
          <p className="text-gray-600 max-w-2xl">
            데이터 기반 분석과 체계적인 교육 자료로 운영 효율을 극대화합니다.
          </p>
        </motion.div>

        {/* Market Analysis Section */}
        <div className="mb-16">
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            매출 분석 & 마케팅 전략
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedDoc(doc)}
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
                </div>
                <div className="p-5">
                  <h5 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {doc.title}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            교육 자료 & 매뉴얼
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (marketDocuments.length + index) * 0.1, duration: 0.6 }}
                onClick={() => setSelectedDoc(doc)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                    {doc.icon}
                    {doc.category}
                  </div>
                </div>
                <div className="p-5">
                  <h5 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {doc.title}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">150%</div>
            <div className="text-gray-700 font-medium">매출 회복 달성</div>
            <div className="text-sm text-gray-500 mt-1">데이터 기반 전략 수립</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">30%</div>
            <div className="text-gray-700 font-medium">교육 시간 단축</div>
            <div className="text-sm text-gray-500 mt-1">체계적 매뉴얼 구축</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">200%</div>
            <div className="text-gray-700 font-medium">검색 유입 증가</div>
            <div className="text-sm text-gray-500 mt-1">SEO 최적화 전략</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
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
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-xl"
            >
              {/* Close Button */}
              <div className="sticky top-0 right-0 flex justify-end p-4 bg-white z-10">
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

                {/* Image */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={selectedDoc.image}
                    alt={selectedDoc.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Documents;
