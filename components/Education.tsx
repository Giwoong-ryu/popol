import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

const eduMaterials = [
  { image: "app_make/edu_cover.jpg", title: "커피 이론 교육자료 표지" },
  { image: "app_make/edu_1.jpg", title: "커피의 종류" },
  { image: "app_make/edu_2.jpg", title: "로스팅의 특성 & 추출" },
  { image: "app_make/edu_3.jpg", title: "그라인더 명칭 및 분쇄도 조절" },
  { image: "app_make/edu_4.jpg", title: "커피머신 및 용품 명칭" },
  { image: "app_make/edu_5.jpg", title: "에스프레소 추출 기본세팅" },
  { image: "app_make/edu_6.jpg", title: "밀크 스티밍" },
  { image: "app_make/edu_7.jpg", title: "운영 실무 사례" },
  { image: "app_make/edu_8.jpg", title: "문제 해결 사례" },
  { image: "app_make/edu_9.jpg", title: "추가 교육자료 1" },
  { image: "app_make/edu_10.jpg", title: "추가 교육자료 2" },
];

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-bold text-sm">EDUCATION & MANUAL</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              교육과 매뉴얼로 팀의 역량을 높입니다
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              직접 제작한 에스프레소 추출 매뉴얼과 교육 자료로<br className="hidden md:block" />
              신입 직원 교육 시간을 30% 단축하고, 제품 품질의 일관성을 확보했습니다.
            </p>
          </motion.div>
        </div>

        {/* Education Materials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {eduMaterials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-start gap-2 text-white">
                    <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-sm leading-tight">{material.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            교육 시스템 구축 성과
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">30%</div>
              <div className="text-emerald-100 text-lg font-medium">교육 시간 단축</div>
              <div className="text-sm text-emerald-200 mt-2">신입 직원 적응 기간 2주 → 5일</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">100%</div>
              <div className="text-emerald-100 text-lg font-medium">품질 일관성 확보</div>
              <div className="text-sm text-emerald-200 mt-2">지점 간 맛 편차 최소화</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">50+</div>
              <div className="text-emerald-100 text-lg font-medium">교육 자료 페이지</div>
              <div className="text-sm text-emerald-200 mt-2">이론부터 실무까지 체계화</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              매뉴얼 제작 범위
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>에스프레소 추출 기준 (도징량, 추출시간, 수율)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>그라인더 세팅 및 분쇄도 조절 가이드</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>밀크 스티밍 온도/거품 기준</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>위생/청결 관리 체크리스트</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              교육 효과
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>신입 교육 자료로 활용하여 교육 시간 30% 단축</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>직원 간 숙련도 차이 감소 및 품질 균일화</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>커피 맛 관련 클레임 80% 감소</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>매뉴얼 기반 표준 운영 체계 확립</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
