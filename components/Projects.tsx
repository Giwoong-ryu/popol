import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, BookOpen, Search, TrendingUp, PenTool, Cpu, Coffee } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'products',
    title: '1300+ SNS 콘텐츠 & 시그니처 메뉴 개발',
    category: 'Product & Contents',
    image: 'app_make/product_1.jpg',
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '1300+ SNS 콘텐츠 기획 및 제작으로 브랜드 인지도 구축',
      '50+ 시즌 메뉴 개발로 고객 재방문율 30% 향상',
      '비주얼 중심의 제품 사진 촬영 및 편집으로 SNS 반응률 3배 증가'
    ]
  },
  {
    id: 'market-strategy',
    title: '매출 분석 & 마케팅 전략 수립',
    category: 'Market Strategy',
    image: 'app_make/m_1.png',
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '일 단위 매출 데이터 분석으로 150% 매출 회복 달성',
      '상권 분석 및 경쟁사 20곳 벤치마킹으로 차별화 전략 수립',
      '네이버 플레이스 SEO 최적화로 검색 유입 200% 증가'
    ]
  },
  {
    id: 'education',
    title: '에스프레소 추출 매뉴얼 제작',
    category: 'Education & QA',
    image: 'app_make/edu_cover.jpg',
    icon: <BookOpen className="w-5 h-5"/>,
    description: [
      '매장 전용 추출 기준 확립 (도징량, 추출 시간, 수율)',
      '신입 교육 자료로 직접 제작하여 교육 시간 30% 단축',
      '지점 간 맛 편차를 줄여 제품 품질(QSC) 안정성 확보'
    ]
  },
  {
    id: 'branding',
    title: '브랜드 콘셉트 개발 (GREEN WAVE)',
    category: 'Branding',
    image: 'app_make/cafe_5.webp',
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '자연 친화적 색감 및 "도심 속 휴식" 콘셉트 기획',
      '로고 시안 직접 제작 (Canva, Illustrator 활용)',
      '인테리어 톤앤매너 가이드라인 수립'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI 자동화 & 업무 효율화',
    category: 'AI & Automation',
    image: 'app_make/w_1.png',
    icon: <Cpu className="w-5 h-5"/>,
    description: [
      'n8n 자동화 워크플로우 구축으로 반복 업무 80% 감소',
      'ChatGPT 활용 고객 리뷰 분석 및 대응 스크립트 자동 생성',
      '뉴스레터 자동 발송 시스템 구축으로 마케팅 업무 시간 50% 단축'
    ]
  },
  {
    id: 'operation',
    title: '실전 운영 노하우 (8년 경력)',
    category: 'Operations',
    image: 'app_make/cafe_10.webp',
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '8년 실무 기반의 탄탄한 운영 능력',
      '피크타임 동선 최적화로 대기 시간 40% 감소',
      '현장 돌발 상황(기기 고장, 클레임) 즉각 해결'
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 md:flex md:items-end md:justify-between">
            <div>
                <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Projects</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">핵심 프로젝트 경험</h3>
            </div>
            <p className="hidden md:block text-gray-500">카드를 클릭하여 상세 내용을 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ y: -5 }}
            >
              <motion.div layoutId={`card-image-${project.id}`} className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-2">
                    {project.icon}
                    {project.category}
                </div>
              </motion.div>
              <div className="p-5">
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </motion.h3>
                <p className="text-gray-500 line-clamp-2 text-sm">{project.description[0]}</p>
                <div className="mt-3 flex items-center text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh]"
              >
                <motion.div layoutId={`card-image-${selectedId}`} className="relative h-64 md:h-72 shrink-0">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>

                <div className="p-8 overflow-y-auto">
                    <div className="flex items-center gap-2 mb-4 text-emerald-600 font-semibold text-sm">
                        {selectedProject.icon}
                        <span>{selectedProject.category}</span>
                    </div>
                  <motion.h3 layoutId={`card-title-${selectedId}`} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {selectedProject.title}
                  </motion.h3>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-gray-800">주요 성과 및 내용</h4>
                    <ul className="space-y-3">
                        {selectedProject.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                                <span className="mr-3 text-emerald-500 mt-1.5">•</span>
                                <span className="leading-relaxed">{desc}</span>
                            </li>
                        ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={() => setSelectedId(null)}
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-medium transition-colors"
                    >
                        닫기
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
