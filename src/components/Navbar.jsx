import React from 'react';
import { Github, Linkedin, Mail, Languages, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { toggleLanguage, t } = useLanguage();

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-blue-500 font-bold text-xl font-mono">
              &lt;Oliver /&gt;
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Botón de Idioma*/}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-1.5 rounded-md border border-gray-700 hover:border-blue-500 transition-all text-sm font-medium min-w-[100px] justify-center"
            >
              <Languages size={16} />
              <span>{t.navbar.languageName}</span>
            </button>

            <div className="h-6 w-px bg-gray-700 mx-2 hidden sm:block"></div>

            <div className="hidden md:flex space-x-3">
                <a href="https://github.com/Olivervazquezz" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/Olivervazquezz" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                </a>
                <a href="mailto:olivervazquezz13@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                </a>
            </div>
            
            {/* Botón Descargar CV*/}
            <a 
              href="/CV_OliverVázquez.pdf" 
              className="hidden sm:flex items-center gap-2 ml-4 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              <Download size={16} /> {/* Icono de descarga */}
              {t.navbar.resume}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;