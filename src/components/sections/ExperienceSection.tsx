import CommandLine from "@/components/CommandLine";

const EXPERIENCE = [
  {
    title: "Associate Software Engineer",
    type: "Part-time",
    company: "4Axis",
    period: "Oct 2025 – Present",
    duration: "4 mos",
    current: true,
    description:
      "Working on iOS Swift applications, specifically the implementation and maintenance of the DrawKids iOS application.",
    stack: ["iOS", "Swift", "Mobile Development"],
  },
  {
    title: "Software Engineer Intern",
    type: "Internship",
    company: "4Axis",
    period: "Feb 2025 – Sep 2025",
    duration: "8 mos",
    current: false,
    description:
      "Worked on Virtual Reality (VR) applications using Unity and C#. Contributed to immersive experience development and core functionality implementation.",
    stack: ["Unity", "C#", "VR", "Virtual Reality"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="mb-16">
      <CommandLine command="cat work_experience.log" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[7px] top-3 bottom-6 w-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        <div className="space-y-10">
          {EXPERIENCE.map((item) => (
            <div key={item.title} className="relative pl-10">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 ${item.current ? "dot-pulse" : ""}`}
                style={{
                  borderColor: item.current ? "var(--terminal-green)" : "var(--terminal-amber)",
                  background: item.current ? "rgba(0,255,65,0.2)" : "rgba(255,184,108,0.15)",
                }}
              />

              {/* Card */}
              <div
                className="px-6 py-5 rounded-r-md transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderLeft: `2px solid ${item.current ? "var(--terminal-green)" : "var(--terminal-amber)"}`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.boxShadow = "0 4px 24px rgba(0,255,65,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Title row */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3
                    className="font-semibold tracking-wide"
                    style={{ fontSize: "15px", color: "var(--terminal-green)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full tracking-widest uppercase"
                    style={{
                      background: item.current
                        ? "rgba(0,255,65,0.12)"
                        : "rgba(255,255,255,0.07)",
                      color: item.current ? "var(--terminal-green)" : "var(--terminal-gray)",
                      border: `1px solid ${item.current ? "rgba(0,255,65,0.3)" : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {item.current ? "Current" : item.type}
                  </span>
                </div>

                {/* Company + period */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="font-semibold text-[13px]"
                    style={{ color: "var(--terminal-cyan)" }}
                  >
                    {item.company}
                  </span>
                  <span style={{ color: "var(--terminal-gray)", fontSize: "11px" }}>·</span>
                  <span style={{ color: "var(--terminal-gray)", fontSize: "12px" }}>
                    {item.period}
                  </span>
                  <span
                    className="text-[11px] px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--terminal-gray)",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {item.duration}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="mb-4"
                  style={{
                    color: "var(--terminal-gray)",
                    fontSize: "13px",
                    lineHeight: "1.8",
                  }}
                >
                  {item.description}
                </p>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-sm tracking-wide"
                      style={{
                        color: "var(--terminal-green-dim)",
                        background: "rgba(0,255,65,0.07)",
                        border: "1px solid rgba(0,255,65,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
