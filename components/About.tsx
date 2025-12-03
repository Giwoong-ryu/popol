import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/getAssetPath';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white rounded-t-[3rem] -mt-10 relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            유기웅 <span className="text-gray-400 font-normal">Ryu Gi-Woong</span>
          </h3>
        </motion.div>

        {/* Main Content: Photo + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
              <img
                src={getAssetPath("app_make/ai교육.png")}
                alt="Ryu Gi-Woong Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right: About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* 소개 */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-gray-900 mb-5 border-l-4 border-emerald-500 pl-4">소개</h4>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg">
                  <strong className="text-gray-900">교육받는 입장과 교육하는 입장을 모두 경험했습니다.</strong>
                </p>
                <p>
                  개인카페부터 대형 프랜차이즈까지, 직원·매니저·팀장으로 일하면서 현장에서 진짜 필요한 게 뭔지 알게 됐습니다. 그래서 집에서 공부하는 교육자료가 아니라, 현장에서 보면서 바로 따라할 수 있는 자료를 만듭니다.
                </p>
                <p>
                  가맹점 관리를 하면서 본사가 미처 못 챙기는 부분을 직접 해결한 경험도 있습니다. 이벤트 디자인이 늦어지면 직접 만들어서 전달하고, 배달앱 리뷰 관리법을 공유하기도 했습니다.
                </p>
              </div>
            </div>

            {/* 일하는 방식 */}
            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-500">
              <h4 className="text-lg font-bold mb-4 text-gray-900">일하는 방식</h4>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900">가까이 있는 사람의 불편함을 해결하면, 그게 결국 나한테도 이득입니다.</strong>
                </p>
                <p>
                  분위기가 좋아지고, 결과물이 생기고, 새로운 시도를 해볼 수 있습니다. 문제가 보이는데 안 하면 오히려 제가 불편합니다. 해운회사에서 문서정리 프로그램을 만든 것도, 자활센터에서 업무 매뉴얼을 만든 것도 그래서입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact + 자격 (하단 가로 한줄) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-xl">📧</span>
              <span className="font-medium">ryugw10@naver.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span className="font-medium">010-4838-5400</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">☕</span>
              <span className="font-medium">바리스타 2급</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🚗</span>
              <span className="font-medium">운전면허 1종</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
