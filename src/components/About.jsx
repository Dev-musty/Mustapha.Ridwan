import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Code, Award } from 'lucide-react';
import Journey from './Journey';
import ProcessMap from './ProcessMap';
import Experience from './Experience';

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8">
     {Icon && <Icon className="text-blueprint-accent" size={24} />}
     <h2 className="text-3xl md:text-4xl font-display font-bold text-blueprint-text">{title}</h2>
  </div>
);

const About = () => {
    return (
        <>
        <section className="min-h-screen bg-blueprint-bg py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center md:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-blueprint-text mb-6">
                        PROFILE
                    </h1>
                </motion.div>

                {/* WHO I AM & WHAT I DO */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                     <div>
                        <SectionHeader title="WHO I AM" />
                        <p className="text-blueprint-muted leading-relaxed font-mono text-sm md:text-base">
                            I'm Mustapha Ridwan, a Software Engineer and Mechanical Engineering student. I sit at the intersection of physical principles and digital logic. My academic background trains me to analyze constraints and build for stability, while my passion for code allows me to turn those concepts into scalable software.
                        </p>
                     </div>
                     <div>
                        <SectionHeader title="WHAT I DO" />
                         <p className="text-blueprint-muted leading-relaxed font-mono text-sm md:text-base">
                            I build efficient and scalable systems. Whether it's optimizing a database query, designing a scalable API, my focus is always on efficiency and structure. I bridge the gap between technical constraints and product vision.
                        </p>
                     </div>
                </motion.div>

                <div className="mb-15">
                     <Journey />
                </div>
                <div className="mb-24">
                     <Experience />
                </div>

                {/* EDUCATION */}
                {/*  */}

                 {/* WHAT I'M UP TO */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="bg-blueprint-card border border-blueprint-grid p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="text-blueprint-accent" size={24} />
                            <h3 className="font-display font-bold text-xl text-blueprint-text">CURRENTLY LEARNING</h3>
                        </div>
                        <ul className="space-y-3 font-mono text-sm text-blueprint-muted">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blueprint-accent rounded-full"></span>
                                Data structures & algorithms
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blueprint-accent rounded-full"></span>
                                Python
                            </li>
                        </ul>
                    </div>
                    {/* later implementation */}
                    {/* <div className="bg-blueprint-card border border-blueprint-grid p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Coffee className="text-blueprint-accent" size={24} />
                            <h3 className="font-display font-bold text-xl text-blueprint-text">READING / DOING</h3>
                        </div>
                        <ul className="space-y-3 font-mono text-sm text-blueprint-muted">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blueprint-accent rounded-full"></span>
                                Reading: "Designing Data-Intensive Applications"
                            </li>
                             <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blueprint-accent rounded-full"></span>
                                Building: An open-source CLI tool for devs
                            </li>
                             <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blueprint-accent rounded-full"></span>
                                Exploring: Generated AI Art
                            </li>
                        </ul>
                    </div> */}
                </motion.div>



            </div>
        </section>
        
        <ProcessMap />
        </>
    );
};

export default About;
