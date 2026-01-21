import React from 'react';
import { Github, ExternalLink, FolderGit2, Linkedin, PlayCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Projects = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      ...t.projects.items[0], // TurnoMed
      // AQUÍ ESTÁN LOS TAGS NUEVOS:
      tech: ["Python Flask", "Gemini AI", "MSSQL", "Security"],
      github: null,
      linkedin: "https://www.linkedin.com/in/oliver-v%C3%A1zquez-lima/details/projects/",
      demos: [
        { label: "Demo Admin", url: "https://tecmx-my.sharepoint.com/:v:/g/personal/cristina_gonzalez_cordova_tec_mx/IQAhOZ8HCLoZQIoYEvzklRW_Adp51j7nBok4YUNalH-hhYg?e=FftOyO&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D" },
        { label: "Demo User", url: "https://tecmx-my.sharepoint.com/:v:/g/personal/cristina_gonzalez_cordova_tec_mx/IQCdnBNaq6jDQbA3cL0lP5-BAY8di21CMbyY3grwrgtSLhA?e=hSKBcz&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D" }
      ],
      image: "/TurnoMed.png"
    },
    {
      ...t.projects.items[1], // VitaNova
      // AQUÍ ESTÁ EL TAG DE CHATBOT:
      tech: ["Node.js", "React", "Chatbot", "MySQL"],
      github: "https://github.com/Olivervazquezz/Awaq-web",
      linkedin: null,
      demos: null,
      image: "/Awaq.png"
    },
    {
      ...t.projects.items[2], // PawHome
      tech: ["IoT System", "C++", "MySQL", "Data Viz"],
      github: null,
      linkedin: "https://www.linkedin.com/in/oliver-v%C3%A1zquez-lima/details/projects/",
      demos: null,
      image: "/PawHome.jpg"
    }
  ];

  return (
    <section className="bg-gray-900 py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <FolderGit2 className="text-blue-500" />
            {t.projects.title}
          </h2>
          <p className="text-gray-400 max-w-xl">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-xl group flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none'; 
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-900', 'to-gray-900');
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-gray-700 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" className="flex items-center gap-1.5 text-xs font-medium text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md transition-colors">
                      <Github size={14} /> {t.projects.btnCode}
                    </a>
                  )}

                  {project.linkedin && (
                    <a href={project.linkedin} target="_blank" className="flex items-center gap-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md transition-colors">
                      {/* AQUÍ ESTABA EL ERROR DE TRADUCCIÓN, YA CORREGIDO: */}
                      <Linkedin size={14} /> {t.projects.btnLinkedin}
                    </a>
                  )}

                  {project.demos && project.demos.map((demo, i) => (
                    <a 
                      key={i} 
                      href={demo.url} 
                      target="_blank" 
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-white px-3 py-1.5 rounded-md transition-colors"
                    >
                      <PlayCircle size={14} /> {demo.label}
                    </a>
                  ))}

                  {project.demo && (
                     <a href={project.demo} target="_blank" className="flex items-center gap-1.5 text-xs font-medium text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}

                  {!project.github && !project.linkedin && !project.demos && !project.demo && (
                    <span className="text-xs text-gray-500 cursor-not-allowed flex items-center gap-2">
                       Confidential
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;