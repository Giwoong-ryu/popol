import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Monitor, ArrowDown, Zap } from 'lucide-react';
import { getAssetPath } from '../utils/getAssetPath';

const Automation: React.FC = () => {
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
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Work Efficiency</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">업무 효율화</h3>
          <p className="text-gray-600 max-w-2xl">
            현장의 불편함을 발견하면 직접 해결합니다.<br />
            매뉴얼 제작에서 시작해, 프로그램 개발, 자동화 시스템 구축까지 직접 만든 결과물입니다.
          </p>
        </motion.div>

        {/* Step 1: 매뉴얼 제작 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-6 mb-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              매뉴얼 제작
            </h4>
          </div>
          <p className="text-gray-600 text-sm mb-4 ml-11">
            화면 캡처 + 빨간 박스 + 단계별 설명으로, 누구든지 보면서 따라할 수 있는 매뉴얼을 만들었습니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-11">
            <img src={getAssetPath("app_make/매뉴얼/1.png")} alt="매뉴얼 1" className="rounded-lg shadow-sm" />
            <img src={getAssetPath("app_make/매뉴얼/2.png")} alt="매뉴얼 2" className="rounded-lg shadow-sm" />
            <img src={getAssetPath("app_make/매뉴얼/20251203_015940.png")} alt="매뉴얼 3" className="rounded-lg shadow-sm" />
            <img src={getAssetPath("app_make/매뉴얼/20251203_020027.png")} alt="매뉴얼 4" className="rounded-lg shadow-sm" />
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center my-2">
          <ArrowDown className="w-6 h-6 text-emerald-400" />
        </div>

        {/* Step 2: 프로그램 개발 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-6 mb-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-emerald-600" />
              프로그램 개발
            </h4>
          </div>
          <p className="text-gray-600 text-sm mb-4 ml-11">
            해운회사 직원들이 문서정리를 어려워해서 직접 프로그램을 만들어 전달했습니다.<br />
            바탕화면 자동 정리 + 날짜별 분류 + 되돌리기 + 파일 미리보기(이미지/터미널 결과) 기능까지 구현했습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
            <img src={getAssetPath("app_make/매뉴얼/문서정리프로그램.png")} alt="문서정리 프로그램" className="rounded-lg shadow-sm" />
            <img src={getAssetPath("app_make/매뉴얼/뷰어.png")} alt="뷰어 프로그램" className="rounded-lg shadow-sm" />
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center my-2">
          <ArrowDown className="w-6 h-6 text-emerald-400" />
        </div>

        {/* Step 3: 자동화 시스템 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              자동화 시스템 구축
            </h4>
          </div>
          <p className="text-gray-600 text-sm mb-4 ml-11">
            매장 데이터를 자동으로 분석해서 텔레그램으로 리포트를 발송하는 시스템을 구축했습니다.
          </p>

          {/* 데이터 → 결과 플로우 */}
          <div className="flex flex-col lg:flex-row items-center gap-4 ml-11">
            {/* 원본 데이터 */}
            <div className="flex-1 w-full">
              <p className="text-sm font-semibold text-gray-700 mb-2 text-center">원본 데이터</p>
              <img
                src={getAssetPath("app_make/1-5.png")}
                alt="Google Sheets 원본 데이터"
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>

            {/* 화살표 */}
            <div className="flex-shrink-0 py-2 lg:py-0">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl rotate-90 lg:rotate-0">→</span>
                <span className="text-xs text-gray-500">자동 분석</span>
              </div>
            </div>

            {/* 결과 리포트 */}
            <div className="flex-1 w-full">
              <p className="text-sm font-semibold text-gray-700 mb-2 text-center">자동 발송 결과</p>
              <div className="grid grid-cols-3 gap-2">
                <img src={getAssetPath("app_make/1-2.png")} alt="리포트 1" className="rounded-lg shadow-sm" />
                <img src={getAssetPath("app_make/1-3.png")} alt="리포트 2" className="rounded-lg shadow-sm" />
                <img src={getAssetPath("app_make/1-4.png")} alt="리포트 3" className="rounded-lg shadow-sm" />
              </div>
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 ml-11">
            <span className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">n8n</span>
            <span className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">Google Sheets</span>
            <span className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">Gemini AI</span>
            <span className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">Telegram</span>
            <span className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 shadow-sm">기상청 API</span>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-500"
        >
          <p className="text-gray-700">
            <strong className="text-gray-900">문제를 발견하면 직접 해결합니다.</strong><br />
            매뉴얼이 없으면 만들고, 불편함이 있으면 프로그램을 만들고, 반복 작업이 있으면 자동화합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;
