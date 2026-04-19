import { motion } from "framer-motion";
import {
  Zap,
  Code,
  Rocket,
  Sparkles,
  Target,
  Lightbulb,
  Database,
  GitBranch,
} from "lucide-react";

const FloatingIcons = ({ theme = "dark" }) => {
  const isLight = theme === "light";
  
  // Icon colors based on theme - using CSS variables for consistency
  const strokeColor = isLight ? "#64748b" : "#60a5fa"; // slate-500 for light, blue-400 for dark
  const opacity = isLight ? 0.32 : 0.28;
  
  const icons = [
    { Icon: Zap, top: "8%", left: "8%", delay: 0 },
    { Icon: Code, top: "12%", right: "10%", delay: 0.4 },
    { Icon: Rocket, top: "34%", left: "12%", delay: 0.8 },
    { Icon: Sparkles, top: "42%", right: "14%", delay: 1.1 },
    { Icon: Target, top: "68%", left: "10%", delay: 0.5 },
    { Icon: Lightbulb, top: "78%", right: "12%", delay: 0.9 },
  ];

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: strokeColor,
            opacity: opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 12, 0],
            rotate: [0, 6, 0],
            opacity: [opacity * 0.4, opacity, opacity * 0.4],
          }}
          transition={{
            duration: 7 + index * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon size={44} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
