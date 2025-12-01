import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, Database, MessageCircle, FileSpreadsheet, Cloud } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const skills = [
  { icon: <Workflow className="w-5 h-5" />, title: "n8n", color: "bg-emerald-500" },
  { icon: <Bot className="w-5 h-5" />, title: "Gemini AI", color: "bg-purple-500" },
  { icon: <FileSpreadsheet className="w-5 h-5" />, title: "Google Sheets", color: "bg-green-500" },
  { icon: <MessageCircle className="w-5 h-5" />, title: "Telegram Bot", color: "bg-blue-500" },
  { icon: <Cloud className="w-5 h-5" />, title: "Weather API", color: "bg-orange-500" },
];

const workflowSteps = [
  { step: "1", title: "데이터 수집", desc: "Google Sheets에서 매장별 일일 데이터 자동 수집" },
  { step: "2", title: "AI 분석", desc: "Gemini AI가 매출, 폐기율, 생산성 지표 분석" },
  { step: "3", title: "리포트 생성", desc: "이상 징후 감지 및 개선 제안 자동 생성" },
  { step: "4", title: "알림 발송", desc: "Telegram으로 실시간 리포트 자동 전송" },
];

const Automation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'result' | 'data'>('workflow');

  return (
    <section id="automation" className="py-24 bg-[#111827] text-white rounded-[3rem] mx-4 md:mx-8 overflow-hidden relative">
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
            <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">AI AUTOMATION</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              가맹점 일일 리포트<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">자동화 시스템</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              매장 데이터를 AI가 분석하여 일일 리포트를 자동 생성하고<br className="hidden lg:block"/>
              이상 징후 발생 시 즉시 알림을 발송합니다.
            </p>
          </motion.div>
        </div>

        {/* Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill, index) => (
            <div key={index} className={`${skill.color} text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg text-sm`}>
              {skill.icon}
              <span className="font-bold">{skill.title}</span>
            </div>
          ))}
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {workflowSteps.map((item, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 text-center">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                {item.step}
              </div>
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-6"
        >
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === 'workflow'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            워크플로우
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === 'result'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            리포트 결과
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === 'data'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            원본 데이터
          </button>
        </motion.div>

        {/* Screenshot Display */}
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

          {activeTab === 'workflow' && (
            <>
              <img
                src={getAssetPath("app_make/auto_workflow.png")}
                alt="n8n Workflow"
                className="w-full h-auto rounded-xl mt-8"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">n8n 자동화 워크플로우</h3>
                <p className="text-gray-400">Schedule → Google Sheets → Data Merge → Gemini AI → Telegram</p>
              </div>
            </>
          )}

          {activeTab === 'result' && (
            <>
              <img
                src={getAssetPath("app_make/auto_telegram.png")}
                alt="Telegram Report"
                className="w-full h-auto rounded-xl mt-8 max-w-md mx-auto"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">텔레그램 리포트 결과</h3>
                <p className="text-gray-400">매일 오전 9시, AI가 분석한 일일 리포트가 자동 전송됩니다</p>
              </div>
            </>
          )}

          {activeTab === 'data' && (
            <>
              <img
                src={getAssetPath("app_make/auto_sheets.png")}
                alt="Google Sheets Data"
                className="w-full h-auto rounded-xl mt-8"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">매장 데이터 시트</h3>
                <p className="text-gray-400">실제 매장 운영 데이터를 기반으로 한 자동화 시스템</p>
              </div>
            </>
          )}
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-gray-800/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">09:00</div>
            <div className="text-gray-400 text-sm">매일 자동 리포트 발송</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">5분</div>
            <div className="text-gray-400 text-sm">일일 보고서 작성 시간 → 0분</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">실시간</div>
            <div className="text-gray-400 text-sm">이상 징후 즉시 감지</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">AI 분석</div>
            <div className="text-gray-400 text-sm">데이터 기반 개선 제안</div>
          </div>
        </motion.div>

        {/* Use Case Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-2xl p-8 border border-emerald-500/20"
        >
          <h3 className="text-xl font-bold mb-4 text-emerald-400">가맹점 적용 시나리오</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">▸</span>
              <span><strong className="text-white">본사:</strong> 전체 가맹점 일일 현황을 한눈에 파악, 이상 징후 매장 즉시 확인</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">▸</span>
              <span><strong className="text-white">슈퍼바이저:</strong> 담당 매장 리포트 자동 수신, 방문 우선순위 자동 결정</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">▸</span>
              <span><strong className="text-white">점주:</strong> AI 분석 기반 운영 개선 제안 수신, 날씨 연동 재고 관리 알림</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;