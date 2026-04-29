"use client";

import { useState } from "react";
import Link from "next/link";

export type SectionId =
  | "home"
  | "skills"
  | "experience"
  | "education"
  | "projects"
  | "contact";

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: "home", label: "about/" },
  { id: "skills", label: "skills/" },
  { id: "experience", label: "experience/" },
  { id: "education", label: "education/" },
  { id: "projects", label: "projects/" },
  { id: "contact", label: "contact/" },
];

interface NavProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

export default function Nav({ active, onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(id: SectionId) {
    onNavigate(id);
    setMenuOpen(false);
  }

  return (
    <nav
      className="mb-16 pb-6"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-semibold" style={{ color: "var(--terminal-cyan)" }}>
            kavindu@portfolio:~$
          </span>
          <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
            ls navigation/
          </span>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl leading-none px-2 py-1 transition-colors"
          style={{ color: "var(--terminal-green)", background: "none", border: "none" }}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "×" : "⋮"}
        </button>
      </div>

      {/* Links */}
      <div
        className={`flex-wrap gap-6 mt-3 ${
          menuOpen ? "flex flex-col gap-3 mt-5 pt-3 border-t border-dashed border-[var(--terminal-gray)]" : "hidden md:flex"
        }`}
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`text-sm px-2 py-1 transition-all duration-300 cursor-pointer border-none bg-transparent font-mono ${
              active === id ? "nav-link-active" : ""
            }`}
            style={{
              color: active === id ? "var(--terminal-green)" : "var(--terminal-amber)",
              fontFamily: "inherit",
            }}
          >
            {label}
          </button>
        ))}
        <Link
          href="/terminal"
          className="text-sm px-2 py-1 transition-all duration-300"
          style={{ color: "var(--terminal-amber)", textDecoration: "none" }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--terminal-green)";
            (e.target as HTMLElement).style.background = "rgba(0,255,65,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--terminal-amber)";
            (e.target as HTMLElement).style.background = "transparent";
          }}
        >
          terminal/
        </Link>
      </div>
    </nav>
  );
}
