import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const Automation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'result' | 'data'>('result');

  return (
    <section id="automation" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Automation</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">업무 자동화 역량</h3>
          <p className="text-gray-600 max-w-2xl">
            반복 업무를 자동화하여 본사·슈퍼바이저·점주 모두의 시간을 절약합니다.<br />
            실제 구축한 가맹점 일일 리포트 자동화 시스템입니다.
          </p>
        </motion.div>

        {/* 구축 시스템 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">n8n 워크플로우</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Google Sheets 연동</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Gemini AI 분석</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">텔레그램 발송</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">기상청 API</span>
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
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeTab === 'workflow'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            워크플로우
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeTab === 'result'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            리포트 결과
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeTab === 'data'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            원본 데이터
          </button>
        </motion.div>

        {/* Screenshot Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-6 shadow-sm"
        >
          {activeTab === 'workflow' && (
            <>
              <img
                src={getAssetPath("app_make/1-1.png")}
                alt="n8n Workflow"
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">n8n 자동화 워크플로우 실제 화면</p>
              </div>
            </>
          )}

          {activeTab === 'result' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  src={getAssetPath("app_make/1-2.png")}
                  alt="Telegram Report 1"
                  className="w-full h-auto rounded-xl"
                />
                <img
                  src={getAssetPath("app_make/1-3.png")}
                  alt="Telegram Report 2"
                  className="w-full h-auto rounded-xl"
                />
                <img
                  src={getAssetPath("app_make/1-4.png")}
                  alt="Telegram Report 3"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">텔레그램으로 자동 발송되는 일일 리포트</p>
              </div>
            </>
          )}

          {activeTab === 'data' && (
            <>
              <img
                src={getAssetPath("app_make/1-5.png")}
                alt="Google Sheets Data"
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">실제 매장 데이터 기반 자동화 시스템</p>
              </div>
            </>
          )}
        </motion.div>

        {/* Simple Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-500"
        >
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">
              <strong className="text-gray-900">활용 가능:</strong> 매장 데이터 수집 → AI 분석 → 리포트 자동 발송 시스템을 가맹점 본사에 도입하여
              슈퍼바이저 업무 부담 경감 및 이상 징후 조기 발견에 기여할 수 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;
