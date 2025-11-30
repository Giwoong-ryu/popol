import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location?: string;
  responsibilities: string[];
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: '신규 매장 구축 & 운영 개선 프로젝트',
    position: '카페사업단 팀장 | 부산동래지역자활센터',
    period: '2023.02 ~ 2025.01',
    location: '부산',
    responsibilities: [
      '신규 매장 3곳 오픈 및 안정화 과정 총괄',
      '배달앱 운영 최적화를 통한 매출 개선 전략 수립 및 실행',
      '신입 직원 교육 체계 구축 및 운영 매뉴얼 정비',
    ],
    achievements: [
      '교육 체계 구축: 신입 교육 커리큘럼 설계 및 매뉴얼 제작 경험',
      '핵심 성과: 체계적 교육으로 신입 적응 기간 2주→5일로 단축',
    ],
  },
  {
    company: '프랜차이즈 표준 운영 시스템 경험',
    position: '매니저 | 메가커피',
    period: '2022.08 ~ 2023.02',
    responsibilities: [
      '대형 프랜차이즈의 표준화된 운영 매뉴얼 학습 및 적용',
      '재고 관리, 발주 시스템, 품질 관리 프로세스 실무 경험',
      '체계화된 매뉴얼을 통한 일관된 서비스 품질 유지',
    ],
    achievements: [
      '프랜차이즈 시스템 학습: 대형 본부의 표준화된 매뉴얼 및 교육 방식 체득',
      '핵심 인사이트: 복잡한 시스템보다 실행 가능한 체크리스트가 중요함을 학습',
      '※ 매장관리 팀장 포지션 제안으로 자활센터로 이직',
    ],
  },
  {
    company: '브랜드 구축 & 콘텐츠 마케팅',
    position: '운영 총괄 | 씨리얼 (개인 카페)',
    period: '2018.11 ~ 2022.05',
    location: '부산',
    responsibilities: [
      '개인 카페 창업부터 운영까지 전 과정 총괄',
      'SNS 콘텐츠 직접 기획 및 제작으로 마케팅 비용 절감',
      '시즌별 신메뉴 개발 및 고객 피드백 기반 메뉴 개선',
    ],
    achievements: [
      '콘텐츠 제작 역량: SNS 게시물 1,300건 직접 제작 및 운영',
      '핵심 노하우: 저비용 촬영 세팅 및 가맹점용 템플릿 제작 가능',
    ],
  },
  {
    company: '대형 프랜차이즈 현장 운영 경험',
    position: '직원 | 파리바게트 삼성역점',
    period: '2017.02 ~ 2018.08',
    location: '서울',
    responsibilities: [
      '국내 대표 프랜차이즈의 표준화된 운영 시스템 현장 학습',
      '본부 주도의 품질 관리, 재고 관리 프로세스 실무 경험',
      '고객 응대 및 매장 운영 기본기 습득',
    ],
    achievements: [
      '교육받는 입장 경험: 본부 매뉴얼을 직접 학습하며 효과적인 교육법 체득',
      '핵심 인사이트: 현장에서 실제로 따라할 수 있는 매뉴얼이 가장 중요',
    ],
  },
  {
    company: '상업 공간 설계 & 시공 관리',
    position: '과장 | 대○인테리어',
    period: '2014.02 ~ 2017.01',
    responsibilities: [
      '상업 공간 인테리어 설계 및 시공 현장 관리',
      '자재 선정, 협력업체 관리, 공정 스케줄 조율',
      '고객 요구사항 분석 및 예산 내 최적 설계안 제시',
    ],
    achievements: [
      '신규 오픈 지원 역량: 인테리어 견적 협의, 시공 감리, 동선 설계 가능',
      '핵심 강점: 매장 공간 설계 감각으로 신규 오픈 준비 지원 가능',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Experience & Growth</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">10년 현장 경험으로 쌓은 교육 노하우</h3>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-emerald-500"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />

              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold">{exp.position}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">주요 업무</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="mr-3 text-emerald-500 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h5 className="font-bold text-gray-800 mb-2">주요 성과</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="mr-3 text-emerald-600 font-semibold">✓</span>
                            <span className="font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 pt-8 border-t-2 border-gray-200"
        >
          <p className="text-center text-gray-700 text-lg">
            <strong className="text-emerald-600">F&B 7년 + 공간설계 3년</strong> |
            신규 매장 3곳 구축 |
            개인·프랜차이즈·공공기관 전 경험
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
