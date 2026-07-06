import React from "react";
import { motion } from "framer-motion";

export const Button = ({ 
  children, 
  variant = "primary", 
  onClick, 
  href, 
  download, 
  className = "",
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold tracking-wide text-sm transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-950 px-6 py-3.5 w-full sm:w-auto";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_4px_20px_rgba(34,211,238,0.25)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.4)]",
    secondary: "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white backdrop-blur-md",
    accent: "border-2 border-cyan-400/80 bg-cyan-400/5 text-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};