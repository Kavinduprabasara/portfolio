"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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

const sectionContent: Record<SectionId, React.ReactNode> = {
  home: <HomeSection />,
  skills: <SkillsSection />,
  experience: <ExperienceSection />,
  education: <EducationSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
};

export default function Portfolio() {
  const router = useRouter();
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const section = HASH_TO_SECTION[window.location.hash];
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

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {sectionContent[active]}
        </motion.div>
      </AnimatePresence>

      <footer
        className="mt-16 pt-8 text-center text-xs"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "var(--terminal-gray)",
        }}
      >
        <div className="flex items-center gap-3 justify-center mb-2">
          <span
            className="text-[12px] font-semibold tracking-wide"
            style={{ color: "var(--terminal-cyan)" }}
          >
            kavindu@portfolio:~$
          </span>
          <span
            className="text-[13px] tracking-widest"
            style={{ color: "var(--terminal-green)" }}
          >
            date
          </span>
        </div>
        <p className="tracking-wide" style={{ letterSpacing: "0.04em" }}>
          © 2025 Kavindu Prabasara. All rights reserved.
        </p>
      </footer>
    </TerminalWindow>
  );
}
