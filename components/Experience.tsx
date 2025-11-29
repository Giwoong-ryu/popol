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
    company: '신규 매장 구축 & 매출 회복 프로젝트',
    position: '카페사업단 팀장 | 부산동래지역자활센터',
    period: '2023.02 ~ 2025.01',
    location: '부산',
    responsibilities: [
      '🎯 프랜차이즈 인사이트: 초기 매출 부진 매장을 데이터로 회복시키는 법',
      '📊 핵심 노하우: 배달앱 알고리즘 이해 → 노출 최적화 → 6개월 만에 매출 150% 회복',
      '👥 교육 체계화: 신입 적응 기간을 2주→5일로 단축하여 운영 효율 극대화',
    ],
    achievements: [
      '본부 적용 방안: 부진 가맹점 조기 발견 시스템 구축 → 데이터 기반 개선안 제시',
      '핵심 가치: 가맹점이 스스로 매출을 회복할 수 있는 가이드라인 제공',
    ],
  },
  {
    company: '프랜차이즈 표준 운영 시스템 경험',
    position: '매니저 | 메가커피',
    period: '2022.08 ~ 2023.02',
    responsibilities: [
      '🎯 프랜차이즈 인사이트: 체계화된 운영 매뉴얼이 가맹점 성공의 핵심',
      '📋 핵심 학습: 표준화된 재고 관리, 발주 시스템, 품질 관리 프로세스 이해',
      '⚡ 효율성: 명확한 매뉴얼로 신입도 빠르게 독립 운영 가능',
    ],
    achievements: [
      '본부 적용 방안: 프랜차이즈 성공의 핵심은 "간단하고 명확한 매뉴얼"',
      '핵심 가치: 복잡한 시스템보다 누구나 따라할 수 있는 체크리스트가 중요',
    ],
  },
  {
    company: '브랜드 구축 & 콘텐츠 마케팅 전략',
    position: '운영 총괄 | 씨리얼 (개인 카페)',
    period: '2018.11 ~ 2022.05',
    location: '부산',
    responsibilities: [
      '🎯 프랜차이즈 인사이트: 저비용 고효율 마케팅으로 브랜드 인지도 구축',
      '📸 핵심 노하우: SNS 콘텐츠 1300+ 건 직접 제작 → 외주 비용 0원 → 고객 유입 증가',
      '🎨 차별화 전략: 시즌 메뉴 50+ 개 개발 → 고객 재방문율 30% 향상',
    ],
    achievements: [
      '본부 적용 방안: 가맹점이 저비용으로 자체 마케팅할 수 있는 시스템 구축',
      '핵심 가치: 고가 마케팅 대행사 없이도 브랜드를 성장시킬 수 있는 실전 노하우',
    ],
  },
  {
    company: '상업 공간 설계 & 비용 최적화',
    position: '과장 | 대○인테리어',
    period: '2014.02 ~ 2017.01',
    responsibilities: [
      '🎯 프랜차이즈 인사이트: 신규 가맹점 인테리어 비용을 줄이는 실전 노하우',
      '💰 핵심 경험: 자재 선택, 공간 구성, 협력업체 선정으로 비용 30% 절감',
      '🏗️ 검증된 프로세스: 상업 공간 시공 현장 관리 경험으로 실패 리스크 최소화',
    ],
    achievements: [
      '본부 적용 방안: 신규 가맹점 인테리어 컨설팅으로 초기 투자 비용 절감',
      '핵심 가치: 현장 경험 기반의 실용적 공간 설계로 불필요한 비용 제거',
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

        {/* Summary Stats - Franchise Value Focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">8년</div>
            <div className="text-sm text-gray-600 mt-1">프랜차이즈 현장 경험</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">30%</div>
            <div className="text-sm text-gray-600 mt-1">평균 비용 절감</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">150%</div>
            <div className="text-sm text-gray-600 mt-1">매출 회복 실적</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">3곳</div>
            <div className="text-sm text-gray-600 mt-1">신규 매장 성공 구축</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
