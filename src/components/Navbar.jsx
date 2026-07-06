import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/40 text-slate-200 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/70 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl border-white/15 py-2.5" 
          : "py-4"
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-6">
        <a href="#home" className="group inline-flex items-center gap-2.5 focus:outline-none">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-xs font-black tracking-wider text-cyan-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            CM
          </span>
          <span className="font-sans text-lg font-extrabold tracking-tight text-white transition-all duration-300">
            Charu Mehra
          </span>
        </a>

        <ul className="hidden items-center gap-1.5 rounded-full border border-white/5 bg-slate-900/20 p-1 md:flex backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all duration-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 md:hidden focus:outline-none"
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 h-[2px] w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "top-[7px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[2px] w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] mx-0 flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;