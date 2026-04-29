"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import CommandLine from "@/components/CommandLine";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="mb-16">
      <CommandLine command="cat projects/*" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
