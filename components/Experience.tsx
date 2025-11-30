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
      '본부 적용 방안: 매장 운영 데이터 분석을 통한 개선 포인트 도출 체계 구축',
      '핵심 가치: 가맹점이 자체적으로 운영 상태를 점검할 수 있는 체크리스트 개발',
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
      '본부 적용 방안: 프랜차이즈 성공의 핵심은 "간단하고 명확한 매뉴얼"',
      '핵심 가치: 복잡한 시스템보다 누구나 따라할 수 있는 체크리스트가 중요',
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
      '본부 적용 방안: 가맹점이 저비용으로 자체 마케팅할 수 있는 템플릿 제공',
      '핵심 가치: 현장에서 직접 검증한 실전 마케팅 노하우 보유',
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
      '본부 적용 방안: 가맹점 직원 관점에서 본부 매뉴얼의 실효성 검증 경험',
      '핵심 가치: "현장에서 실제로 따라할 수 있는 매뉴얼"의 중요성 체득',
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
      '본부 적용 방안: 신규 가맹점 인테리어 컨설팅으로 효율적인 공간 구성 지원',
      '핵심 가치: 현장 경험 기반의 실용적 공간 설계 역량',
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
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Franchise Insights</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">8년 경험에서 도출한 가맹점 성공 법칙</h3>
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

        {/* Summary Stats - Experience Based */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">8년+</div>
            <div className="text-sm text-gray-600 mt-1">F&B 현장 경험</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">3곳</div>
            <div className="text-sm text-gray-600 mt-1">신규 매장 구축</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">5곳</div>
            <div className="text-sm text-gray-600 mt-1">다양한 업종 경험</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">창업~운영</div>
            <div className="text-sm text-gray-600 mt-1">전 과정 경험</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
