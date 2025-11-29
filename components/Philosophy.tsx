import React from 'react';
import { motion } from 'framer-motion';
import { PhilosophyItem } from '../types';

const cases: PhilosophyItem[] = [
  {
    title: "고객 클레임 해결",
    problem: "같은 메뉴인데 맛이 계속 다르다는 얘기가 나오면서 단골손님들이 하나둘 안 오더라구요",
    solution: "손님들한테 직접 뭐가 문제인지 여쭤보고, 추출 매뉴얼 만들었어요. 누가 뽑든 똑같은 맛 나오게. 불만 있으셨던 분들 신메뉴 시음회 초대해서 다시 찾아주시게 했습니다",
    result: "돌아오신 분들이 평점도 올려주시고, 만족도 4.5점까지 올렸어요"
  },
  {
    title: "매출 급감 대응",
    problem: "어느 날 갑자기 배민 주문이 뚝 끊겼어요. 알고보니 배민 알고리즘 바뀌면서 우리 가게가 뒤로 밀려난 거더라구요",
    solution: "2주간 데이터 계속 보면서 패턴 찾았어요. 울트라콜 시간이랑 영업시간 조정했구요",
    result: "한 달 만에 매출 150% 복구했고, 배달 랭킹도 다시 올라왔어요"
  },
  {
    title: "운영 비효율 개선",
    problem: "직원들끼리 말로만 전달하다보니 빠뜨리는 일이 많고, 신입은 2주 정도 지나야 일 배웠어요",
    solution: "체크리스트 벽에 붙이고, 카톡 자동 알림도 설정했어요. 매뉴얼도 만들어서 누구든 볼 수 있게",
    result: "업무 누락 없어지고, 신입 적응 기간 5일로 줄었어요"
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
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-colors duration-300"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {item.title}
              </h4>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">문제:</strong> {item.problem}
                </p>

                <p>
                  <strong className="text-gray-900">해결:</strong> {item.solution}
                </p>

                <p className="text-emerald-700 font-medium">
                  <strong className="text-emerald-900">결과:</strong> {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;