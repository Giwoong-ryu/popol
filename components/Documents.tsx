import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const documents = [
  {
    title: "포트폴리오 PDF",
    description: "전체 포트폴리오를 PDF로 다운로드",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-emerald-500",
    downloadUrl: "#"
  },
  {
    title: "자기소개서",
    description: "상세 자기소개서 및 경력 기술서",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-blue-500",
    downloadUrl: "#"
  },
  {
    title: "경력증명서",
    description: "재직증명 및 경력 증빙 자료",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-purple-500",
    downloadUrl: "#"
  },
];

const Documents: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full mb-4">
              <Download className="w-5 h-5" />
              <span className="font-bold text-sm">DOCUMENTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              제출 서류 다운로드
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              포트폴리오와 관련 문서를 다운로드하여 상세히 확인하실 수 있습니다.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.a
              key={index}
              href={doc.downloadUrl}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-emerald-300">
                <div className={`${doc.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {doc.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {doc.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  <Download className="w-5 h-5" />
                  <span>다운로드</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            추가 자료가 필요하신가요?
          </h3>
          <p className="text-emerald-100 mb-8 text-lg">
            언제든지 연락 주시면 필요하신 자료를 보내드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ryugw10@naver.com"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              <span>📧</span>
              <span>이메일 보내기</span>
            </a>
            <a
              href="tel:010-4838-5400"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-colors shadow-lg"
            >
              <span>📞</span>
              <span>전화 상담하기</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documents;
