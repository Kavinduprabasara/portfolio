import CommandLine from "@/components/CommandLine";

const EDUCATION = [
  {
    institution: "University of Moratuwa",
    period: "Jun 2022 – Jun 2026",
    degree: "Bachelor of Science Honours in Information Technology",
    details: "Information Technology",
    grade: "CGPA: 3.6",
  },
  {
    institution: "Rahula College",
    period: "Jul 2017 – Nov 2020",
    degree: "Advanced Level studies",
    details: "Physical Science stream",
    grade: "Combined Mathematics (A) · Chemistry (A) · Physics (B)",
  },
];

export default function EducationSection() {
  return (
    <section className="mb-16">
      <CommandLine command="cat education.txt" />
      <div>
        {EDUCATION.map((item) => (
          <div
            key={item.institution}
            className="px-6 py-6 mb-5 rounded transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderLeft: "3px solid var(--terminal-cyan)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderLeftColor = "var(--terminal-green)";
              el.style.boxShadow = "0 4px 24px rgba(107,228,224,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.borderLeftColor = "var(--terminal-cyan)";
              el.style.boxShadow = "none";
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3
                className="font-semibold tracking-wide"
                style={{ fontSize: "16px", color: "var(--terminal-green)" }}
              >
                {item.institution}
              </h3>
              <span
                className="text-[11px]"
                style={{ color: "var(--terminal-gray)", letterSpacing: "0.04em" }}
              >
                {item.period}
              </span>
            </div>

            <div
              className="font-medium mb-3"
              style={{ fontSize: "14px", color: "var(--terminal-white)", lineHeight: 1.4 }}
            >
              {item.degree}
            </div>

            <div
              className="mb-3"
              style={{ color: "var(--terminal-gray)", fontSize: "13px", lineHeight: "1.7" }}
            >
              {item.details}
            </div>

            <span
              className="inline-block text-[11px] px-3 py-1 rounded-full tracking-wide"
              style={{
                color: "var(--terminal-amber)",
                background: "rgba(255,184,108,0.1)",
                border: "1px solid rgba(255,184,108,0.2)",
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
