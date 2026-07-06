import React from "react";
import { SOCIAL_LINKS } from "../constants/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 px-4 sm:px-6 py-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand System Info */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-[10px] font-black text-cyan-300">
            CM
          </span>
          <p className="text-xs text-slate-500 font-mono">
            Designed & Constructed by Charu Mehra © {currentYear}
          </p>
        </div>

        {/* Minimalist Micro Social List Links */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors group"
                aria-label={link.label}
              >
                <Icon className="text-sm text-slate-600 group-hover:text-cyan-400 transition-colors" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
};

export default Footer;