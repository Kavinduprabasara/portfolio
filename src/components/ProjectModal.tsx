"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const techPills = project.technologies.split(",").map((t) => t.trim());

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(5px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-lg relative"
        style={{
          background: "var(--terminal-bg)",
          boxShadow: "0 0 40px rgba(0,255,65,0.2)",
          border: "1px solid var(--terminal-gray)",
        }}
      >
        {/* Modal header */}
        <div
          className="sticky top-0 z-10 flex justify-between items-center px-5 py-4"
          style={{
            background: "var(--window-chrome)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--terminal-gray)" }}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            </div>
            <span>project_details.exe</span>
          </div>
          <button
            onClick={onClose}
            className="text-2xl leading-none transition-colors duration-300 bg-transparent border-none cursor-pointer"
            style={{ color: "var(--terminal-gray)" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5F56")}
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--terminal-gray)")
            }
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal body */}
        <div className="p-8">
          <h2
            className="text-[28px] font-bold mb-2.5 text-glow-green"
            style={{ color: "var(--terminal-green)" }}
          >
            {project.title}
          </h2>
          <div
            className="text-base italic mb-6"
            style={{ color: "var(--terminal-amber)" }}
          >
            {project.subtitle}
          </div>

          {/* Image gallery */}
          {project.images && project.images.length > 0 && (
            <div
              className="grid gap-4 mb-6"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
            >
              {project.images.map((src, i) => (
                <div key={i} className="relative w-full h-[200px] rounded overflow-hidden" style={{ border: "1px solid var(--terminal-lighter)" }}>
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                    unoptimized={src.startsWith("http")}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Details */}
          <div className="mb-4">
            <p className="leading-[1.7]" style={{ color: "var(--terminal-white)" }}>
              {project.details ?? project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div
            className="mt-6 pt-5"
            style={{ borderTop: "1px dashed var(--terminal-gray)" }}
          >
            <h4 className="mb-2.5 font-semibold" style={{ color: "var(--terminal-cyan)" }}>
              Stack Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-[15px]"
                  style={{
                    background: "rgba(0,255,65,0.1)",
                    color: "var(--terminal-green)",
                    border: "1px solid rgba(0,255,65,0.2)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          {project.link && (
            <div className="mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] transition-all duration-300"
                style={{ color: "var(--terminal-amber)", textDecoration: "none" }}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
