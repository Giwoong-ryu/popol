import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Target, BarChart } from 'lucide-react';

const strategies = [
  {
    image: "/app_make/m_1.png",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "매출 분석 및 전략 수립",
    description: "데이터 기반 매출 분석으로 전월 대비 150% 매출 회복 달성",
    tags: ["매출 데이터", "배달 최적화", "운영 전략"]
  },
  {
    image: "/app_make/m_2.png",
    icon: <MapPin className="w-6 h-6" />,
    title: "상권 분석 및 입지 선정",
    description: "경쟁 매장 20곳 분석을 통한 신규 매장 입지 전략 수립",
    tags: ["상권 분석", "경쟁사 조사", "타깃 설정"]
  },
  {
    image: "/app_make/m-3.png",
    icon: <Target className="w-6 h-6" />,
    title: "네이버 플레이스 SEO 전략",
    description: "키워드 최적화로 검색 유입 200% 증가 및 리뷰 관리 시스템 구축",
    tags: ["SEO 최적화", "리뷰 관리", "온라인 마케팅"]
  },
  {
    image: "/app_make/m_4.png",
    icon: <BarChart className="w-6 h-6" />,
    title: "운영 데이터 관리",
    description: "매출/재고/스케줄 통합 관리로 업무 효율 30% 향상",
    tags: ["데이터 관리", "재고 최적화", "엑셀 자동화"]
  },
  {
    image: "/app_make/m_5.png",
    icon: <BarChart className="w-6 h-6" />,
    title: "신규 매장 입점 기획서",
    description: "상권 분석부터 예산 계획까지 완성도 높은 입점 제안서 작성",
    tags: ["사업 계획", "예산 수립", "프레젠테이션"]
  },
];

const MarketStrategy: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Market & Strategy</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            시장 분석과 전략 기획
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            데이터 기반의 의사결정과 체계적인 문서화로<br />
            매장의 지속 가능한 성장을 설계합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Document Preview Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                  src={strategy.image}
                  alt={strategy.title}
                  className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white p-3 rounded-xl shadow-lg">
                  {strategy.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {strategy.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {strategy.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {strategy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 text-white"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-12">
            데이터로 증명된 성과
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">150%</div>
              <div className="text-emerald-100 text-lg">매출 회복률</div>
              <div className="text-sm text-emerald-100 mt-2">배달앱 노출 전략 개선</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200%</div>
              <div className="text-emerald-100 text-lg">검색 유입 증가</div>
              <div className="text-sm text-emerald-100 mt-2">네이버 플레이스 SEO</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-emerald-100 text-lg">경쟁사 분석</div>
              <div className="text-sm text-emerald-100 mt-2">신규 매장 입점 전략</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketStrategy;
