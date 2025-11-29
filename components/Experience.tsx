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
    company: '부산동래지역자활센터',
    position: '카페사업단 팀장',
    period: '2023.02 ~ 2025.01',
    location: '부산',
    responsibilities: [
      '신규 매장 운영 설계 및 입점 구축',
      '매장 총괄 운영, 매출 보고 및 결산',
      '직원 교육·스케줄 관리',
      '품질 기준 관리 (에스프레소 세팅, 레시피 조정)',
      '고객 응대 및 클레임 해결',
      '신메뉴 개발 및 판매 전략 수립',
    ],
    achievements: [
      '배달앱 노출 최적화로 매출 150% 회복',
      '직원 교육 시스템 구축으로 적응 기간 2주→5일 단축',
    ],
  },
  {
    company: '메가커피',
    position: '매니저',
    period: '2022.08 ~ 2023.02',
    responsibilities: [
      '음료 제조 및 고객 응대',
      '발주·재고 관리',
      '신입 교육 및 시간대별 운영 관리',
      '위생 기준 유지',
    ],
  },
  {
    company: '씨리얼 (개인 카페)',
    position: '운영 총괄',
    period: '2018.11 ~ 2022.05',
    location: '부산',
    responsibilities: [
      '신규 매장 오픈 준비: 메뉴 구성, 내부 동선 설계, 브랜드 방향성 설정',
      '매장 운영 전반 (매출·고객·직원·운영)',
      'SNS 마케팅 (사진·영상 1300건 제작)',
      '재고·위생·프로모션 관리',
      '시즌 메뉴 기획 및 판매 전략 수립',
    ],
    achievements: [
      'SNS 콘텐츠 1300+ 건 제작으로 브랜드 인지도 구축',
      '시즌 메뉴 50+ 개 개발로 고객 재방문율 30% 향상',
    ],
  },
  {
    company: '대○인테리어',
    position: '과장',
    period: '2014.02 ~ 2017.01',
    responsibilities: [
      '상업공간 시공 관리',
      '자재 선택 및 공간 구성',
      '협력업체 조율 및 현장 품질·안전 점검',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">경력 & 성과</h3>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l-4 border-emerald-500"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow" />

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
                      <h5 className="font-bold text-emerald-700 mb-2">주요 성과</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="mr-3 text-emerald-600 font-bold">✓</span>
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">8년+</div>
            <div className="text-sm text-gray-600 mt-1">카페 운영 경력</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">3곳</div>
            <div className="text-sm text-gray-600 mt-1">신규 매장 구축</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">1300+</div>
            <div className="text-sm text-gray-600 mt-1">SNS 콘텐츠 제작</div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600">150%</div>
            <div className="text-sm text-gray-600 mt-1">매출 회복 달성</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
