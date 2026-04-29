"use client";

import CommandLine from "@/components/CommandLine";
import TypeWriter from "@/components/TypeWriter";

export default function HomeSection() {
  return (
    <section className="mb-16">
      <CommandLine command="whoami" />

      <div className="pl-1">
        <h1
          className="font-bold mb-5 text-glow-green-lg tracking-tight"
          style={{
            color: "var(--terminal-green)",
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Kavindu Wijegunasekara
        </h1>

        <div
          className="font-semibold mb-6"
          style={{
            fontSize: "clamp(18px, 3vw, 30px)",
            color: "var(--terminal-cyan)",
            lineHeight: 1.3,
          }}
        >
          <TypeWriter text="Software Engineer" speed={75} delay={600} />
        </div>

        <p
          className="max-w-[720px]"
          style={{
            color: "var(--terminal-gray)",
            fontSize: "13.5px",
            lineHeight: "1.85",
            letterSpacing: "0.01em",
          }}
        >
          Problem-solver and BSc (Hons) Information Technology candidate at the
          University of Moratuwa with a proven track record of adapting to diverse
          tech stacks to deliver impactful solutions. From building microservices
          architectures with Spring Boot to developing immersive VR experiences in
          Unity, I thrive on tackling challenges across the full technology spectrum.
          Having completed a Software Engineering internship, I am seeking a Software
          Engineer role to contribute innovative solutions while continuously
          expanding my technical versatility.
        </p>

        {/* Quick-stat row */}
        <div className="flex flex-wrap gap-6 mt-8">
          {[
            { label: "CGPA", value: "3.6 / 4.0" },
            { label: "Status", value: "Open to work" },
            { label: "Location", value: "Sri Lanka" },
          ].map(({ label, value }) => (
            <div key={label}>
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
