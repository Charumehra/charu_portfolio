import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants/portfolioData";
import { Card } from "./ui/Card";

const ProjectCard = React.memo(({ project }) => {
  return (
    <Card className="flex flex-col h-full group relative">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300 tracking-wide mb-3">
            {project.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 tracking-wide mt-0.5">{project.category}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-300 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Embedded Real-time System Metrics */}
      <div className="my-5 flex gap-4 border-t border-white/5 pt-4 font-mono text-xs text-slate-400">
        {Object.entries(project.metrics).map(([key, val]) => (
          <div key={key}>
            <span className="capitalize text-slate-500">{key}:</span> <span className="text-emerald-400 font-semibold">{val}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack Array Processing */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-white/5 border border-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Trigger Handlers */}
      <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-xs font-semibold text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white transition-all"
        >
          <FiGithub /> Repository Link
        </a>
        {project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500/10 py-2.5 text-xs font-semibold text-cyan-400 border border-cyan-400/20 hover:bg-cyan-500/20 transition-all"
          >
            <FiExternalLink /> Live Instance
          </a>
        )}
      </div>
    </Card>
  );
});

const Project = () => {
  return (
    <section id="projects" className="relative px-4 sm:px-6 py-24 max-w-6xl mx-auto">
      <div className="space-y-2 mb-12 text-left">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Production Inventory</p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Featured Architectural Deployments</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          A careful look at systems built with clean state patterns, structured optimization loops, and reliable database connections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;