import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Image, Lightbulb, Briefcase, Award, FileText, TrendingUp, Calendar } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'hero', label: '홈', icon: <Home className="w-4 h-4" /> },
  { id: 'about', label: '소개', icon: <User className="w-4 h-4" /> },
  { id: 'franchise-value', label: '가치', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'philosophy', label: '철학', icon: <Lightbulb className="w-4 h-4" /> },
  { id: 'projects', label: '솔루션', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'first-90-days', label: '90일', icon: <Calendar className="w-4 h-4" /> },
  { id: 'experience', label: '인사이트', icon: <Award className="w-4 h-4" /> },
  { id: 'documents', label: '문서', icon: <FileText className="w-4 h-4" /> },
  { id: 'gallery', label: '갤러리', icon: <Image className="w-4 h-4" /> },
];

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling 100px
      setIsVisible(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      let current = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = sectionId;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 left-0 right-0 z-40 flex justify-center"
        >
          <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full px-4 md:px-6 py-3 border border-gray-200">
            <div className="flex items-center gap-1 md:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-1.5 px-2 md:px-4 py-2 rounded-full transition-all duration-500 ${
                    activeSection === item.id
                      ? 'bg-emerald-600 text-white shadow-md scale-[1.02]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.icon}
                  <span className={`text-sm font-medium ${
                    activeSection === item.id ? 'inline' : 'hidden lg:inline'
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
