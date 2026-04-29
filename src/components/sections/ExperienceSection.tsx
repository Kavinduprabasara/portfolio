const EXPERIENCE = [
  {
    title: "Associate Software Engineer",
    type: "Part-time",
    company: "4Axis · Oct 2025 - Present (4 mos)",
    description:
      "Working on iOS Swift applications, specifically the implementation and maintenance of the DrawKids iOS application.",
    stack: ["iOS", "Swift", "Mobile Development"],
  },
  {
    title: "Software Engineer Intern",
    type: "Internship",
    company: "4Axis · Feb 2025 - Sep 2025 (8 mos)",
    description:
      "Worked on Virtual Reality (VR) applications using Unity and C#. Contributed to immersive experience development and core functionality implementation.",
    stack: ["Unity", "C#", "VR", "Virtual Reality"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-visible mb-14">
      <div className="flex items-start gap-3 mb-5">
        <span className="font-semibold shrink-0" style={{ color: "var(--terminal-cyan)" }}>
          kavindu@portfolio:~$
        </span>
        <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
          cat work_experience.log
        </span>
      </div>
      <div>
        {EXPERIENCE.map((item) => (
          <div
            key={item.title}
            className="px-5 py-5 mb-6 rounded transition-all duration-300 group"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderLeft: "3px solid var(--terminal-amber)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderLeftColor = "var(--terminal-green)";
              el.style.boxShadow = "0 4px 20px rgba(0,255,65,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.borderLeftColor = "var(--terminal-amber)";
              el.style.boxShadow = "none";
            }}
          >
            <h3
              className="text-lg font-semibold mb-1 flex justify-between items-center flex-wrap gap-2"
              style={{ color: "var(--terminal-green)" }}
            >
              {item.title}
              <span
                className="text-[11px] font-normal px-2 py-0.5 rounded-[10px]"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "var(--terminal-white)",
                }}
              >
                {item.type}
              </span>
            </h3>
            <div
              className="text-sm font-medium mb-3"
              style={{ color: "var(--terminal-cyan)" }}
            >
              {item.company}
            </div>
            <p className="text-[13px] leading-[1.7] mb-3" style={{ color: "var(--terminal-gray)" }}>
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-1.5 py-0.5 rounded-sm"
                  style={{
                    color: "var(--terminal-green-dim)",
                    background: "rgba(0,255,65,0.1)",
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
