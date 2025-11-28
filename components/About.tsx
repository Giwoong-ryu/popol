import React from 'react';
import { motion } from 'framer-motion';
import { User, Coffee, Map, BarChart, Users, FileText } from 'lucide-react';

const highlights = [
  { icon: <Coffee className="w-6 h-6" />, title: "카페 운영 8년", desc: "메가커피 매니저, 개인 카페 총괄" },
  { icon: <Map className="w-6 h-6" />, title: "신규 매장 구축", desc: "상권 분석부터 인테리어 공정 관리까지" },
  { icon: <BarChart className="w-6 h-6" />, title: "매출 성장", desc: "전략적 운영으로 매출 회복 및 성장" },
  { icon: <Users className="w-6 h-6" />, title: "교육 및 관리", desc: "직원 교육, 스케줄링, CS 관리" },
  { icon: <FileText className="w-6 h-6" />, title: "매뉴얼 제작", desc: "에스프레소 추출 및 운영 매뉴얼화" },
  { icon: <User className="w-6 h-6" />, title: "브랜딩", desc: "Green Wave 등 콘셉트 기획 및 로고 디자인" },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white rounded-t-[3rem] -mt-10 relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
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
            류기웅 <span className="text-gray-400 font-normal">Ryu Gi-Woong</span>
          </h3>
        </motion.div>

        {/* Main Content: Photo + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="app_make/a.jpg"
                alt="Ryu Gi-Woong Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right: About Text + Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              "혼자만 잘하는 플레이어가 아닌,<br />
              시스템을 만드는 리더입니다."
            </p>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                현장의 소리를 데이터로 분석하고, AI 기술을 접목하여 비효율을 개선합니다.
              </p>
              <p>
                단순한 매장 관리를 넘어 브랜드의 성장을 기획합니다.
              </p>
              <p>
                8년간의 카페 운영 경험을 바탕으로 신규 매장 구축부터 매출 회복,
                직원 교육까지 매장 운영의 전 과정을 책임집니다.
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

        {/* Bottom: Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;