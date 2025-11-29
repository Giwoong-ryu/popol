import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { PhilosophyItem } from '../types';

const cases: PhilosophyItem[] = [
  {
    title: "고객 클레임 해결",
    problem: "같은 메뉴인데 맛이 계속 다르다는 불만이 반복되면서 단골들이 하나둘 안 오기 시작했어요",
    solution: "설문으로 뭐가 문제인지 물어보고, 직원들한테 다시 교육했어요. 추출 매뉴얼 만들어서 누가 뽑아도 똑같은 맛 나오게 했고요. 불만 있었던 분들은 신메뉴 시음회 초대해서 다시 모셨습니다",
    result: "그렇게 돌아온 손님들이 평점도 올려주시고, 결국 만족도 4.5점 찍었어요"
  },
  {
    title: "매출 급감 대응",
    problem: "어느 날부터 배민 주문이 확 줄었어요. 알고보니 노출 알고리즘이 바뀌어서 우리 가게가 뒤로 밀려난 거였습니다",
    solution: "2주 동안 데이터 뜯어보면서 어떻게 바뀌었는지 파악했어요. 울트라콜 시간 바꾸고, 영업시간도 조정했습니다",
    result: "한 달 만에 매출 150% 회복했고, 배달 랭킹도 다시 올라갔어요"
  },
  {
    title: "운영 비효율 개선",
    problem: "직원들끼리 말로만 업무 전달하다보니 자꾸 빠뜨리고, 신입은 2주는 지나야 제대로 일 배웠어요",
    solution: "체크리스트 만들어서 벽에 붙이고, 카톡 자동 알림도 보내게 했습니다. 매뉴얼도 만들어서 언제든 볼 수 있게요",
    result: "업무 누락 완전히 사라졌고, 신입 적응 기간 5일로 줄었어요"
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