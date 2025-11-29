import React from 'react';
import { Download, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          "현장을 이해하고, 매장을 기획하며,<br />문제를 해결하는 운영 전문가입니다."
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <a href="mailto:ryugw10@naver.com" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">ryugw10@naver.com</span>
          </a>
          <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">010-4838-5400</span>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-500">
          <Download className="w-5 h-5" />
          이력서(PDF) 다운로드
        </button>

        <p className="mt-16 text-gray-400 text-sm">
          © 2025 Ryu Gi-Woong. All rights reserved.<br/>
          Designed with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;