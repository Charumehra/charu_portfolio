import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Charumehra", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/charu-mehra-cm/", icon: FiLinkedin },
  { label: "Gmail", href: "mailto:charumehracm2004@gmail.com", icon: FiMail },
];

const footerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="relative px-0 py-0 text-[color:var(--page-fg)]"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="w-full border-t border-white/10 px-0 py-0">
        <div className="flex w-full flex-col items-center justify-between gap-4 border border-white/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] px-4 py-3 shadow-[0_14px_40px_rgba(2,6,23,0.22)] backdrop-blur-2xl sm:flex-row sm:px-6 sm:py-3.5">
          <p className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            Copyright © {year} Charu Mehra. All rights reserved.
          </p>

          <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/8 text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:text-white"
                >
                  <Icon className="text-[1.05rem]" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;