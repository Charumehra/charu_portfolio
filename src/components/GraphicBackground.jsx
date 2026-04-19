import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const GraphicBackground = () => {
  const [ready, setReady] = useState(false);

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
          value: 110,
          density: { enable: true, width: 900, height: 900 },
        },
        color: {
          value: ["#7DD3FC", "#A5B4FC", "#C4B5FD", "#BAE6FD"],
        },
        links: {
          enable: true,
          distance: 110,
          color: "#93C5FD",
          opacity: 0.1,
          width: 1,
          triangles: {
            enable: true,
            color: "#A5B4FC",
            opacity: 0.03,
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
          value: { min: 0.14, max: 0.62 },
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
    []
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
