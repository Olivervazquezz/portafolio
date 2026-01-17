import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-3 py-1 mb-8 border border-gray-700">
          <Terminal size={14} className="text-blue-400" />
          <span className="text-gray-300 text-sm font-mono">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {t.hero.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Oliver</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
            {t.hero.btnProject}
            <ArrowRight size={20} className="ml-2" />
          </a>
          <a href="mailto:olivervazquezz13@gmail.com" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all">
            {t.hero.btnContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;