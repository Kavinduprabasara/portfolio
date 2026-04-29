import CommandLine from "@/components/CommandLine";

const EXPERIENCE = [
  {
    title: "Associate Software Engineer",
    type: "Part-time",
    company: "4Axis",
    period: "Oct 2025 – Present · 4 mos",
    description:
      "Working on iOS Swift applications, specifically the implementation and maintenance of the DrawKids iOS application.",
    stack: ["iOS", "Swift", "Mobile Development"],
  },
  {
    title: "Software Engineer Intern",
    type: "Internship",
    company: "4Axis",
    period: "Feb 2025 – Sep 2025 · 8 mos",
    description:
      "Worked on Virtual Reality (VR) applications using Unity and C#. Contributed to immersive experience development and core functionality implementation.",
    stack: ["Unity", "C#", "VR", "Virtual Reality"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="mb-16">
      <CommandLine command="cat work_experience.log" />
      <div>
        {EXPERIENCE.map((item) => (
          <div
            key={item.title}
            className="px-6 py-6 mb-5 rounded transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderLeft: "3px solid var(--terminal-amber)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderLeftColor = "var(--terminal-green)";
              el.style.boxShadow = "0 4px 24px rgba(0,255,65,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.borderLeftColor = "var(--terminal-amber)";
              el.style.boxShadow = "none";
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3
                className="font-semibold tracking-wide"
                style={{ fontSize: "16px", color: "var(--terminal-green)" }}
              >
                {item.title}
              </h3>
              <span
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "var(--terminal-white)",
                  letterSpacing: "0.05em",
                }}
              >
                {item.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 items-center mb-4">
              <span
                className="font-semibold text-[13px]"
                style={{ color: "var(--terminal-cyan)" }}
              >
                {item.company}
              </span>
              <span style={{ color: "var(--terminal-gray)", fontSize: "12px" }}>·</span>
              <span style={{ color: "var(--terminal-gray)", fontSize: "12px" }}>
                {item.period}
              </span>
            </div>

            <p
              className="mb-4"
              style={{
                color: "var(--terminal-gray)",
                fontSize: "13px",
                lineHeight: "1.8",
                letterSpacing: "0.01em",
              }}
            >
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-sm tracking-wide"
                  style={{
                    color: "var(--terminal-green-dim)",
                    background: "rgba(0,255,65,0.08)",
                    border: "1px solid rgba(0,255,65,0.15)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
