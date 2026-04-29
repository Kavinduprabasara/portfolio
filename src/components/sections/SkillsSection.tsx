const SKILLS = [
  "C#", "Unity", "Next.js", "NestJS", "Prisma", "Tailwind CSS",
  "TypeScript", "Kotlin", "Java", "Git", "Flutter", "Dart",
  "Bash", "Bootstrap", "C", "CSS", "Docker", "Express",
  "Figma", "Firebase", "Google Cloud", "GitHub", "HTML", "IntelliJ IDEA",
  "JavaScript", "Linux", "Material UI", "MongoDB", "MySQL", "Node.js",
  "Postman", "Python", "React", "Blender",
];

export default function SkillsSection() {
  return (
    <section className="section-visible mb-14">
      <div className="flex items-start gap-3 mb-5">
        <span className="font-semibold shrink-0" style={{ color: "var(--terminal-cyan)" }}>
          kavindu@portfolio:~$
        </span>
        <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
          ls -la skills/
        </span>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }}>
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="text-center text-[13px] px-4 py-3 rounded cursor-default transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: "var(--terminal-green-dim)",
              background: "rgba(0,255,65,0.05)",
              border: "1px solid rgba(0,255,65,0.2)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(0,255,65,0.1)";
              el.style.borderColor = "var(--terminal-green)";
              el.style.boxShadow = "0 0 15px var(--glow-green)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(0,255,65,0.05)";
              el.style.borderColor = "rgba(0,255,65,0.2)";
              el.style.boxShadow = "none";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
