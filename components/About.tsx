import React from 'react';
import { motion } from 'framer-motion';
import { User, Coffee, Map, BarChart, Users, FileText } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const highlights = [
  { icon: <FileText className="w-6 h-6" />, title: "교육 자료 제작", desc: "커피 이론부터 실무까지, 47페이지 교육자료 직접 제작" },
  { icon: <Coffee className="w-6 h-6" />, title: "신입 교육 체계화", desc: "체계적 매뉴얼로 교육 기간 2주→5일 단축" },
  { icon: <Map className="w-6 h-6" />, title: "신규 오픈 지원", desc: "상권 분석, 인테리어 협의, 오픈 준비 전 과정 경험" },
  { icon: <User className="w-6 h-6" />, title: "SNS 콘텐츠 제작", desc: "1,300건 직접 제작, 가맹점용 템플릿 제공 가능" },
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
                src={getAssetPath("app_make/a.jpg")}
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
                "7년 현장 경험을 <strong>교육 자료로 만들어</strong><br />
                가맹점주와 직원이 <strong>혼자서도 성공</strong>할 수 있도록<br />
                체계적인 교육 시스템을 구축합니다."
              </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                <strong className="text-gray-900">10년 현장 경험 (F&B 7년 + 공간설계 3년)</strong>을 바탕으로 실전형 교육 자료를 제작합니다.
              </p>
              <p>
                개인카페부터 대형 프랜차이즈까지, <strong className="text-gray-900">직원·매니저·팀장</strong>을 모두 경험하며
                <strong className="text-gray-900"> 교육받는 입장과 교육하는 입장</strong>을 모두 이해합니다.
              </p>
              <p>
                <strong className="text-gray-900">바리스타 2급, 매장관리사</strong> 자격증을 보유하고,
                <strong className="text-gray-900"> 운전면허 1종</strong>으로 전국 가맹점 출장 교육이 가능합니다.
              </p>
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