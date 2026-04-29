import CommandLine from "@/components/CommandLine";

const EDUCATION = [
  {
    institution: "University of Moratuwa",
    period: "Jun 2022 – Jun 2026",
    degree: "BSc (Hons) in Information Technology",
    field: "Faculty of Information Technology",
    grade: "CGPA: 3.6",
    current: true,
  },
  {
    institution: "Rahula College",
    period: "Jul 2017 – Nov 2020",
    degree: "Advanced Level — Physical Science",
    field: "Combined Maths (A) · Chemistry (A) · Physics (B)",
    grade: null,
    current: false,
  },
];

export default function EducationSection() {
  return (
    <section className="mb-16">
      <CommandLine command="cat education.txt" />

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[7px] top-3 bottom-6 w-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        <div className="space-y-10">
          {EDUCATION.map((item) => (
            <div key={item.institution} className="relative pl-10">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 ${item.current ? "dot-pulse" : ""}`}
                style={{
                  borderColor: item.current ? "var(--terminal-cyan)" : "rgba(107,228,224,0.4)",
                  background: item.current ? "rgba(107,228,224,0.2)" : "rgba(107,228,224,0.07)",
                }}
              />

              {/* Card */}
              <div
                className="px-6 py-5 rounded-r-md transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderLeft: `2px solid ${item.current ? "var(--terminal-cyan)" : "rgba(107,228,224,0.35)"}`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.boxShadow = "0 4px 24px rgba(107,228,224,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Institution row */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3
                    className="font-semibold tracking-wide"
                    style={{ fontSize: "15px", color: "var(--terminal-cyan)" }}
                  >
                    {item.institution}
                  </h3>
                  {item.current && (
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full tracking-widest uppercase"
                      style={{
                        background: "rgba(107,228,224,0.1)",
                        color: "var(--terminal-cyan)",
                        border: "1px solid rgba(107,228,224,0.3)",
                      }}
                    >
                      In Progress
                    </span>
                  )}
                </div>

                {/* Period */}
                <div
                  className="text-[12px] mb-3"
                  style={{ color: "var(--terminal-gray)" }}
                >
                  {item.period}
                </div>

                {/* Degree (primary) */}
                <div
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "14px",
                    color: "var(--terminal-white)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.degree}
                </div>

                {/* Field / results */}
                <div
                  className="text-[13px] mb-3"
                  style={{ color: "var(--terminal-gray)", lineHeight: "1.7" }}
                >
                  {item.field}
                </div>

                {/* Grade badge */}
                {item.grade && (
                  <span
                    className="inline-block text-[11px] px-3 py-1 rounded-full tracking-wide"
                    style={{
                      color: "var(--terminal-amber)",
                      background: "rgba(255,184,108,0.1)",
                      border: "1px solid rgba(255,184,108,0.25)",
                    }}
                  >
                    {item.grade}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
