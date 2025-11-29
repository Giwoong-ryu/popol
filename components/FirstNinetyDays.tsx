import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, CheckCircle, TrendingUp } from 'lucide-react';

interface Phase {
  month: string;
  title: string;
  icon: React.ReactNode;
  objectives: string[];
  deliverables: string[];
  outcome: string;
}

const phases: Phase[] = [
  {
    month: "1개월차",
    title: "현황 파악 & 긴급 문제 해결",
    icon: <Target className="w-6 h-6" />,
    objectives: [
      "전체 가맹점 운영 현황 및 문제점 파악",
      "매출 부진 가맹점 조기 발견 및 긴급 지원",
      "가맹점주와 신뢰 관계 구축"
    ],
    deliverables: [
      "📊 가맹점별 매출·비용 현황 분석 보고서",
      "🚨 긴급 지원 필요 가맹점 리스트 및 개선 계획",
      "📋 가맹점주 1:1 면담 결과 및 니즈 정리"
    ],
    outcome: "부진 가맹점 조기 발견 → 신속한 지원으로 본부 신뢰도 향상"
  },
  {
    month: "2개월차",
    title: "시스템 구축 & 교육 체계화",
    icon: <CheckCircle className="w-6 h-6" />,
    objectives: [
      "운영 매뉴얼 및 교육 자료 표준화",
      "비용 절감 시스템 도입 (재고 관리, 인력 최적화)",
      "AI 자동화 도구 시범 적용"
    ],
    deliverables: [
      "📚 가맹점용 운영 매뉴얼 (품질 관리, 인력 배치, 재고 관리)",
      "💰 비용 절감 가이드 (인건비 15% 절감 노하우)",
      "🤖 자동화 시스템 구축 (리뷰 관리, 뉴스레터)"
    ],
    outcome: "통일된 운영 기준 확립 → 가맹점 품질 균일화 및 효율 향상"
  },
  {
    month: "3개월차",
    title: "성과 검증 & 확장 계획",
    icon: <TrendingUp className="w-6 h-6" />,
    objectives: [
      "지원 가맹점의 매출·비용 개선 성과 측정",
      "성공 사례 문서화 및 전체 가맹점 공유",
      "신규 가맹점 모집 시스템 개선"
    ],
    deliverables: [
      "📈 3개월 성과 보고서 (매출 증가율, 비용 절감액)",
      "✅ 성공 사례집 (Before/After 비교)",
      "🎯 신규 가맹점 가이드북 (입지 분석, 초기 운영)"
    ],
    outcome: "검증된 성과로 가맹점 만족도 상승 → 본부 경쟁력 강화"
  }
];

const FirstNinetyDays: React.FC = () => {
  return (
    <section id="first-90-days" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
            First 90 Days Plan
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            입사 후 90일 실행 계획
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            빠른 성과 도출로 프랜차이즈 본부의 신뢰를 얻고,<br className="hidden md:block" />
            가맹점 운영 효율을 즉시 개선하는 3개월 로드맵
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-100 -translate-x-1/2" />

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              } max-w-full md:max-w-[50%]`}
            >
              {/* Month Indicator */}
              <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-emerald-500 rounded-full items-center justify-center text-white font-bold z-10 shadow-lg">
                {index + 1}
              </div>

              {/* Content Card */}
              <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                {/* Mobile Month Indicator */}
                <div className="md:hidden flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm text-emerald-600 font-semibold">{phase.month}</div>
                    <h4 className="text-xl font-bold text-gray-900">{phase.title}</h4>
                  </div>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:block mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                      {phase.icon}
                    </div>
                    <div className="text-sm text-emerald-600 font-semibold">{phase.month}</div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{phase.title}</h4>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h5 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">주요 목표</h5>
                  <ul className="space-y-2">
                    {phase.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="mr-2 text-emerald-500 mt-1 shrink-0">•</span>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="mb-6 p-4 bg-emerald-50/50 rounded-xl">
                  <h5 className="text-sm font-bold text-emerald-800 mb-3 uppercase tracking-wide">산출물</h5>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="mr-2 text-emerald-600 shrink-0">→</span>
                        <span className="leading-relaxed">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1">기대 효과</div>
                  <div className="font-semibold">{phase.outcome}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-emerald-600" />
            <h4 className="text-2xl font-bold text-gray-900">빠른 성과, 즉각적인 가치 제공</h4>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            3개월 안에 가맹점 운영 비용을 줄이고 매출을 회복시켜,<br />
            프랜차이즈 본부와 가맹점 모두에게 신뢰를 얻는 실행력
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstNinetyDays;
