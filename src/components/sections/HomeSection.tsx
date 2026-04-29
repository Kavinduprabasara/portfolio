"use client";

import { useEffect, useRef } from "react";

export default function HomeSection() {
  const roleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!roleRef.current) return;
    const existing = roleRef.current.querySelector(".cursor-blink");
    if (!existing) {
      const cursor = document.createElement("span");
      cursor.className = "cursor-blink";
      roleRef.current.appendChild(cursor);
    }
  }, []);

  return (
    <section className="section-visible mb-14">
      <div className="flex items-start gap-3 mb-5">
        <span className="font-semibold shrink-0" style={{ color: "var(--terminal-cyan)" }}>
          kavindu@portfolio:~$
        </span>
        <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
          whoami
        </span>
      </div>
      <div>
        <h1
          className="text-[clamp(24px,5vw,48px)] font-bold mb-4 text-glow-green-lg"
          style={{ color: "var(--terminal-green)" }}
        >
          Kavindu Wijegunasekara
        </h1>
        <div
          ref={roleRef}
          className="text-[clamp(18px,3vw,32px)] font-semibold mb-5"
          style={{ color: "var(--terminal-cyan)" }}
        >
          Software Engineer
        </div>
        <p className="text-sm max-w-[800px] leading-[1.8]" style={{ color: "var(--terminal-gray)" }}>
          Problem-solver and BSc (Hons) Information Technology candidate at the University of
          Moratuwa with a proven track record of adapting to diverse tech stacks to deliver
          impactful solutions. From building microservices architectures with Spring Boot to
          developing immersive VR experiences in Unity, I thrive on tackling challenges across
          the full technology spectrum. Having completed a Software Engineering internship, I am
          seeking a Software Engineer role to contribute innovative solutions while continuously
          expanding my technical versatility.
        </p>
      </div>
    </section>
  );
}
