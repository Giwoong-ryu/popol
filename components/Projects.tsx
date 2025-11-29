import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, PenTool, Cpu, Coffee } from 'lucide-react';
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
      '로고 시안 직접 제작 (Canva, Illustrator 활용)',
      '인테리어 톤앤매너 가이드라인 수립'
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
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
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

                <ul className="space-y-2">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 text-emerald-500 mt-1 shrink-0">•</span>
                      <span className="leading-relaxed">{desc}</span>
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
