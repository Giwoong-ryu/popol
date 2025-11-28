import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, BookOpen, Search, TrendingUp, PenTool, Cpu, Coffee } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'manual',
    title: '에스프레소 추출 매뉴얼 제작',
    category: 'Education & QA',
    image: 'https://picsum.photos/600/400?random=10',
    icon: <BookOpen className="w-5 h-5"/>,
    description: [
      '매장 전용 추출 기준 확립 (도징량, 추출 시간, 수율)',
      '신입 교육 자료로 직접 제작하여 교육 시간 30% 단축',
      '지점 간 맛 편차를 줄여 제품 품질(QSC) 안정성 확보'
    ]
  },
  {
    id: 'naver',
    title: '네이버 플레이스 홍보 전략',
    category: 'Marketing',
    image: 'https://picsum.photos/600/400?random=11',
    icon: <Search className="w-5 h-5"/>,
    description: [
      '초기 노출 전략 수립 및 SEO 최적화',
      '키워드/사진/설명 구성 최적화로 검색 유입 200% 증가',
      '고객 리뷰 분석을 통한 실시간 피드백 반영 시스템 구축'
    ]
  },
  {
    id: 'analysis',
    title: '상권·경쟁 매장 20곳 분석',
    category: 'Data Analysis',
    image: 'https://picsum.photos/600/400?random=12',
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '경쟁 매장 20곳 방문 및 데이터 수집 (가격, 메뉴, 인테리어)',
      '실제 매출 범위 경험 기반 예측 모델링',
      '타깃 고객층(2030 직장인 vs 거주민) 명확화'
    ]
  },
  {
    id: 'branding',
    title: '브랜드 콘셉트 개발 (GREEN WAVE)',
    category: 'Branding',
    image: 'https://picsum.photos/600/400?random=13',
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '자연 친화적 색감 및 "도심 속 휴식" 콘셉트 기획',
      '로고 시안 직접 제작 (Canva, Illustrator 활용)',
      '인테리어 톤앤매너 가이드라인 수립'
    ]
  },
  {
    id: 'ai-edu',
    title: 'AI 모임 운영 및 교육',
    category: 'AI & Automation',
    image: 'https://picsum.photos/600/400?random=14',
    icon: <Cpu className="w-5 h-5"/>,
    description: [
      'n8n 자동화 툴 활용 뉴스레터/알림봇 제작 교육',
      '사내 교육 매뉴얼 전파 및 업무 자동화 도입',
      'ChatGPT를 활용한 고객 리뷰 요약 및 대응 스크립트 작성'
    ]
  },
  {
    id: 'operation',
    title: '실전 운영 노하우',
    category: 'Operations',
    image: 'https://picsum.photos/600/400?random=15',
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '8년 실무 기반의 탄탄한 운영 능력',
      '피크타임 동선 최적화로 대기 시간 감소',
      '현장 돌발 상황(기기 고장, 클레임) 즉각 해결'
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:flex md:items-end md:justify-between">
            <div>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Projects</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">핵심 프로젝트 경험</h3>
            </div>
            <p className="hidden md:block text-gray-500">카드를 클릭하여 상세 내용을 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ y: -5 }}
            >
              <motion.div layoutId={`card-image-${project.id}`} className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-2">
                    {project.icon}
                    {project.category}
                </div>
              </motion.div>
              <div className="p-6">
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </motion.h3>
                <p className="text-gray-500 line-clamp-2 text-sm">{project.description[0]}</p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
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
                className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh]"
              >
                <motion.div layoutId={`card-image-${selectedId}`} className="relative h-64 md:h-80 shrink-0">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
                
                <div className="p-8 overflow-y-auto">
                    <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold text-sm">
                        {selectedProject.icon}
                        <span>{selectedProject.category}</span>
                    </div>
                  <motion.h3 layoutId={`card-title-${selectedId}`} className="text-3xl font-bold text-gray-900 mb-6">
                    {selectedProject.title}
                  </motion.h3>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-gray-800">주요 성과 및 내용</h4>
                    <ul className="space-y-3">
                        {selectedProject.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                                <span className="mr-3 text-blue-500 mt-1.5">•</span>
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