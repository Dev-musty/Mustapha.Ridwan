import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex flex-col relative group h-full justify-between"
  >
    <div className="absolute left-0 top-0 bottom-0 w-px bg-blueprint-grid hidden md:block"></div>

    <div className="p-8 md:p-10 flex flex-col h-full hover:bg-blueprint-grid/5 transition-colors duration-500">
        
        
        <h3 className="font-display font-bold text-6xl md:text-8xl text-blueprint-accent/90 mb-8 leading-none tracking-tighter">
            {number}
        </h3>

        
        <div className="flex items-center gap-3 mb-4">
            <h4 className="text-xl md:text-2xl font-bold text-blueprint-text font-display">
                {title.toUpperCase()}
            </h4>
            {/* Status Dot */}
            <div className="w-2 h-2 rounded-full bg-blueprint-accent animate-pulse"></div>
        </div>

        {/* Description */}
        <p className="text-blueprint-muted text-sm md:text-base leading-relaxed font-mono">
            {description}
        </p>
    </div>
  </motion.div>
);

const ProcessMap = () => {
  return (
    <section id="process" className="py-20 px-4 md:px-6 border-b border-blueprint-grid bg-blueprint-bg">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 w-full">
           <div>
              <h2 className="text-3xl md:text-4xl text-blueprint-text font-display font-bold mb-2">
              WORKFLOW
              </h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-r border-blueprint-grid">
            
            
            <ProcessStep 
                number="01"
                title="Discovery & Architecture"
                description="Blueprint before build. I analyze system feasibility, design efficient database schemas and systems architecture, and setup development environment. This ensures clarity and scalability."
                delay={0.1}
            />

            
            <ProcessStep 
                number="02"
                title="Engineering"
                description="I architect secure, high-performance and scalable backends systems. I focus is on writing maintainable code that powers the core utility of the application."
                delay={0.3}
            />

            
            <ProcessStep 
                number="03"
                title="Production Systems"
                description="Launch and support. I deliver iterative implementations that evolve into stable production systems, providing post-launch monitoring and optimization to keep your product growing."
                delay={0.5}
            />

        </div>
      </div>
    </section>
  );
};

export default ProcessMap;
