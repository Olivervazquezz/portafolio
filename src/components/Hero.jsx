import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* COLUMNA IZQUIERDA: TEXTO (Entra desde izquierda) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-3 py-1 mb-6 border border-gray-700">
            <Terminal size={14} className="text-blue-400" />
            <span className="text-gray-300 text-sm font-mono">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t.hero.greeting} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Oliver
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
              {t.hero.btnProject}
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all">
              {t.hero.btnContact}
            </a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: FOTO (Entra desde derecha) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} // Un poco después del texto
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-20 blur-lg animate-pulse"></div>
            <img 
              src="/profile.png" 
              alt="Oliver Vázquez" 
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/400x400/1f2937/3b82f6?text=Oliver";
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;