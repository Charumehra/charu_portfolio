import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import GraphicBackground from "./components/GraphicBackground";
import CursorTrail from "./components/CursorTrail";

function App() {
  return (
    <div
      data-theme="dark"
      className="min-h-screen scroll-smooth relative isolate bg-[color:var(--page-bg)] text-[color:var(--page-fg)]"
    >
      <div className="fixed inset-0 z-0 bg-[#000000]" />
      <div className="space-vignette z-[1]" />
      <div className="dev-grid z-[2]" />
      <div className="square-spark-layer z-[3]" />
      <div className="aurora-haze z-[4]" />
      <div className="nebula-blob nebula-blob-one z-[5]" />
      <div className="nebula-blob nebula-blob-two z-[5]" />
      <div className="nebula-blob nebula-blob-three z-[5]" />
      <div className="star-dust z-[6]" />
      <div className="tiny-starfield z-[7]" />
      <div className="meteor-layer z-[8]" />

      <GraphicBackground />
      <CursorTrail />

      <div className="relative z-10">
        <Navbar />

        <Home />

        <About />

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-6 text-[color:var(--page-fg)]"
        >
          <div className="max-w-6xl text-center space-y-6 section-panel">
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

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-6 text-[color:var(--page-fg)]"
        >
          <div className="max-w-6xl text-center space-y-6 section-panel">
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

    </div>
  );
}

export default App;