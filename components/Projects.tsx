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
      '11페이지 분량 교육자료 직접 기획 및 제작',
      '원두 종류, 배전도, 추출 원리, 트러블슈팅 가이드 포함',
      '자활센터에서 2년간 실제 교육에 사용',
      '이 자료로 신입 교육 기간 1달→2주로 단축'
    ]
  },
  {
    id: 'contents',
    title: 'SNS 콘텐츠 포트폴리오',
    category: 'Content Creation',
    image: getAssetPath('app_make/product_10.jpg'),
    icon: <PenTool className="w-5 h-5"/>,
    description: [
      '개인 카페 운영 3.5년간 인스타그램 게시물 1,300건 이상 직접 제작',
      '기획·촬영·편집·업로드 전 과정 직접 수행',
      '팔로워 2,000명 이상 확보',
      '스마트폰 + 자연광 활용한 저비용 촬영 세팅'
    ]
  },
  {
    id: 'automation',
    title: '가맹점 일일 리포트 자동화',
    category: 'Work Efficiency',
    image: getAssetPath('app_make/1-2.png'),
    icon: <Coffee className="w-5 h-5"/>,
    description: [
      'n8n + Gemini AI + Google Sheets + Telegram 연동 시스템 직접 구축',
      '매장 데이터(매출, 폐기율) 자동 수집 → AI 분석 → 리포트 자동 발송',
      '이상 징후(폐기율 5% 초과 등) 감지 시 알림 발송 기능',
      '날씨 API 연동으로 기온·강수량 기반 재고 관리 제안 기능 포함'
    ]
  },
  {
    id: 'opening',
    title: '신규 오픈 경험',
    category: 'Store Opening',
    image: getAssetPath('app_make/타임테이블.png'),
    icon: <TrendingUp className="w-5 h-5"/>,
    description: [
      '개인카페 1곳 창업~운영~매각 경험',
      '자활센터 카페 3곳 오픈 준비 담당',
      '해운회사 사내카페 1곳 오픈 프로젝트 (1개월)',
      '상권 분석, 경쟁업체 벤치마킹, 인테리어 협의까지 실무 경험'
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
