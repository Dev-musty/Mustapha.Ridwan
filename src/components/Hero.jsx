import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import resume from '../assets/MUSTAPHA RIDWAN.pdf'

const Hero = () => {
  const titles = ["Software Engineer", "Backend Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-[85vh] flex flex-col justify-center px-4 md:px-6 border-b border-blueprint-grid overflow-hidden">
      <div className="absolute top-10 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 border border-dashed border-blueprint-grid rounded-full opacity-50" />
      <div className="absolute bottom-20 left-4 md:left-20 w-40 h-40 md:w-64 md:h-64 border border-blueprint-grid transform rotate-45 opacity-20" />

      <div className="max-w-4xl z-10 pt-10 md:pt-0">
        <h1 className="text-blueprint-text font-display font-bold text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-4 leading-none">
          MUSTAPHA <br/> RIDWAN
        </h1>

        <div className="h-20 md:h-12 flex flex-col md:flex-row md:items-center gap-2 font-mono text-lg md:text-2xl text-blueprint-muted mt-4">
          <div className="flex items-center">
            <span className="text-blueprint-border mr-2">{">"}</span>
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-blueprint-text"
            >
              {titles[index]}
            </motion.span>
            <span className="animate-blink w-2 h-5 md:w-3 md:h-6 bg-blueprint-accent block ml-1"></span>
          </div>
        </div>

        <p className="mt-6 md:mt-8 max-w-xl text-blueprint-muted leading-relaxed text-sm md:text-base">
          Backend Engineer building REST APIs and AI-integrated systems using Node.js, TypeScript, and NestJS. My work is currently live and serving 1,000+ users.
        </p>

        <p className="mt-4 font-mono text-blueprint-text text-sm md:text-base">
          Ideas become tools. Concepts become code.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blueprint-text text-blueprint-bg font-mono text-sm px-8 py-3 hover:opacity-90 transition-opacity"
          >
            Get_In_Touch
          </button>
          <a
            href={resume}
            download="MUSTAPHA RIDWAN.pdf"
            className="border border-blueprint-text text-blueprint-text font-mono text-sm px-8 py-3 hover:bg-blueprint-grid transition-colors flex items-center justify-center"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
