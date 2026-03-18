import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Terminal, Palette } from 'lucide-react';
import ProcessMap from './ProcessMap';

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center gap-2 mb-6 border-b border-blueprint-grid pb-2">
      <Icon className="text-blueprint-accent" size={20} />
      <h3 className="text-xl font-display font-bold text-blueprint-text">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-blueprint-card border border-blueprint-grid px-4 py-2 rounded-full hover:border-blueprint-accent transition-colors cursor-default"
        >
          {/* We would ideally use specific icons here. For now, a generic dot. */}
            {/* If we had specific icons (like react-icons) we would render them here.
                For this aesthetic, text + simple icon is fine. */}
          <span className="w-2 h-2 rounded-full bg-blueprint-muted/50"></span>
          <span className="font-mono text-sm text-blueprint-text">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
    const skillData = [
        {
            title: "Programming Languages",
            icon: Code,
            skills: [
                { name: "JavaScript" }, { name: "TypeScript" }
            ]
        },
        {
            title: "Libraries & Frameworks",
            icon: Palette,
            skills: [
                { name: "CSS3" }, { name: "React.js" }, { name: "NestJS" },
                { name: "OAuth" }, { name: "JWT" }, { name: "Express.js" }, { name: "Prisma" },
                { name: "Tailwind CSS" },{ name: "superbase" },{name: "TypeORM"}, { name: "Node.js" }
            ]
        },
        {
            title: "AI",
            icon: Server,
            skills: [
                { name: "Vercel AI SDK" }, { name: "Mastra AI" },{ name: "OpenRouter" }, { name: "OpenAI API" }
            ]
        },
        {
            title: "Databases & Data Tools",
            icon: Database,
            skills: [
                { name: "PostgreSQL" }, { name: "MySQL" }, { name: "Redis" }
            ]
        },
        {
            title: "DevOps & Cloud",
            icon: Cloud,
            skills: [{ name: "Git" },{ name: "Google Cloud Platform" },{ name: "GitHub Actions" }
            ]
        },
        {
            title: "IDEs & Creative Tools",
            icon: Terminal,
            skills: [ { name: "VS Code" }]
        }
    ];

  return (
    <>
    <section className="py-20 px-4 md:px-6 min-h-screen bg-blueprint-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-blueprint-text mb-4">
                SKILLS
            </h1>
            <p className="text-blueprint-muted font-mono max-w-2xl text-base md:text-lg leading-relaxed">
                A collection of technologies & tools that I use to deliver clean, reliable, and innovative software.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
            {skillData.map((category) => (
                <SkillCategory
                    key={category.title}
                    title={category.title}
                    icon={category.icon}
                    skills={category.skills}
                />
            ))}
        </div>
      </div>


    </section>
    {/* <ProcessMap /> */}
    </>
  );
};

export default Skills;
