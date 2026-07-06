import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const GraphicBackground = lazy(() => import("./components/GraphicBackground"));
const CursorTrail = lazy(() => import("./components/CursorTrail"));

function App() {
  return (
    <div
      data-theme="dark"
      className="min-h-screen relative isolate bg-slate-950 text-slate-100 antialiased overflow-x-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      {/* Structural Low-frequency Visual Mesh Overlays */}
      <div className="fixed inset-0 z-0 bg-[#030712]" />
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000_100%)] pointer-events-none" />

      {/* Asynchronous Performance Background Processing */}
      <Suspense fallback={null}>
        <GraphicBackground />
        <CursorTrail />
      </Suspense>

      {/* Main Structural Z-Indexed Document Flow */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Home />
          <About />
          <Experience />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;