import React from 'react';
import { Github, ExternalLink, FolderGit2, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Projects = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      ...t.projects.items[0],
      tech: ["Python Flask", "MSSQL", "Security", "OWASP ZAP"],
      github: null,
      linkedin: "https://www.linkedin.com/in/oliver-v%C3%A1zquez-lima/details/projects/",
      demo: null,
      color: "from-blue-600 to-indigo-600"
    },
    {
      ...t.projects.items[1],
      tech: ["Node.js", "Express", "MySQL", "React"],
      github: "https://github.com/Olivervazquezz/Awaq-web",
      linkedin: null,
      demo: null,
      color: "from-emerald-500 to-teal-500"
    },
    {
      ...t.projects.items[2],
      tech: ["IoT System", "C++", "MySQL", "Data Viz"],
      github: null,
      linkedin: "https://www.linkedin.com/in/oliver-v%C3%A1zquez-lima/details/projects/",
      demo: null,
      color: "from-orange-500 to-red-500"
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
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <FolderGit2 className="text-blue-500" />
              {t.projects.title}
            </h2>
            <p className="text-gray-400 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>
          
          <a href="https://github.com/Olivervazquezz" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-colors">
            {t.projects.cta} <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }} // Empieza un poquito más chica
              whileInView={{ opacity: 1, scale: 1 }} // Crece a tamaño normal
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-xl group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-gray-700 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  {project.github && (
                    <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                      <Github size={18} /> {t.projects.btnCode}
                    </a>
                  )}
                  {project.linkedin && (
                    <a href={project.linkedin} target="_blank" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                      <Linkedin size={18} /> {t.projects.btnLinkedin}
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                      <ExternalLink size={18} /> {t.projects.btnDemo}
                    </a>
                  )}
                  {!project.github && !project.linkedin && !project.demo && (
                    <span className="text-sm text-gray-500 cursor-not-allowed flex items-center gap-2">
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