import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Zap, GraduationCap } from 'lucide-react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  metric: string;
  description: string;
  image: string;
  details: string[];
}

const values: ValueItem[] = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "매출 증대",
    metric: "150%",
    description: "데이터 분석으로 매출 회복 및 성장 달성",
    image: "/app_make/m_1.png",
    details: [
      "네이버 플레이스 SEO 최적화로 검색 유입 200% 증가",
      "일 단위 매출 데이터 분석으로 최적 시간대 파악",
      "배달앱 알고리즘 대응으로 6개월 만에 매출 회복"
    ]
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "비용 절감",
    metric: "30%",
    description: "체계화된 운영으로 인건비 효율 개선",
    image: "/app_make/m_2.png",
    details: [
      "시간대별 필요 인원 최적화로 인건비 15% 절감",
      "재고 관리 시스템 구축으로 폐기율 5% 이하 유지",
      "상권 분석 기반 입지 선정으로 실패 리스크 최소화"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "업무 효율",
    metric: "50%",
    description: "AI 자동화로 반복 업무 시간 대폭 단축",
    image: "/app_make/w_1.png",
    details: [
      "n8n 워크플로우로 반복 업무 80% 자동화",
      "ChatGPT 활용 리뷰 분석 및 대응으로 30분→5분 단축",
      "뉴스레터 자동 발송으로 마케팅 업무 50% 절감"
    ]
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "교육 체계",
    metric: "70%",
    description: "체계적 매뉴얼로 신입 교육 기간 단축",
    image: "/app_make/edu_cover.jpg",
    details: [
      "에스프레소 추출 매뉴얼로 맛 편차 제거",
      "신입 교육 시간 2주→5일로 70% 단축",
      "체크리스트 표준화로 품질 균일성 확보"
    ]
  }
];

const FranchiseValue: React.FC = () => {
  return (
    <section id="franchise-value" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Franchise Value
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            프랜차이즈 본부가 얻는 4가지 가치
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            8년 현장 경험을 바탕으로 프랜차이즈 본부의 운영 비용을 줄이고,<br className="hidden md:block" />
            가맹점 성공률을 높이는 실전 노하우를 제공합니다
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-emerald-600">
                      {value.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white">{value.title}</h4>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-emerald-600">{value.metric}</div>
                  <p className="text-gray-700 font-medium flex-1">{value.description}</p>
                </div>

                <ul className="space-y-2">
                  {value.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 text-emerald-500 mt-1 shrink-0">✓</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            가맹점 성공률을 높이는 파트너가 필요하신가요?
          </h3>
          <p className="text-emerald-50 mb-6 text-lg">
            현장에서 검증된 솔루션으로 프랜차이즈 본부의 성장을 함께 만들어갑니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">📊 데이터 기반 의사결정</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">⚡ 즉시 적용 가능한 솔루션</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">🎯 검증된 현장 경험</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseValue;
