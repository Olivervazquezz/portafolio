import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience'; // <--- Importar
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>© {new Date().getFullYear()} Oliver Vázquez. {t.footer}</p>
      </footer>
    </div>
  );
}

export default App;