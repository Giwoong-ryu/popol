import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, TrendingUp, BookOpen, BarChart3, Target, ChevronRight } from 'lucide-react';

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
    description: '매장 위치 분석 및 최적 입지 선정 전략',
  },
  {
    image: '/app_make/m_2.png',
    title: '상권 분석 보고서',
    category: 'Market Research',
    icon: <BarChart3 className="w-5 h-5" />,
    description: '지역 상권 데이터 기반 매출 예측 분석',
  },
  {
    image: '/app_make/m-3.png',
    title: '경쟁사 벤치마킹',
    category: 'Competitive Analysis',
    icon: <Target className="w-5 h-5" />,
    description: '경쟁사 대비 차별화 포인트 도출',
  },
  {
    image: '/app_make/m_4.png',
    title: '경쟁사 분석',
    category: 'Marketing Strategy',
    icon: <TrendingUp className="w-5 h-5" />,
    description: '시장 트렌드 기반 마케팅 전략 수립',
  },
  {
    image: '/app_make/m_5.png',
    title: '인테리어 제안서',
    category: 'Data Analysis',
    icon: <BarChart3 className="w-5 h-5" />,
    description: '고객 동선 분석 기반 공간 설계',
  },
];

const educationDocuments: Document[] = [
  {
    image: '/app_make/edu_cover.jpg',
    title: '커피 이론 교육자료',
    category: 'Education',
    icon: <BookOpen className="w-5 h-5" />,
    description: '커피 추출 원리부터 품질 관리까지',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_8.jpg',
    title: '에스프레소 추출 가이드',
    category: 'Training Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '일관된 품질의 에스프레소 추출 매뉴얼',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/■ 테이스팅 노트 및 체크리스트_제출용_2.jpg',
    title: '체크리스트',
    category: 'QA Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '품질 관리 및 테이스팅 평가 기준',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_6.jpg',
    title: '그라인더 관리법',
    category: 'Equipment Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '장비 유지보수 및 최적 상태 관리',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_4.jpg',
    title: '원두 배전도 및 추출 특성',
    category: 'Coffee Theory',
    icon: <BookOpen className="w-5 h-5" />,
    description: '로스팅 단계별 맛의 특성 이해',
  },
  {
    image: '/app_make/커피 이론 교육자료-제출용/커피 이론 교육자료-제출용_11.jpg',
    title: '스티밍 교육',
    category: 'Training Manual',
    icon: <FileText className="w-5 h-5" />,
    description: '완벽한 우유 스티밍 기술 습득',
  },
];

type TabType = 'market' | 'education';

const Documents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('market');

  const currentDocuments = activeTab === 'market' ? marketDocuments : educationDocuments;
  const tabIcon = activeTab === 'market' ? TrendingUp : BookOpen;
  const TabIcon = tabIcon;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Documents & Analysis</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">문서 & 전문성</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            데이터 기반 분석과 체계적인 교육 자료로 운영 효율을 극대화합니다.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('market')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'market'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              매출 분석 & 마케팅 전략
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              교육 자료 & 매뉴얼
            </button>
          </div>
        </motion.div>

        {/* Document List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className={`flex items-center gap-3 mb-8 pb-4 border-b-2 ${
              activeTab === 'market' ? 'border-emerald-600' : 'border-blue-600'
            }`}>
              <TabIcon className={`w-8 h-8 ${
                activeTab === 'market' ? 'text-emerald-600' : 'text-blue-600'
              }`} />
              <h4 className="text-2xl font-bold text-gray-900">
                {activeTab === 'market' ? '매출 분석 & 마케팅 전략' : '교육 자료 & 매뉴얼'}
              </h4>
              <span className="ml-auto text-gray-500 font-semibold">
                {currentDocuments.length}개 문서
              </span>
            </div>

            {/* Document Cards - List View */}
            <div className="space-y-6">
              {currentDocuments.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-80 h-64 md:h-56 overflow-hidden bg-gray-50 flex-shrink-0 relative">
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute top-4 right-4 ${
                        activeTab === 'market' ? 'bg-emerald-600' : 'bg-blue-600'
                      } text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg`}>
                        {doc.icon}
                        {doc.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <h5 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {doc.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {doc.description}
                      </p>
                      <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                        <span>자세히 보기</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
            <div className="text-5xl font-bold text-emerald-600 mb-3">150%</div>
            <div className="text-gray-900 font-bold text-lg mb-1">매출 회복 달성</div>
            <div className="text-sm text-gray-600">데이터 기반 전략 수립</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <div className="text-5xl font-bold text-blue-600 mb-3">30%</div>
            <div className="text-gray-900 font-bold text-lg mb-1">교육 시간 단축</div>
            <div className="text-sm text-gray-600">체계적 매뉴얼 구축</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <div className="text-5xl font-bold text-purple-600 mb-3">200%</div>
            <div className="text-gray-900 font-bold text-lg mb-1">검색 유입 증가</div>
            <div className="text-sm text-gray-600">SEO 최적화 전략</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documents;
