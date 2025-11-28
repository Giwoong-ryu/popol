import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { PhilosophyItem } from '../types';

const cases: PhilosophyItem[] = [
  {
    title: "고객 클레임 해결",
    problem: "커피 맛 관련 반복적인 민원 발생으로 브랜드 신뢰도 하락 우려",
    solution: "고객 설문조사 실시 및 원인 분석 후, 직원 재교육 및 신메뉴 적극 도입",
    result: "불만 고객 재방문 유도 성공 및 고객 만족도 4.5/5.0 달성"
  },
  {
    title: "매출 급감 대응",
    problem: "배달앱(배민) 노출 로직 변경으로 인한 주문수 급감",
    solution: "노출 로직 역분석, 깃발(울트라콜) 위치 전략 수정, 운영시간 탄력 조정",
    result: "전월 대비 매출 150% 회복 및 배달 랭킹 진입"
  },
  {
    title: "운영 비효율 개선",
    problem: "잦은 직원 실수와 구두 전달 방식의 한계",
    solution: "업무 체크리스트 시각화, 카톡 자동 알림 도입, 매뉴얼 문서화",
    result: "업무 누락 0건 달성, 신규 직원 적응 기간 2주 → 5일 단축"
  }
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Philosophy & Case Study</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            문제 해결이 성장의 핵심입니다
          </h3>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            위기는 곧 기회입니다. 데이터를 기반으로 원인을 파악하고, <br className="hidden md:block"/>
            팀과 함께 실행 가능한 솔루션을 도출하여 결과를 만들어냅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:border-emerald-200 transition-colors duration-300"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                {item.title}
              </h4>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Problem</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-amber-500 font-bold mb-2">
                    <Lightbulb className="w-5 h-5" />
                    <span>Solution</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm">
                    {item.solution}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Result</span>
                  </div>
                  <p className="text-gray-900 font-medium bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    {item.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;