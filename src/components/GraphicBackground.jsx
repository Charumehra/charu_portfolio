import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const GraphicBackground = ({ theme = "dark" }) => {
  const [ready, setReady] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: "transparent" } },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 130,
            links: { opacity: 0.28 },
          },
        },
      },
      particles: {
        number: {
          value: isLight ? 80 : 110,
          density: { enable: true, width: 900, height: 900 },
        },
        color: {
          value: isLight
            ? ["#0ea5e9", "#3b82f6", "#6366f1", "#0891b2"]
            : ["#7DD3FC", "#A5B4FC", "#C4B5FD", "#BAE6FD"],
        },
        links: {
          enable: true,
          distance: 110,
          color: isLight ? "#60a5fa" : "#93C5FD",
          opacity: isLight ? 0.14 : 0.1,
          width: 1,
          triangles: {
            enable: true,
            color: isLight ? "#60a5fa" : "#A5B4FC",
            opacity: isLight ? 0.05 : 0.03,
          },
        },
        move: {
          enable: true,
          direction: "none",
          outModes: { default: "out" },
          random: false,
          speed: 0.5,
          straight: false,
          attract: { enable: true, rotateX: 280, rotateY: 560 },
        },
        opacity: {
          value: isLight ? { min: 0.22, max: 0.7 } : { min: 0.14, max: 0.62 },
          animation: {
            enable: true,
            speed: 0.55,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
          polygon: { sides: 5 },
        },
        size: {
          value: { min: 0.8, max: 3.2 },
          animation: {
            enable: true,
            speed: 1.8,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
    }),
    [isLight]
  );

  if (!ready) return null;

  return (
    <div className="fixed inset-0 pointer-events-none opacity-90" style={{ zIndex: -9 }}>
      <Particles id="graphic-background" options={options} />
    </div>
  );
};

export default GraphicBackground;
