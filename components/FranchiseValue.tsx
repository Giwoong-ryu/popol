import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Zap, GraduationCap } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

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
    icon: <GraduationCap className="w-8 h-8" />,
    title: "교육 자료 제작",
    metric: "📚",
    description: "현장 경험을 체계적인 교육 콘텐츠로 문서화",
    image: getAssetPath("app_make/edu_cover.jpg"),
    details: [
      "커피 이론 교육자료 47페이지 직접 제작",
      "신입 교육 기간 1달 → 2주로 단축 실적",
      "에스프레소 추출, 스티밍 등 실무 매뉴얼 완비"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "콘텐츠 제작",
    metric: "📸",
    description: "SNS 콘텐츠 1,300건 제작 경험",
    image: getAssetPath("app_make/product_1.jpg"),
    details: [
      "촬영부터 편집까지 직접 수행한 실전 경험",
      "저비용 촬영 세팅으로 마케팅 비용 절감",
      "가맹점용 SNS 템플릿 제작 가능"
    ]
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "신규 오픈 지원",
    metric: "🏪",
    description: "상권 분석부터 오픈까지 전 과정 경험",
    image: getAssetPath("app_make/m_2.png"),
    details: [
      "개인 카페 + 자활센터 3곳 오픈 준비 총괄",
      "인테리어 배경으로 공간 설계 및 견적 협의 가능",
      "상권 분석 20곳 이상 벤치마킹 실무 경험"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "업무 효율화",
    metric: "⚡",
    description: "체크리스트와 자동화로 업무 표준화",
    image: getAssetPath("app_make/w_1.png"),
    details: [
      "오픈/마감/품질 체크리스트 제작으로 누락 제로",
      "n8n, ChatGPT 활용 반복 업무 자동화",
      "가맹점 대상 효율화 가이드 제공 가능"
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
            Core Competencies
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            가맹점 교육 담당으로서의 4가지 강점
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            F&B 8년 현장 경험을 바탕으로<br className="hidden md:block" />
            가맹점주와 직원이 실제로 사용할 수 있는 교육 콘텐츠를 제작합니다
          </p>
        </motion.div>

        {/* Value Items */}
        <div className="space-y-12 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-l-4 border-emerald-500 pl-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-emerald-600">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900">{value.title}</h4>
              </div>
              <p className="text-gray-700 mb-4">{value.description}</p>
              <ul className="space-y-2">
                {value.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="mr-2 text-emerald-500 mt-1 shrink-0">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
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
            가맹점 교육을 체계화하고 싶으신가요?
          </h3>
          <p className="text-emerald-50 mb-6 text-lg">
            8년 현장 경험과 실제 제작한 교육 자료로 가맹점 성공률을 높입니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">📚 47페이지 교육자료</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">📸 1,300건 콘텐츠</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">🎯 검증된 실무 경험</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseValue;
