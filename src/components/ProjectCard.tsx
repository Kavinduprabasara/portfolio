import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="px-5 py-5 mb-6 rounded cursor-pointer transition-all duration-300 active:scale-[0.99] outline-none focus-visible:ring-1"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderLeft: "3px solid var(--terminal-cyan)",
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
        el.style.borderLeftColor = "var(--terminal-cyan)";
        el.style.boxShadow = "none";
      }}
    >
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--terminal-green)" }}
      >
        {project.title}
      </h3>
      <div
        className="text-xs italic mb-3"
        style={{ color: "var(--terminal-amber)" }}
      >
        {project.subtitle}
      </div>
      <p
        className="text-[13px] leading-[1.7] mb-3"
        style={{ color: "var(--terminal-gray)" }}
      >
        {project.description}
      </p>
      <p className="text-xs font-semibold" style={{ color: "var(--terminal-cyan)" }}>
        Technologies: {project.technologies}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-[13px] transition-all duration-300"
          style={{ color: "var(--terminal-amber)", textDecoration: "none" }}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--terminal-green)";
            (e.target as HTMLElement).style.textShadow = "0 0 10px var(--glow-green)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--terminal-amber)";
            (e.target as HTMLElement).style.textShadow = "none";
          }}
        >
          → {project.linkText ?? "Visit Live Site"}
        </a>
      )}
    </div>
  );
}
