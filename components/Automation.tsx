import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, Database, Zap, FileJson } from 'lucide-react';

const Automation: React.FC = () => {
  return (
    <section className="py-24 bg-[#111827] text-white rounded-[3rem] mx-4 md:mx-8 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px]"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">TECH STACK</span>
                    <span className="text-gray-400 font-medium tracking-wide">AI & AUTOMATION</span>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    단순 반복 업무는 AI에게,<br/>
                    사람은 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">가치 창출</span>에 집중합니다.
                </h2>
                <p className="text-gray-400 text-lg">
                    n8n, ChatGPT, Notion API 등을 활용하여 매장 운영의 비효율을 제거하고<br className="hidden lg:block"/>
                    데이터 기반의 의사결정 시스템을 구축합니다.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
                icon={<Workflow className="w-8 h-8 text-blue-400" />}
                title="n8n Automation"
                desc="뉴스 크롤링 → 카톡 자동 발송 시스템 제작. 반복적인 데이터 수집 업무 자동화."
            />
            <SkillCard 
                icon={<Bot className="w-8 h-8 text-purple-400" />}
                title="ChatGPT 활용"
                desc="고객 리뷰 감성 분석, 매출 데이터 요약, CS 스크립트 자동 생성."
            />
            <SkillCard 
                icon={<Database className="w-8 h-8 text-green-400" />}
                title="Notion API"
                desc="매장 매뉴얼 DB화 및 변경사항 자동 동기화. 사내 지식 관리 시스템 구축."
            />
            <SkillCard 
                icon={<FileJson className="w-8 h-8 text-orange-400" />}
                title="Office Efficiency"
                desc="보고서 자동 서식화, 엑셀 데이터 전처리 자동화로 행정 업무 시간 50% 단축."
            />
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700 hover:border-gray-500 transition-colors"
    >
        <div className="bg-gray-700/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
            {desc}
        </p>
    </motion.div>
);

export default Automation;