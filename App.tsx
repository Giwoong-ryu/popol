import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Documents from './components/Documents';
import Footer from './components/Footer';

type ModalSection = 'gallery' | 'philosophy' | 'documents' | 'experience' | 'projects' | null;

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalSection>(null);

  const handleSectionClick = (section: string) => {
    setActiveModal(section as ModalSection);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'gallery':
        return <Gallery />;
      case 'philosophy':
        return <Philosophy />;
      case 'documents':
        return <Documents />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <main className="flex flex-col w-full">
        <Hero onSectionClick={handleSectionClick} />
        <About />
      </main>
      <Footer />

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative h-full overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-md text-gray-900 p-3 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content Container */}
              <div className="min-h-screen bg-white">
                {renderModalContent()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sticky Call to Action for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
         <button className="bg-emerald-600 text-white rounded-full p-4 shadow-xl hover:bg-emerald-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
         </button>
      </div>
    </div>
  );
};

export default App;