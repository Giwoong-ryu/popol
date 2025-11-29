import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, BookOpen, BarChart3, Target } from 'lucide-react';

interface Document {
  image: string;
  title: string;
  category: string;
  icon: React.ReactNode;
}

const marketDocuments: Document[] = [
  {
    image: 'app_make/m_1.png',
    title: '매출 분석 및 전략 수립',
    category: 'Market Analysis',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    image: 'app_make/m_2.png',
    title: '상권 분석 보고서',
    category: 'Market Research',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    image: 'app_make/m_3.png',
    title: '경쟁사 벤치마킹',
    category: 'Competitive Analysis',
    icon: <Target className="w-5 h-5" />,
  },
  {
    image: 'app_make/m_4.png',
    title: 'SEO 최적화 전략',
    category: 'Marketing Strategy',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    image: 'app_make/m_5.png',
    title: '매출 데이터 분석',
    category: 'Data Analysis',
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

const educationDocuments: Document[] = [
  {
    image: 'app_make/edu_cover.jpg',
    title: '커피 이론 교육자료',
    category: 'Education',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    image: 'app_make/edu_1.jpg',
    title: '에스프레소 추출 가이드',
    category: 'Training Manual',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    image: 'app_make/edu_2.jpg',
    title: '품질 관리 체크리스트',
    category: 'QA Manual',
    icon: <FileText className="w-5 h-5" />,
  },
];

const Documents: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">150%</div>
            <div className="text-gray-600">매출 회복 달성</div>
            <div className="text-sm text-gray-500 mt-1">데이터 기반 전략 수립</div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">30%</div>
            <div className="text-gray-600">교육 시간 단축</div>
            <div className="text-sm text-gray-500 mt-1">체계적 매뉴얼 구축</div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600 mb-2">200%</div>
            <div className="text-gray-600">검색 유입 증가</div>
            <div className="text-sm text-gray-500 mt-1">SEO 최적화 전략</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documents;
