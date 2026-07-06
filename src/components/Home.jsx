import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiEye } from "react-icons/fi";
import { HERO_WORDS, RESUME_PATH } from "../constants/portfolioData";
import { Button } from "./ui/Button";

const HoverText = React.memo(({ text }) => (
  <>
    {text.split("").map((char, index) => (
      <span
        key={`${text.slice(0, 3)}-${index}`}
        className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-cyan-400 select-none"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
));

const Home = () => {
  const [showResumeCard, setShowResumeCard] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-14">
      {/* Dynamic Visual Haze Effect Fields */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[5%] top-[15%] h-72 w-72 bg-blue-600/10 rounded-full blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[5%] bottom-[10%] h-96 w-96 bg-cyan-500/5 rounded-full blur-[140px]"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl text-center"
      >
        {/* Availability System Badge Indicator */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Opportunities & Internships
        </div>

        <h1 className="font-sans font-black tracking-tight leading-[0.95] text-white text-[clamp(2.2rem,8.5vw,5.5rem)]">
          <HoverText text={HERO_WORDS[0]} />
        </h1>

        <h2 className="mt-4 font-sans text-xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-tight">
          <HoverText text={HERO_WORDS[1]} />
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
          I build high-performance distributed user interfaces and scalable server architectures, matching deep structural MERN execution with pixel-perfect visual layout systems.
        </p>

        {/* Modular Metrics Component Blocks */}
        <div className="mt-10 mx-auto grid max-w-2xl grid-cols-3 gap-4 border-y border-white/5 py-6 my-10 bg-white/[0.01] backdrop-blur-xs rounded-xl">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">99%</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Uptime Mindset</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">100%</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Responsive Delivery</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">0.3s</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">Interaction Snappiness</p>
          </div>
        </div>

        {/* Refactored High Consistency Control Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row max-w-md mx-auto">
          <Button variant="primary" href="#contact">Let's Connect</Button>
          <Button variant="secondary" onClick={() => setShowResumeCard(true)}>
            <FiEye className="text-base" /> View System Resume
          </Button>
        </div>
      </motion.div>

      {/* Floating System Document Reader Modal */}
      <AnimatePresence>
        {showResumeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_35px_100px_rgba(0,0,0,0.8)]"
            >
              {/* Document Header Panel */}
              <div className="flex items-center justify-between border-b border-white/5 p-5 bg-slate-950/40">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">CharuMehra_CV.pdf</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Production-Ready Engineering Credentials</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="primary" className="!py-2 !px-4 !text-xs" href={RESUME_PATH} download="Charu_Mehra_Resume.pdf">
                    <FiArrowDown /> Download System PDF
                  </Button>
                  <button
                    onClick={() => setShowResumeCard(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all text-xs"
                  >
                    ✕
                  </button>
                </div>
              </div>
              {/* Sandbox Embedded Visual Field */}
              <div className="flex-1 bg-slate-950/40 p-4 min-h-0">
                <iframe src={RESUME_PATH} title="Charu Mehra Core Resume" className="h-full w-full border-0 rounded-xl bg-white shadow-2xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
