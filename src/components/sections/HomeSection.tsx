"use client";

import CommandLine from "@/components/CommandLine";
import TypeWriter from "@/components/TypeWriter";

const HIGHLIGHTS = [
  "Full-stack web development with Next.js, NestJS & TypeScript",
  "Immersive VR/AR experiences with Unity & C#",
  "Mobile applications with Flutter & Swift",
  "Microservices architecture with Spring Boot & Docker",
];

const STATS = [
  { label: "CGPA", value: "3.6 / 4.0" },
  { label: "Status", value: "Open to work" },
  { label: "Location", value: "Sri Lanka" },
];

export default function HomeSection() {
  return (
    <section className="mb-16">
      <CommandLine command="whoami" />

      <div className="pl-1">
        {/* Name */}
        <h1
          className="font-bold mb-4 text-glow-green-lg tracking-tight"
          style={{
            color: "var(--terminal-green)",
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Kavindu Wijegunasekara
        </h1>

        {/* Typed role */}
        <div
          className="font-semibold mb-8"
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "var(--terminal-cyan)",
            lineHeight: 1.3,
          }}
        >
          <TypeWriter text="Software Engineer" speed={75} delay={500} />
        </div>

        {/* Short intro */}
        <p
          className="max-w-[680px] mb-6"
          style={{
            color: "var(--terminal-white)",
            fontSize: "14px",
            lineHeight: "1.8",
            letterSpacing: "0.01em",
          }}
        >
          BSc (Hons) IT candidate at the University of Moratuwa with hands-on
          internship experience at 4Axis. I adapt quickly to new stacks and
          thrive on building things across the full technology spectrum.
        </p>

        {/* Highlights list */}
        <ul className="mb-10 space-y-2">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 text-[13px]"
              style={{ color: "var(--terminal-gray)", lineHeight: "1.7" }}
            >
              <span
                className="shrink-0 mt-[3px]"
                style={{ color: "var(--terminal-green)" }}
              >
                ▸
              </span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stat strip */}
        <div
          className="flex flex-wrap gap-px"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            overflow: "hidden",
            display: "inline-flex",
          }}
        >
          {STATS.map(({ label, value }, i) => (
            <div
              key={label}
              className="px-5 py-3"
              style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                className="text-[10px] tracking-widest uppercase mb-1"
                style={{ color: "var(--terminal-gray)" }}
              >
                {label}
              </div>
              <div
                className="text-[13px] font-semibold"
                style={{ color: "var(--terminal-amber)" }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
