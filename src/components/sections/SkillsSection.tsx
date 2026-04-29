import CommandLine from "@/components/CommandLine";

const SKILL_GROUPS = [
  {
    label: "Languages",
    color: "var(--terminal-green)",
    bg: "rgba(0,255,65,0.06)",
    border: "rgba(0,255,65,0.2)",
    hoverBg: "rgba(0,255,65,0.12)",
    hoverBorder: "rgba(0,255,65,0.5)",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C#", "Kotlin", "Dart", "C", "Bash"],
  },
  {
    label: "Frameworks & Libraries",
    color: "var(--terminal-cyan)",
    bg: "rgba(107,228,224,0.06)",
    border: "rgba(107,228,224,0.2)",
    hoverBg: "rgba(107,228,224,0.12)",
    hoverBorder: "rgba(107,228,224,0.5)",
    skills: ["Next.js", "React", "NestJS", "Flutter", "Express", "Unity", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    label: "Databases & Backend",
    color: "var(--terminal-amber)",
    bg: "rgba(255,184,108,0.06)",
    border: "rgba(255,184,108,0.2)",
    hoverBg: "rgba(255,184,108,0.12)",
    hoverBorder: "rgba(255,184,108,0.5)",
    skills: ["MySQL", "MongoDB", "Firebase", "Prisma", "Docker", "Node.js", "Kafka"],
  },
  {
    label: "Tools & Platforms",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.2)",
    hoverBg: "rgba(167,139,250,0.12)",
    hoverBorder: "rgba(167,139,250,0.5)",
    skills: ["Git", "GitHub", "Figma", "Postman", "Linux", "IntelliJ IDEA", "Google Cloud", "Blender"],
  },
];

export default function SkillsSection() {
  return (
    <section className="mb-16">
      <CommandLine command="ls -la skills/" />

      <div className="space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            {/* Category header */}
            <div
              className="flex items-center gap-3 mb-3"
            >
              <span
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: group.color }}
              >
                {group.label}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: group.border }}
              />
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded text-[12px] cursor-default transition-all duration-200"
                  style={{
                    color: group.color,
                    background: group.bg,
                    border: `1px solid ${group.border}`,
                    letterSpacing: "0.03em",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = group.hoverBg;
                    el.style.borderColor = group.hoverBorder;
                    el.style.transform = "translateY(-1px)";
                    el.style.boxShadow = `0 4px 12px ${group.bg}`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = group.bg;
                    el.style.borderColor = group.border;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
