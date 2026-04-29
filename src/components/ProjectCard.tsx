import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const chips = project.technologies
    .split(",")
    .map((t) => t.trim())
    .slice(0, 4);
  const extraCount = project.technologies.split(",").length - 4;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="flex flex-col px-5 py-5 rounded cursor-pointer transition-all duration-300 active:scale-[0.99] outline-none group h-full"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.borderColor = "rgba(0,255,65,0.3)";
        el.style.boxShadow = "0 4px 24px rgba(0,255,65,0.08)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "rgba(255,255,255,0.02)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Project number */}
      <div
        className="text-[11px] font-semibold tracking-widest mb-3"
        style={{ color: "rgba(139,139,139,0.5)" }}
      >
        {num}
      </div>

      {/* Title */}
      <h3
        className="font-semibold mb-1 leading-snug"
        style={{
          fontSize: "15px",
          color: "var(--terminal-green)",
          letterSpacing: "0.02em",
        }}
      >
        {project.title}
      </h3>

      {/* Subtitle / period */}
      <div
        className="text-[11px] mb-3 tracking-wide"
        style={{ color: "var(--terminal-amber)" }}
      >
        {project.subtitle}
      </div>

      {/* Description — 3 lines max */}
      <p
        className="line-clamp-3 mb-4 flex-1"
        style={{
          color: "var(--terminal-gray)",
          fontSize: "12.5px",
          lineHeight: "1.75",
        }}
      >
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {chips.map((chip) => (
          <span
            key={chip}
            className="text-[10px] px-2 py-0.5 rounded-sm"
            style={{
              color: "var(--terminal-green-dim)",
              background: "rgba(0,255,65,0.07)",
              border: "1px solid rgba(0,255,65,0.15)",
              letterSpacing: "0.03em",
            }}
          >
            {chip}
          </span>
        ))}
        {extraCount > 0 && (
          <span
            className="text-[10px] px-2 py-0.5 rounded-sm"
            style={{
              color: "var(--terminal-gray)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            +{extraCount} more
          </span>
        )}
      </div>

      {/* View details link */}
      <div
        className="text-[12px] mt-auto transition-all duration-300"
        style={{ color: "var(--terminal-gray)" }}
      >
        <span className="group-hover:text-[var(--terminal-green)] transition-colors duration-300">
          View details →
        </span>
      </div>
    </div>
  );
}
