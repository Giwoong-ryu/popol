import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, TrendingUp, PenTool, Cpu, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';
import { getAssetPath } from '../utils/getAssetPath';

const projects: Project[] = [
  {
    id: 'products',
    title: '가맹점 마케팅 자립화 시스템',
    category: 'Marketing Independence',
    image: getAssetPath('app_make/product_1.jpg'),
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '가맹점주가 스스로 SNS 콘텐츠를 제작할 수 있는 가이드 제공',
      '저비용 촬영 세팅으로 외주 비용 절감',
      '표준화된 콘텐츠 템플릿으로 제작 시간 단축'
    ],
    detailedDescription: [
      '💰 비용 절감: 전문 촬영 외주 대신 자체 제작으로 마케팅 비용 절감',
      '📸 저비용 세팅 가이드: 매장 내 자연광 활용 → 스마트폰 촬영 → 무료 앱 편집',
      '📋 가맹점용 템플릿 제공: 신메뉴 소개, 이벤트 안내, 매장 소개 등 다양한 템플릿',
      '⏱️ 효율성 개선: 촬영부터 업로드까지 빠르게 완료 가능한 체크리스트 제공'
    ]
  },
  {
    id: 'market-strategy',
    title: '저조 가맹점 매출 회복 솔루션',
    category: 'Revenue Recovery',
    image: getAssetPath('app_make/m_1.png'),
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '매출 부진 가맹점의 데이터 분석을 통한 원인 파악 및 개선',
      '상권 분석으로 입지 리스크를 사전에 파악하여 실패율 감소',
      '네이버 플레이스 최적화로 무료 마케팅 효과 극대화'
    ],
    detailedDescription: [
      '📊 매출 회복 프로세스: 일별 데이터 수집 → 저조 시간대 파악 → 타겟 프로모션 설계 → 모니터링',
      '🎯 본부 활용 방안: 부진 가맹점 조기 발견 시스템 → 데이터 기반 개선안 제시 → 가맹점 신뢰도 향상',
      '🏪 신규 입지 분석: 상권 내 경쟁 강도 분석 → 예상 매출 시뮬레이션 → 입지 적합성 평가',
      '💡 기대 효과: 데이터 기반 의사결정으로 매출 개선 및 본부 수수료 수익 증가'
    ]
  },
  {
    id: 'education',
    title: '가맹점 교육 체계화로 성공률 향상',
    category: 'Training System',
    image: getAssetPath('app_make/edu_cover.jpg'),
    icon: <BookOpen className="w-5 h-5"/>,
    description: [
      '체계적 매뉴얼로 신입 교육 기간 단축',
      '지점 간 품질 편차 제거로 브랜드 신뢰도 향상',
      '가맹점주가 직원 교육을 독립적으로 진행할 수 있는 시스템 구축'
    ],
    detailedDescription: [
      '💰 교육 비용 절감: 본부 교육 기간 단축 → 인건비 및 출장비 감소 → 가맹점 부담 최소화',
      '📚 표준 매뉴얼 제공: 추출 기준, 레시피, 트러블슈팅을 체크리스트화하여 누구나 따라할 수 있게 제작',
      '🎯 본부 활용 방안: 전 가맹점 통일된 교육 시스템 → 품질 균일성 확보 → 고객 만족도 향상',
      '💡 기대 효과: 교육 기간 단축 및 제품 품질 클레임 감소'
    ]
  },
  {
    id: 'branding',
    title: '신규 가맹점 브랜드 아이덴티티 구축',
    category: 'Brand Identity',
    image: getAssetPath('app_make/cafe_5.webp'),
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '저비용으로 브랜드 콘셉트를 확립하여 차별화 달성',
      '가맹점이 브랜드 가이드를 따라 일관성 있게 운영하도록 지원',
      '공간 설계 컨설팅으로 인테리어 실패 리스크 최소화'
    ],
    detailedDescription: [
      '💰 비용 효율: 고가 디자인 에이전시 대신 직접 제작으로 비용 절감',
      '📋 가맹점 브랜드 가이드: 컬러, 폰트, 로고 사용법, 인테리어 톤앤매너를 명확히 정의',
      '🎯 본부 활용 방안: 신규 가맹점 오픈 시 브랜드 가이드 제공 → 통일된 브랜드 경험 → 본부 신뢰도 향상',
      '💡 기대 효과: 브랜드 통일성으로 고객 인지도 향상 및 인테리어 비용 절감'
    ]
  },
  {
    id: 'ai-automation',
    title: '가맹점 업무 자동화로 효율 향상',
    category: 'Efficiency Improvement',
    image: getAssetPath('app_make/w_1.png'),
    icon: <Cpu className="w-5 h-5"/>,
    description: [
      '반복 업무 자동화로 업무 부담 경감',
      '리뷰 관리, 마케팅, 재고 관리를 AI로 자동화',
      '가맹점주가 쉽게 도입할 수 있는 저비용 자동화 시스템 제공'
    ],
    detailedDescription: [
      '💰 효율 향상: 반복 업무(리뷰 응답, SNS 관리, 재고 체크) 자동화로 업무 부담 경감',
      '🤖 쉬운 도입: 무료/저비용 도구(n8n, ChatGPT, 구글 시트) 활용 → 초기 투자 최소화 → 즉시 적용 가능',
      '🎯 본부 활용 방안: 전 가맹점 자동화 시스템 배포 → 운영 효율 통일 → 가맹점 만족도 향상',
      '💡 기대 효과: 업무 시간 단축 및 가맹점 수익성 개선'
    ]
  },
  {
    id: 'operation',
    title: '가맹점 현장 문제 즉각 해결 시스템',
    category: 'Problem Solving',
    image: getAssetPath('app_make/cafe_10.webp'),
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '8년 현장 경험으로 가맹점의 모든 돌발 상황 대응 가능',
      '인력 배치 최적화로 인건비 절감 노하우 전수',
      '재고 관리 시스템으로 폐기율 최소화'
    ],
    detailedDescription: [
      '🎯 본부 활용 방안: 가맹점 문제 발생 시 즉시 해결 가이드 제공 → 가맹점 자립도 향상 → 본부 신뢰도 증가',
      '👥 인건비 절감 노하우: 시간대별 필요 인원 최적화 → 비효율 제거',
      '📦 재고 폐기 최소화: 주간 발주 계획 + FIFO 원칙 + 유통기한 관리 → 원가 절감',
      '💡 기대 효과: 클레임 처리 시간 단축 및 재고 회전율 개선'
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
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Franchise Solutions</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">프랜차이즈 문제 해결 솔루션</h3>
          <p className="text-lg text-gray-600 mt-4">
            가맹점 운영 비용을 줄이고 성공률을 높이는 검증된 실전 노하우
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
