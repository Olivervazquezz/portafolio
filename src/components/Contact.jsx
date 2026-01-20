import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-900 py-20 border-t border-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tarjeta Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{t.contact.email}</h3>
                <a href="mailto:olivervazquezz13@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">
                  olivervazquezz13@gmail.com
                </a>
              </div>
            </div>

            {/* Tarjeta WhatsApp */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-500/10 p-3 rounded-lg text-green-500">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{t.contact.phone}</h3>
                <a 
                  href="https://wa.me/522293656157" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors text-lg flex items-center gap-2"
                >
                  +52 (229) 365 6157
                </a>
              </div>
            </div>

            {/* Tarjeta Ubicación */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/10 p-3 rounded-lg text-purple-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{t.contact.location}</h3>
                <p className="text-gray-400 text-lg">
                  {t.contact.locationText}
                </p>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
                <a href="https://github.com/Olivervazquezz" target="_blank" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all border border-gray-700">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/oliver-vázquez-lima" target="_blank" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all border border-gray-700">
                    <Linkedin size={24} />
                </a>
            </div>
          </motion.div>

          {/* Formulario/CTA Derecha */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje directo</h3>
            <p className="text-gray-400 mb-8">
              Estoy disponible para prácticas profesionales, proyectos freelance o colaboraciones. Respondo en menos de 24 horas.
            </p>
            
            <a 
              href="mailto:olivervazquezz13@gmail.com"
              className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/25"
            >
              <Send size={20} className="mr-2" />
              {t.contact.cta}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;