"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TerminalWindow from "@/components/TerminalWindow";
import Nav, { SectionId } from "@/components/Nav";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const HASH_TO_SECTION: Record<string, SectionId> = {
  "#home": "home",
  "#skills": "skills",
  "#experience": "experience",
  "#education": "education",
  "#projects": "projects",
  "#contact": "contact",
};

export default function Portfolio() {
  const router = useRouter();
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const hash = window.location.hash;
    const section = HASH_TO_SECTION[hash];
    if (section) setActive(section);

    const onPop = () => {
      const s = HASH_TO_SECTION[window.location.hash];
      if (s) setActive(s);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function navigate(id: SectionId) {
    setActive(id);
    router.replace(`/#${id}`, { scroll: false });
  }

  return (
    <TerminalWindow title="kavindu@portfolio: ~">
      <Nav active={active} onNavigate={navigate} />
      {active === "home" && <HomeSection />}
      {active === "skills" && <SkillsSection />}
      {active === "experience" && <ExperienceSection />}
      {active === "education" && <EducationSection />}
      {active === "projects" && <ProjectsSection />}
      {active === "contact" && <ContactSection />}
      <footer
        className="mt-20 pt-8 text-center text-xs"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "var(--terminal-gray)",
        }}
      >
        <div className="flex items-start gap-3 justify-center mb-2">
          <span className="font-semibold" style={{ color: "var(--terminal-cyan)" }}>
            kavindu@portfolio:~$
          </span>
          <span style={{ color: "var(--terminal-green)" }}>date</span>
        </div>
        <p>© 2025 Kavindu Prabasara. All rights reserved.</p>
      </footer>
    </TerminalWindow>
  );
}
