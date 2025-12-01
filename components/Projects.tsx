import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, TrendingUp, PenTool, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';
import { getAssetPath } from '../utils/getAssetPath';

const projects: Project[] = [
  {
    id: 'education',
    title: '커피 이론 교육자료',
    category: 'Education Materials',
    image: getAssetPath('app_make/edu_cover.jpg'),
    icon: <BookOpen className="w-5 h-5"/>,
    description: [
      '신입 바리스타를 위한 47페이지 분량 교육 자료 직접 제작',
      '원두 종류, 배전도, 추출 원리부터 실전 트러블슈팅까지 체계화',
      '자활센터에서 2년간 실사용, 신입 교육 기간 2주 → 5일로 단축',
      '커피 이론, 에스프레소 추출 가이드, 스티밍 교육, 그라인더 관리법 등 실무 매뉴얼 완비'
    ]
  },
  {
    id: 'contents',
    title: 'SNS 콘텐츠 포트폴리오',
    category: 'Content Creation',
    image: getAssetPath('app_make/product_1.jpg'),
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '개인 카페 운영 3.5년간 SNS 게시물 1,300건 직접 제작',
      '촬영, 편집, 업로드까지 전 과정 직접 수행하여 마케팅 비용 절감',
      '저비용 촬영 세팅으로 가맹점용 템플릿 제작 가능',
      '시즌별 신메뉴 기획부터 고객 피드백 기반 메뉴 개선까지 경험'
    ]
  },
  {
    id: 'checklist',
    title: '운영 체크리스트 세트',
    category: 'Operations Manual',
    image: getAssetPath('app_make/커피 이론 교육자료-제출용/■ 테이스팅 노트 및 체크리스트_제출용_2.jpg'),
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '오픈/마감 루틴, 품질 관리, 위생 점검 체크리스트 제작',
      '오픈 15항목, 마감 12항목, 품질 관리 10항목으로 체계화',
      '업무 누락 제로, 신입 직원 적응 기간 대폭 단축',
      '테이스팅 노트를 활용한 품질 관리 시스템 구축'
    ]
  },
  {
    id: 'opening',
    title: '신규 오픈 준비 가이드',
    category: 'Store Opening',
    image: getAssetPath('app_make/타임테이블.png'),
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '2025년 9월: 해운회사 카페 신규 매장 구축 프로젝트 총괄 (1개월)',
      '상권 분석 + 경쟁업체 14곳 벤치마킹으로 차별화 전략 수립',
      '인테리어 견적 협의 (1.5억 → 1.3억 절감), 브랜딩, 메뉴 기획, 마케팅 전략 수립',
      '개인 카페 1곳 + 자활센터 3곳 오픈 준비 경험으로 노하우 축적'
    ]
  }
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Portfolio & Achievements</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">실제 제작한 결과물</h3>
          <p className="text-lg text-gray-600 mt-4">
            8년 현장 경험을 바탕으로 직접 제작하고 검증한 교육 자료 및 콘텐츠
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-2 shadow-sm">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <ul className="space-y-3 flex-1">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700 leading-relaxed">
                        <span className="mr-2 text-emerald-500 mt-1 shrink-0 font-bold">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {showAll ? (
                <>
                  <span>접기</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>상세보기 ({projects.length - 3}개 더보기)</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
