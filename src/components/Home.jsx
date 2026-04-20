import React from "react";
import { motion } from "framer-motion";

const heroWords = ["Hi, I'm Charu Mehra", "MERN Stack Developer"];

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-28 md:pt-36 pb-14 sm:pb-20"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[-18%] top-[10%] h-52 w-52 sm:left-[2%] sm:top-[12%] sm:h-72 sm:w-72 md:left-[8%] md:top-[14%] md:h-80 md:w-80 bg-slate-600 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 90, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-24%] top-[16%] h-60 w-60 sm:right-[-10%] sm:top-[18%] sm:h-80 sm:w-80 md:right-[5%] md:h-96 md:w-96 bg-slate-800 rounded-full blur-3xl opacity-18"
          animate={{ x: [0, -70, 0], y: [0, -55, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[8%] bottom-[-14%] h-64 w-64 sm:left-[18%] sm:bottom-[-10%] sm:h-80 sm:w-80 md:left-[28%] md:bottom-[8%] md:h-[26rem] md:w-[26rem] bg-cyan-500 rounded-full blur-3xl opacity-10"
          animate={{ x: [0, 60, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="mx-auto max-w-5xl text-center hero-panel px-1 sm:px-0">
          <h1 className="font-serif font-black leading-[0.95] text-[color:var(--page-fg)] whitespace-nowrap text-[clamp(1.35rem,6.2vw,2.6rem)] md:text-5xl lg:text-6xl xl:text-[5rem]">
            {heroWords[0].split("").map((char, index) => (
              <span
                key={`hero-${index}`}
                className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-[color:var(--page-accent)]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h2 className="mt-3 md:mt-4 font-display text-base sm:text-xl md:text-2xl xl:text-3xl text-[color:var(--page-muted)]">
            {heroWords[1].split("").map((char, index) => (
              <span
                key={`role-${index}`}
                className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-[color:var(--page-accent)]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-4 md:mt-6 max-w-4xl text-sm sm:text-base md:text-xl lg:text-2xl text-[color:var(--page-accent)] font-serif leading-relaxed">
           I specialize in building fast, modern, and scalable web applications using React, Node.js, Express, and MongoDB — with a strong focus on clean, intuitive UI systems.
          </p>

          <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-[color:var(--page-muted)] leading-relaxed">
          I craft interactive digital experiences where thoughtful spacing, bold typography, and immersive visual rhythm come together to create seamless and engaging user interfaces.
          </p>

          <div className="mt-8 sm:mt-10 mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 20px 45px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-gradient-to-r from-[color:var(--page-accent)] to-cyan-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:text-lg"
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
              className="w-full rounded-2xl border-2 border-[color:var(--page-accent)] bg-[color:var(--page-surface)]/40 px-6 py-3 text-center text-sm font-semibold text-[color:var(--page-accent)] transition-all duration-300 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base md:text-lg"
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
