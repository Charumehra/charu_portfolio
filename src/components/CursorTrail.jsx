import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isActive, setIsActive] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const dotColor = "bg-blue-400/80";
  const ringColor = "border-blue-400/40";
  const shadowColor = "rgba(96, 165, 250, 0.5)";

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const updatePointerType = () => setIsCoarsePointer(coarseQuery.matches);

    updatePointerType();
    coarseQuery.addEventListener("change", updatePointerType);

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsActive(true);
    };

    const handleLeave = () => setIsActive(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      coarseQuery.removeEventListener("change", updatePointerType);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (isCoarsePointer) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      <motion.div
        className={`absolute w-4 h-4 rounded-full ${dotColor} shadow-lg`}
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          opacity: isActive ? 0.9 : 0,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 260, mass: 0.25 }}
        style={{
          boxShadow: `0 0 20px ${shadowColor}`,
          willChange: "transform, opacity",
        }}
      />

      <motion.div
        className={`absolute w-14 h-14 rounded-full border-2 ${ringColor}`}
        animate={{
          x: position.x - 28,
          y: position.y - 28,
          opacity: isActive ? 0.5 : 0,
          scale: isActive ? [1, 1.08, 1] : 1,
        }}
        transition={{
          x: { duration: 0.22, ease: "easeOut" },
          y: { duration: 0.22, ease: "easeOut" },
          opacity: { duration: 0.3, ease: "easeOut" },
          scale: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ willChange: "transform, opacity" }}
      />
    </div>
  );
};

export default CursorTrail;
