import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, iconColor: "text-orange-400" },
  { name: "CSS", icon: SiCss, iconColor: "text-sky-400" },
  { name: "JavaScript", icon: SiJavascript, iconColor: "text-yellow-300" },
  { name: "React", icon: SiReact, iconColor: "text-cyan-300" },
  { name: "Redux", icon: SiRedux, iconColor: "text-violet-300" },
  { name: "MongoDB", icon: SiMongodb, iconColor: "text-emerald-300" },
  { name: "Express", icon: SiExpress, iconColor: "text-slate-200" },
  { name: "Node.js", icon: SiNodedotjs, iconColor: "text-lime-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-cyan-200" },
];

const introVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 0.5, 1], [46, 0, -46]);
  const introY = useTransform(scrollYProgress, [0, 1], [22, -18]);
  const skillsY = useTransform(scrollYProgress, [0, 1], [28, -24]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.78, 1, 1, 0.78]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-[color:var(--page-fg)]"
    >
      <motion.div
        className="w-full max-w-6xl section-panel"
        style={{ y: panelY, opacity: panelOpacity }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-5 text-center"
          style={{ y: introY }}
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.28em] text-[color:var(--page-accent)]">
            About Me
          </p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          >
            MERN Stack Developer crafting polished digital experiences
          </motion.h2>
          <p className="mx-auto max-w-4xl text-sm sm:text-base md:text-lg text-[color:var(--page-muted)] leading-relaxed">
            I&apos;m a MERN Stack Developer passionate about building fast, modern, and scalable web applications using React, Node.js, Express, and MongoDB.
          </p>
          <p className="mx-auto max-w-4xl text-sm sm:text-base md:text-lg text-[color:var(--page-muted)] leading-relaxed">
            I focus on crafting clean, intuitive interfaces supported by efficient backend systems - blending performance, responsive design, and thoughtful UI to deliver seamless and engaging user experiences.
          </p>
        </motion.div>

        <motion.div className="mt-10" style={{ y: skillsY }}>
          <motion.div
            className="rounded-2xl border border-white/12 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
              Skills & Tools
            </h3>
            <motion.div
              className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.article
                    key={skill.name}
                    variants={skillCardVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      rotateX: 4,
                      transition: { duration: 0.22, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden rounded-xl border border-white/12 bg-slate-950/50 p-4 text-center"
                  >
                    <motion.span
                      className="pointer-events-none absolute -inset-x-6 -top-12 h-16 bg-cyan-300/10 blur-2xl"
                      animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.25, 0.55, 0.25] }}
                      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                      animate={{ opacity: [0.25, 0.9, 0.25], scaleX: [0.7, 1, 0.7] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      animate={{ y: [0, -3, 0], rotate: [0, -2, 0] }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon className={`mx-auto text-2xl sm:text-3xl ${skill.iconColor}`} />
                    </motion.div>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-100">
                      {skill.name}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
