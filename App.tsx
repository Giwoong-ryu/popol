import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Documents from './components/Documents';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Gallery />
        <Philosophy />
        <Projects />
        <Experience />
        <Documents />
      </main>
      <Footer />
    </div>
  );
};

export default App;