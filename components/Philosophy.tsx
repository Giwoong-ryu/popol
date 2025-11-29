import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { PhilosophyItem } from '../types';

const cases: PhilosophyItem[] = [
  {
    title: "고객 클레임 해결",
    problem: "같은 메뉴인데 맛이 계속 다르다는 불만이 반복되면서 단골 고객들이 하나둘씩 발길을 끊기 시작했어요",
    solution: "설문조사로 문제를 파악하고 직원들 재교육했습니다. 추출 매뉴얼 만들어서 누가 만들어도 같은 맛 나오게 했고, 불만 제기하신 분들께 신메뉴 시음 이벤트 초대했습니다",
    result: "그렇게 돌아온 단골 손님들이 평점도 올려주셨고, 고객 만족도 4.5점 달성했습니다"
  },
  {
    title: "매출 급감 대응",
    problem: "어느 날 갑자기 배민 주문이 뚝 끊겼어요. 알고보니 배민 노출 알고리즘이 바뀌었더라고요",
    solution: "2주간 데이터 분석해서 어떻게 바뀌었는지 파악했습니다. 깃발(울트라콜) 시간대 바꾸고, 영업시간도 조정했어요",
    result: "한 달 만에 전월 대비 150% 매출 회복하고 배달 랭킹에도 다시 진입했습니다"
  },
  {
    title: "운영 비효율 개선",
    problem: "직원들이 말로만 업무 전달하다 보니 빠뜨리는 일이 많았어요. 특히 신규 직원은 2주 정도 지나야 제대로 일을 익혔습니다",
    solution: "체크리스트 만들어서 벽에 붙이고, 카톡으로 자동 알림도 보내게 했습니다. 매뉴얼 문서도 만들어서 언제든 볼 수 있게 했어요",
    result: "업무 누락이 완전히 사라졌고, 신입이 적응하는 기간도 5일로 줄었습니다"
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