import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Documents from './components/Documents';
import Automation from './components/Automation';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PageSwitch from './components/PageSwitch';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <PageSwitch />
      <Navigation />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Projects />
        <Documents />
        <Experience />
        <Automation />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;