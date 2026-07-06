import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { EXPERIENCES } from "../constants/portfolioData";
import { Card } from "./ui/Card";

const ExperienceCard = React.memo(({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 sm:pl-12 group"
    >
      {/* Vertical Timeline Tracker Connection line */}
      <span className="pointer-events-none absolute left-[15px] top-10 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-cyan-500/30 via-transparent to-transparent group-last:hidden" />
      
      {/* Glowing Timeline Node Icon */}
      <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-400 shadow-md group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-300">
        <FiBriefcase className="text-xs" />
      </div>

      {/* Premium Experience Grid Element Container */}
      <Card hoverEffect={true} className="relative !p-6 sm:!p-8 bg-slate-900/40 border-white/5 backdrop-blur-xl">
        {/* Background Subtle Gradient Flow */}
        <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${exp.glow} opacity-40`} />

        {/* Header Block Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {exp.role}
              </h3>
              <span className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {exp.type}
              </span>
            </div>
            <p className="text-base font-semibold text-slate-300 tracking-wide mt-1">
              {exp.company}
            </p>
          </div>

          {/* Timeframe Node Badge */}
          <div className="inline-flex items-center gap-2 self-start md:self-center rounded-full bg-slate-950 px-3.5 py-1.5 border border-white/5 text-xs font-mono text-slate-400 shadow-inner">
            <FiCalendar className="text-cyan-400" />
            <span>{exp.duration}</span>
          </div>
        </div>

        {/* Responsibilities Task Description Points Loop */}
        <ul className="mt-6 space-y-3 text-sm text-slate-300 list-none">
          {exp.responsibilities.map((point, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Horizontal Badges Layer */}
        <div className="mt-8 border-t border-white/5 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Utilized Infrastructure Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.techStack.map((tech) => (
              <span 
                key={tech} 
                className="rounded-lg bg-slate-950 border border-white/10 px-2.5 py-1 text-xs font-mono text-slate-300 hover:border-cyan-400/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

const Experience = () => {
  return (
    <section id="experience" className="relative px-4 sm:px-6 py-24 max-w-4xl mx-auto">
      {/* Main Container Core Titles */}
      <div className="space-y-2 mb-16 text-left">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Career Vector</p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Engineering Experience</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Previous roles where I applied structural frontend principles, optimized bundle weights, and built production components.
        </p>
      </div>

      {/* Main Structural Flow Stack Mapping */}
      <div className="space-y-8 relative">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;