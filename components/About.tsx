import React from 'react';
import { motion } from 'framer-motion';
import { User, Coffee, Map, BarChart, Users, FileText } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const highlights = [
  { icon: <BarChart className="w-6 h-6" />, title: "데이터 기반 매출 개선", desc: "매출 데이터 분석으로 부진 원인 파악 및 개선" },
  { icon: <Users className="w-6 h-6" />, title: "인력 배치 최적화", desc: "시간대별 수요에 맞춘 효율적 인력 운영" },
  { icon: <FileText className="w-6 h-6" />, title: "교육 체계화", desc: "체계적 매뉴얼로 신입 교육 기간 단축" },
  { icon: <Coffee className="w-6 h-6" />, title: "품질 표준화", desc: "매뉴얼로 지점 간 맛 편차 제거" },
  { icon: <Map className="w-6 h-6" />, title: "신규 매장 구축", desc: "상권 분석부터 오픈까지 전 과정 관리" },
  { icon: <User className="w-6 h-6" />, title: "업무 자동화", desc: "반복 업무 자동화로 업무 효율 증대" },
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
                프랜차이즈 본부에게 전하는 메시지
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "가맹점이 성공해야 본부도 성공합니다.<br />
                저는 <strong>현장에서 검증된 솔루션</strong>으로<br />
                가맹점 운영 비용을 줄이고 성공률을 높입니다."
              </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                <strong className="text-gray-900">8년 현장 경험</strong>을 바탕으로 프랜차이즈 본부가 직면한 문제를 이해합니다.
              </p>
              <p>
                <strong className="text-gray-900">데이터 분석</strong>으로 매출 증대 방법을 찾고, <strong className="text-gray-900">체계화</strong>로 인건비를 절감하며,
                <strong className="text-gray-900"> AI 자동화</strong>로 업무 효율을 높입니다.
              </p>
              <p>
                단순히 카페를 운영하는 것이 아닌, <strong className="text-gray-900">시스템을 만들고 매뉴얼을 구축</strong>하여
                가맹점이 혼자서도 성공할 수 있도록 돕습니다.
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
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-105 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;