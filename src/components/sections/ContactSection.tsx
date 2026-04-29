import CommandLine from "@/components/CommandLine";

const CONTACTS = [
  {
    label: "EMAIL",
    display: "kavinduvijegunasekara@gmail.com",
    href: "mailto:kavinduvijegunasekara@gmail.com",
  },
  {
    label: "GITHUB",
    display: "@Kavinduprabasara",
    href: "https://github.com/Kavinduprabasara",
  },
  {
    label: "LINKEDIN",
    display: "Connect with me",
    href: "https://www.linkedin.com/in/kavindu-wijegunasekara-49729a219/",
  },
];

export default function ContactSection() {
  return (
    <section className="mb-16">
      <CommandLine command="echo $CONTACT_INFO" />

      <p
        className="mb-6"
        style={{ color: "var(--terminal-gray)", fontSize: "13px", lineHeight: "1.75" }}
      >
        I&apos;m always open to discussing new opportunities and interesting projects.
      </p>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {CONTACTS.map(({ label, display, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="block px-5 py-5 rounded transition-all duration-300 group"
            style={{
              background: "rgba(107,228,224,0.04)",
              border: "1px solid rgba(107,228,224,0.15)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(107,228,224,0.09)";
              el.style.borderColor = "var(--terminal-cyan)";
              el.style.boxShadow = "0 0 20px rgba(107,228,224,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(107,228,224,0.04)";
              el.style.borderColor = "rgba(107,228,224,0.15)";
              el.style.boxShadow = "none";
            }}
          >
            <div
              className="text-[10px] font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--terminal-cyan)" }}
            >
              {label}
            </div>
            <div
              className="text-[13px] transition-colors duration-300"
              style={{ color: "var(--terminal-white)" }}
            >
              {display}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
