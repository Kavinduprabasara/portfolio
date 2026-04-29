"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="section-visible mb-14">
      <div className="flex items-start gap-3 mb-5">
        <span className="font-semibold shrink-0" style={{ color: "var(--terminal-cyan)" }}>
          kavindu@portfolio:~$
        </span>
        <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
          cat projects/*
        </span>
      </div>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
