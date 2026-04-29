"use client";

import CommandLine from "@/components/CommandLine";
import TypeWriter from "@/components/TypeWriter";

export default function HomeSection() {
  return (
    <section className="mb-16">
      <CommandLine command="whoami" />

      <div className="pl-1">
        {/* Name */}
        <h1
          className="font-bold mb-8 text-glow-green-lg tracking-tight"
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
          className="font-semibold mb-14"
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "var(--terminal-cyan)",
            lineHeight: 1.3,
          }}
        >
          <TypeWriter text="Software Engineer" speed={75} delay={500} />
        </div>

        {/* Bio */}
        <p
          className="max-w-[680px]"
          style={{
            color: "var(--terminal-white)",
            fontSize: "14px",
            lineHeight: "1.9",
            letterSpacing: "0.01em",
          }}
        >
          Problem-solver and BSc (Hons) Information Technology candidate at the
          University of Moratuwa with a proven track record of adapting to
          diverse tech stacks to deliver impactful solutions. From building
          microservices architectures with Spring Boot to developing immersive VR
          experiences in Unity, I thrive on tackling challenges across the full
          technology spectrum. Having completed a Software Engineering
          internship, I am seeking a Software Engineer role to contribute
          innovative solutions while continuously expanding my technical
          versatility.
        </p>
      </div>
    </section>
  );
}
