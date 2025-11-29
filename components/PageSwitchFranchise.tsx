import React from 'react';
import { User } from 'lucide-react';

const PageSwitchFranchise: React.FC = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <a
        href="/index.html"
        className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
      >
        <User className="w-4 h-4" />
        <span className="hidden sm:inline">일반 포트폴리오</span>
        <span className="sm:hidden">Portfolio</span>
      </a>
    </div>
  );
};

export default PageSwitchFranchise;
