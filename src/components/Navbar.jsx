import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative px-3 py-2 transition-all duration-300";

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl backdrop-blur-2xl backdrop-saturate-150 rounded-[1.25rem] text-[color:var(--page-fg)] z-50 bg-[color:var(--page-surface)]/85 border border-white/15 shadow-[0_18px_60px_rgba(2,6,23,0.28)] ring-1 ring-white/10">
      <div className="flex justify-between items-center px-6 py-4">

        <h1 className="font-display font-black text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--page-accent)] to-cyan-400">Charu Mehra</h1>

        <ul className="hidden md:flex gap-8 items-center">

          <li>
            <a
              href="#home"
              className={`${linkBase} hover:text-[color:var(--page-accent)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-[color:var(--page-accent)] after:to-cyan-400 after:transition-all after:rounded-full`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`${linkBase} hover:scale-110 hover:text-[color:var(--page-accent)] transition-all`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`${linkBase} hover:text-[color:var(--page-accent)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all`}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`${linkBase} hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all`}
            >
              Contact
            </a>
          </li>

          

        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setOpen(!open)} className="text-xl px-2">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mb-4 mt-1 flex flex-col gap-3 rounded-xl border border-white/15 bg-[color:var(--page-surface)]/90 backdrop-blur-2xl backdrop-saturate-150 px-4 py-4 text-[color:var(--page-fg)] shadow-[0_16px_50px_rgba(2,6,23,0.2)]">
          <a href="#home" className="py-1">Home</a>
          <a href="#about" className="py-1">About</a>
          <a href="#projects" className="py-1">Projects</a>
          <a href="#contact" className="py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;