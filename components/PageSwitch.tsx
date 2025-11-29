import React from 'react';
import { Briefcase } from 'lucide-react';

const PageSwitch: React.FC = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <a
        href="/franchise.html"
        className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
      >
        <Briefcase className="w-4 h-4" />
        <span className="hidden sm:inline">Franchise SV 포트폴리오</span>
        <span className="sm:hidden">Franchise</span>
      </a>
    </div>
  );
};

export default PageSwitch;
