import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Code, Monitor, Cpu, Zap, Maximize2 } from 'lucide-react';
import { projects } from '../projects';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div 
        layoutId={`project-${project.id}`}
        className="relative bg-blueprint-bg border border-blueprint-grid w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-blueprint-card rounded-full border border-blueprint-grid hover:bg-blueprint-accent hover:text-blueprint-bg transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-blueprint-text mb-4">
                {project.title}
            </h2>

            <p className="text-blueprint-muted mb-8 leading-relaxed">
               {project.longDesc}
            </p>

            {/* Conditional Problem & Solution */}
            {(project.problem || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {project.problem && (
                        <div>
                             <h3 className="flex items-center gap-2 font-bold text-blueprint-text mb-2">
                                <Monitor size={16} /> Problem
                             </h3>
                             <p className="text-sm text-blueprint-muted leading-relaxed">
                                {project.problem}
                             </p>
                        </div>
                    )}
                    {project.solution && (
                        <div>
                             <h3 className="flex items-center gap-2 font-bold text-blueprint-text mb-2">
                                <Cpu size={16} /> Solution
                             </h3>
                             <p className="text-sm text-blueprint-muted leading-relaxed">
                                {project.solution}
                             </p>
                        </div>
                    )}
                </div>
            )}

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
                <div className="mb-8">
                    <h3 className="flex items-center gap-2 font-bold text-blueprint-text mb-2">
                        <Zap size={16} /> Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blueprint-muted leading-relaxed">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-blueprint-accent mt-1">▹</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mb-8">
                <h3 className="flex items-center gap-2 font-bold text-blueprint-text mb-4">
                    <Code size={16} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                        <span key={t} className="bg-blueprint-card border border-blueprint-grid px-3 py-1 font-mono text-xs text-blueprint-text">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-blueprint-grid">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blueprint-text text-blueprint-bg font-mono text-sm hover:opacity-90">
                    <Github size={18} /> Source_Code
                </a>
                {project.link && project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-blueprint-grid text-blueprint-text font-mono text-sm hover:bg-blueprint-card">
                      <ExternalLink size={18} /> Live_Demo
                  </a>
                )}
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsPage = ({ isFullPage = false }) => {
     const [selectedProject, setSelectedProject] = useState(null);

 return (
    <section id="projects" className={`py-20 px-4 md:px-6 border-b border-blueprint-grid transition-colors duration-300 ${isFullPage ? 'min-h-screen bg-blueprint-bg' : 'bg-blueprint-card'}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 max-w-7xl mx-auto w-full">
         <div>
            <h2 className={`${isFullPage ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'} text-blueprint-text font-display font-bold mb-2`}>
            PROJECTS
            </h2>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-blueprint-grid max-w-7xl mx-auto">
        {projects.slice(0, isFullPage ? undefined : 5).map((p) => (
          <motion.div 
            layoutId={`project-${p.id}`}
            key={p.id} 
            onClick={() => setSelectedProject(p)}
            className="group border-r border-b border-blueprint-grid p-8 hover:bg-blueprint-grid/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-xs text-blueprint-muted border border-blueprint-grid px-2 py-0.5 rounded-full">
                {p.category}
              </span>
              <Maximize2 className="text-blueprint-accent" size={20} />
            </div>
            
            <h3 className="text-blueprint-text font-display font-bold text-2xl mb-3">{p.title}</h3>
            <p className="text-sm text-blueprint-muted mb-6 leading-relaxed line-clamp-3">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.slice(0, 3).map(t => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-blueprint-muted/80">
                  #{t}
                </span>
              ))}
              {p.tech.length > 3 && <span className="font-mono text-[10px] text-blueprint-muted/80">+{p.tech.length - 3}</span>}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;
