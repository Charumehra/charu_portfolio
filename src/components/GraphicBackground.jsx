import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useReducedMotion } from "framer-motion";

const GraphicBackground = () => {
  const [ready, setReady] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setReady(true);
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const updateMode = () => setIsLightMode(mediaQuery.matches);

    updateMode();
    mediaQuery.addEventListener("change", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
    };
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: isLightMode ? 30 : 45,
      detectRetina: true,
      background: { color: { value: "transparent" } },
      interactivity: {
        events: {
          onHover: { enable: false, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 90,
            links: { opacity: 0.16 },
          },
        },
      },
      particles: {
        number: {
          value: isLightMode ? 20 : 45,
          density: { enable: true, width: 900, height: 900 },
        },
        color: {
          value: ["#7DD3FC", "#A5B4FC", "#C4B5FD", "#BAE6FD"],
        },
        links: {
          enable: true,
          distance: isLightMode ? 85 : 100,
          color: "#93C5FD",
          opacity: isLightMode ? 0.05 : 0.08,
          width: 1,
          triangles: {
            enable: false,
            color: "#A5B4FC",
            opacity: 0.03,
          },
        },
        move: {
          enable: true,
          direction: "none",
          outModes: { default: "out" },
          random: false,
          speed: isLightMode ? 0.28 : 0.38,
          straight: false,
          attract: { enable: false, rotateX: 280, rotateY: 560 },
        },
        opacity: {
          value: { min: 0.12, max: isLightMode ? 0.36 : 0.5 },
          animation: {
            enable: true,
            speed: isLightMode ? 0.35 : 0.42,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
          polygon: { sides: 5 },
        },
        size: {
          value: { min: 0.8, max: isLightMode ? 2.1 : 2.6 },
          animation: {
            enable: true,
            speed: isLightMode ? 1 : 1.2,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
    }),
    [isLightMode]
  );

  if (!ready) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9, opacity: 1 }}
    >
      <Particles id="graphic-background" options={options} />
    </div>
  );
};

export default GraphicBackground;
