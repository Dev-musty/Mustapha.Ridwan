import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Code } from 'lucide-react';

const ExpCard = ({ title, role, date, icon: Icon }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="border border-blueprint-grid bg-blueprint-card p-6 relative group z-10"
  >
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-2 h-2 bg-blueprint-accent rounded-full"></div>
    </div>
    <div className="mb-4 text-blueprint-muted">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-blueprint-text font-bold font-display text-lg mb-1">{title}</h3>
    <div className="flex justify-between items-center text-xs font-mono text-blueprint-muted">
      <span>{role}</span>
      <span>{date}</span>
    </div>
  </motion.div>
);

const Journey = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 md:px-6 border-b border-blueprint-grid">
      <div className="flex items-end justify-between mb-12">
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
          <h2 className="text-blueprint-text font-display font-bold text-3xl md:text-4xl">
            JOURNEY
          </h2>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blueprint-accent font-mono text-sm border border-blueprint-accent/30 px-2 py-0.5 rounded bg-blueprint-accent/10">
              {new Date().getFullYear() - 2024}+ Years
            </span>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-blueprint-grid -z-10"></div>
        <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-20 bg-blueprint-grid -z-10 -translate-y-10"></div>
        <div className="md:hidden absolute left-1/2 top-0 h-full w-px bg-blueprint-grid -z-10 -translate-x-1/2"></div>

        <ExpCard 
          title="Building Foundations" 
          role="Full Stack Development" 
          date="2024-2025" 
          icon={Layout} 
        />
        
        <div className="md:mt-12 bg-blueprint-bg">
          <ExpCard 
            title="Backend Engineering" 
            role="Scalable Systems & APIs" 
            date="2025-Present" 
            icon={Server} 
          />
        </div>

        <ExpCard 
          title="AI & Model Engineering" 
          role="Python & ML" 
          date="Future Focus" 
          icon={Code} 
        />
      </div>

       <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Node.js', 'PostgreSQL', 'NestJS', 'express.js','Git','TypeScript','React', 'Tailwind'].map((tech) => (
          <div key={tech} className="border border-dashed border-blueprint-grid p-4 text-center hover:bg-blueprint-grid transition-colors cursor-default text-blueprint-muted hover:text-blueprint-text">
            <span className="font-mono text-sm">{tech}</span>
          </div>
        ))}
       </div>
    </section>
  );
};

export default Journey;
