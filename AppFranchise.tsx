import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FranchiseValue from './components/FranchiseValue';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Documents from './components/Documents';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import NavigationFranchise from './components/NavigationFranchise';
import PageSwitchFranchise from './components/PageSwitchFranchise';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <PageSwitchFranchise />
      <NavigationFranchise />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <FranchiseValue />
        <Philosophy />
        <Projects />
        <Experience />
        <Documents />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;