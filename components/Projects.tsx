import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, TrendingUp, PenTool, Cpu, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'products',
    title: '1300+ SNS 콘텐츠 & 시그니처 메뉴 개발',
    category: 'Product & Contents',
    image: '/app_make/product_1.jpg',
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '1300+ SNS 콘텐츠 기획 및 제작으로 브랜드 인지도 구축',
      '50+ 시즌 메뉴 개발로 고객 재방문율 30% 향상',
      '비주얼 중심의 제품 사진 촬영 및 편집으로 SNS 반응률 3배 증가'
    ],
    detailedDescription: [
      '📸 콘텐츠 제작 프로세스: 매장 내 라이팅 최적화 → 구도 설정 → 후보정 → 해시태그 전략 수립',
      '🎨 시그니처 메뉴 개발 과정: 시즌별 트렌드 분석 → 레시피 테스트 → 원가 계산 → 고객 반응 수집',
      '📊 데이터 기반 콘텐츠 운영: 게시물별 반응률 분석 → 최적 업로드 시간대 파악 → 인게이지먼트 개선',
      '💡 인기 메뉴 사례: 딸기 시리즈(월 평균 350잔), 복숭아 아이스티(여름 시즌 400잔+)'
    ]
  },
  {
    id: 'market-strategy',
    title: '매출 분석 & 마케팅 전략 수립',
    category: 'Market Strategy',
    image: '/app_make/m_1.png',
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '일 단위 매출 데이터 분석으로 150% 매출 회복 달성',
      '상권 분석 및 경쟁사 20곳 벤치마킹으로 차별화 전략 수립',
      '네이버 플레이스 SEO 최적화로 검색 유입 200% 증가'
    ],
    detailedDescription: [
      '📉 매출 회복 프로세스: 일별/시간대별 매출 분석 → 저조 구간 파악 → 할인 프로모션 설계 → 배달앱 노출 조정',
      '🏪 상권 분석 방법론: 반경 500m 내 경쟁점 조사 → 메뉴/가격 비교표 작성 → 우리만의 차별화 포인트 3가지 도출',
      '🔍 SEO 최적화 전략: 지역 키워드 30개 선정 → 리뷰 응답률 100% 유지 → 메뉴 설명 상세화 → 사진 퀄리티 개선',
      '💰 성과 지표: 월 평균 매출 180만원 → 450만원 증가 (6개월 소요)'
    ]
  },
  {
    id: 'education',
    title: '에스프레소 추출 매뉴얼 제작',
    category: 'Education & QA',
    image: '/app_make/edu_cover.jpg',
    icon: <BookOpen className="w-5 h-5"/>,
    description: [
      '매장 전용 추출 기준 확립 (도징량, 추출 시간, 수율)',
      '신입 교육 자료로 직접 제작하여 교육 시간 30% 단축',
      '지점 간 맛 편차를 줄여 제품 품질(QSC) 안정성 확보'
    ],
    detailedDescription: [
      '☕ 추출 기준 수립 과정: 원두별 TDS 측정 → 최적 도징량 결정(18-20g) → 추출 시간 범위 설정(25-30초)',
      '📚 매뉴얼 구성: 머신 작동법 → 그라인더 세팅 → 추출 시 체크리스트 → 트러블슈팅 가이드',
      '👨‍🏫 교육 프로그램: 1일차(이론 + 시연) → 2-3일차(실습 + 피드백) → 4-5일차(독립 작업 + 품질 체크)',
      '✅ 품질 관리 시스템: 매일 아침 첫 추출 테스트 → 주간 블라인드 테스트 → 월간 품질 평가'
    ]
  },
  {
    id: 'branding',
    title: '브랜드 콘셉트 개발 (GREEN WAVE)',
    category: 'Branding',
    image: '/app_make/cafe_5.webp',
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '자연 친화적 색감 및 "도심 속 휴식" 콘셉트 기획',
      '로고 시안 직접 제작 (Canva, Figma 활용)',
      '인테리어 톤앤매너 가이드라인 수립'
    ],
    detailedDescription: [
      '🎨 컬러 팔레트: 메인(포레스트 그린 #2D5016) → 서브(베이지 #F5F1E8) → 포인트(골드 #D4AF37)',
      '🖼️ 로고 디자인 과정: 컨셉 스케치 5종 → 디지털 시안 3종 제작 → 고객 설문(50명) → 최종안 선정',
      '🏠 공간 설계 원칙: 자연광 활용 극대화 → 우드 소재 80% 이상 → 식물 배치 15개소 → 좌석 간 거리 1.5m 확보',
      '📱 브랜드 적용: 명함, 메뉴판, 테이크아웃 컵, SNS 템플릿, 간판 디자인 일관성 유지'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI 자동화 & 업무 효율화',
    category: 'AI & Automation',
    image: '/app_make/w_1.png',
    icon: <Cpu className="w-5 h-5"/>,
    description: [
      'n8n 자동화 워크플로우 구축으로 반복 업무 80% 감소',
      'ChatGPT 활용 고객 리뷰 분석 및 대응 스크립트 자동 생성',
      '뉴스레터 자동 발송 시스템 구축으로 마케팅 업무 시간 50% 단축'
    ],
    detailedDescription: [
      '🤖 n8n 워크플로우 사례: 배달 주문 알림 → Slack 전송 / 재고 부족 시 → 자동 발주 알림 / 일 매출 집계 → 구글 시트 자동 기록',
      '💬 리뷰 분석 자동화: 네이버/카카오맵 리뷰 수집 → GPT-4로 감정 분석 → 긍정/부정/개선점 분류 → 답변 초안 생성',
      '📧 뉴스레터 시스템: 신메뉴 등록 → 이미지 자동 최적화 → 고객 DB 세그먼트 → 맞춤형 문구 생성 → 예약 발송',
      '⏱️ 시간 절감 효과: 리뷰 응답(30분→5분) / 뉴스레터 제작(2시간→30분) / 데이터 정리(1시간→자동화)'
    ]
  },
  {
    id: 'operation',
    title: '실전 운영 노하우 (8년 경력)',
    category: 'Operations',
    image: '/app_make/cafe_10.webp',
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      '8년 실무 기반의 탄탄한 운영 능력',
      '피크타임 동선 최적화로 대기 시간 40% 감소',
      '현장 돌발 상황(기기 고장, 클레임) 즉각 해결'
    ],
    detailedDescription: [
      '⚡ 피크타임 운영 전략: 사전 준비물 체크리스트 → 음료/디저트 제조 역할 분담 → 주문-제조-서빙 동선 2m 이내 최적화',
      '🔧 트러블슈팅 경험: 머신 고장 시 백업 장비 즉시 투입 / 재고 부족 시 긴급 대체 메뉴 제안 / 클레임 발생 시 즉시 리메이크 + 쿠폰 제공',
      '👥 인력 관리: 시간대별 필요 인원 산정(오전 2명, 점심 3명, 저녁 2명) → 효율적 스케줄링으로 인건비 15% 절감',
      '📦 재고 관리 시스템: 주간 발주 계획표 작성 → 유통기한 표시 라벨링 → FIFO 원칙 준수 → 폐기율 5% 이하 유지'
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
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Projects</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">핵심 프로젝트 경험</h3>
          <p className="text-lg text-gray-600 mt-4">
            8년간의 카페 운영 경험을 통해 이룬 성과들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-xs font-bold text-gray-800 flex items-center gap-2 shadow-md">
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
                      transition={{ duration: 0.3 }}
                      className="mb-4 pt-4 border-t border-gray-200"
                    >
                      <h4 className="text-sm font-bold text-emerald-700 mb-3">📋 상세 내용</h4>
                      <ul className="space-y-3">
                        {project.detailedDescription.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="mr-2 text-emerald-600 mt-1 shrink-0">→</span>
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
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors duration-200"
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
