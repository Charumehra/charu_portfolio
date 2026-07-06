import React from "react";
import { motion } from "framer-motion";

export const Card = ({ children, className = "", hoverEffect = true, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.8)" } : {}}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${className}`}
      {...props}
    >
      {/* Background radial soft light overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_45%)]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};