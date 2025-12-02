import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, PenTool, Coffee } from 'lucide-react';
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
      '신입 바리스타를 위한 11페이지 분량 교육 자료 직접 기획 및 제작',
      '원두의 종류(아라비카/로부스타), 배전도(라이트~다크), 추출 원리(압력, 온도, 시간)까지 체계적으로 정리',
      '실전 트러블슈팅 가이드 포함: 신맛/쓴맛 조절, 크레마 품질 개선, 추출 시간 최적화 방법',
      '자활센터에서 2년간 실사용하여 검증, 신입 교육 기간 1달 → 2주로 50% 단축 효과',
      '커피 이론, 에스프레소 추출 가이드, 우유 스티밍 기법, 그라인더 세팅 및 관리법 등 실무 매뉴얼 완비'
    ]
  },
  {
    id: 'contents',
    title: 'SNS 콘텐츠 포트폴리오',
    category: 'Content Creation',
    image: getAssetPath('app_make/product_10.jpg'),
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '개인 카페 운영 3.5년간 인스타그램 게시물 1,300건 이상 직접 기획·촬영·편집·업로드',
      '팔로워 2,000명 이상 확보, 게시물당 평균 좋아요 150개 이상 달성',
      '외주 없이 전 과정 직접 수행하여 연간 마케팅 비용 500만원 이상 절감',
      '스마트폰 + 자연광 활용한 저비용 촬영 세팅으로 가맹점용 템플릿 제작 가능',
      '시즌별 신메뉴 기획(봄 딸기, 여름 빙수, 가을 고구마, 겨울 초콜릿)부터 고객 피드백 기반 메뉴 개선까지 A-Z 경험'
    ]
  },
  {
    id: 'automation',
    title: '가맹점 일일 리포트 자동화',
    category: 'AI Automation',
    image: getAssetPath('app_make/1-2.png'),
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      'n8n + Gemini AI + Google Sheets + Telegram 연동 자동화 시스템 직접 설계 및 구축',
      '매장 데이터(매출, 폐기율, 생산성) 자동 수집 → AI 분석 → 리포트 자동 생성',
      '이상 징후(폐기율 5% 초과, 매출 급락 등) 실시간 감지 및 즉시 알림 발송',
      '날씨 API 연동으로 기온·강수량 기반 재고 관리 제안 기능 포함',
      '본사/슈퍼바이저/점주 각각에 맞춤형 리포트 자동 전송 시스템 구현',
      '매일 수동 작성하던 일일 보고서 작업 시간 완전 제거 (5분 → 0분)'
    ]
  },
  {
    id: 'opening',
    title: '신규 오픈 준비 가이드',
    category: 'Store Opening',
    image: getAssetPath('app_make/타임테이블.png'),
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '2025년 9월: 해운회사 사내 카페 신규 매장 구축 프로젝트 총괄 담당 (1개월간 집중 진행)',
      '반경 1km 내 상권 분석 + 경쟁업체 14곳 직접 방문 벤치마킹으로 차별화 전략 수립',
      '인테리어 업체 3곳 비교 견적 후 협의하여 1.5억 → 1.3억으로 2,000만원 절감',
      '브랜드 컨셉 기획, 시그니처 메뉴 5종 개발, 가격 전략 수립, SNS 마케팅 플랜 작성',
      '개인 카페 1곳(창업~운영~매각) + 자활센터 카페 3곳 오픈 준비 경험으로 실전 노하우 축적'
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Portfolio & Achievements</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">핵심역량</h3>
          <p className="text-lg text-gray-600 mt-4">
            8년 현장 경험을 바탕으로 직접 제작하고 검증한 교육 자료 및 콘텐츠
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
