import React from 'react';
import { motion } from 'framer-motion';
import { User, Coffee, Map, BarChart, Users, FileText } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const highlights = [
  { icon: <Users className="w-6 h-6" />, title: "가맹점 관리 경험", desc: "블루샥 가맹점 담당, 본사 미대응 업무 직접 지원" },
  { icon: <FileText className="w-6 h-6" />, title: "교육 자료 제작", desc: "11페이지 커피 이론 교육자료 직접 제작, 2년간 실사용" },
  { icon: <Map className="w-6 h-6" />, title: "신규 매장 오픈", desc: "자활센터 3곳 + 해운회사 1곳, 총 4곳 오픈 경험" },
  { icon: <BarChart className="w-6 h-6" />, title: "업무 자동화", desc: "n8n 리포트 자동화, 문서정리 프로그램 직접 개발" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white rounded-t-[3rem] -mt-10 relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-6 max-w-6xl">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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

          {/* Right: About Text + Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">
                가맹점 교육 담당자로서의 강점
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "<strong>교육받는 입장과 교육하는 입장</strong>을 모두 경험했습니다.<br />
                그래서 현장에서 <strong>실제로 쓸 수 있는 교육 자료</strong>를 만들 수 있습니다.<br />
                가맹점 관리를 하며 <strong>본사가 못해주는 부분을 직접 지원</strong>한 경험도 있습니다."
              </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                <strong className="text-gray-900">F&B 8년 현장 경험</strong>을 바탕으로 실전형 교육 자료를 제작합니다.
              </p>
              <p>
                개인카페부터 대형 프랜차이즈까지, <strong className="text-gray-900">직원·매니저·팀장</strong>을 모두 경험하며
                <strong className="text-gray-900"> 교육받는 입장과 교육하는 입장</strong>을 모두 이해합니다.
              </p>
              <p>
                <strong className="text-gray-900">바리스타 2급</strong> 자격증을 보유하고,
                <strong className="text-gray-900"> 운전면허 1종</strong>으로 전국 가맹점 출장 교육이 가능합니다.
              </p>
            </div>

            {/* 일하는 방식 */}
            <div className="p-6 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-2xl mb-8">
              <h4 className="text-lg font-bold mb-4 text-gray-900">일하는 방식</h4>
              <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <p>
                  <strong className="text-gray-900">매뉴얼은 현장에서 보면서 따라할 수 있어야 합니다.</strong><br />
                  집에서 공부해야 할 내용이 아니라, 들고다니면서 바로 볼 수 있는 것이 진짜 매뉴얼이라고 생각합니다.
                </p>
                <p>
                  <strong className="text-gray-900">가까이 있는 사람의 불편함을 해결해주면 그게 나한테도 이득입니다.</strong><br />
                  분위기가 좋아지고, 결과물이 생기고, 새로운 시도를 해볼 수 있습니다.
                </p>
                <p>
                  <strong className="text-gray-900">문제를 알면서 안 하면 오히려 내가 불편합니다.</strong><br />
                  해결할 수 있는 문제가 보이면 그냥 넘어가기가 어렵습니다.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-l-4 border-emerald-500 bg-emerald-50/50 rounded-r-2xl">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Contact</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="font-medium">010-4838-5400</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span className="font-medium">ryugw10@naver.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t-2 border-gray-200 pt-8"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-6">주요 역량</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-emerald-600 mt-1 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;