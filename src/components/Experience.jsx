import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench } from 'lucide-react';

const ExpCard = ({ title, company, period, description, technologies, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="border border-blueprint-grid bg-blueprint-card p-6 relative group z-10 w-full"
  >
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-2 h-2 bg-blueprint-accent rounded-full"></div>
    </div>
    <div className="mb-4 text-blueprint-muted">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-blueprint-text font-bold font-display text-lg mb-1">{title}</h3>
    <div className="flex flex-wrap justify-between items-center text-xs font-mono text-blueprint-muted mb-4 border-b border-blueprint-grid/50 pb-2">
      <span className="text-blueprint-accent">{company}</span>
      <span>{period}</span>
    </div>

    <p className="text-blueprint-muted text-sm leading-relaxed mb-4">
        {description}
    </p>

    <div className="flex flex-wrap gap-2">
        {technologies.map((t) => (
            <span key={t} className="text-[10px] font-mono border border-blueprint-grid px-2 py-0.5 text-blueprint-muted/80">
                {t}
            </span>
        ))}
    </div>
  </motion.div>
);

const Experience = () => {
    const experiences = [
        {
          title: "Backend Engineer Intern",
          company: "HNG",
          period: "2025 Nov - Present",
          description: "Built RESTful APIs with rate-limiting, structured logging, and error handling during the programme's early assessment stages. Joined team DeenAI to build a faith companion app featuring an Islamic AI chat, Quran, Adhkar, Qiblah finder, and Hadith collections, contributed primarily to the AI chat backend. Engineered a RAG pipeline post-internship using AWS S3 as the vector store; system shipped to production and currently serving 1,000+ users.",
          technologies: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "Typescript", "Mastra AI", "mySQL"],
          icon: Server
        },
      ];

  return (
    <section id="experience-history" className="py-16 md:py-20 px-4 md:px-6 border-b border-blueprint-grid">
      <div className="flex items-end justify-between mb-12">
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
          <h2 className="text-blueprint-text font-display font-bold text-3xl md:text-4xl">
            EXPERIENCE
          </h2>
          <div className="flex items-center gap-2 mb-1">
             <span className="text-blueprint-accent font-mono text-sm border border-blueprint-accent/30 px-2 py-0.5 rounded bg-blueprint-accent/10">
              Professional History
            </span>
          </div>
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Continuous Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-px bg-blueprint-grid -z-10"></div>

        <div className="space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                    <div className="absolute left-[11px] top-6 w-2.5 h-2.5 bg-blueprint-bg border border-blueprint-accent rounded-full z-10"></div>
                    <div className="absolute left-4 top-[29px] w-8 h-px bg-blueprint-grid"></div>
                    <ExpCard {...exp} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
