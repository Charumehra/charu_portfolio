import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GraphicBackground from "./components/GraphicBackground";
import CursorTrail from "./components/CursorTrail";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <div
      data-theme={theme}
      className="min-h-screen scroll-smooth relative overflow-hidden bg-[color:var(--page-bg)] text-[color:var(--page-fg)]"
    >

  <GraphicBackground theme={theme} />
      <CursorTrail theme={theme} />

      {/* 🌑 Base Dark Background */}
      <div className={`fixed inset-0 -z-10 ${isLight ? "bg-[#f8fafc]" : "bg-[#02030f]"}`} />

      {/* ◻ Space Grid Overlay */}
      <div className="dev-grid" />

      {/* ✨ Nebula Clouds */}
      <div className="aurora-haze" />
      <div className="nebula-blob nebula-blob-one" />
      <div className="nebula-blob nebula-blob-two" />
      <div className="nebula-blob nebula-blob-three" />
      <div className="star-dust" />

      {/* 🧭 Navbar */}
      <Navbar theme={theme} onToggleTheme={() => setTheme(isLight ? "dark" : "light")} />

      {/* 🏠 Home */}
      <Home theme={theme} />

      {/* 📌 About */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 text-[color:var(--page-fg)]"
      >
        <div className="max-w-6xl text-center space-y-6">
          <p className="font-display text-xs md:text-sm uppercase tracking-[0.28em] text-[color:var(--page-accent)]">
            About Me
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.98]">
            Designing polished web experiences
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-[color:var(--page-muted)] leading-relaxed">
            I design and build polished web experiences with stronger spacing, larger type, and a more expansive visual layout.
          </p>
        </div>
      </section>

      {/* 💼 Projects */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 bg-[color:var(--page-surface)]"
      >
        <div className="max-w-6xl text-center space-y-6">
          <p className="font-display text-xs md:text-sm uppercase tracking-[0.28em] text-[color:var(--page-accent)]">
            Projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.98]">
            Work that feels modern and refined
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-[color:var(--page-muted)] leading-relaxed">
            A selection of work focused on performance, clarity, and interfaces that feel larger and more immersive.
          </p>
        </div>
      </section>

      {/* 📩 Contact */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 text-[color:var(--page-fg)]"
      >
        <div className="max-w-6xl text-center space-y-6">
          <p className="font-display text-xs md:text-sm uppercase tracking-[0.28em] text-[color:var(--page-accent)]">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.98]">
            Let&apos;s build something striking
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-[color:var(--page-muted)] leading-relaxed">
            If you want a sharper portfolio, a bigger visual presence, or a more animated experience, let&apos;s build it.
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;