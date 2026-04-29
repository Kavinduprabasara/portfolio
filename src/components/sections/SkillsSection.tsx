import CommandLine from "@/components/CommandLine";

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
    <section className="mb-16">
      <CommandLine command="ls -la skills/" />
      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
      >
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="text-center px-4 py-3 rounded cursor-default transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontSize: "12.5px",
              letterSpacing: "0.04em",
              color: "var(--terminal-green-dim)",
              background: "rgba(0,255,65,0.04)",
              border: "1px solid rgba(0,255,65,0.18)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(0,255,65,0.1)";
              el.style.borderColor = "var(--terminal-green)";
              el.style.boxShadow = "0 0 14px rgba(0,255,65,0.25)";
              el.style.color = "var(--terminal-green)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(0,255,65,0.04)";
              el.style.borderColor = "rgba(0,255,65,0.18)";
              el.style.boxShadow = "none";
              el.style.color = "var(--terminal-green-dim)";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
