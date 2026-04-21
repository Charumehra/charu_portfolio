import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactItems = [
  {
    title: "GitHub",
    subtitle: "Explore my repositories",
    value: "github.com/Charumehra",
    href: "https://github.com/Charumehra",
    icon: FiGithub,
    glow: "from-cyan-400/35 to-blue-500/15",
    border: "border-cyan-300/35",
  },
  {
    title: "LinkedIn",
    subtitle: "Connect professionally",
    value: "charu-mehra-cm",
    href: "https://www.linkedin.com/in/charu-mehra-cm/",
    icon: FiLinkedin,
    glow: "from-sky-400/35 to-indigo-500/15",
    border: "border-sky-300/35",
  },
  {
    title: "Gmail",
    subtitle: "Send me an email",
    value: "charumehracm2004@gmail.com",
    href: "mailto:charumehracm2004@gmail.com",
    icon: FiMail,
    glow: "from-rose-400/35 to-orange-400/15",
    border: "border-rose-300/35",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-[color:var(--page-fg)]"
    >
      <motion.div
        className="w-full max-w-6xl section-panel"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: true }}
      >
        <div className="text-center space-y-5">
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.28em] text-[color:var(--page-accent)]">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02]">
            Reach out and let&apos;s build something modern
          </h2>
          <p className="mx-auto max-w-4xl text-sm sm:text-base md:text-lg text-[color:var(--page-muted)] leading-relaxed">
            Open for collaborations, freelance work, and full-stack opportunities. Pick the channel you prefer and I&apos;ll respond quickly.
          </p>
        </div>

        <motion.div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3" variants={containerVariants}>
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-[color:var(--page-surface)]/85 p-5 sm:p-6 backdrop-blur-xl shadow-[0_16px_50px_rgba(2,6,23,0.35)]`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.glow} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-slate-900/80 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                      <Icon className="text-xl" />
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-100/90">
                      {item.title}
                    </span>
                  </div>

                  <p className="mt-5 text-lg sm:text-xl font-semibold text-white">{item.subtitle}</p>
                  <p className="mt-2 break-all text-sm sm:text-base text-slate-200/90">{item.value}</p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white/95 transition-colors duration-300 group-hover:bg-white/20">
                    Open Link
                    <span className="text-base leading-none">-&gt;</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
