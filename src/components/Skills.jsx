import React from 'react';
import { Code2, Terminal, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  // Mapeamos los iconos manualmente, pero los títulos vienen del idioma
  const categories = [
    {
      title: t.skills.categories.backend,
      icon: <Terminal className="w-8 h-8 text-blue-500" />,
      skills: ["Python", "Node.js", "C++", "Flask", "SQL", "MySQL", "API REST"]
    },
    {
      title: t.skills.categories.frontend,
      icon: <Code2 className="w-8 h-8 text-purple-500" />,
      skills: ["React", "JavaScript", "Tailwind CSS", "Swift", "HTML/CSS", "Figma"]
    },
    {
      title: t.skills.categories.security,
      icon: <Shield className="w-8 h-8 text-green-500" />,
      skills: ["OWASP ZAP", "Linux", "Git/GitHub", "Postman", "Network Protocols", "Metasploit"]
    }
  ];

  return (
    <section className="bg-gray-900 py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="bg-gray-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-gray-500 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;