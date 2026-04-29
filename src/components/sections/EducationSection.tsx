const EDUCATION = [
  {
    institution: "University of Moratuwa",
    period: "Jun 2022 - Jun 2026",
    degree: "Bachelor of Science Honours in Information Technology",
    details: "Information Technology",
    grade: "CGPA: 3.6",
  },
  {
    institution: "Rahula College",
    period: "Jul 2017 - Nov 2020",
    degree: "Advanced Level studies",
    details: "Physical Science stream",
    grade: "Combined Mathematics (A), Chemistry (A), Physics (B)",
  },
];

export default function EducationSection() {
  return (
    <section className="section-visible mb-14">
      <div className="flex items-start gap-3 mb-5">
        <span className="font-semibold shrink-0" style={{ color: "var(--terminal-cyan)" }}>
          kavindu@portfolio:~$
        </span>
        <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
          cat education.txt
        </span>
      </div>
      <div>
        {EDUCATION.map((item) => (
          <div
            key={item.institution}
            className="px-5 py-5 mb-6 rounded transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderLeft: "3px solid var(--terminal-cyan)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderLeftColor = "var(--terminal-green)";
              el.style.boxShadow = "0 4px 20px rgba(107,228,224,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.borderLeftColor = "var(--terminal-cyan)";
              el.style.boxShadow = "none";
            }}
          >
            <h3
              className="text-lg font-semibold mb-1"
              style={{ color: "var(--terminal-green)" }}
            >
              {item.institution}
            </h3>
            <div
              className="text-sm font-medium mb-2"
              style={{ color: "var(--terminal-cyan)" }}
            >
              {item.period}
            </div>
            <div
              className="text-[15px] font-medium mb-2"
              style={{ color: "var(--terminal-white)" }}
            >
              {item.degree}
            </div>
            <div className="text-[13px] leading-[1.7]" style={{ color: "var(--terminal-gray)" }}>
              {item.details}
            </div>
            <span
              className="inline-block mt-2 text-xs px-2 py-0.5 rounded-xl"
              style={{
                color: "var(--terminal-amber)",
                background: "rgba(255,184,108,0.1)",
              }}
            >
              {item.grade}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
