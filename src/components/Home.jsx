import React from "react";
import { motion } from "framer-motion";

const heroWords = ["Hi, I'm Charu", "MERN Stack Developer"];

const Home = ({ theme = "dark" }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-36 pb-20"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[8%] top-[14%] w-80 h-80 bg-slate-600 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 90, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[5%] top-[18%] w-96 h-96 bg-slate-800 rounded-full blur-3xl opacity-18"
          animate={{ x: [0, -70, 0], y: [0, -55, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[28%] bottom-[8%] w-[26rem] h-[26rem] bg-cyan-500 rounded-full blur-3xl opacity-10"
          animate={{ x: [0, 60, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-display font-black leading-[0.95] text-[color:var(--page-fg)] text-5xl sm:text-6xl md:text-7xl xl:text-[6rem]">
            {heroWords[0].split("").map((char, index) => (
              <span
                key={`hero-${index}`}
                className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-[color:var(--page-accent)]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[color:var(--page-muted)]">
            {heroWords[1].split("").map((char, index) => (
              <span
                key={`role-${index}`}
                className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-[color:var(--page-accent)]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg sm:text-xl md:text-2xl text-[color:var(--page-accent)] font-semibold leading-relaxed">
            React, Node.js, Express, MongoDB, and clean UI systems built for speed and
            clarity.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base sm:text-lg md:text-xl text-[color:var(--page-muted)] leading-relaxed">
            I build fast, modern, and interactive web apps with stronger
            spacing, bigger type, and a more immersive visual rhythm.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 20px 45px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[color:var(--page-accent)] to-cyan-500 text-white text-base md:text-lg font-semibold shadow-lg transition-all duration-300"
            >
              Let&apos;s Connect
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(59,130,246,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-2xl border-2 border-[color:var(--page-accent)] text-[color:var(--page-accent)] text-base md:text-lg font-semibold bg-[color:var(--page-surface)]/40 transition-all duration-300"
            >
              View Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
