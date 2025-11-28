import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, Database, FileJson } from 'lucide-react';

const skills = [
  { icon: <Workflow className="w-5 h-5" />, title: "n8n Automation", color: "bg-emerald-500" },
  { icon: <Bot className="w-5 h-5" />, title: "ChatGPT", color: "bg-purple-500" },
  { icon: <Database className="w-5 h-5" />, title: "Notion API", color: "bg-blue-500" },
  { icon: <FileJson className="w-5 h-5" />, title: "Excel VBA", color: "bg-orange-500" },
];

const Automation: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827] text-white rounded-[3rem] mx-4 md:mx-8 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px]"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">TECH STACK</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    단순 반복 업무는 AI에게,<br/>
                    사람은 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">가치 창출</span>에 집중합니다.
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    n8n, ChatGPT, Notion API 등을 활용하여 매장 운영의 비효율을 제거하고<br className="hidden lg:block"/>
                    데이터 기반의 의사결정 시스템을 구축합니다.
                </p>
            </motion.div>
        </div>

        {/* Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skills.map((skill, index) => (
            <div key={index} className={`${skill.color} text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg`}>
              {skill.icon}
              <span className="font-bold">{skill.title}</span>
            </div>
          ))}
        </motion.div>

        {/* Workflow Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-6"
        >
          <div className="absolute top-6 left-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <img
            src="app_make/w_1.png"
            alt="n8n Workflow"
            className="w-full h-auto rounded-xl mt-8"
          />

          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold mb-2">n8n 자동화 워크플로우 실제 화면</h3>
            <p className="text-gray-400">뉴스 크롤링 → 데이터 정제 → 카카오톡 자동 발송 시스템</p>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50%</div>
            <div className="text-gray-400">행정 업무 시간 단축</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0건</div>
            <div className="text-gray-400">업무 누락 달성</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-400">자동 모니터링 시스템</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;