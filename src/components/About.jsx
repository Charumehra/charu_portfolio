import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES, PIPELINE_MILESTONES } from "../constants/portfolioData";
import { Card } from "./ui/Card";

const TimelineItem = React.memo(({ item, index, isLast }) => {
  const Icon = item.icon;
  return (
    <div className="relative pl-10 sm:pl-12">
      {!isLast && (
        <span className="pointer-events-none absolute left-[14px] top-9 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
      )}
      <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-950 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
        <Icon className="text-sm" />
      </div>
      <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4 transition-all hover:border-white/10">
        <h4 className="text-sm font-bold text-white tracking-wide">{item.name}</h4>
        <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.subtitle}</p>
      </div>
    </div>
  );
});

const About = () => {
  return (
    <section id="about" className="relative min-h-screen px-4 sm:px-6 py-24 bg-slate-950/20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        
        {/* Profile Context Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Context Pipeline</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Engineering web experiences without structural compromises.
            </h2>
          </div>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I approach full-stack design with absolute logical precision. By combining reliable document schema engineering with fast, modular components, I transform complex architectural specs into elegant, production-grade applications.
          </p>
          
          {/* Real-time Technical Category Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {Object.entries(SKILL_CATEGORIES).map(([key, value]) => (
              <Card key={key} hoverEffect={false} className="!p-5 bg-slate-900/30 border-white/5">
                <h3 className="text-sm font-bold text-white tracking-wider border-b border-white/5 pb-2 mb-3 uppercase text-cyan-400">
                  {value.title}
                </h3>
                <div className="space-y-2.5">
                  {value.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-300">
                          <SkillIcon className={skill.color} />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-slate-500 font-mono">{skill.metric}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Journey Timeline Column */}
        <div className="w-full border border-white/10 bg-slate-900/40 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-lg font-bold text-white tracking-tight">Capability Milestone Timeline</h3>
          <p className="text-xs text-slate-400 mt-1 mb-6">Asynchronous development mapping & system capabilities</p>
          <div className="space-y-4">
            {PIPELINE_MILESTONES.map((milestone, index) => (
              <TimelineItem 
                key={milestone.name} 
                item={milestone} 
                index={index} 
                isLast={index === PIPELINE_MILESTONES.length - 1} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
