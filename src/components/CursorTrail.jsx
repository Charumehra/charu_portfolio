import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isActive, setIsActive] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const pointerRef = useRef({ x: -200, y: -200 });
  const frameRef = useRef(null);
  const activeRef = useRef(false);

  const dotColor = "bg-blue-400/80";
  const ringColor = "border-blue-400/40";
  const shadowColor = "rgba(96, 165, 250, 0.5)";

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const updatePointerType = () => setIsCoarsePointer(coarseQuery.matches);

    updatePointerType();
    coarseQuery.addEventListener("change", updatePointerType);

    const flushPosition = () => {
      setPosition(pointerRef.current);
      frameRef.current = null;
    };

    const handleMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      if (!activeRef.current) {
        activeRef.current = true;
        setIsActive(true);
      }
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(flushPosition);
      }
    };

    const handleLeave = () => {
      activeRef.current = false;
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      coarseQuery.removeEventListener("change", updatePointerType);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (isCoarsePointer) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      <div className="relative h-full w-full">
        <div
          className={`absolute w-4 h-4 rounded-full ${dotColor} shadow-lg`}
          style={{
            transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
            opacity: isActive ? 0.9 : 0,
            transition:
              "transform 120ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease-out",
            boxShadow: `0 0 20px ${shadowColor}`,
            willChange: "transform, opacity",
          }}
        />

        <div
          className={`absolute w-14 h-14 rounded-full border-2 ${ringColor}`}
          style={{
            transform: `translate3d(${position.x - 28}px, ${position.y - 28}px, 0) scale(${isActive ? 1.04 : 1})`,
            opacity: isActive ? 0.5 : 0,
            transition:
              "transform 180ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease-out",
            willChange: "transform, opacity",
          }}
        />
      </div>
    </div>
  );
};

export default CursorTrail;
