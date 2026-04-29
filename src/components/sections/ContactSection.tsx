import CommandLine from "@/components/CommandLine";

const CONTACTS = [
  {
    label: "EMAIL",
    display: "kavinduvijegunasekara@gmail.com",
    href: "mailto:kavinduvijegunasekara@gmail.com",
    color: "var(--terminal-green)",
    borderColor: "rgba(0,255,65,0.2)",
    hoverBorder: "rgba(0,255,65,0.5)",
    hoverBg: "rgba(0,255,65,0.06)",
  },
  {
    label: "GITHUB",
    display: "@Kavinduprabasara",
    href: "https://github.com/Kavinduprabasara",
    color: "var(--terminal-cyan)",
    borderColor: "rgba(107,228,224,0.2)",
    hoverBorder: "rgba(107,228,224,0.5)",
    hoverBg: "rgba(107,228,224,0.06)",
  },
  {
    label: "LINKEDIN",
    display: "kavindu-wijegunasekara",
    href: "https://www.linkedin.com/in/kavindu-wijegunasekara-49729a219/",
    color: "var(--terminal-amber)",
    borderColor: "rgba(255,184,108,0.2)",
    hoverBorder: "rgba(255,184,108,0.5)",
    hoverBg: "rgba(255,184,108,0.06)",
  },
];

export default function ContactSection() {
  return (
    <section className="mb-16">
      <CommandLine command="echo $CONTACT_INFO" />

      {/* Availability status */}
      <div className="flex items-center gap-3 mb-8">
        <div className="relative flex items-center justify-center w-3 h-3">
          <span
            className="status-ping absolute inline-block w-3 h-3 rounded-full"
            style={{ background: "var(--terminal-green)" }}
          />
          <span
            className="relative inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--terminal-green)" }}
          />
        </div>
        <span
          className="text-[12px] font-semibold tracking-widest uppercase"
          style={{ color: "var(--terminal-green)" }}
        >
          Currently available for opportunities
        </span>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left — CTA message */}
        <div>
          <p
            className="mb-4"
            style={{
              color: "var(--terminal-white)",
              fontSize: "14px",
              lineHeight: "1.85",
            }}
          >
            I&apos;m always open to discussing new roles, collaborations, or interesting
            side projects. If you have something in mind, don&apos;t hesitate to reach out.
          </p>
          <p
            style={{
              color: "var(--terminal-gray)",
              fontSize: "13px",
              lineHeight: "1.75",
            }}
          >
            Typically respond within{" "}
            <span style={{ color: "var(--terminal-amber)" }}>24 hours</span>.
          </p>
        </div>

        {/* Right — Contact cards */}
        <div className="space-y-3">
          {CONTACTS.map(({ label, display, href, color, borderColor, hoverBorder, hoverBg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-4 px-4 py-4 rounded transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${borderColor}`,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = hoverBg;
                el.style.borderColor = hoverBorder;
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = borderColor;
                el.style.transform = "translateX(0)";
              }}
            >
              <span
                className="text-[10px] font-bold tracking-widest uppercase w-16 shrink-0"
                style={{ color }}
              >
                {label}
              </span>
              <span
                className="text-[13px] truncate"
                style={{ color: "var(--terminal-white)" }}
              >
                {display}
              </span>
              <span
                className="ml-auto shrink-0 text-[12px] transition-colors duration-300"
                style={{ color: "var(--terminal-gray)" }}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
