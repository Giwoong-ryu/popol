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
                <p>
                  직원으로 시작해서 매니저, 팀장을 거쳤고, 개인카페도 직접 운영해봤습니다.
                </p>
                <p>
                  교육받는 입장과 교육하는 입장을 둘 다 거쳤고, 현장의 고충과 본사의 입장 양쪽을 아는 만큼 상생의 방향으로 나아가려고 노력합니다.
                </p>
              </div>
            </div>

            {/* 함께 일하는 방식 */}
            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-500">
              <h4 className="text-lg font-bold mb-4 text-gray-900">함께 일하는 방식</h4>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong className="text-gray-900">가까이 있는 사람의 불편함을 해결하면, 그게 결국 나에게도 돌아옵니다.</strong>
                </p>
                <p>
                  눈앞에 보이는 문제를 그냥 넘어가지 않고 해결해주면,<br />
                  상대방이 편해지는 것 이상으로 저한테도 돌아오는 게 있었습니다.<br />
                  능력적으로, 관계적으로, 심적으로도요.
                </p>
                <p>
                  그런 경험이 쌓이다 보니 시키지 않아도 제가 할 수 있겠다 싶으면 움직이게 됐습니다.<br />
                  그래서 매뉴얼을 만들게 됐고, 문서정리 프로그램도 만들게 됐습니다.
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
