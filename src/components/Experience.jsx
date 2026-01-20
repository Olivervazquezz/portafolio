import React from 'react';
import { Users, Calendar, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-900 py-20 overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Animado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Users className="text-blue-500" />
            {t.experience.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Columna Izquierda: La Foto del Evento */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} // Entra desde la izquierda
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10" />
              {/* Asegúrate de poner la foto 'event.jpg' en public */}
              <img 
                src="/event.jpg" 
                alt="SAITC Event" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"; // Foto genérica de evento tech si falla la tuya
                }}
              />
            </div>
          </motion.div>

          {/* Columna Derecha: El Texto */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} // Entra desde la derecha
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-sm font-medium">
              <Megaphone size={16} />
              <span>{t.experience.organization}</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white">
              {t.experience.role}
            </h3>
            
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar size={16} className="mr-2" />
              {t.experience.period}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {t.experience.description}
            </p>

            {/* Datos duros o logros (Opcional, se ve muy pro) */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <span className="block text-2xl font-bold text-white">+500</span>
                <span className="text-xs text-gray-400">Estudiantes impactados</span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <span className="block text-2xl font-bold text-white">15+</span>
                <span className="text-xs text-gray-400">Eventos organizados</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;