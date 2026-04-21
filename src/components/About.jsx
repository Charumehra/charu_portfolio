import { motion } from "framer-motion";
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

const learningJourney = [
  {
    name: "HTML",
    subtitle: "Structure and semantic foundations",
    icon: SiHtml5,
    iconColor: "text-orange-400",
  },
  {
    name: "CSS",
    subtitle: "Styling systems, layouts, and responsive design",
    icon: SiCss,
    iconColor: "text-sky-400",
  },
  {
    name: "JavaScript",
    subtitle: "Interactivity, logic, and dynamic UI behavior",
    icon: SiJavascript,
    iconColor: "text-yellow-300",
  },
  {
    name: "React",
    subtitle: "Component architecture and modern frontend workflows",
    icon: SiReact,
    iconColor: "text-cyan-300",
  },
  {
    name: "Redux",
    subtitle: "predictable state management",
    icon: SiRedux,
    iconColor: "text-violet-300",
  },
  {
    name: "REST API",
    subtitle: "backend endpoint design/consumption",
    icon: SiExpress,
    iconColor: "text-slate-200",
  },
  {
    name: "MERN",
    subtitle: "End-to-end full-stack app development",
    icon: SiMongodb,
    iconColor: "text-emerald-300",
  },
];

const introVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const timelineItemVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 20,
    x: index % 2 === 0 ? -24 : 24,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.52, ease: "easeOut" },
  },
};

const TimelineItem = ({ step, index, isLast }) => {
  const Icon = step.icon;

  return (
    <motion.div className="relative pl-10 sm:pl-12" variants={timelineItemVariants} custom={index}>
      {!isLast && (
        <span className="pointer-events-none absolute left-[13px] top-9 h-[calc(100%+0.75rem)] w-px bg-gradient-to-b from-cyan-300/65 to-transparent sm:left-[15px]" />
      )}

      <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-200/55 bg-slate-900/95 shadow-[0_0_16px_rgba(34,211,238,0.25)] sm:h-8 sm:w-8">
        <Icon className={`text-sm ${step.iconColor}`} />
      </div>

      <motion.article
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-xl border border-white/12 bg-[linear-gradient(165deg,rgba(15,23,42,0.72),rgba(2,6,23,0.9))] px-3 py-2.5 shadow-[0_10px_22px_rgba(2,6,23,0.24)] sm:px-4 sm:py-3"
      >
        <p className="text-xs sm:text-sm font-semibold text-white">{step.name}</p>
        <p className="mt-0.5 text-[11px] sm:text-xs text-slate-300/85">{step.subtitle}</p>
      </motion.article>
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-[color:var(--page-fg)]"
    >
      <motion.div
        className="w-full max-w-6xl section-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-5 text-center"
          variants={introVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.28em] text-[color:var(--page-accent)]">
            About Me
          </p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
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

        <motion.div className="mt-10">
          <motion.div
            className="rounded-2xl border border-white/12 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
              Skill Timeline (Learning Journey)
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300/80">
              HTML to MERN progression with Redux and REST API milestones.
            </p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.62),rgba(2,6,23,0.42))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_35px_rgba(2,6,23,0.25)] backdrop-blur-xl sm:p-4">
              <div className="overflow-x-auto pb-2">
                <div className="inline-flex min-w-full items-center gap-1.5 rounded-full border border-cyan-200/15 bg-slate-950/45 px-2.5 py-1.5 text-[10px] sm:text-xs text-cyan-100/90 sm:justify-center">
                  {learningJourney.map((step, index) => (
                    <div key={`path-${step.name}`} className="inline-flex items-center gap-1.5">
                      <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-2 py-0.5 font-semibold whitespace-nowrap">
                        {step.name}
                      </span>
                      {index < learningJourney.length - 1 && <span className="text-cyan-200/70">-&gt;</span>}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.25, once: true }}
                variants={timelineVariants}
              >
                <motion.span
                  className="pointer-events-none absolute left-[13px] top-2 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-cyan-300/75 via-cyan-200/45 to-transparent sm:left-[15px]"
                  initial={{ scaleY: 0, opacity: 0.4 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ amount: 0.2, once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ originY: 0 }}
                />

                <div className="space-y-3.5 sm:space-y-4">
                  {learningJourney.map((step, index) => (
                    <TimelineItem
                      key={step.name}
                      step={step}
                      index={index}
                      isLast={index === learningJourney.length - 1}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
