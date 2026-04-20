import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const desktopLinkBase =
    "relative rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-slate-100/90 transition-all duration-300 hover:text-white hover:bg-white/10";

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/15 bg-slate-950/65 text-[color:var(--page-fg)] shadow-[0_24px_70px_rgba(2,6,23,0.45)] ring-1 ring-cyan-400/10 backdrop-blur-2xl backdrop-saturate-150 sm:top-4 sm:w-[calc(100%-2rem)]">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-400/10 text-xs font-black tracking-wider text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-300/20">
            CM
          </span>
          <span className="font-display text-xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--page-accent)] to-cyan-300 sm:text-2xl">
            Charu Mehra
          </span>
        </a>

        <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${desktopLinkBase} after:absolute after:inset-x-4 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[color:var(--page-accent)] after:to-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 shadow-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-all duration-300 ${
                open ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-all duration-300 ${
                open ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 mt-1 flex flex-col gap-2 rounded-2xl border border-white/15 bg-slate-900/85 p-3 text-[color:var(--page-fg)] shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold tracking-wide text-slate-100/90 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;