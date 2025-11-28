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
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            류기웅 <span className="text-gray-400 font-normal">Ryu Gi-Woong</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            "혼자만 잘하는 플레이어가 아닌, 시스템을 만드는 리더입니다."<br />
            현장의 소리를 데이터로 분석하고, AI 기술을 접목하여 비효율을 개선합니다.
            단순한 매장 관리를 넘어 브랜드의 성장을 기획합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-gray-100 rounded-3xl bg-gray-50/50">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="flex flex-col md:flex-row gap-6 text-gray-600">
                <span>📞 010-4838-5400</span>
                <span>📧 ryugw10@naver.com</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;