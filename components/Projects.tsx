import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, TrendingUp, PenTool, Cpu, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
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
      '실제 자활센터에서 2년간 사용하며 검증된 교육 콘텐츠'
    ],
    detailedDescription: [
      '📚 실제 제작 분량: 총 47페이지 (이론 30p + 실습 17p)',
      '✅ 교육 효과: 신입 교육 기간 2주 → 5일로 단축',
      '🎯 활용 가능성: 가맹점 초기 교육용 자료로 즉시 활용 가능',
      '💡 차별점: 현장 경험을 바탕으로 실제 자주 발생하는 문제 중심으로 구성'
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
      '촬영, 편집, 업로드까지 모두 직접 수행한 실전 경험',
      '저비용 촬영 세팅으로 가맹점용 콘텐츠 가이드 제작 가능'
    ],
    detailedDescription: [
      '📸 실제 제작 수량: 1,300건 이상 (사진 + 영상)',
      '💰 비용 효율: 전문 촬영 외주 없이 마케팅 진행',
      '🎯 활용 가능성: 가맹점 대상 SNS 촬영 가이드 및 템플릿 제공 가능',
      '💡 차별점: 실제 매출 증대로 이어진 검증된 콘텐츠 노하우'
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
      '신입 직원도 누락 없이 업무 수행 가능하도록 표준화',
      '실제 업무 누락 제로 달성 경험'
    ],
    detailedDescription: [
      '📋 제작 항목: 오픈 체크리스트 15항목, 마감 체크리스트 12항목, 품질 관리 10항목',
      '✅ 실제 효과: 업무 누락 제로, 신입 적응 기간 단축',
      '🎯 활용 가능성: 전 가맹점 공통 체크리스트로 즉시 배포 가능',
      '💡 차별점: 복잡한 매뉴얼이 아닌 실행 가능한 단순 체크리스트'
    ]
  },
  {
    id: 'opening',
    title: '신규 오픈 준비 가이드',
    category: 'Store Opening',
    image: getAssetPath('app_make/h_3.jpeg'),
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '상권 분석, 인테리어 협의, 메뉴 구성까지 오픈 준비 전 과정 경험',
      '해운회사 프로젝트에서 상권 분석 20곳, 인테리어 견적 협상 실무 수행',
      '개인 카페 + 자활센터 3곳 오픈 경험'
    ],
    detailedDescription: [
      '🏪 실제 경험: 개인 카페 1곳 + 자활센터 3곳 오픈 준비 총괄',
      '📊 상권 분석: 경쟁 매장 20곳 이상 벤치마킹 및 분석',
      '🎯 활용 가능성: 신규 가맹점 오픈 체크리스트 및 가이드 제작 가능',
      '💡 차별점: 인테리어 3년 배경으로 공간 설계 및 견적 협의 가능'
    ]
  }
];

const Projects: React.FC = () => {
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Portfolio & Achievements</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">실제 제작한 결과물</h3>
          <p className="text-lg text-gray-600 mt-4">
            7년 현장 경험을 바탕으로 직접 제작하고 검증한 교육 자료 및 콘텐츠
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-2">
                  {project.icon}
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                {/* 기본 설명 - 항상 표시 */}
                <ul className="space-y-2 mb-4">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 text-emerald-500 mt-1 shrink-0">•</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* 상세 설명 - 버튼 클릭 시 표시 */}
                <AnimatePresence>
                  {showDetails === project.id && project.detailedDescription && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mb-4 pt-4 border-t border-gray-200"
                    >
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">📋 상세 내용</h4>
                      <ul className="space-y-3">
                        {project.detailedDescription.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="mr-2 text-gray-500 mt-1 shrink-0">→</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 상세설명 버튼 - detailedDescription이 있을 때만 표시 */}
                {project.detailedDescription && (
                  <button
                    onClick={() => toggleDetails(project.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">
                      {showDetails === project.id ? '상세설명 접기' : '상세설명 보기'}
                    </span>
                    {showDetails === project.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
